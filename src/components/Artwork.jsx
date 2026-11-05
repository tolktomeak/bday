export function Teddy({ className = '' }) {
  return <svg className={className} viewBox="0 0 500 490" role="img" aria-label="A cuddly teddy bear holding a pink heart, sitting on a birthday present"><defs>
    <radialGradient id="fur" cx="38%" cy="25%"><stop stopColor="#fff0d9"/><stop offset=".64" stopColor="#dfb891"/><stop offset="1" stopColor="#b88060"/></radialGradient>
    <radialGradient id="belly"><stop stopColor="#fff4e3"/><stop offset="1" stopColor="#e2bd95"/></radialGradient>
    <linearGradient id="heart" x2=".8" y2="1"><stop stopColor="#ff98b4"/><stop offset=".5" stopColor="#e35a87"/><stop offset="1" stopColor="#b52d64"/></linearGradient>
    <linearGradient id="gift" x2="1" y2="1"><stop stopColor="#eaa5ba"/><stop offset="1" stopColor="#b76b94"/></linearGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#8b496c" floodOpacity=".19"/></filter>
    <filter id="furtexture"><feTurbulence type="fractalNoise" baseFrequency=".6" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComposite in="SourceGraphic" operator="in"/><feBlend in="SourceGraphic" mode="soft-light"/></filter>
  </defs>
  <ellipse cx="255" cy="448" rx="173" ry="23" fill="#ac6d91" opacity=".13"/>
  <g filter="url(#shadow)"><path d="M115 355 L342 342 L386 371 L381 443 L152 458 L115 427Z" fill="url(#gift)"/><path d="M115 355 L152 385 L386 371 L342 342Z" fill="#f7c6d5"/><path d="M152 385V458L115 427V355Z" fill="#cf8ca7"/><path d="M243 379L275 377V451L243 453Z" fill="#fff0db"/><path d="M204 349L238 347L275 377L243 379Z" fill="#fff4e7"/>
  <g fill="url(#fur)" stroke="#ba8967" strokeWidth=".6"><ellipse cx="250" cy="283" rx="102" ry="112"/><circle cx="163" cy="106" r="46"/><circle cx="337" cy="106" r="46"/><circle cx="250" cy="169" r="108"/></g>
  <circle cx="163" cy="106" r="28" fill="#c79576"/><circle cx="337" cy="106" r="28" fill="#c79576"/><ellipse cx="250" cy="291" rx="65" ry="81" fill="url(#belly)"/>
  <ellipse cx="250" cy="197" rx="57" ry="42" fill="url(#belly)"/>
  <g fill="#412b29"><ellipse cx="208" cy="161" rx="9" ry="11"/><ellipse cx="292" cy="161" rx="9" ry="11"/><path d="M235 186Q250 176 265 186Q265 202 250 204Q235 200 235 186Z"/></g>
  <g fill="white"><circle cx="205" cy="157" r="3"/><circle cx="289" cy="157" r="3"/><ellipse cx="246" cy="186" rx="5" ry="2" opacity=".6"/></g>
  <path d="M250 203V211M250 211Q238 225 228 213M250 211Q262 225 272 213" fill="none" stroke="#704b3c" strokeWidth="3" strokeLinecap="round"/>
  <ellipse cx="188" cy="190" rx="17" ry="10" fill="#ed9c9b" opacity=".5"/><ellipse cx="312" cy="190" rx="17" ry="10" fill="#ed9c9b" opacity=".5"/>
  <path d="M250 339C226 317 177 293 177 261C177 224 227 220 250 251C273 220 323 224 323 261C323 293 274 317 250 339Z" fill="url(#heart)"/>
  <path d="M192 255Q200 237 219 243" stroke="#ffd4e3" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".7"/>
  <g fill="url(#fur)"><ellipse cx="164" cy="278" rx="30" ry="53" transform="rotate(-27 164 278)"/><ellipse cx="336" cy="278" rx="30" ry="53" transform="rotate(27 336 278)"/><ellipse cx="173" cy="365" rx="51" ry="45" transform="rotate(-17 173 365)"/><ellipse cx="326" cy="365" rx="51" ry="45" transform="rotate(17 326 365)"/></g>
  <g fill="url(#belly)"><ellipse cx="172" cy="368" rx="30" ry="26" transform="rotate(-17 172 368)"/><ellipse cx="327" cy="368" rx="30" ry="26" transform="rotate(17 327 368)"/></g>
  <path d="M221 235L244 241L249 232L258 242L283 235L274 259L253 247L231 259Z" fill="#c56b83"/>
  </g></svg>;
}

export function PhotoArt({ index = 0 }) {
  const colors = [['#f8ddd9','#db8da1'],['#ddd8ee','#9997c3'],['#fae7c6','#e5ad88']][index % 3];
  return <svg viewBox="0 0 360 430" role="img" aria-label="Illustrated photo placeholder: flowers beneath a dreamy sky"><defs><linearGradient id={`sky${index}`} x2="0" y2="1"><stop stopColor={colors[0]}/><stop offset="1" stopColor={colors[1]}/></linearGradient></defs><rect width="360" height="430" fill={`url(#sky${index})`}/><circle cx="260" cy="108" r="52" fill="#fff3dd" opacity=".8"/><path d="M0 310Q100 200 210 305T400 285V430H0Z" fill="#839f8b"/><path d="M0 359Q140 270 360 345V430H0Z" fill="#5f8276"/>{[70,135,200,275].map((x,i)=><g key={x} transform={`translate(${x} ${310+i%2*43})`}><path d="M0 0Q-12 43 0 100" stroke="#455e4d" strokeWidth="4" fill="none"/><ellipse cx="-12" cy="48" rx="17" ry="6" fill="#abc0a1" transform="rotate(25 -12 48)"/>{[0,60,120,180,240,300].map(a=><ellipse key={a} cx="0" cy="-13" rx="9" ry="18" fill={i%2?'#ffe4d9':'#fff5ed'} transform={`rotate(${a})`}/>)}<circle r="8" fill="#d9aa60"/></g>)}<text x="180" y="65" textAnchor="middle" fill="#7b5b69" fontSize="13" letterSpacing="3">A LITTLE MEMORY</text></svg>;
}
