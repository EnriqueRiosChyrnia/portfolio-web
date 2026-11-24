import { applyFrame, renderFrame, DURATION, VARIANTS } from './scene.js?v=encastre-2';
import { IntroAudio, SOUNDTRACKS, DEFAULT_VOLUME } from './audio.js?v=20261113-encastre-2';

let instance=0;

/** Reproductor autónomo. No ensambla programas ni consulta el backend. */
export class EmuRVIntro {
  constructor(container, {theme='dark', variant='trazo', reducedMotion=false, soundEnabled=true, volume=DEFAULT_VOLUME, onAudioState=()=>{}, onUpdate=()=>{}, onComplete=()=>{}}={}) {
    this.container=container;
    this.theme=theme;
    this.variant=VARIANTS[variant]?variant:'trazo';
    this.reducedMotion=reducedMotion;
    this.onUpdate=onUpdate;
    this.onComplete=onComplete;
    this.time=0;
    this.playing=false;
    this.run=0;
    this.id='emurv-startup-'+(++instance);
    this.sound=new IntroAudio(container.parentElement,{source:SOUNDTRACKS[this.variant],id:this.id,enabled:soundEnabled,volume,onState:onAudioState});
    this.media=window.matchMedia('(prefers-reduced-motion: reduce)');
    this.portrait=container.clientWidth<680;
    this.handlePreference=()=>{if(this.isReduced())this.finish('reduced-motion');};
    this.handleVisibility=()=>{if(document.hidden)this.pause();};
    this.media.addEventListener('change',this.handlePreference);
    document.addEventListener('visibilitychange',this.handleVisibility);
    this.resize=new ResizeObserver(()=>{
      const portrait=container.clientWidth<680;
      if(portrait!==this.portrait){this.portrait=portrait;this.mount();}
    });
    this.mount();
    this.resize.observe(container);
  }
  isReduced(){return this.reducedMotion||this.media.matches;}
  options(){return {theme:this.theme,variant:this.variant,portrait:this.portrait,id:this.id};}
  mount(){
    this.container.innerHTML=renderFrame(this.time,this.options());
    this.nodes=new Map([...this.container.querySelectorAll('[data-node]')].map(node=>[node.dataset.node,node]));
    this.paint();
  }
  paint(){
    const state=applyFrame(this.nodes,this.time,this.options());
    this.container.dataset.phase=state.phase;
    this.onUpdate({...state,playing:this.playing,reduced:this.isReduced()});
  }
  async play(){
    this.stopClock();
    const run=++this.run;
    if(this.isReduced()){this.finish('reduced-motion');return;}
    if(this.time>=DURATION)this.time=0;
    this.playing=true;
    this.paint();
    await this.sound.startAt(this.time);
    if(run!==this.run||!this.playing)return;
    this.started=performance.now()-this.time;
    const tick=now=>{
      this.time=Math.min(DURATION,Math.max(0,this.sound.clock()??(now-this.started)));
      if(this.time>=DURATION){this.finish('finished');return;}
      this.paint();
      this.raf=requestAnimationFrame(tick);
    };
    this.raf=requestAnimationFrame(tick);
  }
  stopClock(){if(this.raf!==undefined){cancelAnimationFrame(this.raf);this.raf=undefined;}}
  pause(){const clock=this.sound.clock();if(this.playing&&clock!==null)this.time=Math.min(DURATION,clock);++this.run;this.stopClock();this.sound.pause();this.playing=false;this.paint();}
  seek(time){this.pause();this.time=Math.max(0,Math.min(DURATION,Number(time)||0));this.sound.seek(this.time);this.paint();}
  replay(){this.time=0;this.play();}
  finish(reason='skip'){
    ++this.run;this.stopClock();this.sound.stop();this.playing=false;this.time=DURATION;this.paint();
    this.onComplete({reason,time:DURATION});
  }
  setTheme(theme){this.theme=theme==='paper'?'paper':'dark';this.mount();}
  setVariant(variant){this.pause();this.variant=VARIANTS[variant]?variant:'trazo';this.sound.setSource(SOUNDTRACKS[this.variant]);this.mount();}
  setSoundEnabled(enabled){const resume=this.playing;this.pause();this.sound.setEnabled(enabled);if(resume)this.play();}
  setVolume(volume){this.sound.setVolume(volume);}
  setReducedMotion(reduced){this.reducedMotion=Boolean(reduced);if(this.isReduced())this.finish('reduced-motion');else this.paint();}
  destroy(){++this.run;this.stopClock();this.sound.destroy();this.resize.disconnect();this.media.removeEventListener('change',this.handlePreference);document.removeEventListener('visibilitychange',this.handleVisibility);this.container.replaceChildren();}
}
