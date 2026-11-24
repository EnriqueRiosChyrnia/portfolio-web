import { ASSETS } from './assets.js';

export const DURATION = 5400;
export const CREDIT = 'Creado por Enrique Emmanuel Rios Chyrnia';
export const VARIANTS = {
  trazo:{name:'Trazo',description:'La R se traza, la V se une y aparece el nombre. Debajo queda tu crédito completo.',phases:['Trazo','Unión','Nombre','Autor']},
  ensamble:{name:'Ensamble',description:'Las piezas del monograma llegan desde distintas direcciones y encajan. El nombre se acomoda debajo.',phases:['Piezas','Ensamble','Nombre','Autor']},
  cursor:{name:'Cursor',description:'Un cursor recorre el símbolo y después descubre el nombre, como dos líneas de una consola.',phases:['Cursor','Barrido','Nombre','Autor']}
};
const clamp = v => Math.max(0, Math.min(1, v));
const progress = (t, a, b) => clamp((t-a)/(b-a));
const ease = v => 1-Math.pow(1-clamp(v), 3);
const smooth = v => { v=clamp(v); return v*v*(3-2*v); };
const n = v => Number(v.toFixed(3));
const move = (x,y,s=1) => `translate(${n(x)} ${n(y)}) scale(${n(s)})`;
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');

export function phaseAt(time,variant='trazo') {
  const labels=(VARIANTS[variant]||VARIANTS.trazo).phases;
  return time < 1450 ? labels[0] : time < 2600 ? labels[1] : time < 3550 ? labels[2] : time < DURATION ? labels[3] : 'Final';
}

/** Estado puro, compartido por reproducción y exportación. Unidades en el viewBox. */
export function frameAt(time, { theme='dark', portrait=false, variant='trazo' }={}) {
  const t = Math.max(0,Math.min(DURATION,Number(time)||0));
  const w=portrait?800:1200, h=portrait?1000:760;
  const shift=ease(progress(t,1950,2900));
  const cx=w/2, cy=h*(portrait?.385:.46) - shift*(portrait?74:80);
  const scale=(portrait?1.15:1.18)-shift*.15;
  const guide=smooth(progress(t,80,550))*(1-smooth(progress(t,1850,2600)));
  const rFill=ease(progress(t,850,1900));
  const vFill=ease(progress(t,1370,2220));
  const outlineFade=1-smooth(progress(t,1750,2350));
  const wordW=portrait?500:445, ws=wordW/ASSETS.wordWidth;
  const wy=portrait?490:396;
  const bg=theme==='paper'?'#F7F4E6':'#151612';
  const secondary=theme==='paper'?'#262A20':'#F7F4E6';
  const sub=theme==='paper'?'#54584F':'#BBBEB3';
  const plan={
    rSolid:{opacity:1},
    cursorMark:{opacity:0},
    cursorClip:{width:0},
    caret:{opacity:0,x:0,y:0,height:0},
    nameCaret:{opacity:0,x:0,y:0,height:0},
    wordClip:{width:ASSETS.wordWidth},
    guide:{opacity:n(guide*.34)},
    mark:{transform:move(cx-128*scale,cy-128*scale,scale)},
    rOutline:{'stroke-dashoffset':n((1-ease(progress(t,320,1520)))*ASSETS.lengths[0]),opacity:n(outlineFade*.8)},
    vOutline:{'stroke-dashoffset':n((1-ease(progress(t,1040,1880)))*ASSETS.lengths[1]),opacity:n(outlineFade*.8)},
    rClip:{y:n(240*(1-rFill)),height:n(256*rFill)},
    vClip:{y:n(256*(1-vFill)),height:n(256*vFill)},
    vSolid:{transform:move(16*(1-vFill),-44*(1-vFill)),opacity:n(smooth(progress(t,1340,1610)))},
    contour:{opacity:n(smooth(progress(t,500,1000))*(1-smooth(progress(t,1750,2500)))*.36)},
    scan:{transform:move(-230+720*ease(progress(t,1880,2750)),0),opacity:n(smooth(progress(t,1880,2070))*(1-smooth(progress(t,2480,2750)))*.18)},
    leftTile:{transform:move(-72+104*ease(progress(t,400,1300)),160),opacity:n(smooth(progress(t,350,550))*(1-smooth(progress(t,1000,1380))))},
    upperTile:{transform:move(238, -80+128*ease(progress(t,900,1800))),opacity:n(smooth(progress(t,850,1050))*(1-smooth(progress(t,1500,1900))))},
    word:{transform:move((w-wordW)/2,wy,ws)},
    separator:{opacity:n(smooth(progress(t,3050,3550))),transform:move(cx,portrait?653:540)},
    creditLabel:{opacity:n(smooth(progress(t,3300,3890))),transform:move(cx-ASSETS.creditLabel.width*(portrait?1.5:1)/2,(portrait?701:586)+10*(1-ease(progress(t,3300,3890))),portrait?1.5:1)},
    creditName:{opacity:n(smooth(progress(t,3510,4150))),transform:move(cx-ASSETS.creditName.width*(portrait?1.25: .86)/2,(portrait?746:627)+12*(1-ease(progress(t,3510,4150))),portrait?1.25:.86)}
  };
  for(let i=0;i<5;i++) {
    const start=2200+i*105, p=ease(progress(t,start,start+650));
    plan['letter'+i]={opacity:n(p),transform:move(0,22*(1-p))};
  }
  for(let i=0;i<4;i++)plan['piece'+i]={opacity:0,transform:move(0,0)};
  if(variant==='ensamble'||variant==='cursor') {
    for(const name of ['guide','rOutline','vOutline','contour','scan','leftTile','upperTile'])plan[name].opacity=0;
    const resolved=t>=2400;
    plan.rSolid.opacity=resolved?1:0;
    plan.rClip={y:0,height:256};
    plan.vSolid={opacity:resolved?1:0,transform:move(0,0)};
    plan.vClip={y:0,height:256};
    if(variant==='ensamble') {
      const starts=[220,430,650,940],offsets=[[-100,-62,11],[102,-12,-10],[-66,84,-9],[55,-110,14]];
      for(let i=0;i<4;i++) {
        const p=progress(t,starts[i],starts[i]+1030);
        const rest=Math.pow(1-p,3)*Math.cos(p*Math.PI*2);
        const [x,y,angle]=offsets[i];
        plan['piece'+i]={opacity:resolved?0:n(smooth(progress(t,starts[i],starts[i]+230))),transform:`translate(${n(x*rest)} ${n(y*rest)}) rotate(${n(angle*rest)} 128 128)`};
      }
      for(let i=0;i<5;i++) {
        const p=ease(progress(t,2180+i*80,2870+i*80));
        plan['letter'+i]={opacity:n(p),transform:move((i-2)*23*(1-p),16*(1-p))};
      }
    } else {
      const scan=ease(progress(t,550,2020));
      plan.cursorMark.opacity=resolved?0:1;
      plan.cursorClip.width=n(256*scan);
      const cursorOpacity=smooth(progress(t,100,350))*(1-smooth(progress(t,2000,2240)));
      plan.caret={opacity:n(cursorOpacity),x:n(cx+(26+224*scan-134)*scale),y:n(cy-88*scale),height:n(176*scale)};
      const textScan=ease(progress(t,2190,3190));
      plan.wordClip.width=n(ASSETS.wordWidth*textScan);
      for(let i=0;i<5;i++)plan['letter'+i]={opacity:1,transform:move(0,0)};
      plan.nameCaret={opacity:n(smooth(progress(t,2110,2290))*(1-smooth(progress(t,3180,3400)))),x:n((w-wordW)/2+wordW*textScan),y:n(wy+36*ws),height:n(176*ws)};
    }
  }
  return {w,h,bg,secondary,sub,purple:'#7A5FD8',plan,phase:phaseAt(t,variant),time:t,variant};
}

function attrs(state) { return Object.entries(state).map(([key,value]) => `${key}="${esc(value)}"`).join(' '); }

export function renderFrame(time, options={}) {
  const s=frameAt(time,options), p=s.plan, id=options.id||'emurv-intro';
  const node=(name,tag,content='',extra='') => `<${tag} data-node="${name}" ${attrs(p[name])} ${extra}>${content}</${tag}>`;
  const r=`<path d="${ASSETS.r}" fill-rule="evenodd"/>`, v=`<path d="${ASSETS.v}"/>`;
  const guides='<path d="M-16 40H-38V18H-16 M254 18H276V40H254 M-16 216H-38V238H-16 M254 238H276V216H254 M-42 128H-8 M248 128H282 M122 -8V16 M122 240V264" fill="none" stroke-width="1"/><path d="M18 40H238 M18 216H238 M18 40V216 M238 40V216 M122 20V236" stroke-width=".7" stroke-dasharray="3 7" fill="none"/>';
  const outline=node('rOutline','path','',`d="${ASSETS.r}" fill-rule="evenodd" stroke="${s.purple}" stroke-width="1.8" fill="none" stroke-dasharray="${ASSETS.lengths[0]}"`)
    +node('vOutline','path','',`d="${ASSETS.v}" stroke="${s.secondary}" stroke-width="1.5" fill="none" stroke-dasharray="${ASSETS.lengths[1]}"`);
  const solid=node('rSolid','g',`<g clip-path="url(#${id}-r)" fill="${s.purple}">${r}</g>`)
    +node('vSolid','g',`<g clip-path="url(#${id}-v)" fill="${s.secondary}">${v}</g>`);
  const pieces=[0,1,2].map(i=>node('piece'+i,'g',`<g clip-path="url(#${id}-band${i})" fill="${s.purple}">${r}</g>`)).join('')+node('piece3','g',`<g fill="${s.secondary}">${v}</g>`);
  const cursorMark=node('cursorMark','g',`<g clip-path="url(#${id}-cursor)"><g fill="${s.purple}">${r}</g><g fill="${s.secondary}">${v}</g></g>`);
  const mark=node('mark','g',`<g transform="translate(-6 0)">${node('guide','g',guides,`stroke="${s.secondary}"`)}${outline}${solid}`
    +node('contour','path','',`d="M-28 216H-48V40H-28 M258 40H278V216H258" fill="none" stroke="${s.purple}" stroke-width="1"`)
    +node('leftTile','rect','',`width="8" height="8" fill="${s.purple}"`)
    +node('upperTile','rect','',`width="5" height="18" fill="${s.secondary}"`)
    +`<g clip-path="url(#${id}-mark)">${node('scan','path','',`d="M0 -30H18L138 286H120Z" fill="#FFFFFF"`)}</g>${pieces}${cursorMark}</g>`);
  const word=node('word','g',`<g clip-path="url(#${id}-word)">${ASSETS.word.map((d,i)=>node('letter'+i,'path','',`d="${d}" fill="${i<3?s.purple:s.secondary}"`)).join('')}</g>`);
  const extraDefs=[0,1,2].map(i=>`<clipPath id="${id}-band${i}"><rect x="0" y="${40+i*59}" width="256" height="59"/></clipPath>`).join('')+`<clipPath id="${id}-cursor">${node('cursorClip','rect','','x="0" y="0" height="256"')}</clipPath><clipPath id="${id}-word">${node('wordClip','rect','','x="0" y="0" height="256"')}</clipPath>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s.w} ${s.h}" width="${s.w}" height="${s.h}" role="img" aria-label="EmuRV. ${CREDIT}"><title>EmuRV · ${CREDIT}</title><rect width="${s.w}" height="${s.h}" fill="${s.bg}"/><defs><clipPath id="${id}-r">${node('rClip','rect','', 'x="0" width="256"')}</clipPath><clipPath id="${id}-v">${node('vClip','rect','', 'x="0" width="256"')}</clipPath><clipPath id="${id}-mark">${r}${v}</clipPath>${extraDefs}</defs>${mark}${word}${node('caret','rect','','width="2.5" fill="'+s.purple+'"')}${node('nameCaret','rect','','width="2.5" fill="'+s.purple+'"')}${node('separator','path','',`d="M-22 0H22" stroke="${s.purple}" stroke-width="2"`)}${node('creditLabel','path','',`d="${ASSETS.creditLabel.d}" fill="${s.sub}"`)}${node('creditName','path','',`d="${ASSETS.creditName.d}" fill="${s.secondary}"`)}</svg>`;
}

/** Actualiza nodos existentes; no reemplaza el árbol SVG durante la reproducción. */
export function applyFrame(nodes, time, options) {
  const state=frameAt(time,options);
  for(const [name,values] of Object.entries(state.plan)) {
    const node=nodes.get(name);
    if(node) for(const [key,value] of Object.entries(values)) node.setAttribute(key,String(value));
  }
  return state;
}
