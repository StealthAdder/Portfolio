import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDencrypt } from 'use-dencrypt-effect';

export function TextGlitch({ text, className, interval, style, cycletime }) {
  const { result, dencrypt } = useDencrypt({ interval: interval || 10 });
  useEffect(() => {
    let timeout;
    const interv = setInterval(() => {
      dencrypt('XXXXXXXXXXXXXXXXXXXXXXXXXXX');
      timeout = setTimeout(() => dencrypt(text), interval || 10);
    }, cycletime || 1500);
    return () => {
      clearInterval(interv);
      timeout && clearTimeout(timeout);
    };
  }, [dencrypt, text, interval, cycletime]);
  return (
    <motion.span style={style} className={className}>
      {result || text}
    </motion.span>
  );
}
