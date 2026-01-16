
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`min-h-screen relative flex items-center justify-center py-12 px-8 transition-colors duration-500 ${
        isDark ? 'bg-[#0A0A0A]' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-lg font-semibold tracking-wider mb-4 text-[#F472B6]">
            GET IN TOUCH
          </p>
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let&apos;s bring your
            <br />
            <span className="text-[#F472B6]">idea to life</span>
          </h2>
        </div>

        {/* Tagline with Floating Animation */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p
            className={`text-xl md:text-2xl lg:text-3xl font-light leading-relaxed animate-float blur-[0.5px] ${
              isDark ? 'text-white/60' : 'text-slate-900/60'
            }`}
            style={{
              animation: 'float 8s ease-in-out infinite'
            }}
          >
            I engineer web magic that clicks before you know why.
          </p>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>

        {/* Contact Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a
            href="mailto:sophire33@gmail.com"
            className={`group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'bg-white/5 text-white border border-white/20 hover:bg-white/10'
                : 'bg-slate-900/5 text-[#F472B6] border border-slate-900/20 hover:bg-slate-900/10'
            }`}
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform text-[#F472B6]" />
            <span className='text-[#F472B6]'>Send Me an Email</span>
          </a>

          <a
            href="https://wa.me/2349160132596"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#F472B6] text-white font-semibold px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#F472B6]/30 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform text-white" />
            <span className='text-white'>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Bottom Text */}
        <p
          className={`mt-16 text-sm transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } ${isDark ? 'text-white/50' : 'text-slate-900/50'}`}
        >
          Available for freelance projects and full-time opportunities
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#F472B6]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F472B6]/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;