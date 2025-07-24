"use client";

import { Mail, Send } from "lucide-react";
import Link from "next/link";
import SectionHeading from "../helper/SectionHeading";
import Clock from "../Clock";
import Growth from "../growth/growth";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full px-4 md:px-8 py-8 max-w-5xl mx-auto mt-8"
    >
      <SectionHeading heading="Introduce" scrollToId="next-section" />
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-10">
        <div id="next-section" className="pt-10 animate-fade-in duration-700">
        <div className="w-full max-w-2xl flex flex-col items-start">
          <h1
            id="hero-heading"
            className="text-2xl md:text-4xl font-bold text-primary mt-2"
          >
            Hello there! I am Sophia Vincent
          </h1>

          <p className="py-2 px-2 text-gray-400 leading-relaxed text-base md:text-lg">
            A frontend developer, I bring designs to life. ensuring every interaction feels just right.
            Building intuitive, responsive interfaces isn’t just my job. it’s my favorite kind of problem-solving.
          </p>

          <Clock />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-x-6 mt-4">
          <Link
            href="/talk"
            className="text-primary font-bold text-xl flex items-center gap-2 hover:underline"
          >
            Let&apos;s Talk
            <div className="border-3 border-primary shadow-[0_0_10px_hsl(var(--color-primary))] w-[40px] h-[40px] rounded-full p-1.5">
              <Send className="bg-base-100 animate-sophia-bounce" />
            </div>
          </Link>

          <Link
            href="/resume"
            className="text-primary font-bold text-xl flex items-center gap-2 hover:underline"
          >
            Resume
            <div className="border-3 border-primary shadow-[0_0_10px_hsl(var(--color-primary))] w-[40px] h-[40px] rounded-full p-1.5">
              <Mail className="bg-base-100 animate-sophia-bounce" />
            </div>
          </Link>
        </div>
      </div>
          <Growth />
      </div>
    </section>
  );
};

export default Hero;
