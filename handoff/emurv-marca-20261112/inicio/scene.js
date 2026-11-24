import * as base from './scene-base.js';
import {ASSETS} from './assets.js';
export const DURATION=base.DURATION, CREDIT=base.CREDIT;
export const VARIANTS={...base.VARIANTS,ensamble:{...base.VARIANTS.ensamble,description:'Seis piezas de cortes rectos se deslizan por sus guías y encajan. Cada contacto tiene su propio efecto mecánico.'}};
export const phaseAt=base.phaseAt;
const contacts=[850,1180,1510,1840,2170,2500];
const clamp=v=>Math.max(0,Math.min(1,v));
const smooth=v=>{v=clamp(v);return v*v*(3-2*v);};
const offsets=[[-145,0],[145,0],[-100,-100],[110,110],[-110,110],[75,-150]];
export function frameAt(time,options={}){
 const s=base.frameAt(time,options);
 if(options.variant!=='ensamble')return s;
 s.plan.rSolid.opacity=s.time>=2600?1:0;s.plan.vSolid.opacity=s.time>=2600?1:0;
 for(let i=0;i<4;i++)s.plan['piece'+i].opacity=0;
 // Rigid motion, finite deceleration and exact zero displacement at contact.
 for(let i=0;i<6;i++){
  const p=Math.max(0,Math.min(1,(s.time-(contacts[i]-700))/700));
  const travel=1-(p*p*(3-2*p));
  s.plan['industrial'+i]={opacity:p>0&&s.time<2600?1:0,transform:`translate(${offsets[i][0]*travel} ${offsets[i][1]*travel})`};
 }
 // V: guided approach, alignment hold, then a short press-fit stroke.
 const approach=smooth((s.time-1800)/480),press=smooth((s.time-2390)/110);
 const distance=s.time<2280?1-approach*(1-0.047):s.time<2390?0.047:0.047*(1-press);
 s.plan.industrial5.transform=`translate(${75*distance} ${-150*distance}) rotate(${s.time<2390?2.5*(1-approach):0} 163 196)`;
 s.plan.coupling={opacity:smooth((s.time-2120)/110)*(1-smooth((s.time-2500)/140))};
 s.plan.contactFlash={opacity:smooth((s.time-2480)/20)*(1-smooth((s.time-2500)/120))};
 return s;
}
export function renderFrame(time,options={}){
 if(options.variant!=='ensamble')return base.renderFrame(time,options);
 const s=frameAt(time,options),id=options.id||'emurv-intro';
 let svg=base.renderFrame(time,options);
 for(const name of ['rSolid','vSolid','piece0','piece1','piece2','piece3'])svg=svg.replace(new RegExp('(data-node="'+name+'"[^>]*?opacity=")[^"]+'),'$10');
 if(s.time>=2600)svg=svg.replace('data-node="rSolid" opacity="0"','data-node="rSolid" opacity="1"').replace('data-node="vSolid" opacity="0"','data-node="vSolid" opacity="1"');
 const bands=[[-50,76],[76,110],[110,146],[146,180],[180,300]];
 let defs='',pieces='';
 for(let i=0;i<6;i++){
  const d=i===5?ASSETS.v:ASSETS.r;
  if(i<5){const [a,b]=bands[i];defs+=`<clipPath id="${id}-industrial${i}"><path d="M-100 ${a-30}L350 ${a+37.5}V${b+37.5}L-100 ${b-30}Z"/></clipPath>`;}
  const v=s.plan['industrial'+i];
  pieces+=`<g data-node="industrial${i}" opacity="${v.opacity}" transform="${v.transform}"><g ${i<5?`clip-path="url(#${id}-industrial${i})"`:''}><path d="${d}" fill="${i<5?s.purple:s.secondary}" fill-rule="evenodd"/></g></g>`;
 }
 const coupling=`<g data-node="coupling" opacity="${s.plan.coupling.opacity}" fill="none" stroke="${s.secondary}" stroke-width="1.2"><path d="M140 173l5 3 -2 5 5 3 -2 5 5 3 -2 5 5 3"/><path d="M153 173l5 3 -2 5 5 3 -2 5 5 3"/></g><g data-node="contactFlash" opacity="${s.plan.contactFlash.opacity}" fill="none" stroke="${s.secondary}" stroke-width="1.5"><path d="M132 195h-12 M164 217v10 M175 180l8 -8"/></g>`;
 const layer=`<defs>${defs}</defs><g data-node="industrialMark" transform="${s.plan.mark.transform}"><g transform="translate(-6 0)">${pieces}${coupling}</g></g>`;
 s.plan.industrialMark={transform:s.plan.mark.transform};
 return svg.replace('</svg>',layer+'</svg>');
}
export function applyFrame(nodes,time,options){
 const s=frameAt(time,options);
 if(options.variant==='ensamble')s.plan.industrialMark={transform:s.plan.mark.transform};
 for(const [name,attrs] of Object.entries(s.plan)){const node=nodes.get(name);if(node)for(const [key,value]of Object.entries(attrs))node.setAttribute(key,String(value));}
 return s;
}
