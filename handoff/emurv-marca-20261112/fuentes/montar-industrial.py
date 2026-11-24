from pathlib import Path
import subprocess,json
r=Path(__file__).resolve().parents[1]/'inicio'
files=[('desplazamiento', 'Duration_0.7_seconds_#4-1794576437744.mp3'), ('encaje-pequeno', 'Duration_0.3_seconds_#2-1794576457528.mp3'), ('encaje-grande', 'Duration_0.5_seconds_#4-1794576474107.mp3'), ('cierre-final', 'Duration_0.9_seconds_#4-1794576494656.mp3')]
# Each contact is shared with the visual timeline; movements end at contact.
contacts=[.85,1.18,1.51,1.84,2.17,2.5]
inputs=[];filters=[];labels=[]
for i,end in enumerate(contacts):
 for kind,start,gain in [('desplazamiento',end-.7,.55),('cierre-final' if i==5 else 'encaje-grande' if i in [2,4] else 'encaje-pequeno',end,.85)]:
  k=len(labels);inputs+=['-i',str(r/'audio/piezas'/f'{kind}.mp3')]
  filters.append(f'[{k}:a]asetpts=PTS-STARTPTS,afade=t=in:d=0.008,afade=t=out:st={.67 if kind=="desplazamiento" else .87 if kind=="cierre-final" else .47 if kind=="encaje-grande" else .27}:d=0.025,volume={gain},adelay={round(start*1000)}:all=1[a{k}]');labels.append(f'[a{k}]')
filters.append(''.join(labels)+f'amix=inputs={len(labels)}:normalize=0,alimiter=limit=0.85:level=false:latency=true,apad,atrim=duration=5.4[out]')
subprocess.run(['ffmpeg','-v','error',*inputs,'-filter_complex',';'.join(filters),'-map','[out]','-ar','48000','-ac','2','-y',str(r/'audio/ensamble-industrial.wav')],check=True)
(r/'audio/piezas/montaje.json').write_text(json.dumps({'contacts_seconds':contacts,'movements_duration':.7,'sources':dict(files),'note':'Asignación por duración única del nombre; originales conservados. Mezcla de efectos aislados, sin sonido de 5,4 s.'},ensure_ascii=False,indent=2))
