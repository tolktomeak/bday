import { AnimatePresence, motion } from 'framer-motion';

export const candlePositions = [[181,162],[232,136],[285,151],[337,135],[389,160]];
const front = 'M115 225 A175 68 0 0 0 465 225 L465 330 A175 68 0 0 1 115 330Z';
const wedge = 'M290 225 L444 257 L444 362 Q402 386 350 394 L350 289Z';
const sliceTop = 'M290 225 L444 257 Q408 280 350 289Z';

function Strawberry({ x, y, scale = 1, rotate = 0 }) {
 return <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}><ellipse cy="9" rx="18" ry="6" fill="#69283c" opacity=".15"/><path d="M-17-15C-17-37 17-37 17-15C17-1 5 15 0 16C-5 15-17-1-17-15Z" fill="url(#berry-gloss)" stroke="#bc3c58" strokeWidth=".6"/>{[[-8,-21],[2,-24],[10,-17],[-10,-10],[0,-12],[8,-5],[-4,1],[3,6]].map(([sx,sy],i)=><ellipse key={i} cx={sx} cy={sy} rx="1.1" ry="2" fill="#ffe0a0" transform={`rotate(-18 ${sx} ${sy})`}/>)}<path d="M0-27L-16-33L-8-23L0-26L9-21L16-30L4-28L4-37Z" fill="#67895b"/><path d="M-10-18Q-11-23-6-25" stroke="#ffc1b7" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".7"/></g>;
}

function Cream({ x, y, scale = 1 }) { return <g transform={`translate(${x} ${y}) scale(${scale})`}><ellipse cy="4" rx="18" ry="7" fill="#a85e7c" opacity=".12"/><path d="M-19 0Q-22-9-12-14Q-17-20-5-25Q-9-30 4-35Q1-23 12-20Q22-13 17-7Q26 3 12 7Q-13 14-19 0Z" fill="url(#vanilla-cream)"/><path d="M-14 0Q10-1 13-10M-9-12Q7-11 9-20M-4-24Q3-23 4-29" fill="none" stroke="#dbbba5" opacity=".48" strokeWidth="2" strokeLinecap="round"/></g>; }

function Layers({ side = false }) { return <g><path d={side?'M350 289L444 257V362Q399 386 350 394Z':'M290 225L350 289V394L290 330Z'} fill={side?'url(#slice-outer)':'url(#sponge-left)'}/>{!side&&<path d="M294 269L346 324M294 307L346 361" stroke="#c64e76" strokeWidth="5" opacity=".85"/>}</g>; }

export default function CakeArtwork({ candles, phase, cut, tasted, reduced }) {
 const separated=phase==='serving'||cut;
 return <svg className="patisserie-art" viewBox="0 0 680 530" role="img" aria-label={cut?'A strawberry cake with a layered slice served beside it': 'A pink strawberry birthday cake with chocolate ganache and five candles'}>
  <defs>
   <linearGradient id="cake-frosting"><stop stopColor="#bc577f"/><stop offset=".18" stopColor="#e28daa"/><stop offset=".47" stopColor="#f3b3c6"/><stop offset=".8" stopColor="#df8aa9"/><stop offset="1" stopColor="#ac4772"/></linearGradient>
   <radialGradient id="cake-icing" cx="38%" cy="30%" r="75%"><stop stopColor="#ffe1e7"/><stop offset=".55" stopColor="#f8b9cd"/><stop offset="1" stopColor="#d5779d"/></radialGradient>
   <linearGradient id="ganache" x2="0" y2="1"><stop stopColor="#845040"/><stop offset=".5" stopColor="#5c342e"/><stop offset="1" stopColor="#47252a"/></linearGradient>
   <linearGradient id="porcelain" x2="0" y2="1"><stop stopColor="#fffdf5"/><stop offset=".4" stopColor="#f5e6e3"/><stop offset=".7" stopColor="#d7b5bd"/><stop offset="1" stopColor="#fff6ed"/></linearGradient>
   <linearGradient id="stand-pillar"><stop stopColor="#c39ea9"/><stop offset=".45" stopColor="#fff7e9"/><stop offset="1" stopColor="#d4abb8"/></linearGradient>
   <radialGradient id="berry-gloss" cx="25%" cy="20%" r="85%"><stop stopColor="#ffb1a3"/><stop offset=".3" stopColor="#ed6271"/><stop offset=".7" stopColor="#c83255"/><stop offset="1" stopColor="#8c214a"/></radialGradient>
   <linearGradient id="vanilla-cream"><stop stopColor="#e0bda6"/><stop offset=".4" stopColor="#fffbed"/><stop offset=".7" stopColor="#fff2dc"/><stop offset="1" stopColor="#dfbca5"/></linearGradient>
   <linearGradient id="slice-outer"><stop stopColor="#f7bdcf"/><stop offset="1" stopColor="#cf7c9f"/></linearGradient>
   <linearGradient id="silver-blade" x2=".3" y2="1"><stop stopColor="#fff"/><stop offset=".3" stopColor="#e2e6ec"/><stop offset=".5" stopColor="#a4a6b5"/><stop offset=".65" stopColor="#f6f5ff"/><stop offset="1" stopColor="#888e9d"/></linearGradient>
   <radialGradient id="candle-fire" cx="50%" cy="75%"><stop stopColor="#fffdf1"/><stop offset=".3" stopColor="#fff4ad"/><stop offset=".65" stopColor="#ffc15c"/><stop offset="1" stopColor="#ee883e"/></radialGradient>
   <pattern id="sponge-layers" width="80" height="42" patternUnits="userSpaceOnUse"><rect width="80" height="42" fill="#e7b47d"/><path d="M0 7H80M0 34H80" stroke="#f3d09b" strokeWidth="8"/><path d="M0 20H80" stroke="#fff0d6" strokeWidth="10"/><path d="M0 24H80" stroke="#c65e7c" strokeWidth="3"/>{[8,27,51,68].map((x,i)=><circle key={x} cx={x} cy={i%2?39:3} r="1.2" fill="#b97d51" opacity=".5"/>)}</pattern>
   <pattern id="sponge-left" href="#sponge-layers" patternTransform="matrix(1 1.066 0 1 0 -84)"/>
   <pattern id="sponge-right" href="#sponge-layers" patternTransform="matrix(1 .208 0 1 0 0)"/>
   <clipPath id="frosting-front"><path d={front}/></clipPath>
   <pattern id="candle-stripes" width="14" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(28)"><rect width="14" height="18" fill="#fff6dc"/><rect width="7" height="18" fill="#c887ab"/></pattern>
   <filter id="patisserie-shadow" x="-40%" y="-40%" width="180%" height="200%"><feDropShadow dx="0" dy="12" stdDeviation="9" floodColor="#75465e" floodOpacity=".16"/></filter>
   <filter id="flame-halo" x="-200%" y="-150%" width="500%" height="450%"><feGaussianBlur stdDeviation="7"/></filter>
   <mask id="cake-cutout"><rect width="680" height="530" fill="white"/>{separated&&<path d={wedge} fill="black" stroke="black" strokeWidth="2"/>}</mask>
   <mask id="slice-bite"><rect width="680" height="530" fill="white"/>{tasted&&<g fill="black"><circle cx="290" cy="237" r="28"/><circle cx="308" cy="251" r="20"/><circle cx="294" cy="272" r="23"/></g>}</mask>
  </defs>
  <ellipse cx="310" cy="478" rx="205" ry="21" fill="#a46d85" opacity=".1"/>
  <g className="cake-pedestal"><path d="M256 416Q270 448 253 459L218 473Q213 479 230 483H350Q368 479 362 473L326 459Q309 448 324 416Z" fill="url(#stand-pillar)" stroke="#eacdcc"/><ellipse cx="290" cy="480" rx="73" ry="8" fill="url(#porcelain)"/><ellipse cx="290" cy="412" rx="207" ry="67" fill="url(#porcelain)" stroke="#e0bda9" strokeWidth="2"/><ellipse cx="290" cy="404" rx="205" ry="61" fill="#fff8ee" stroke="#e5c6ab"/><ellipse cx="290" cy="404" rx="191" ry="52" fill="#f5e3e4" stroke="#fdf5ec" strokeWidth="2"/></g>
  {separated&&<motion.ellipse initial={{opacity:0}} animate={{opacity:1}} cx="520" cy="452" rx="109" ry="36" fill="url(#porcelain)" stroke="#e5c5ad" strokeWidth="2"/>}
  <g filter="url(#patisserie-shadow)"><g mask="url(#cake-cutout)">
   <path d={front} fill="url(#cake-frosting)"/>
   <g clipPath="url(#frosting-front)">{[0,1,2,3,4,5].map(i=><path key={i} d={`M118 ${258+i*19}Q290 ${389+i*19} 462 ${258+i*19}`} stroke={i%2?'#ffdaea':'#b95d88'} strokeWidth="1.2" opacity=".14" fill="none"/>)}</g>
   <ellipse cx="290" cy="225" rx="175" ry="68" fill="url(#cake-icing)" stroke="#ffdeea" strokeWidth="2"/>
   <path d="M115 225Q119 274 165 281V299Q170 312 176 299V285Q198 293 219 295V322Q227 337 234 321V298Q262 303 280 303V316Q287 331 295 316V303Q318 303 339 299V329Q347 341 354 326V295Q378 290 391 284V302Q399 316 406 299V277Q444 260 465 225Q450 284 290 294Q137 285 115 225Z" fill="url(#ganache)"/>
   <path d="M120 234Q290 351 460 234" stroke="#a96b52" opacity=".7" strokeWidth="2" fill="none"/>
   {Array.from({length:25},(_,i)=>{const a=Math.PI*(i/24),x=290+169*Math.cos(a),y=330+65*Math.sin(a);return <g key={i}><ellipse cx={x} cy={y-1} rx="7" ry="6" fill="url(#vanilla-cream)"/><path d={`M${x-4} ${y-3}q4-6 8 0`} stroke="#fff4de" strokeWidth="1.5" fill="none"/></g>;})}
   {[[-116,-14],[-72,-41],[-9,-51],[62,-43],[117,-15]].map(([x,y],i)=><Cream key={i} x={290+x} y={225+y} scale={.8}/>)}
   <Strawberry x={152} y={238} rotate={-20}/><Cream x={193} y={267}/><Strawberry x={248} y={280} rotate={-9}/><Cream x={307} y={280}/><Strawberry x={423} y={240} rotate={23}/><Cream x={390} y={266}/>
   {Array.from({length:20},(_,i)=><ellipse key={i} cx={170+(i*41)%230} cy={200+(i*13)%60} rx="2.8" ry="1.2" fill={i%2?'#fff1ce':'#d49b56'} transform={`rotate(${i*37} ${170+(i*41)%230} ${200+(i*13)%60})`}/>)}
  </g>
  {separated&&<g className="cake-cavity"><path d="M290 225L444 257V362L290 330Z" fill="url(#sponge-right)"/><path d="M290 225L350 289V394L290 330Z" fill="url(#sponge-left)"/><path d="M290 225L444 257V362L290 330Z" fill="#643046" opacity=".22"/><path d="M290 225V330" stroke="#754255" strokeWidth="2"/></g>}
  </g>
  <g className={separated?'cake-candle-group dimmed':'cake-candle-group'}>{candlePositions.map(([x,y],i)=><g key={i} data-candle data-out={candles[i]} className={`sugar-candle ${candles[i]?'extinguished':''}`} style={{'--flicker-delay':`${i*-.19}s`}}><ellipse cx={x} cy={y+64} rx="10" ry="4" fill="#8a496b" opacity=".17"/><rect x={x-6} y={y} width="12" height="64" rx="3" fill="url(#candle-stripes)"/><path d={`M${x-4} ${y+4}v54`} stroke="#fff" opacity=".35" strokeWidth="2"/><ellipse cx={x} cy={y} rx="6" ry="3" fill="#fff6e8"/><path d={`M${x} ${y}v-7`} stroke="#573b3b" strokeWidth="2"/>
   <AnimatePresence>{!candles[i]?<motion.g key="fire" className="flame-group" style={{transformOrigin:`${x}px ${y-6}px`}} exit={reduced?{opacity:0}:{opacity:0,scaleX:1.8,scaleY:.1}} transition={{duration:.22}}><ellipse cx={x} cy={y-20} rx="14" ry="22" fill="#ffc66f" opacity=".38" filter="url(#flame-halo)"/><path d={`M${x} ${y-39}C${x-2} ${y-25} ${x-12} ${y-20} ${x-7} ${y-11}Q${x} ${y-1} ${x+7} ${y-11}C${x+13} ${y-23} ${x+1} ${y-29} ${x} ${y-39}`} fill="url(#candle-fire)"/><ellipse cx={x} cy={y-12} rx="3" ry="6" fill="#fff9db"/></motion.g>:<motion.g key="smoke" initial={{opacity:.55,y:0}} animate={{opacity:0,y:reduced?0:-48}} transition={{duration:1.7}}><path d={`M${x} ${y-7}q-12-13 0-23t0-24`} stroke="#a193ac" strokeWidth="2.4" fill="none" strokeLinecap="round"/></motion.g>}</AnimatePresence>
  </g>)}</g>
  {separated&&<motion.g className="served-slice" initial={reduced?false:{x:0,y:0,rotate:0}} animate={{x:105,y:39,rotate:4}} transition={{type:'spring',stiffness:75,damping:16}} style={{transformOrigin:'350px 330px'}} filter="url(#patisserie-shadow)"><g mask="url(#slice-bite)"><Layers/><Layers side/><path d={sliceTop} fill="url(#cake-icing)" stroke="#ffd9e5" strokeWidth="1.5"/><path d="M350 289Q406 279 444 257V278Q417 300 350 310Z" fill="url(#ganache)"/><Strawberry x={383} y={266} scale={.8} rotate={13}/><Cream x={345} y={264} scale={.65}/></g></motion.g>}
  <AnimatePresence>{phase==='cutting'&&!reduced&&<motion.g className="silver-knife" initial={{x:265,y:105,rotate:53,opacity:0}} animate={{x:[265,279,279,280,283,290,300],y:[105,168,207,111,144,206,75],rotate:[53,53,53,16,16,16,8],opacity:[0,1,1,1,1,1,0]}} transition={{duration:1.6,times:[0,.15,.34,.48,.62,.82,1],ease:'easeInOut'}}><path d="M-68-8H-7Q2-7 3 1V21H-68Q-81 7-68-8Z" fill="#6b405b" stroke="#b4839a"/><circle cx="-55" cy="6" r="2" fill="#e5c5b9"/><circle cx="-24" cy="6" r="2" fill="#e5c5b9"/><path d="M0 0L139 0Q151 0 147 12L126 31Q63 30 0 25Z" fill="url(#silver-blade)" stroke="#b9b8c1"/><path d="M8 22L122 27L142 10" stroke="#fff" fill="none" strokeWidth="2"/></motion.g>}</AnimatePresence>
  {phase==='cutting'&&<motion.path d="M350 289L290 225L444 257" stroke="#fff4db" strokeWidth="2" fill="none" initial={{pathLength:0}} animate={{pathLength:1}} transition={{delay:.35,duration:1.1}}/>}
 </svg>;
}
