import { useCallback, useEffect, useRef, useState } from 'react';
export function useAudio(enabled) {
 const context=useRef(null),timer=useRef(null);const [playing,setPlaying]=useState(false);const [error,setError]=useState('');
 const getContext=useCallback(async()=>{if(!context.current)context.current=new (window.AudioContext||window.webkitAudioContext)();await context.current.resume();return context.current;},[]);
 const tone=(ctx,freq,time,duration,volume=.06)=>{const oscillator=ctx.createOscillator(),gain=ctx.createGain();oscillator.type='sine';oscillator.frequency.value=freq;gain.gain.setValueAtTime(0,time);gain.gain.linearRampToValueAtTime(volume,time+.025);gain.gain.exponentialRampToValueAtTime(.001,time+duration);oscillator.connect(gain);gain.connect(ctx.destination);oscillator.start(time);oscillator.stop(time+duration+.05);oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();};};
 const chime=useCallback(async()=>{if(!enabled)return;try{const ctx=await getContext();[659.25,783.99,1046.5].forEach((f,i)=>tone(ctx,f,ctx.currentTime+i*.12,.65,.035));}catch{setError('Sound is unavailable in this browser.');}},[enabled,getContext]);
 async function toggle(){if(playing){clearInterval(timer.current);timer.current=null;await context.current?.suspend();setPlaying(false);return;}try{const ctx=await getContext();const notes=[523.25,659.25,783.99,659.25,587.33,698.46,880,783.99];let i=0;const play=()=>{tone(ctx,notes[i++%notes.length],ctx.currentTime,1.6,.035);};play();timer.current=setInterval(play,650);setPlaying(true);setError('');}catch{setError('Sound is unavailable in this browser.');}}
 useEffect(()=>()=>{clearInterval(timer.current);context.current?.close();},[]);
 return {playing,toggle,chime,error};
}
