import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const RotatingText = ({
  texts,
  rotationInterval = 2000,
  mainClassName = '',
  splitLevelClassName = '',
  initial = { y: '100%' },
  animate = { y: 0 },
  exit = { y: '-120%' },
  transition = { type: 'spring', damping: 30, stiffness: 400 }
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          className={splitLevelClassName}
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
