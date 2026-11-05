import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScreenHeading, NextButton, Photo } from './Shared';
export default function PhotoReveal({ config, next, celebrate }) {
 useEffect(()=>{celebrate();},[celebrate]);
 return <div className="screen-content centered"><ScreenHeading eyebrow="02 / THE BIRTHDAY GIRL" title={config.birthdayMessage} accent={config.recipientName + ' ♡'}>Today, the spotlight is all yours.</ScreenHeading><div className="photo-reveal"><span className="photo-scribble">a whole lot<br/>of lovely ↘</span><motion.div initial={{scale:.8,rotate:-9,opacity:0}} animate={{scale:1,rotate:-4,opacity:1}} transition={{type:'spring',damping:17}}><Photo photo={config.photos[0]} index={0}/></motion.div><span className="photo-heart">♡</span></div><NextButton onClick={next}>Let’s make a wish</NextButton></div>;
}
