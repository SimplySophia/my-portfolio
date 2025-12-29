import React from 'react';
import { ArrowBigDownDash } from "lucide-react";

type Props = {
  heading: string;
  scrollToId?: string;
};

const SectionHeading = ({ heading, scrollToId }: Props) => {
  const handleScroll = () => {
    const el = document.getElementById(scrollToId || '');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col items-left pt-2 pb-4">
      {/* Heading */}
      <div className="
        bg-(--color-bg)
        text-(--color-text-primary)
        border border-(--color-secondary)
        rounded-full
        shadow-[0_10px_30px_rgba(122,31,255,0.25)] w-[150px] text-left">
        <h3 className="text-sm sm:text-xl py-1 text-center">{heading}</h3>
      </div>

      {/* Absolute overlay container for line + arrow */}
      {scrollToId && (
        <div className="absolute top-15 left-15 flex flex-col items-center mb-4">
          {/* Thin line */}
          <div className="w-px h-10 bg-(--color-primary) animate-grow-line"></div>
          {/* Scroll-down arrow */}
          <button onClick={handleScroll} className="mt-1 animate-bounce">
            <ArrowBigDownDash className="w-5 h-5 text-primary text-(--color-primary) hover:scale-110 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
