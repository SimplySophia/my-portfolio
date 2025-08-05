"use client";

import {
  Home,
  User,
  Mail,
  Brain,
  Briefcase,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { CommandShortcut } from "@/components/ui/command";
import ColorSwitcher from "../ColorSwitcher";


const navItems = [
  { id: "home", label: "Home", icon: <Home className="w-6 h-6 text-primary" />, shortcut: "⌘H" },
  { id: "about", label: "About", icon: <User className="w-6 h-6 text-primary" />, shortcut: "⌘A" },
{
    href: "/SophiaVincent_Resume.pdf", // actual file path for resume
    label: "Resume",
    icon: <Mail className="w-6 h-6 text-primary" />,
    shortcut: "⌘R",
    download: true,
  },  
  { id: "skills", label: "Skills", icon: <Brain className="w-6 h-6 text-primary" />, shortcut: "⌘S" },
  { id: "projects", label: "Projects", icon: <Briefcase className="w-6 h-6 text-primary" />, shortcut: "⌘S" },
  { id: "contact", label: "Contact", icon: <Phone className="w-6 h-6 text-primary" />, shortcut: "⌘C" },
];

const socialLinks = [
  { href: "/linkedin", icon: <FaLinkedin className="w-4 h-4" /> },
  { href: "/github", icon: <FaGithub className="w-4 h-4" /> },
  { href: "/twitter", icon: <SiX className="w-4 h-4" /> },
];

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

interface HeroSectionProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isOpen }) => {
  return (
    <>
      {/* Sidebar */}
      <aside
  className={`
    bg-secondary border-2 border-primary z-50
    shadow-[0_0_10px_hsl(var(--color-primary))]
    p-8 w-[70%] max-w-xs fixed top-0 bottom-0 left-0 rounded-md
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}

    lg:translate-x-0 lg:top-14 lg:left-0 lg:w-70 lg:h-[90vh] lg:rounded-2xl lg:fixed
  `}
>


{navItems.map(({ id, href, label, icon, shortcut, download }) => (
        <div key={label} className="relative group flex items-center justify-between mb-4">
          {download ? (
            <Link
              href={href || "#"}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {icon}
              <span className="text-sm font-semibold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </Link>
          ) : (
            <button
              onClick={() => scrollToSection(id!)}
              className="flex items-center gap-2 focus:outline-none"
            >
              {icon}
              <span className="text-sm font-semibold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </button>
          )}
          <CommandShortcut>{shortcut}</CommandShortcut>
        </div>
      ))}


        <ColorSwitcher />

        <div className="flex items-center justify-center gap-4 mt-6">
          {socialLinks.map(({ href, icon }, idx) => (
            <Link
              key={idx}
              href={href}
              className="border-primary shadow-[0_0_10px_hsl(var(--color-primary))] w-[40px] h-[40px] rounded-full p-2 hover:scale-125 transition-transform flex items-center justify-center"
            >
              {icon}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default HeroSection;
