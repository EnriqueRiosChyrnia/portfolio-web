#!/usr/bin/env python3
"""Renderiza SVG y compone las láminas de revisión sin servicios externos.

Requiere Pillow y PyMuPDF. Usa las fuentes OFL de Canvas Design.
"""
import argparse
import io
import json
import re
from pathlib import Path

import fitz
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PAPER, INK, PURPLE = "#F7F4E6", "#262A20", "#7A5FD8"


def raster(raw, width, height):
    doc = fitz.open(stream=raw.encode(), filetype="svg")
    box = doc[0].rect
    scale = min(width / box.width, height / box.height)
    pix = doc[0].get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=True)
    return Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGBA")


def place(canvas, raw, box, mono=False):
    if mono:
        raw = re.sub(r'fill="#[0-9a-fA-F]{6}"', f'fill="{INK}"', raw)
    x, y, w, h = box
    image = raster(raw, w, h)
    canvas.paste(image, (round(x + (w - image.width) / 2), round(y + (h - image.height) / 2)), image)


def lum(color):
    rgb = [int(color[i:i+2], 16) / 255 for i in (1, 3, 5)]
    rgb = [v / 12.92 if v <= .04045 else ((v + .055) / 1.055) ** 2.4 for v in rgb]
    return sum(v * weight for v, weight in zip(rgb, (.2126, .7152, .0722)))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--skill-root", type=Path, default=Path.home() / ".codex/skills")
    args = ap.parse_args()
    font_dir = args.skill_root / "canvas-design/canvas-fonts"
    def font(size, mono=False, bold=False):
        name = "IBMPlexMono-Regular.ttf" if mono else ("InstrumentSans-Bold.ttf" if bold else "InstrumentSans-Regular.ttf")
        return ImageFont.truetype(str(font_dir / name), size)

    concepts = json.loads((ROOT / "propuestas.json").read_text())
    for folder in ("simbolos", "logotipos"):
        for svg in (ROOT / folder).glob("*.svg"):
            image = raster(svg.read_text(), 1200 if folder == "logotipos" else 512, 512)
            image.save(ROOT / "renders" / (svg.stem + ("-horizontal" if folder == "logotipos" and not svg.stem.endswith("nombre") else "") + ".png"))

    for mono in (False, True):
        board = Image.new("RGB", (1600, 1260), PAPER)
        d = ImageDraw.Draw(board)
        d.text((64, 40), "EmuRV", font=font(62, bold=True), fill=INK)
        d.text((300, 54), "Propuestas de marca", font=font(30), fill=INK)
        d.text((300, 98), "12/11/2026 · Púrpura y negro" if not mono else "12/11/2026 · Comparación en una tinta", font=font(17, mono=True), fill="#615F59")
        for i, c in enumerate(concepts):
            x, y, w, h = 64 + i % 2 * 752, 166 + i // 2 * 520, 720, 488
            d.rectangle((x, y, x+w, y+h), fill="#FFFDF5", outline="#CEC9BE", width=1)
            d.text((x+28, y+22), f'{c["id"].upper()} / {c["name"]}', font=font(23, bold=True), fill=INK)
            label = {"a": "Monograma RV", "b": "Símbolo modular", "c": "Píxeles", "d": "Letras propias"}[c["id"]]
            d.text((x+w-28, y+26), label, font=font(15, mono=True), fill="#615F59", anchor="ra")
            raw = (ROOT / c["symbol"]).read_text()
            place(board, raw, (x+242, y+72, 236, 236), mono)
            place(board, (ROOT / c["wordmark"]).read_text(), (x+96, y+310, w-192, 100), mono)
            d.line((x+28, y+426, x+w-28, y+426), fill="#CEC9BE", width=1)
            note = {"a": "La R y la V comparten el recorrido.", "b": "Filas de registros y una celda activa.", "c": "La pantalla gráfica como referencia.", "d": "El nombre como elemento principal."}[c["id"]]
            d.text((x+28, y+444), note, font=font(17), fill=INK)
            # Son 16 y 32 píxeles reales en el PNG de 1600 px.
            place(board, raw, (x+w-126, y+442, 16, 16), mono)
            place(board, raw, (x+w-88, y+434, 32, 32), mono)
        d.text((64, 1220), "Exploración · Las cuatro propuestas están pendientes de elección.", font=font(15, mono=True), fill="#615F59")
        board.save(ROOT / ("comparacion-monocromo.png" if mono else "comparacion.png"))

    # Canvas Design: composición propia del cambio de estado de una instrucción.
    poster = Image.new("RGB", (1600, 900), PAPER)
    d = ImageDraw.Draw(poster)
    d.text((72, 54), "EMURV / ENSAMBLADOR RISC-V", font=font(18, mono=True), fill=INK)
    d.line((72, 100, 1528, 100), fill=INK, width=2)
    html = (ROOT.parents[1] / "emurv.html").read_text()
    current = re.search(r'<svg class="wm".*?</svg>', html, re.S).group()
    current = current.replace('<svg class="wm"', '<svg xmlns="http://www.w3.org/2000/svg"')
    place(poster, current, (60, 166, 510, 170))
    d.text((78, 382), "Ensamblador RISC-V,", font=font(48), fill=INK)
    d.text((78, 442), "paso a paso.", font=font(48), fill=INK)
    d.text((80, 555), "Una instrucción y su efecto", font=font(20), fill=INK)
    d.text((80, 586), "en los registros de la máquina.", font=font(20), fill=INK)

    # Cinco posiciones de ejecución; se destaca una sin simular una captura real.
    for i in range(5):
        yy = 197+i*80
        d.rectangle((756, yy, 800, yy+44), fill=PURPLE if i == 2 else INK)
        if i < 4:
            d.line((778, yy+46, 778, yy+76), fill=INK, width=2)
        d.text((701, yy+8), f'{i+1:02}', font=font(16, mono=True), fill=INK)
    d.line((801, 379, 852, 379), fill=PURPLE, width=4)
    d.polygon(((852, 369), (868, 379), (852, 389)), fill=PURPLE)
    d.rectangle((884, 253, 1520, 497), fill=INK)
    d.text((916, 282), "00400000", font=font(18, mono=True), fill=PAPER)
    d.line((916, 323, 1488, 323), fill="#8A8C85", width=1)
    d.text((916, 352), "addi a0, a0, 1", font=font(35, mono=True), fill=PAPER)
    d.rectangle((884, 473, 1520, 497), fill=PURPLE)
    d.line((1202, 498, 1202, 554), fill=INK, width=2)
    d.polygon(((1194, 551), (1210, 551), (1202, 564)), fill=INK)
    d.text((920, 590), "REGISTRO / HEX", font=font(17, mono=True), fill=INK)
    d.text((920, 633), "a0", font=font(33, mono=True), fill=INK)
    for i in range(8):
        xx = 1020+i*60
        d.rectangle((xx, 624, xx+50, 677), fill=PURPLE if i == 7 else INK)
        d.text((xx+25, 650), "1" if i == 7 else "0", font=font(25, mono=True), fill=PAPER, anchor="mm")
    d.text((1020, 698), "00000000 → 00000001", font=font(16, mono=True), fill=INK)
    d.line((72, 801, 1528, 801), fill=INK, width=2)
    d.text((72, 828), "Rust + Tauri / RV32 · RV64", font=font(17, mono=True), fill=INK)
    d.text((1528, 828), "Propuesta de portada · Esquema ilustrativo", font=font(15, mono=True), fill=INK, anchor="ra")
    poster.save(ROOT / "portada-ilustrada.png")

    colors = [PURPLE, INK, PAPER, "#6041B5", "#FFFFFF"]
    ratios = []
    for i, a in enumerate(colors):
        for b in colors[i+1:]:
            la, lb = sorted((lum(a), lum(b)))
            ratios.append({"colores": [a, b], "contraste": round((lb+.05)/(la+.05), 3)})
    (ROOT / "pruebas/contraste.json").write_text(json.dumps(ratios, indent=2) + "\n")
    for name in ("InstrumentSans", "BricolageGrotesque", "PixelifySans", "IBMPlexMono"):
        license_text = (font_dir / f'{name}-OFL.txt').read_text()
        (ROOT / "fuentes" / f'{name}-OFL.txt').write_text("\n".join(line.rstrip() for line in license_text.splitlines()) + "\n")
    print("Renderizados los SVG, la comparación en color y monocromo y la portada ilustrada.")


if __name__ == "__main__":
    main()
