import React from 'react';
import { motion } from 'framer-motion';

const directions = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up',
  once = true
}) => {
  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offset,
        scale: 0.95,
        rotate: -2,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once, amount: 0.3 }}
      transition={{
        delay: delay * 0.15,
        duration,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
