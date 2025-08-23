'use client';

import { motion } from 'framer-motion';

const circleSizes = [ 
  { size: 'w-60 h-60', animate: 'animate-fade-2'},
  { size: 'w-48 h-48', animate: 'animate-fade-1'}, 
  { size: 'w-36 h-36', animate: 'animate-fade-3'}, 
  { size: 'w-24 h-24', animate: 'animate-fade-2'}, 
  { size: 'w-12 h-12', animate: 'animate-fade-1'}, 
];

export default function CircleRipple() {
  return (
    <div className="fixed top-[8rem] right-5 z-40">
      <div className="relative flex items-center justify-center">
        {circleSizes.map((circle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`absolute rounded-full border-1 border-secondary ${circle.size} ${circle.animate}`}
          />
        ))}
      </div>
    </div>
  );
}
