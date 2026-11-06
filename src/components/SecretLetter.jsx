import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { ScreenHeading, NextButton } from './Shared';
export default function SecretLetter({ config, next, chime, state, update, reduced }) {
 const [count,setCount]=useState(state.letterOpen?config.letter.length:0);
 useEffect(()=>{if(!state.letterOpen)return;if(reduced){setCount(config.letter.length);return;}const timer=setInterval(()=>setCount(c=>Math.min(c+2,config.letter.length)),24);return()=>clearInterval(timer);},[state.letterOpen,config.letter,reduced]);
 return <div className="screen-content centered"><ScreenHeading eyebrow="01 / A NOTE FROM YOUR FRIEND" title="Some things are better" accent="in a letter.">A few words to celebrate our friendship.</ScreenHeading><div className={`envelope-scene ${state.letterOpen?'opened':''}`}><div className="envelope-back"/><div className="envelope-flap"/><article className="letter-paper" aria-label={config.letter}><p aria-hidden="true">{config.letter.slice(0,count)}<span className="type-cursor" hidden={count>=config.letter.length}>|</span></p><span className="letter-signature">— {config.senderName}</span></article><div className="envelope-front"/>{!state.letterOpen&&<button className="wax-seal" aria-label="Open the secret letter" onClick={()=>{update({letterOpen:true});chime();}}><Heart fill="currentColor" size={24}/></button>}</div><p className="interaction-hint">{state.letterOpen?'A little note for a great friend.':'Tap the heart to open your letter'}</p>{state.letterOpen&&<NextButton onClick={next}>There’s more...</NextButton>}</div>;
}
