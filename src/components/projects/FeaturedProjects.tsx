'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  repo: string;
  tools: string[];
  slug: string;
};


const Projects = () => {
  const { isDark } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      title: "Villa",
      description: "A house listings app that allows users to view and manage property listings.",
      image: "/images/villa.png",
      link: "https://villa-eosin.vercel.app/",
      repo: "https://github.com/SimplySophia/Villa",
      tools: ["Next.js", "Tailwind CSS", "React", "API"],
      slug: "villa",
    },
    {
      title: "InkCore",
      description: "An AI powered SaaS Product for Blog Posts and Social Media Content.",
      image: "/images/inkcore.jpg",
      link: "https://inkcore.vercel.app/",
      repo: "https://github.com/SimplySophia/Villa",
      tools: ["Nextjs", "TailwindCSS", "TypeScript", "AI API"],
      slug: "inkcore",
    },
    {
      title: "Learning hub",
      description: "A simple educational platform that offers a variety of courses and resources for learners.",
      image: "/images/brain.png",  
      link: "https://learning-hub-seven-alpha.vercel.app/",
      repo: "https://github.com/SimplySophia/learning-hub",
      tools: ["React", "Tailwind CSS", "TypeScript"],    
      slug: "learning-hub",
    },
    { 
      title: "Dont List", 
      description: "A simple app that allows users to create and manage a list of things they should avoid doing.", 
      image: "/images/dont-list.png", 
      link: "https://don-t-list.vercel.app/", 
      repo: "https://github.com/SimplySophia/DontList", 
      tools: ["HTML", "CSS", "JavaScript"],
      slug: "dont-list",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHeaderVisible(true),
      { threshold: 0.2 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);

    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setVisibleItems((prev) => [...new Set([...prev, index])]),
        { threshold: 0.2 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      headerObserver.disconnect();
      observers.forEach((observer) => observer.disconnect());
    };
  }, [showAll]);

  const cardClass = `group relative w-full h-64 md:h-80 rounded-2xl overflow-hidden transition-all duration-300 ${
    isDark ? 'border border-white/10 shadow-lg shadow-black/20' : 'border border-slate-900/10 shadow-lg shadow-slate-900/10'
  }`;

  const btnClass = (primary?: boolean) => primary 
    ? "flex items-center gap-2 bg-[#F472B6] text-white font-semibold px-5 py-2.5 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[#F472B6]/30 transition-all duration-300"
    : `flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
        isDark ? 'border border-white/20 text-white/80 hover:bg-white/5' : 'border border-slate-900/20 text-slate-900/80 hover:bg-slate-900/5'
      }`;

  return (
    <section id="projects" className={`min-h-screen relative py-12 px-8 transition-colors duration-500 ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className={`mb-20 transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-sm font-semibold tracking-wider mb-4 text-[#F472B6]">FEATURED WORK</p>
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Projects I&apos;ve<br /><span className="text-[#F472B6]">shipped</span>
          </h2>
        </div>

        <div className="space-y-16">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
                visibleItems.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={cardClass}>
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-linear-to-t from-[#F472B6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-900/70'}`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span key={i} className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                      isDark ? 'bg-white/5 text-white/70 hover:bg-[#F472B6]/20 hover:text-[#F472B6]' : 'bg-slate-900/5 text-slate-900/70 hover:bg-[#F472B6]/20 hover:text-[#F472B6]'
                    }`}>{tool}</span>
                  ))}
                </div>

                <Link href={`/projects/${project.slug}`} className="text-[#F472B6] hover:underline font-medium flex items-center gap-2 w-fit transition-all duration-300 hover:gap-3">
                  View Details →
                </Link>

                <div className="flex gap-4 mt-2">
                  {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className={btnClass()}><Github className="w-4 h-4 text-[#F472B6]" /> <span className="ml-2 text-[#F472B6]">Code</span></a>}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={btnClass(true)}><ExternalLink className="w-4 h-4 text-white" /><span className="ml-2 text-white">Live Demo</span></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 2 && (
          <div className="flex justify-center mt-16">
            <button onClick={() => setShowAll(!showAll)} className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 ${
              isDark ? 'bg-white/5 text-white hover:bg-white/10 border border-white/10' : 'bg-slate-900/5 text-slate-900 hover:bg-slate-900/10 border border-slate-900/10'
            }`}>
              {showAll ? 'View Less' : 'View More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;