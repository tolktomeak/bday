import { useEffect } from 'react';
import { RotateCcw, Download, Heart } from 'lucide-react';
import { Teddy } from './Artwork';
import { ScreenHeading } from './Shared';
export default function FinalSurprise({ config, restart, celebrate }) {
 useEffect(()=>{celebrate();},[celebrate]);
 function download(){const text=`Happy birthday, ${config.recipientName}!\n\n${config.letter}\n\n${config.finalMessage}\n\nCheers to our friendship,\n${config.senderName}`;const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='a-little-birthday-note.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 return <div className="screen-content centered finale"><div className="final-heart"><Heart fill="currentColor" size={22}/></div><ScreenHeading eyebrow="08 / CHEERS TO OUR FRIENDSHIP" title="Life is more fun" accent="with friends like you.">{config.finalMessage}</ScreenHeading><Teddy className="final-teddy"/><p className="final-wish">Happy birthday, {config.recipientName}!</p><p className="signature">Cheers to our friendship, {config.senderName}</p><div className="final-actions"><button className="primary-button" onClick={download}><Download size={16}/>Keep this little note</button><button className="secondary-button" onClick={restart}><RotateCcw size={16}/>Relive the magic</button></div></div>;
}
