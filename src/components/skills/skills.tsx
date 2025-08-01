"use client";

import { motion } from "framer-motion";
import SectionHeading from "../helper/SectionHeading";

const skills = [
  { name: "HTML5", bgColor: "#E34F26" },
  { name: "CSS3", bgColor: "#1572B6" },
  { name: "JavaScript", bgColor: "#F7DF1E" },
  { name: "React", bgColor: "#61DAFB" },
  { name: "Typescript", bgColor: "#3178C6" },
  { name: "Next.js", bgColor: "#ffffff" },
  { name: "TailwindCss", bgColor: "#06B6D4" },
  { name: "Sass", bgColor: "#CC6699" },
  { name: "ShadCN UI", bgColor: "#ffffff" },
  { name: "Node.js", bgColor: "#5FA04E" },
  { name: "GitHub", bgColor: "#181717" },
  { name: "MongoDB", bgColor: "#47A248" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="w-full px-4 md:px-8 py-8 max-w-5xl mx-auto mt-8"
    >
      <div className="flex flex-col gap-8 items-start">
        <SectionHeading heading="Expertise" scrollToId="next-section" />
        <div id="next-section" className="pt-10 flex flex-col gap-4 max-w-2xl">
          <div className="shadow-[0_0_10px_hsl(var(--color-primary))] rounded-2xl border w-full px-6 md:px-12 py-4">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-4 px-4 mx-auto"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-110 transition-transform duration-300 rounded-2xl py-2 px-2 dark:text-white text-gray-600"
                >
                  <span className="text-sm text-center text-gray-700">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
