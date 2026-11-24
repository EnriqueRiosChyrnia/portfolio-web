#!/usr/bin/env python3
"""Exporta la misma escena del navegador a MP4, GIF y una lámina de seis momentos."""
import subprocess
import tempfile
import argparse
from pathlib import Path

import cairosvg
from PIL import Image, ImageDraw, ImageFont

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'inicio'
parser=argparse.ArgumentParser()
parser.add_argument('--variant',choices=['trazo','ensamble','cursor'],default='trazo')
variant=parser.parse_args().variant
prefix='animacion-emurv' if variant=='trazo' else f'animacion-{variant}'
check_dir=OUT/'pruebas' if variant=='trazo' else OUT/'pruebas'/variant

def render(source,target,scale=.8):
    cairosvg.svg2png(bytestring=source.read_bytes(),write_to=str(target),scale=scale)

with tempfile.TemporaryDirectory(prefix='emurv-motion-') as folder:
    tmp=Path(folder)
    subprocess.run(['node',str(ROOT/'fuentes/exportar-inicio.mjs'),str(tmp),variant],check=True)
    for svg in sorted(tmp.glob('frame*.svg')):render(svg,svg.with_suffix('.png'))
    subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-framerate','25','-i',str(tmp/'frame%04d.png'),'-c:v','libx264','-crf','18','-pix_fmt','yuv420p','-movflags','+faststart','-y',str(OUT/(prefix+'.mp4'))],check=True)
    frames=[]
    for i in range(0,136,2):
        with Image.open(tmp/f'frame{i:04d}.png') as image:
            frames.append(image.convert('RGB').resize((720,456),Image.Resampling.LANCZOS).quantize(colors=128))
    frames[0].save(OUT/(prefix+'.gif'),save_all=True,append_images=frames[1:],duration=80,loop=0,optimize=True,disposal=2)

for svg in check_dir.glob('*.svg'):render(svg,svg.with_suffix('.png'),1)
board=Image.new('RGB',(1500,1580),'#F7F4E6')
d=ImageDraw.Draw(board)
fonts=Path.home()/'.codex/skills/canvas-design/canvas-fonts'
label=ImageFont.truetype(str(fonts/'InstrumentSans-Regular.ttf'),24)
title=ImageFont.truetype(str(fonts/'InstrumentSans-Bold.ttf'),40)
d.text((40,25),'EmuRV · '+{'trazo':'Trazo','ensamble':'Ensamble','cursor':'Cursor'}[variant],font=title,fill='#262A20')
labels=['0,6 s · Entrada','1,25 s · Construcción','1,95 s · Símbolo','2,9 s · Nombre','3,85 s · Crédito','5,4 s · Estado final']
for i,text in enumerate(labels):
    x=40+(i%2)*740;y=100+(i//2)*480
    with Image.open(check_dir/f'paso-{i+1}.png') as source:
        board.paste(source.resize((680,431),Image.Resampling.LANCZOS),(x,y))
    d.text((x,y+442),text,font=label,fill='#262A20')
board.save(OUT/('secuencia.png' if variant=='trazo' else f'secuencia-{variant}.png'))
print('MP4, GIF, estados finales y lámina de secuencia generados.')
