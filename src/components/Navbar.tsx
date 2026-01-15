'use client';

import React from 'react';
import { Moon, Sun, } from 'lucide-react';
import { useTheme } from './context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter,  } from 'react-icons/fa';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDark ? 'bg-[#0A0A0A]/80 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-white/80 backdrop-blur-md shadow-lg shadow-slate-900/10'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <h1 className={`text-3xl font-bold transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          <span className="text-[#F472B6]">S</span>ophia
        </h1>

        {/* Social Links & Dark Mode Toggle */}
        <div className="flex items-center gap-10">
          {/* Social Icons */}
          <a
            href="https://github.com/SimplySophia"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 hover:scale-110 ${
              isDark ? 'text-white/80 hover:text-[#F472B6]' : 'text-slate-900/80 hover:text-[#F472B6]'
            }`}
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/sophia-vincent-14a827259/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 hover:scale-110 ${
              isDark ? 'text-white/80 hover:text-[#F472B6]' : 'text-slate-900/80 hover:text-[#F472B6]'
            }`}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          
          <a
            href="https://x.com/BigSophire"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 hover:scale-110 ${
              isDark ? 'text-white/80 hover:text-[#F472B6]' : 'text-slate-900/80 hover:text-[#F472B6]'
            }`}
            aria-label="Twitter/X"
          >
            <FaTwitter className="w-6 h-6" />
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-slate-900/10 hover:bg-slate-900/20'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-slate-900" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;