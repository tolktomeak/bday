import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScreenHeading, NextButton, Photo } from './Shared';
export default function Memories({ config, next }) {
 const [selected,setSelected]=useState(0);const photo=config.photos[selected];
 return <div className="screen-content centered"><ScreenHeading eyebrow="04 / LITTLE MOMENTS, BIG SMILES" title="Good times." accent="Great friends.">Here’s to the memories that make our friendship special.</ScreenHeading><div className="memory-gallery">{config.photos.map((p,i)=><button className={`memory-photo ${i===selected?'selected':''}`} key={p.src+i} onClick={()=>setSelected(i)} aria-label={`View memory ${i+1}: ${p.caption}`} aria-pressed={selected===i} style={{'--memory-index':i}}><Photo photo={p} index={i}/></button>)}</div><div className="memory-note"><button className="icon-button" aria-label="Previous memory" onClick={()=>setSelected((selected-1+config.photos.length)%config.photos.length)}><ChevronLeft size={18}/></button><p>{photo.note||photo.caption}</p><button className="icon-button" aria-label="Next memory" onClick={()=>setSelected((selected+1)%config.photos.length)}><ChevronRight size={18}/></button></div><NextButton onClick={next}>I have a little secret</NextButton></div>;
}
