#!/usr/bin/env python3
"""Une las exportaciones visuales con sus pistas vigentes."""
import json
import subprocess
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]/'inicio'
VOLUME=.65
for variant in ['trazo','ensamble','cursor']:
    prefix='animacion-emurv' if variant=='trazo' else f'animacion-{variant}'
    audio=ROOT/'audio'/('ensamble-industrial.wav' if variant=='ensamble' else f'{variant}.mp3')
    info=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','json',str(audio)]))
    if abs(float(info['format']['duration'])-5.4)>.05:
        raise ValueError(f'Revisar duración de {audio.name} antes de mezclar.')
    subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(ROOT/(prefix+'.mp4')),'-i',str(audio),'-map','0:v:0','-map','1:a:0','-c:v','copy','-c:a','aac','-b:a','192k','-af',f'volume={VOLUME},apad','-t','5.44','-movflags','+faststart','-y',str(ROOT/(prefix+'-con-sonido.mp4'))],check=True)
print('Tres MP4 con audio AAC estéreo; las exportaciones visuales se conservan.')
