import { ArrowRight, Sparkles } from 'lucide-react';
import { PhotoArt } from './Artwork';
import { useState } from 'react';
export function Eyebrow({ children }) { return <div className="eyebrow"><span/> {children}</div>; }
export function NextButton({ children = 'A little more magic', onClick, disabled = false }) { return <button className="primary-button" onClick={onClick} disabled={disabled}>{children}<ArrowRight size={17}/></button>; }
export function ScreenHeading({ eyebrow, title, accent, children }) { return <div className="screen-heading"><Eyebrow>{eyebrow}</Eyebrow><h1>{title} <em>{accent}</em></h1>{children && <p>{children}</p>}</div>; }
export function Photo({ photo, index = 0, className = '' }) { const [failed,setFailed]=useState(false); return <figure className={`polaroid ${className}`}><div className="photo-image">{failed?<PhotoArt index={index}/>:<img src={photo.src} alt={photo.caption} loading="lazy" onError={()=>setFailed(true)}/>}</div><figcaption>{photo.caption} <span>♡</span></figcaption>{failed&&<span className="sample-label">your photo goes here</span>}</figure>; }
export function SmallNote({ children }) { return <div className="small-note"><Sparkles size={14}/>{children}</div>; }
