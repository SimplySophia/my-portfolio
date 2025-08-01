'use client';

import SectionHeading from "../helper/SectionHeading";

const ContactPage = () => {
  const highlightedText = "I engineer web magic that clicks before you know why.".split("");

  return (
    <section
      aria-labelledby="contact-heading"
      className="w-full px-4 md:px-8 py-12 max-w-5xl mx-auto mt-8"
    >
      <div className="flex flex-col gap-8 items-start">
        <SectionHeading heading="Contact Me" scrollToId="next-section" />

        <div
          id="next-section"
          className="pt-10 animate-fade-in duration-700 flex flex-col gap-6 max-w-3xl w-full"
        >
          {/* Contact Text */}
          <div className="text-2xl md:text-4xl font-extrabold text-primary" style={{ textShadow: '0 0 10px hsl(var(--color-primary))' }}>
            Let&apos;s bring your idea to life.
          </div>

          {/* Mail Button */}
          <a
            href="mailto:sophire33@gmail.com"
            className="mt-6 bg-primary-foreground text-primary text-center border border-primary rounded-full px-6 py-3 font-medium shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-105 transition"
          >
            Send Me an Email
          </a>

          {/* Floating Bold Animated Text */}
          <div className="text-3xl md:text-5xl font-extrabold flex flex-wrap leading-tight">
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
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
