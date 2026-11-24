import {writeFileSync,mkdirSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {renderFrame,DURATION,VARIANTS} from '../inicio/scene.js';

if(!process.argv[2])throw new Error('Indicá una carpeta temporal para los cuadros.');
const out=resolve(process.argv[2]);
const variant=process.argv[3]||'trazo';
if(!VARIANTS[variant])throw new Error('Variante no válida.');
mkdirSync(out,{recursive:true});
for(let i=0;i<=DURATION/40;i++)writeFileSync(join(out,`frame${String(i).padStart(4,'0')}.svg`),renderFrame(i*40,{variant}));
const checkDir=new URL('../inicio/pruebas/'+(variant==='trazo'?'':variant+'/'),import.meta.url);
mkdirSync(checkDir,{recursive:true});
for(const [name,theme,portrait] of [['final-oscuro','dark',false],['final-papel','paper',false],['final-movil','dark',true]])writeFileSync(new URL(`${name}.svg`,checkDir),renderFrame(DURATION,{theme,portrait,variant}));
for(const [i,t] of [600,1250,1950,2900,3850,5400].entries())writeFileSync(new URL(`paso-${i+1}.svg`,checkDir),renderFrame(t,{variant}));
console.log('136 cuadros SVG y estados de revisión exportados.');
