"use client";

import { useState, useRef } from "react";
import SectionHeading from "../helper/SectionHeading";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  repo: string;
  tools: string[];
  slug: string;
  
};

const projects: Project[] = [
  {
    id: 1,
    title: "Villa",
    description: "A house listings app that allows users to view and manage property listings.",
    image: "/images/villa.png",
    link: "https://villa-eosin.vercel.app/",
    repo: "https://github.com/SimplySophia/Villa",
    tools: ["Next.js", "Tailwind CSS", "TypeScript", "API", 'Clerk'],
    slug: "villa",
  },
  {
    id: 2,
    title: "InkCore",
    description: "An AI powered SaaS Product for Blog Posts and Social Media Content.",
    image: "/images/inkcore.jpg",
    link: "https://inkcore.vercel.app/",
    repo: "https://github.com/SimplySophia/inkcore",
    tools: ["Nextjs", "TailwindCSS", "TypeScript", "framer"],
    slug: "inkcore",
  },
  {
    id: 3,
    title: "Learning hub",
    description: "A simple educational platform that offers a variety of courses and resources for learners.",
    image: "/images/brain.png",  
    link: "https://learning-hub-seven-alpha.vercel.app/",
    repo: "",
    tools: ["React", "Tailwind CSS", "TypeScript"],    
    slug: "learning-hub",
  },
  { 
    id: 4,
    title: "Dont List", 
    description: "A simple app that allows users to create and manage a list of things they should avoid doing.", 
    image: "/images/dont-list.png", 
    link: "https://don-t-list.vercel.app/", 
    repo: "https://github.com/SimplySophia/DontList", 
    tools: ["HTML", "CSS", "JavaScript"],
    slug: "dont-list",
  },

];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: "spring" as const, // Ensure type is compatible
    },
  }),
};

const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      aria-labelledby="projects-heading"
      className="w-full px-4 md:px-8 py-16 max-w-6xl mx-auto"
      id="projects"
    >
      <div className="flex flex-col gap-10 items-start">
        <SectionHeading heading="Featured Projects" scrollToId="next-section" />

        <div ref={ref} className="flex flex-col gap-10">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center bg-(--color-bg) shadow-[0_10px_30px_rgba(122,31,255,0.25)] rounded-3xl p-6 md:p-10 border border-(--color-secondary)"
              variants={fadeInVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-5">
                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Title + Description */}
                <h3 className="text-2xl font-bold text-gray-500 ">{project.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Details Link */}

                 <Link href={`/projects/${project.slug}`} className="text-primary hover:underline">
                  Details →
                </Link>




                {/* Action Buttons */}
                <div className="flex gap-4 mt-2">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-400 text-gray-500 px-4 py-2 rounded-lg hover:bg-white/10 transition"
                    >
                      <FaGithub className="w-4 h-4" /> Code
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-black font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {projects.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 text-sm font-medium text-primary underline self-center transition duration-200 hover:scale-105"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
