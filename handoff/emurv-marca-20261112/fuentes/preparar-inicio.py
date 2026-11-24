#!/usr/bin/env python3
"""Normaliza los contornos aprobados para la animación; no toca la app."""
import json
import xml.etree.ElementTree as ET
from pathlib import Path

from fontTools.pens.perimeterPen import PerimeterPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.svgLib.path import parse_path
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
NS = {'s': 'http://www.w3.org/2000/svg'}
target = ROOT / 'inicio'
target.mkdir(exist_ok=True)

symbol = ET.fromstring((ROOT / 'simbolos/a-paso.svg').read_text())
r, v = [p.attrib['d'] for p in symbol.findall('.//s:path', NS)]
lengths = []
for d in [r, v]:
    pen = PerimeterPen(None)
    parse_path(d, pen)
    lengths.append(round(pen.value, 2))

word = ET.fromstring((ROOT / 'logotipos/a-paso-nombre.svg').read_text())
glyphs = []
for group in word.findall('./s:g/s:g', NS):
    x = float(group.attrib['transform'].split('(')[1].split()[0])
    d = group.find('./s:path', NS).attrib['d']
    out = SVGPathPen(None)
    parse_path(d, TransformPen(out, (.238889, 0, 0, -.238889, 20+x*.238889, 208)))
    glyphs.append(out.getCommands())

font = TTFont(Path.home() / '.codex/skills/canvas-design/canvas-fonts/InstrumentSans-Regular.ttf')
glyph_set, cmap = font.getGlyphSet(), font.getBestCmap()
units = font['head'].unitsPerEm

def outline(text, size):
    scale, x, parts = size/units, 0, []
    for char in text:
        name = cmap[ord(char)]
        pen = SVGPathPen(glyph_set)
        glyph_set[name].draw(TransformPen(pen, (scale, 0, 0, -scale, x, 0)))
        parts.append(pen.getCommands())
        x += glyph_set[name].width*scale
    return {'d': ' '.join(parts), 'width': round(x, 2)}

assets = dict(r=r, v=v, lengths=lengths, word=glyphs, wordWidth=885,
              creditLabel=outline('Creado por', 16),
              creditName=outline('Enrique Emmanuel Rios Chyrnia', 28))
(target / 'assets.js').write_text('// Contornos de A / Paso y crédito solicitado. Generado por fuentes/preparar-inicio.py.\nexport const ASSETS = ' + json.dumps(assets, ensure_ascii=False, separators=(',', ':')) + ';\n')
print('Contornos de la opción A y crédito preparados.')
