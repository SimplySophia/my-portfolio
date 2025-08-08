"use client";

import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "../helper/SectionHeading";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  // Split into words instead of characters
  const highlightedWords = [
    "I",
    "engineer",
    "web",
    "magic",
    "that",
    "clicks",
    "before",
    "you",
    "know",
    "why."
  ];

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="w-full px-4 md:px-8 py-12 max-w-5xl mx-auto mt-8"
      id="contact"
    >
      <div className="flex flex-col gap-8 items-start">
        <SectionHeading heading="Contact Me" scrollToId="next-section" />

        <div
          id="next-section"
          className="pt-10 animate-fade-in duration-700 flex flex-col gap-6 max-w-3xl w-full px-6 md:px-12"
        >
          {/* Contact Text */}
          <div
            className="text-2xl md:text-4xl font-extrabold text-primary"
            style={{ textShadow: "0 0 10px hsl(var(--color-primary))" }}
          >
            Let&apos;s bring your idea to life.
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-5">
            <a
              href="mailto:sophire33@gmail.com"
              className="flex gap-2 mt-6 bg-primary-foreground text-primary text-center border border-primary rounded-full px-6 py-3 font-medium shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-105 transition"
            >
              Send Me an Email
              <Mail />
            </a>

            <a
              href="https://wa.me/2349160132596"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-6 bg-primary-foreground text-primary text-center border border-primary rounded-full px-6 py-3 font-medium shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-105 transition"
            >
              Chat on WhatsApp
              <FaWhatsapp className="text-xl" />
            </a>
          </div>

          {/* Animated Highlighted Text */}
          <div className="text-3xl md:text-5xl font-extrabold flex flex-wrap gap-x-2 leading-tight">
            {highlightedWords.map((word, wi) => (
              <span key={wi} className="flex whitespace-nowrap">
                {word.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      duration: 0.05,
                      delay: (wi * 10 + i) * 0.05,
                    }}
                    className="text-secondary"
                    style={{
                      textShadow: "0 0 10px hsl(var(--color-primary))",
                      display: "inline-block",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
