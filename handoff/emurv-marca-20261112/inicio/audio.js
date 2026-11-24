export const DEFAULT_VOLUME=0.65;
export const SOUNDTRACKS={
  trazo:new URL('./audio/trazo.mp3',import.meta.url).href,
  ensamble:new URL('./audio/ensamble-industrial.wav',import.meta.url).href,
  cursor:new URL('./audio/cursor.mp3',import.meta.url).href
};

/** Audio local. El navegador autoriza su inicio mediante un gesto del usuario. */
export class IntroAudio {
  constructor(host,{source,id,enabled=true,volume=DEFAULT_VOLUME,onState=()=>{}}){
    this.enabled=enabled;
    this.onState=onState;
    this.epoch=0;
    this.wantsPlayback=false;
    this.events=new AbortController();
    this.element=document.createElement('audio');
    this.element.hidden=true;
    this.element.preload='auto';
    this.element.dataset.introAudio=id;
    this.element.volume=volume;
    host.append(this.element);
    const listen=(name,fn)=>this.element.addEventListener(name,fn,{signal:this.events.signal});
    listen('loadedmetadata',()=>{
      this.element.dataset.duration=this.element.duration.toFixed(3);
      if(this.pendingTime!==undefined){this.element.currentTime=this.pendingTime;this.pendingTime=undefined;}
    });
    listen('playing',()=>{
      if(!this.wantsPlayback){this.element.pause();return;}
      this.report('playing');
    });
    listen('timeupdate',()=>{this.element.dataset.currentTime=this.element.currentTime.toFixed(3);});
    listen('ended',()=>{this.wantsPlayback=false;this.report('ended');});
    listen('error',()=>{this.wantsPlayback=false;this.report('error');});
    this.setSource(source);
  }
  report(state){
    this.state=state;
    this.element.dataset.state=state;
    this.onState(state);
  }
  setSource(source){
    this.pause();
    this.pendingTime=0;
    this.element.src=source;
    this.element.load();
    this.report(this.enabled?'ready':'muted');
  }
  seek(milliseconds){
    const seconds=Math.max(0,Math.min(5.4,Number(milliseconds)/1000||0));
    try {this.element.currentTime=seconds;this.pendingTime=undefined;}
    catch(_){this.pendingTime=seconds;}
  }
  async startAt(milliseconds){
    this.pause();
    this.seek(milliseconds);
    if(!this.enabled){this.report('muted');return false;}
    const token=++this.epoch;
    this.wantsPlayback=true;
    this.report('starting');
    try {
      await this.element.play();
      if(token!==this.epoch){if(!this.wantsPlayback)this.element.pause();return false;}
      this.report('playing');
      return true;
    } catch(error){
      if(token===this.epoch){this.wantsPlayback=false;this.report(error.name==='NotAllowedError'?'blocked':'error');}
      return false;
    }
  }
  clock(){
    return this.wantsPlayback&&!this.element.paused&&!this.element.ended&&this.state!=='error'
      ? this.element.currentTime*1000 : null;
  }
  pause(){
    ++this.epoch;
    this.wantsPlayback=false;
    this.element.pause();
    this.report(this.enabled?'paused':'muted');
  }
  stop(){this.pause();this.seek(0);}
  setEnabled(enabled){this.enabled=Boolean(enabled);if(!this.enabled)this.pause();else this.report('ready');}
  setVolume(value){this.element.volume=Math.max(0,Math.min(1,Number(value)||0));}
  destroy(){this.pause();this.events.abort();this.element.removeAttribute('src');this.element.load();this.element.remove();}
}
