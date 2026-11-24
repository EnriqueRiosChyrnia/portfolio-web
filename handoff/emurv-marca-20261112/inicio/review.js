import { EmuRVIntro } from './player.js?v=20261113-encastre-2';
import { VARIANTS } from './scene.js?v=encastre-2';
import { DEFAULT_VOLUME, SOUNDTRACKS } from './audio.js?v=20261113-encastre-2';

const stage=document.getElementById('stage');
const timeline=document.getElementById('timeline');
const time=document.getElementById('time');
const pause=document.getElementById('pause');
const reduce=document.getElementById('reduce');
const notice=document.getElementById('notice');
const sound=document.getElementById('sound');
const volume=document.getElementById('volume');
const audioStatus=document.getElementById('audio-status');
const params=new URLSearchParams(location.search);
const initialTheme=params.get('theme')==='paper'?'paper':'dark';
let theme=initialTheme;
let variant=VARIANTS[params.get('variant')]?params.get('variant'):'ensamble';
let soundEnabled=true;
let soundVolume=DEFAULT_VOLUME;
function reportAudio(state){
  audioStatus.textContent={ready:'Audio listo',starting:'Preparando audio…',playing:'Reproduciendo con sonido',paused:'Audio en pausa',muted:'Sin sonido',ended:'Audio finalizado',blocked:'Pulsá Reproducir para habilitar el sonido',error:'No se pudo reproducir el audio'}[state]||'';
}

const intro=new EmuRVIntro(stage,{
  theme,variant,soundEnabled,volume:soundVolume,onAudioState:reportAudio,
  onUpdate(state){
    timeline.value=state.time;
    const seconds=(state.time/1000).toFixed(1).replace('.',',');
    time.textContent=`${seconds} / 5,4 s`;
    timeline.setAttribute('aria-valuetext',`${seconds} segundos`);
    pause.textContent=state.playing?'Pausar':'Reproducir';
    pause.setAttribute('aria-label',state.playing?'Pausar animación':'Reproducir animación');
    document.querySelectorAll('[data-time]').forEach(button=>{
      if(button.textContent.includes(state.phase))button.setAttribute('aria-current','step');
      else button.removeAttribute('aria-current');
    });
  },
  onComplete({reason}){notice.textContent=reason==='reduced-motion'?'Movimiento reducido: se muestra el logo con tu crédito.':reason==='skip'?'Intro omitida. El logo y el crédito quedan visibles.':'Animación finalizada. Podés repetirla o simular la apertura.';}
});

function remember(){
  const next=new URLSearchParams({theme,variant,t:Math.round(intro.time)});
  history.replaceState(null,'','?'+next);
}
function updateVariantUI(){
  const selected=VARIANTS[variant];
  document.querySelector(`input[name="variant"][value="${variant}"]`).checked=true;
  document.getElementById('concept-description').textContent=selected.description;
  document.querySelectorAll('[data-time] span').forEach((span,i)=>{span.textContent=selected.phases[i];});
  const prefix=variant==='trazo'?'animacion-emurv':`animacion-${variant}`;
  document.getElementById('gif-link').href=prefix+'.gif';
  document.getElementById('video-link').href=prefix+'-con-sonido.mp4';
  document.getElementById('audio-link').href=SOUNDTRACKS[variant];
}
document.querySelectorAll('input[name="variant"]').forEach(input=>input.addEventListener('change',()=>{
  variant=input.value;
  intro.setVariant(variant);
  updateVariantUI();
  notice.textContent='La animación se reproduce una vez.';
  intro.replay();
  history.replaceState(null,'','?'+new URLSearchParams({theme,variant}));
}));
updateVariantUI();
document.querySelector(`input[name="theme"][value="${theme}"]`).checked=true;
document.querySelector('.stage-wrap').dataset.theme=theme;
document.getElementById('replay').addEventListener('click',()=>{notice.textContent='La animación se reproduce una vez.';intro.replay();});
sound.addEventListener('change',()=>{
  soundEnabled=sound.checked;
  intro.setSoundEnabled(soundEnabled);
  if(simulation)simulation.setSoundEnabled(soundEnabled);
  document.getElementById('replay').textContent=soundEnabled?'↻ Repetir con sonido':'↻ Repetir';
});
volume.addEventListener('input',()=>{
  soundVolume=Number(volume.value)/100;
  intro.setVolume(soundVolume);
  if(simulation)simulation.setVolume(soundVolume);
  document.getElementById('volume-value').textContent=volume.value+' %';
});
pause.addEventListener('click',()=>{
  if(intro.playing){intro.pause();notice.textContent='Animación pausada. Podés continuar o volver al comienzo.';}
  else {notice.textContent='La animación se reproduce una vez.';intro.play();}
});
document.getElementById('skip').addEventListener('click',()=>{intro.finish('skip');remember();});
timeline.addEventListener('input',()=>{intro.seek(timeline.value);remember();});
document.querySelectorAll('[data-time]').forEach(button=>button.addEventListener('click',()=>{intro.seek(button.dataset.time);remember();}));
document.querySelectorAll('input[name="theme"]').forEach(input=>input.addEventListener('change',()=>{
  theme=input.value;
  intro.setTheme(theme);
  document.querySelector('.stage-wrap').dataset.theme=theme;
  remember();
}));
reduce.checked=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
reduce.addEventListener('change',()=>{
  intro.setReducedMotion(reduce.checked);
  if(!intro.isReduced())notice.textContent='Movimiento normal. Podés repetir la animación.';
});

const dialog=document.getElementById('startup-dialog');
let simulation;
const open=document.getElementById('open');
function closeSimulation(){
  if(simulation){simulation.destroy();simulation=undefined;}
  if(dialog.open)dialog.close();
  open.focus();
}
open.addEventListener('click',()=>{
  intro.pause();
  dialog.querySelector('.simulation').dataset.theme=theme;
  dialog.showModal();
  simulation=new EmuRVIntro(document.getElementById('simulation-stage'),{
    theme,variant,reducedMotion:reduce.checked,soundEnabled,volume:soundVolume,onAudioState:reportAudio,
    onComplete({reason}){if(reason!=='reduced-motion')closeSimulation();}
  });
  simulation.play();
});
document.getElementById('simulation-skip').addEventListener('click',()=>closeSimulation());
dialog.addEventListener('cancel',event=>{event.preventDefault();closeSimulation();});

if(reduce.checked)intro.finish('reduced-motion');
else if(params.has('t'))intro.seek(Number(params.get('t')));
else {intro.seek(5400);audioStatus.textContent='Audio listo · iniciá la reproducción para escucharlo';}
