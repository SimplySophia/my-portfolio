'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
 import Image from 'next/image';

const Hero = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight * 0.3) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
      {/* Faded Name Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1
          className={`text-[13vw] font-bold whitespace-nowrap transition-all duration-1000 ${
            isDark ? 'text-white/5' : 'text-slate-900/5'
          } ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}
        >
          Sophia Vincent
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 pt-16 pb-32">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* Right Side - Title */}
          <div
            className={`md:col-span-1 transition-all duration-1000 delay-100 ${
              hasAnimated && isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            }`}
          >
            <h1
              className={`text-xl md:text-2xl lg:text-3xl font-bold md:mb-12 mt-12 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Hi, I am
              <span className="text-[#F472B6]"> Sophia Vincent.</span>
            </h1>
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-12 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Frontend
              <br />
              <span className="text-[#F472B6]">Developer</span>
            </h2>
          </div>
          {/* Center - Image */}
          <div
            className={`md:col-span-1 flex justify-center transition-all duration-1000 delay-200 ${
              hasAnimated && isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }`}
          >
            <div className="relative">
              <div className={`w-64 h-64 md:w-80 md:h-96 lg:w-96 lg:h-full flex items-center justify-center`}>
                <span>
                  <Image 
                src="/images/profile.png" 
                alt="Sophia Vincent"
                width={500}
                height={500}
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-full mt-6 object-cover rounded-4xl border-4 border-[#F472B6]"
                priority
              /> 
                </span>
              </div>
              
              {/* Accent Border */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-[#F472B6] z-10 rounded-2xl"></div>
            </div>
          </div>
           {/* Left Side - Tagline */}
          <div
            className={`md:col-span-1 transition-all duration-1000 mb-12${
              hasAnimated && isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
            }`}
          >
            <p
              className={`text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              I build{' '}
              <span className="font-semibold text-[#F472B6]">thoughtful</span>{' '}
              web interfaces that scale with{' '}
              <span className="font-semibold text-[#F472B6]">real users</span>
            </p>      
            <button
          onClick={scrollToProjects}
          className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
            isDark
              ? 'bg-[#F472B6] text-white hover:bg-[#F472B6]/90 hover:shadow-lg hover:shadow-[#F472B6]/50'
              : 'bg-[#F472B6] text-white hover:bg-[#F472B6]/90 hover:shadow-lg hover:shadow-[#F472B6]/30'
          }`}
        >
          View Resume
        </button>
          </div>
         {/* View My Work Button */}
          <div
            className={`absolute top-1/2 left-8 transition-all duration-1000 delay-300 mt-24 ${
            hasAnimated && isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
        <button
          onClick={scrollToProjects}
          className={`px-5 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
            isDark
              ? 'bg-[#F472B6] text-white hover:bg-[#F472B6]/90 hover:shadow-lg hover:shadow-[#F472B6]/50'
              : 'bg-[#F472B6] text-white hover:bg-[#F472B6]/90 hover:shadow-lg hover:shadow-[#F472B6]/30'
          }`}
        >
          View My Work
        </button>
      </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-500 ${
          hasAnimated && isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <span className={`text-sm ${isDark ? 'text-white/60' : 'text-slate-900/60'}`}>
          Scroll
        </span>
        <ChevronDown
          className={`w-6 h-6 animate-bounce ${isDark ? 'text-[#F472B6]' : 'text-[#F472B6]'}`}
        />
      </div>
    </div>
  );
};

export default Hero;