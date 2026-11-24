#!/usr/bin/env python3
"""Construye las propuestas SVG de EmuRV. No modifica el sitio ni la app.

Uso: python3 fuentes/build.py --skill-root ~/.codex/skills
Requiere fontTools para convertir las fuentes OFL a contornos.
"""
import argparse
import json
import re
from html import escape
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
PURPLE, INK, PAPER = "#7A5FD8", "#262A20", "#F7F4E6"

CONCEPTS = [
    dict(id="a", slug="a-paso", name="Paso", kind="Monograma RV", idea="La pierna de la R se une a la V en un solo recorrido.",
         reference="Las instrucciones que avanzan y el nombre de la arquitectura.",
         risk="Es la opción más angular; conviene comprobar que RV se reconozca sin explicación.", font="InstrumentSans-Bold.ttf"),
    dict(id="b", slug="b-registro", name="Registro", kind="Símbolo modular", idea="Una E formada por filas, con una celda activa separada.",
         reference="Los registros que cambian al ejecutar una instrucción.",
         risk="La E es clara, pero por sí sola identifica menos a RISC-V.", font="BricolageGrotesque-Bold.ttf"),
    dict(id="c", slug="c-trama", name="Trama", kind="Monograma de píxeles", idea="RV se construye sobre una cuadrícula de ocho por siete celdas.",
         reference="La pantalla gráfica y los programas interactivos de EmuRV.",
         risk="Tiene un carácter más lúdico y requiere más cuidado a 16 píxeles.", font="PixelifySans-Medium.ttf"),
    dict(id="d", slug="d-tipo", name="Tipo", kind="Logotipo dibujado", idea="Letras propias de trazos abiertos y una e como símbolo abreviado.",
         reference="La lectura del nombre y la claridad de una herramienta educativa.",
         risk="La e aislada comunica menos sobre la arquitectura que el monograma RV.", font=None),
]


def path(d, color, **attrs):
    extra = " ".join(f'{k.replace("_", "-")}="{v}"' for k, v in attrs.items())
    return f'<path fill="{color}" d="{d}" {extra}/>'


def symbol(cid):
    if cid == "a":
        # Asta 40; contraforma 32; V comparte el pie de la R. Contorno sin máscaras.
        return ('<g transform="translate(-6 0)">'
                + path("M24 40H100Q148 40 148 90Q148 122 124 135L170.8 216H125.6L84 144H64V216H24Z M64 76V108H98Q112 108 112 92Q112 76 98 76Z", PURPLE, fill_rule="evenodd")
                + path("M204 40H244L182 216H142Z", INK) + '</g>')
    if cid == "b":
        # E abierta: filas de 40 unidades y 28 unidades de interlínea.
        return ('<g transform="translate(-4 0)">'
                + path("M32 40H216V80H72V108H168V148H72V176H216V216H32Z", INK)
                + path("M192 108H232V148H192Z", PURPLE) + '</g>')
    if cid == "c":
        rows = ["11110001", "10001001", "10001001", "11110001", "10101010", "10011010", "10000100"]
        groups = {PURPLE: [], INK: []}
        for y, row in enumerate(rows):
            for x, bit in enumerate(row):
                if bit == "1":
                    px, py = 32 + x * 24, 44 + y * 24
                    groups[PURPLE if x < 5 else INK].append(f"M{px} {py}h24v24h-24Z")
        return "".join(path(" ".join(ds), col) for col, ds in groups.items())
    # La e combina un ojo rectangular y la curva inferior abierta.
    return (path("M216 140H80Q85 180 128 180Q155 180 176 160L200 188Q172 216 127 216Q40 216 40 128Q40 40 128 40Q216 40 216 124Z M80 108H176Q170 76 128 76Q86 76 80 108Z", PURPLE, fill_rule="evenodd")
            + path("M176 160L200 188Q184 204 164 211L148 177Q162 172 176 160Z", INK))


def custom_wordmark():
    letters = [
        ("M0 16H66V32H18V57H59V73H18V100H66V116H0Z", 66),
        ("M0 40H16V50Q24 38 38 38Q55 38 62 52Q73 38 88 38Q112 38 112 64V116H94V67Q94 54 82 54Q69 54 69 70V116H51V67Q51 54 39 54Q18 54 18 72V116H0Z", 112),
        ("M0 40H18V86Q18 102 34 102Q50 102 50 86V40H68V116H52V106Q44 118 30 118Q0 118 0 88Z", 68),
        ("M0 16H42Q76 16 76 47Q76 69 55 77L77.5 116H57.8L37 80H18V116H0Z M18 32V64H40Q58 64 58 48Q58 32 40 32Z", 82),
        ("M0 16H20L45 91L70 16H90L55 116H35Z", 90),
    ]
    parts, x = [], 0
    for i, (d, width) in enumerate(letters):
        parts.append(f'<g transform="translate({x} 0)">{path(d, PURPLE if i < 3 else INK, fill_rule="evenodd")}</g>')
        x += width + (14 if i != 2 else 22)
    return f'<g transform="translate(24 20) scale(1.7)">{"".join(parts)}</g>', round(x * 1.7 + 24)


def font_wordmark(font_path):
    font = TTFont(font_path)
    glyphs, cmap = font.getGlyphSet(), font.getBestCmap()
    # Espaciado óptico explícito; curvas convertidas a contornos, sin texto vivo.
    cap = font["OS/2"].sCapHeight or 700
    scale, x, pieces = 172 / cap, 0, []
    for i, letter in enumerate("EmuRV"):
        name = cmap[ord(letter)]
        pen = SVGPathPen(glyphs)
        glyphs[name].draw(pen)
        pieces.append(f'<g transform="translate({x:.2f} 0)">{path(pen.getCommands(), PURPLE if i < 3 else INK)}</g>')
        x += glyphs[name].width + (20 if i == 2 else -10)
    return f'<g transform="translate(20 208) scale({scale:.6f} {-scale:.6f})">{"".join(pieces)}</g>', round(x * scale + 32)


def svg(body, title, width=256, height=256):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" '
            f'width="{width}" height="{height}" role="img" aria-label="{escape(title)}">'
            f'<title>{escape(title)}</title>{body}</svg>\n')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--skill-root", type=Path, default=Path.home() / ".codex/skills")
    args = ap.parse_args()
    for folder in ("simbolos", "logotipos", "pruebas/v1"):
        (ROOT / folder).mkdir(parents=True, exist_ok=True)
    for c in CONCEPTS:
        sym = symbol(c["id"])
        wm, width = (font_wordmark(args.skill_root / "canvas-design/canvas-fonts" / c["font"])
                     if c["font"] else custom_wordmark())
        # Encaje común: símbolo de 256 unidades + nombre a escala natural.
        lock = f'<g>{sym}</g><g transform="translate(284 0)">{wm}</g>'
        symbol_svg = svg(sym, f'EmuRV · {c["name"]} · símbolo')
        lock_svg = svg(lock, f'EmuRV · {c["name"]} · imagotipo', width + 284)
        (ROOT / "simbolos" / f'{c["slug"]}.svg').write_text(symbol_svg)
        (ROOT / "logotipos" / f'{c["slug"]}.svg').write_text(lock_svg)
        (ROOT / "logotipos" / f'{c["slug"]}-nombre.svg').write_text(svg(wm, f'EmuRV · {c["name"]} · logotipo', width))
        previous = ROOT / "pruebas/v1" / f'{c["slug"]}.svg'
        if not previous.exists():
            previous.write_text(symbol_svg)
        c.update(symbol=f'simbolos/{c["slug"]}.svg', lockup=f'logotipos/{c["slug"]}.svg', wordmark=f'logotipos/{c["slug"]}-nombre.svg')
    (ROOT / "propuestas.json").write_text(json.dumps(CONCEPTS, ensure_ascii=False, indent=2) + "\n")
    print("4 símbolos, 4 imagotipos y 4 logotipos de exploración generados.")


if __name__ == "__main__":
    main()
