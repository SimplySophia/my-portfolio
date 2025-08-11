"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextProps {
  text: string; // The full sentence
  className?: string; // For text size, color, font, etc.
  float?: boolean; // Whether to make letters float forever
  delayPerLetter?: number; // Time between each letter animation
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  float = true,
  delayPerLetter = 0.05,
}) => {
  // Split into words for wrapping
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap gap-x-2 leading-tight ${className}`}>
      {words.map((word, wi) => (
        <span key={wi} className="flex whitespace-nowrap">
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.05,
                delay: (wi * 10 + i) * delayPerLetter,
              }}
              className={`${float ? "animate-float" : ""}`}
              style={{
                animationDelay: `${(wi * 10 + i) * delayPerLetter}s`,
                display: "inline-block",
                textShadow: '0 0 10px hsl(var(--color-primary))'
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
