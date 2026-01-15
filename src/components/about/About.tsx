'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Code2, Layers, Zap, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Maintainable systems that scale'
    },
    {
      icon: Layers,
      title: 'Component Design',
      description: 'Reusable, thoughtful patterns'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Fast, optimized experiences'
    },
    {
      icon: Users,
      title: 'User Focus',
      description: 'Intuitive, real-world usability'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen relative py-32 px-8 transition-colors duration-500 ${
        isDark ? 'bg-[#0A0A0A]' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto"style={{ willChange: 'transform, opacity' }}
>
        {/* Section Header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className={`text-xl font-semibold tracking-wider mb-4 ${
            isDark ? 'text-[#F472B6]' : 'text-[#F472B6]'
          }`}>
            ABOUT ME
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Building with
            <br />
            <span className="text-[#F472B6]">intention</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Main Text */}
          <div
           className={`space-y-6 motion-safe:transition-all motion-safe:duration-1000 motion-safe:delay-200 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
            }`}
          >
            <p
              className={`text-xl md:text-xl leading-relaxed ${
                isDark ? 'text-white/90' : 'text-slate-900/90'
              }`}
            >
              I&apos;m a frontend developer who cares deeply about{' '}
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                how products feel to use
              </span>{' '}
              not just how they look.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-white/70' : 'text-slate-900/70'
              }`}
            >
              I specialize in building modern, scalable web interfaces with a strong focus on clarity, usability, and performance. My work sits at the intersection of engineering and product thinking: translating complex requirements into clean, intuitive experiences that make sense to real users.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-white/70' : 'text-slate-900/70'
              }`}
            >
              I&apos;ve worked on dashboards, marketplaces, and real-world web applications where maintainability, state management, and thoughtful component design matter just as much as visuals. I enjoy structuring frontend systems that are easy to reason about, scale over time, and adapt as products evolve.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-white/70' : 'text-slate-900/70'
              }`}
            >
              When I&apos;m not building, I&apos;m refining my craft, learning from real production issues, and continuously improving how I design, structure, and ship frontend code.
            </p>
          </div>

          {/* Right Side - Highlights */}
          <div
            className={`space-y-6 motion-safe:transition-all motion-safe:duration-1000 motion-safe:delay-400 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
            }`}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`group p-4 rounded-2xl transition-all duration-500 ease-out ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                    : 'bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10'
                  }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 120 + 400}ms` : '0ms'
                    }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isDark
                          ? 'bg-[#F472B6]/20 text-[#F472B6] group-hover:bg-[#F472B6]/30'
                          : 'bg-[#F472B6]/20 text-[#F472B6] group-hover:bg-[#F472B6]/30'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold mb-2 ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDark ? 'text-white/60' : 'text-slate-900/60'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Accent */}
        <div
          className={`mt-20 pt-12 border-t transition-all duration-1000 delay-600 ${
            isDark ? 'border-white/10' : 'border-slate-900/10'
          } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="flex flex-wrap gap-4">
            {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'Git'].map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-white/5 text-white/80 hover:bg-[#F472B6]/20 hover:text-[#F472B6]'
                    : 'bg-slate-900/5 text-slate-900/80 hover:bg-[#F472B6]/20 hover:text-[#F472B6]'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#F472B6]/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default About;