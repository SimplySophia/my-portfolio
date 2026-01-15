'use client';

import { motion } from 'framer-motion';

const circleSizes = [ 
  { size: 'w-110 h-110', animate: 'animate-fade-2'},
  { size: 'w-90 h-90', animate: 'animate-fade-1'}, 
  { size: 'w-70 h-70', animate: 'animate-fade-3'}, 
  { size: 'w-50 h-50', animate: 'animate-fade-2'}, 
  { size: 'w-30 h-30', animate: 'animate-fade-1'}, 
  { size: 'w-10 h-10', animate: 'animate-fade-3'}, 

];

export default function CircleRipple() {
  return (
    <div className="fixed top-32 right-5 z-40">
      <div className="relative flex items-center justify-center">
        {circleSizes.map((circle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`absolute rounded-full border border-[#F472B6] ${circle.size} ${circle.animate}`}
          />
        ))}
      </div>
    </div>
  );
}
