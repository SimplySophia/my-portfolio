"use client";

import { useState, useRef } from "react";
import SectionHeading from "../helper/SectionHeading";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  repo: string;
  tools: string[];
};

const projects: Project[] = [
  {
    title: "Villa",
    description: "A house listings app that allows users to view and manage property listings.",
    image: "/images/villa.png",
    link: "https://villa-eosin.vercel.app/",
    repo: "https://github.com/SimplySophia/Villa",
    tools: ["Next.js", "Tailwind CSS", "React", "API"],
  },
  {
    title: "Tour",
    description: "A travel tour app that allows users to explore and book tours.",
    image: "/images/tour.png",
    link: "https://travel-tourcast.vercel.app/",
    repo: "https://github.com/SimplySophia/tourcast",
    tools: ["Nextjs", "TailwindCSS", "TypeScript", "framer"],
  },
  {
    title: "Haulage",
    description: "A logistics app that provides shipment support and goods haulage services to individuals.",
    image: "/images/haulage.png",
    link: "https://admiral-truckers-b3ck.vercel.app/",
    repo: "https://github.com/SimplySophia/AdmiralTruckers",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dont List",
    description: "A simple app that allows users to create and manage a list of things they should avoid doing.",
    image: "/images/dont-list.png",
    link: "https://don-t-list.vercel.app/",
    repo: "https://github.com/SimplySophia/DontList",
    tools: ["HTML", "CSS", "JavaScript"],
  },
];

const fadeInRightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: "spring",
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
      className="w-full px-4 md:px-8 py-12 max-w-5xl mx-auto"
    >
      <div className="flex flex-col gap-8 items-start">
        <SectionHeading heading="Recent Works" scrollToId="next-section" />
        <div
          id="next-section"
          className="pt-10 flex flex-col gap-4 max-w-2xl px-6 md:px-12"
          ref={ref}
        >
          <div className="flex flex-col justify-center gap-6">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-base-100 shadow-lg rounded-xl overflow-hidden border border-primary p-4"
                variants={fadeInRightVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
              >
                {/* Image */}
                <div className="relative w-full h-48 rounded overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <h3 className="text-xl font-semibold text-primary mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary underline"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {projects.length > 2 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 text-sm font-medium text-primary underline self-center transition duration-200 hover:scale-105"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
