'use client';

import { motion } from 'framer-motion';

const circles = [
  { size: 'w-8 h-8', delay: 0 },
  { size: 'w-12 h-12', delay: 0.2 },
  { size: 'w-16 h-16', delay: 0.4 },
  { size: 'w-20 h-20', delay: 0.6 },
];

export default function CircleStack() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: circle.delay }}
          className={`rounded-full bg-secondary ${circle.size}`}
        />
      ))}
    </div>
  );
}
