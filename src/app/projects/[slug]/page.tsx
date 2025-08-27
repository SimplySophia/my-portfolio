// src/app/projects/[slug]/page.tsx
import { projects } from "@/data/projectData";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";

// Social icons array
const socialLinks = [
  { href: "/linkedin", icon: <FaLinkedin className="w-4 h-4" /> },
  { href: "/github", icon: <FaGithub className="w-4 h-4" /> },
  { href: "/twitter", icon: <SiX className="w-4 h-4" /> },
];

// Typing for props: params is now a Promise, matching Next.js 15 App Router behavior
type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

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

      {/* Project Title */}
      <h1 className="text-4xl font-bold">{project.title}</h1>

      {/* Project Sections */}
      <div className="space-y-4">
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold">Task:</h2>
          <p>{project.task}</p>
        </section>
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold">Challenges:</h2>
          <p>{project.challenges}</p>
        </section>
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold">Solutions:</h2>
          <p>{project.solutions}</p>
        </section>
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold">Highlights:</h2>
          <ul className="list-disc pl-5">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </section>
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold">Conclusion:</h2>
          <p>{project.conclusion}</p>
        </section>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4 md:gap-8 items-center justify-center">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition"
          >
            Live Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            GitHub
          </a>
        )}
      </div>

      {/* Social Sharing Section */}
      <div className="mt-8 text-center">
        <p className="font-semibold mb-4">Connect or say hi:</p>
        <div className="flex justify-center gap-4">
          {socialLinks.map(({ href, icon }, idx) => (
            <Link
              key={idx}
              href={href}
              className="border-primary shadow-[0_0_10px_hsl(var(--color-primary))] w-10 h-10 rounded-full p-2 hover:scale-125 transition-transform flex items-center justify-center text-white"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
