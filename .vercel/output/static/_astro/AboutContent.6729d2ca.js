import{j as a}from"./jsx-runtime.7d759e48.js";import{m as j}from"./motion.2bdac9f4.js";import{r as o}from"./index.8365acb2.js";/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(...t)=>t.filter((e,s,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,r)=>r?r.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t=>{const e=v(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},A=o.createContext({}),L=()=>o.useContext(A),M=o.forwardRef(({color:t,size:e,strokeWidth:s,absoluteStrokeWidth:r,className:i="",children:n,iconNode:h,...d},p)=>{const{size:l=24,strokeWidth:m=2,absoluteStrokeWidth:f=!1,color:b="currentColor",className:g=""}=L()??{},k=r??f?Number(s??m)*24/Number(e??l):s??m;return o.createElement("svg",{ref:p,...c,width:e??l??c.width,height:e??l??c.height,stroke:t??b,strokeWidth:k,className:u("lucide",g,i),...!n&&!N(d)&&{"aria-hidden":"true"},...d},[...h.map(([w,C])=>o.createElement(w,C)),...Array.isArray(n)?n:[n]])});/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=(t,e)=>{const s=o.forwardRef(({className:r,...i},n)=>o.createElement(M,{ref:n,iconNode:e,className:u(`lucide-${y(x(t))}`,`lucide-${t}`,r),...i}));return s.displayName=x(t),s};/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],I=S("file-text",W),P=()=>a.jsx("section",{id:"about",className:"py-32 container mx-auto px-6 bg-white",children:a.jsxs("div",{className:"grid lg:grid-cols-2 gap-20 items-center",children:[a.jsx("div",{className:"relative",children:a.jsx("div",{className:"aspect-square bg-slate-100 rounded-[4rem] p-4",children:a.jsx("div",{className:"w-full h-full border-2 border-dashed border-[#111111] rounded-[3rem] flex items-center justify-center",children:a.jsx("span",{className:"text-6xl font-black text-[#333333] opacity-10",children:"RM"})})})}),a.jsxs(j.div,{initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},transition:{duration:.6},children:[a.jsx("span",{className:"font-bold uppercase tracking-[0.3em] text-xs text-[#111111]",children:"The Mission"}),a.jsx("h2",{className:"text-4xl md:text-5xl font-black mt-3 text-[#333333]",children:"Profil Profesional"}),a.jsx("div",{className:"w-12 h-1.5 mt-6 rounded-full bg-[#111111]"}),a.jsx("p",{className:"md:text-[20px] leading-relaxed mt-8 mb-10 text-[#666666]",children:"Lulusan Sistem Informasi Universitas Sriwijaya dengan keahlian mendalam dalam analisis sistem, pengembangan web, dan desain UI/UX. Berpengalaman memimpin tim IT dalam proyek implementasi strategis dan berkontribusi dalam publikasi ilmiah di bidang data mining dan rekayasa proses bisnis."}),a.jsxs("button",{className:"px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-transform hover:scale-105 bg-[#111111] text-white",children:["Unduh CV ",a.jsx(I,{size:18})]})]})]})});export{P as default};
