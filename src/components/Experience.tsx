'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  link?: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const Experience = () => {
  const { isDark } = useTheme();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences: ExperienceItem[] = [
    {
      company: "D'hub Technologies",
      role: "Frontend Developer",
      period: "October 2025 – Present",
      location: "Remote",
      current: true,
      link: "https://getdhub.vercel.app/client",
      description: "Remote work platform connecting skilled professionals with global opportunities.",
      highlights: [
        "Developed and maintained responsive, production-ready frontend interfaces using React, Next.js, and Tailwind CSS across multiple internal and client-facing applications",
        "Implemented API-driven UI workflows using Axios and Fetch, handling data fetching, loading states, and error management for seamless user experiences",
        "Collaborated closely with backend developers to integrate REST APIs, align frontend logic with backend architecture, and improve overall application reliability",
        "Worked alongside designers to translate Figma designs into pixel-accurate, accessible, and responsive components",
        "Improved UI consistency and performance by refactoring reusable components and optimizing rendering behavior"
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "Axios", "REST API", "Figma"]
    },
    {
      company: "Deep-Root-Education",
      role: "Frontend Developer",
      period: "April 2025 – November 2025",
      location: "Remote",
      link: "https://v0-deep-roo-t-academy-analysis.vercel.app/",
      description: "Educational & Learning Management Web Platform",
      highlights: [
        "Built and maintained interactive, user-friendly learning platform components using React and Tailwind CSS, focusing on clarity, accessibility, and responsiveness",
        "Implemented form validation, dynamic content rendering, and conditional UI logic to improve data accuracy and user flow across learning modules",
        "Translated Figma designs into pixel-perfect, responsive interfaces, ensuring design consistency across desktop and mobile devices",
        "Optimized component structure and reusable UI patterns to improve maintainability and development efficiency"
      ],
      tech: ["React", "Tailwind CSS", "Figma", "Form Validation"]
    },
    {
      company: "TechyJaunt",
      role: "Frontend Developer (Internship)",
      period: "August 2024 – February 2025",
      location: "Remote",
      description: "UniDash – Campus Errand & Delivery Web Application",
      highlights: [
        "Collaborated within a 3-person cross-functional team to design and build UniDash, a campus errand and delivery platform using Next.js, Tailwind CSS, and Node.js",
        "Led the development of the Runner Dashboard, implementing features such as available errands listing, task acceptance flow, filters, pagination, and fully responsive layouts",
        "Built clean, responsive user interfaces for an AI-powered blog and content platform, focusing on usability and performance",
        "Worked closely with backend developers to integrate AI-based content generation workflows, ensuring smooth data flow between frontend and backend systems"
      ],
      tech: ["Next.js", "Tailwind CSS", "Node.js", "AI Integration"]
    }
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      className={`min-h-screen relative py-32 px-8 transition-colors duration-500 ${
        isDark ? 'bg-[#0A0A0A]' : 'bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className={`text-sm font-semibold tracking-wider mb-4 ${
            isDark ? 'text-[#F472B6]' : 'text-[#F472B6]'
          }`}>
            EXPERIENCE
          </p>
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-bold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Where I&apos;ve
            <br />
            <span className="text-[#F472B6]">built</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className={`absolute left-[7px] top-0 bottom-0 w-0.5 ${
              isDark ? 'bg-white/10' : 'bg-slate-900/10'
            }`}
          ></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`relative pl-12 transition-all duration-1000 ${
                  visibleItems.includes(index)
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-2 w-4 h-4 rounded-full transition-all duration-300 ${
                    isDark
                      ? 'bg-[#F472B6] ring-4 ring-[#0A0A0A]'
                      : 'bg-[#F472B6] ring-4 ring-white'
                  }`}
                ></div>

                {/* Card */}
                <div
                  className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                      : 'bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10'
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className={`text-2xl font-bold ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#F472B6]/20 text-[#F472B6]">
                            Current
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-lg font-medium mb-3 ${
                          isDark ? 'text-white/80' : 'text-slate-900/80'
                        }`}
                      >
                        {exp.role}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-slate-900/60'}`} />
                          <span className={isDark ? 'text-white/60' : 'text-slate-900/60'}>
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-slate-900/60'}`} />
                          <span className={isDark ? 'text-white/60' : 'text-slate-900/60'}>
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          isDark
                            ? 'text-white/60 hover:text-[#F472B6] hover:bg-white/5'
                            : 'text-slate-900/60 hover:text-[#F472B6] hover:bg-slate-900/5'
                        }`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`mb-6 ${
                      isDark ? 'text-white/70' : 'text-slate-900/70'
                    }`}
                  >
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                          isDark ? 'bg-[#F472B6]' : 'bg-[#F472B6]'
                        }`}></div>
                        <p
                          className={`text-sm leading-relaxed ${
                            isDark ? 'text-white/70' : 'text-slate-900/70'
                          }`}
                        >
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                          isDark
                            ? 'bg-white/5 text-white/70 hover:bg-[#F472B6]/20 hover:text-[#F472B6]'
                            : 'bg-slate-900/5 text-slate-900/70 hover:bg-[#F472B6]/20 hover:text-[#F472B6]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#F472B6]/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Experience;