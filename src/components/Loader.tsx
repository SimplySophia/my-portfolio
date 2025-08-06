// components/Loader.tsx
"use client";

import { motion } from "framer-motion";

const boxVariant = {
  animate: {
    rotate: [0, 90, 180, 270, 360],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "linear",
    },
  },
};

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-900 flex items-center justify-center z-[9999]">
      <div className="flex gap-4">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            variants={boxVariant}
            animate="animate"
            className="w-6 h-6 bg-primary rounded-md"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
