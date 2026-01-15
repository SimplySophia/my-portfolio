
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowLeft, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '@/components/context/ThemeContext';
import CircleRipple from '@/components/helper/CircleRipple';

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  repo: string;
  tools: string[];
  slug: string;
  task: string;
  challenges: string;
  solutions: string;
  highlights: string[];
  conclusion: string;
};

const ProjectDetailPage = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Mock project data - replace with actual project from params
  const project: Project = {
    title: "Villa",
    description: "A house listings app that allows users to view and manage property listings.",
    image: "/images/villa.png",
    link: "https://villa-eosin.vercel.app/",
    repo: "https://github.com/SimplySophia/Villa",
    tools: ["Next.js", "Tailwind CSS", "React", "API"],
    slug: "villa",
    task: "Build a real estate app with listings, search, and property details.",
    challenges: "Handling dynamic routes, state management, and responsiveness.",
    solutions: "Used Next.js dynamic routing, Tailwind for design, and reusable components.",
    highlights: [
      "Dynamic routing for property pages",
      "Search and filter functionality",
      "Clean responsive UI",
    ],
    conclusion: "Villa was a learning experience in building scalable real estate apps.",
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { href: "https://linkedin.com/in/sophia-vincent-14a827259", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/SimplySophia", icon: Github, label: "GitHub" },
    { href: "https://twitter.com/yourusername", icon: Twitter, label: "Twitter" },
  ];

  const sections = [
    { title: "Task", content: project.task },
    { title: "Challenges", content: project.challenges },
    { title: "Solutions", content: project.solutions },
    { title: "Conclusion", content: project.conclusion },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-8 py-32">
        {/* Breadcrumbs */}
        <div className={`mb-8 flex items-center gap-2 text-sm transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } ${isDark ? 'text-white/60' : 'text-slate-900/60'}`}>
          <Link href="/" className="flex items-center gap-2 hover:text-[#F472B6] transition-colors">
            <Home className="w-6 h-6 text-[#F472B6] hover:text-[#F472B6]/20 transition-colors" /> <p className='text-[#F472B6] hover:text-[#F472B6]/20 transition-colors text-lg'>Home</p>
          </Link>
          <span>/</span>
          <Link href="/#projects">
            <p className='text-[#F472B6] hover:text-[#F472B6]/20 transition-colors text-lg'>Projects</p>          
          </Link>
          <span>/</span>
          <span className="text-[#F472B6] hover:text-[#F472B6]/20 transition-colors text-lg" >{project.title}</span>
        </div>

        {/* Back Button */}
        <Link 
          href="/#projects"
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } ${isDark ? 'text-white/80 hover:bg-white/5' : 'text-slate-900/80 hover:bg-slate-900/5'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <ArrowLeft className="w-6 h-6 text-[#F472B6] hover:text-[#F472B6]/20 transition-colors" /> <p className='text-[#F472B6] hover:text-[#F472B6]/20 transition-colors text-xl'>Back to Projects</p>
        </Link>

        {/* Project Image */}
        <div className={`relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } ${isDark ? 'border border-white/10 shadow-lg shadow-black/20' : 'border border-slate-900/10 shadow-lg shadow-slate-900/10'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>

        {/* Title & Description */}
        <div className={`mb-12 space-y-6 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '300ms' }}>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {project.title}
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-white/70' : 'text-slate-900/70'}`}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span key={i} className={`px-3 py-1 text-sm font-medium rounded-full ${
                isDark ? 'bg-white/5 text-white/70 hover:bg-[#F472B6]/20 hover:text-[#F472B6]' : 'bg-slate-900/5 text-slate-900/70 hover:bg-[#F472B6]/20 hover:text-[#F472B6]'
              }`}>{tool}</span>
            ))}
          </div>
        </div>

        {/* Project Details Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <div key={index} className={`transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
              <div className={`p-6 rounded-2xl ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-900/5 border border-slate-900/10'
              }`}>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {section.title}
                </h2>
                <p className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-900/70'}`}>
                  {section.content}
                </p>
              </div>
            </div>
          ))}

          {/* Highlights */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className={`p-6 rounded-2xl ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-900/5 border border-slate-900/10'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F472B6] shrink-0"></div>
                    <span className={`${isDark ? 'text-white/70' : 'text-slate-900/70'}`}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-wrap gap-4 mb-12 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '900ms' }}>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
              isDark ? 'border border-white/20 text-white/80 hover:bg-white/5' : 'border border-slate-900/20 text-slate-900/80 hover:bg-slate-900/5'
            }`}>
              <Github className="w-7 h-7 text-[#F472B6]" /> <p className='text-[#F472B6] hover:text-[#F472B6]/20 transition-colors'>View Code</p>
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#F472B6] text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[#F472B6]/30 transition-all duration-300">
              <ExternalLink className="w-7 h-7 text-white" /> <p className='text-white'>Live Demo</p>
            </a>
          )}
        </div>

        {/* Connect Section */}
        <div className={`text-center pt-12 border-t transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } ${isDark ? 'border-white/10' : 'border-slate-900/10'}`} style={{ transitionDelay: '1000ms' }}>
          <p className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Let&apos;s connect
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark ? 'bg-white/5 text-white/80 hover:bg-[#F472B6]/20 hover:text-[#F472B6]' : 'bg-slate-900/5 text-slate-900/80 hover:bg-[#F472B6]/20 hover:text-[#F472B6]'
              }`}>
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      

      <div className="absolute top-10 right-10 w-64 h-64 bg-[#F472B6] rounded-full blur-3xl -z-10"></div>
      <CircleRipple />
    </div>
  );
};

export default ProjectDetailPage;