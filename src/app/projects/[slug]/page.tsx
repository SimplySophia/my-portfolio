'"use client";'
import { projects } from "@/data/projectData";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";

const socialLinks = [
  { href: "/linkedin", icon: <FaLinkedin className="w-4 h-4" /> },
  { href: "/github", icon: <FaGithub className="w-4 h-4" /> },
  { href: "/twitter", icon: <SiX className="w-4 h-4" /> },
];

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link href="/projects" className="text-blue-400 underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12 space-y-6 text-gray-400">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-400">
        <Link href="/" className="hover:underline">
          🏠 Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>{" "}
        &gt; <span className="font-semibold">{project.title}</span>
      </div>

      {/* Project Image */}
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="rounded-lg shadow-lg w-full"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold">{project.title}</h1>

      {/* Sections */}
      <div className="space-y-4">
        {project.task && (
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold">Task</h2>
            <p>{project.task}</p>
          </section>
        )}

        {project.challenges && (
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold">Challenges</h2>
            <p>{project.challenges}</p>
          </section>
        )}

        {project.solutions && (
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold">Solutions</h2>
            <p>{project.solutions}</p>
          </section>
        )}

        {project.highlights && (
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="list-disc pl-5">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </section>
        )}

        {project.conclusion && (
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>{project.conclusion}</p>
          </section>
        )}

        {/* ---- Code & Live Section ---- */}
        <div className="mt-12 text-center">
          <p className="font-semibold mb-4">
            Explore live project and source code:
          </p>
          <div className="flex justify-center gap-4 mb-8">
            {/* Code Button (show only if repo exists) */}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-500 rounded-full hover:bg-gray-800 transition"
              >
                <FaGithub size={20} />
                Code
              </a>
            )}

            {/* Live Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-white bg-primary rounded-full hover:bg-secondary-foreground transition"
            >
              <ExternalLink size={20} />
              Live
            </a>
          </div>

          {/* Share Section */}
          <p className="font-semibold">
            <span className="text-gray-400">
              Are you impressed and wanna reach out?
            </span>
          </p>
          <div className="flex items-center justify-center gap-8 mt-6">
            {socialLinks.map(({ href, icon }, idx) => (
              <Link
                key={idx}
                href={href}
                className="border-primary shadow-[0_0_10px_hsl(var(--color-primary))] w-[40px] h-[40px] rounded-full p-2 hover:scale-125 transition-transform flex items-center justify-center text-white"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
