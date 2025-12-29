"use client";

import { Mail, Send } from "lucide-react";
import SectionHeading from "../helper/SectionHeading";
import Clock from "../Clock";
import Growth from "../growth/growth"
import { motion } from "framer-motion";
import AnimatedText from "../helper/AnimatedText";

const words = [
  "I", "build", "web", "stuff", "that", "makes", "you", "go",
  "'Oh,", "I", "needed", "that!'"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

const Hero = () => {

  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full px-4 md:px-10 md:py-8 py-6 max-w-5xl mx-auto mt-8"
    >
      <SectionHeading heading="Introduce" scrollToId="next-section" />

      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-2 px-2 md:px-8 py-6 md:py-1">
        {/* Left Side (Hero Text) */}
        <motion.div
          id="next-section"
          className="pt-6 w-full max-w-2xl flex flex-col items-start gap-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Bold Animated Text */}
          <AnimatedText 
            text="Hello World"
            className="text-3xl md:text-5xl font-extrabold text-[#262627]"
            float={true}
           />

          {/* Staggered Paragraph Animation */}
          <motion.div
            className="flex flex-wrap gap-1 text-gray-500 text-2xl md:text-4xl leading-tight"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={wordAnimation}>
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Clock />
          </motion.div>

          <motion.div
            className="flex flex-row md:items-center items-start mt-4 gap-6 text-(--color-primary)"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <button
            onClick={() => scrollToSection("contact")}
              className="font-bold text-xl flex items-center gap-2 hover:underline"
            >
              Let&apos;s Talk
              <div className="border-3 w-10 h-10 rounded-full p-1.5">
                <Send className="animate-sophia-bounce" />
              </div>
            </button>

            <a
              href="/SophiaVincent_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
             className="font-bold text-xl flex items-center gap-2 hover:underline"
            >
              Resume
              <div className="border-3 border-primary w-10 h-10 rounded-full p-1.5">
                <Mail className=" animate-sophia-bounce" />
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side (Growth Animation) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Growth />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
