'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`py-4 px-8 transition-colors duration-500 border-t ${
        isDark 
          ? 'bg-[#0A0A0A] border-white/10' 
          : 'bg-white border-slate-900/10'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <p className={`text-sm ${isDark ? 'text-white/60' : 'text-slate-900/60'}`}>
          Thank you for visiting my portfolio! If you have any questions or would like to connect, feel free to reach out.
        </p>
        <p className={`text-sm ${isDark ? 'text-white/60' : 'text-slate-900/60'}`}>
          &copy; {new Date().getFullYear()} | Developed By <span className='text-[#F472B6]'>Sophia Vincent</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;