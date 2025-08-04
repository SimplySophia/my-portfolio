"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../helper/SectionHeading";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      textControls.start({ opacity: 1, y: 0 });
      imageControls.start({ opacity: 1, x: 0 });
    } else {
      textControls.start({ opacity: 0, y: 60 });
      imageControls.start({ opacity: 0, x: 60 });
    }
  }, [isInView, textControls, imageControls]);

  const highlightedText = "Hard-Hitting Frontend Developer".split("");

  return (
    <section
      aria-labelledby="about-heading"
      className="w-full px-4 md:px-8 py-8 max-w-5xl mx-auto mt-4"
      ref={ref}
    >
      <div className="flex flex-col items-start">
        <SectionHeading heading="About" scrollToId="next-section" />

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-2 px-6 md:px-1">
          <motion.div
            id="next-section"
            className="flex flex-col gap-2 max-w-2xl"
            animate={textControls}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="w-full max-w-2xl mx-auto flex flex-col items-start gap-3 px-2 md:px-8 py-11">
              {/* Floating Bold Animated Text */}
            <div className="text-3xl md:text-5xl px-2 font-extrabold flex flex-wrap leading-tight">
            {highlightedText.map((char, i) => (
              <span
                key={i}
                className="text-secondary animate-float"
                style={{
                  textShadow: '0 0 10px hsl(var(--color-primary))',
                  animationDelay: `${i * 0.05}s`,
                  display: 'inline-block',
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>

              <motion.p
                className="py-2 px-2 text-gray-400 leading-relaxed text-base md:text-lg"
                initial={{ opacity: 0, y: 60 }}
                animate={textControls}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Fueled by curiosity and driven by a passion for technology, I&apos;m
                always exploring how clean code and intuitive design can solve
                real-world problems. I approach every project with a builder&apos;s
                mindset crafting digital experiences that are functional,
                beautiful, and meaningful.
              </motion.p>

              <motion.p
                className="py-2 px-2 text-gray-400 leading-relaxed text-base md:text-lg"
                initial={{ opacity: 0, y: 60 }}
                animate={textControls}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                When I&apos;m not engineering the future, you&apos;ll probably catch me
                featuring on a track or belting out tunes like I&apos;m headlining a
                concert (mic or no mic). So, ready to explore what we can build
                together? Let&apos;s begin.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            animate={imageControls}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/images/mee.png"
              alt="me"
              width={300}
              height={200}
              className="rounded-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
