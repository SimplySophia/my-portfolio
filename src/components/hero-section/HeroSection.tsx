"use client";

import {
  Home,
  User,
  Mail,
  Brain,
  Briefcase,
  Phone,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { CommandShortcut } from "@/components/ui/command";
import ColorSwitcher from "../ColorSwitcher";


const navItems = [
  { href: "/", label: "Home", icon: <Home className="w-6 h-6 text-primary" />, shortcut: "⌘H" },
  { href: "/about", label: "About", icon: <User className="w-6 h-6 text-primary" />, shortcut: "⌘A" },
  { href: "/resume", label: "Resume", icon: <Mail className="w-6 h-6 text-primary" />, shortcut: "⌘R" },
  { href: "/skills", label: "Skills", icon: <Brain className="w-6 h-6 text-primary" />, shortcut: "⌘S" },
  { href: "/services", label: "Services", icon: <Briefcase className="w-6 h-6 text-primary" />, shortcut: "⌘S" },
  { href: "/contact", label: "Contact", icon: <Phone className="w-6 h-6 text-primary" />, shortcut: "⌘C" },
];

const socialLinks = [
  { href: "/linkedin", icon: <FaLinkedin className="w-4 h-4" /> },
  { href: "/github", icon: <FaGithub className="w-4 h-4" /> },
  { href: "/twitter", icon: <SiX className="w-4 h-4" /> },
];

interface HeroSectionProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isOpen, toggleSidebar }) => {
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


        {navItems.map(({ href, label, icon, shortcut }) => (
          <div key={label} className="relative group flex items-center justify-between mb-4">
            <Link href={href} className="flex items-center gap-2">
              {icon}
              <span className="text-sm font-semibold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </Link>
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

      {/* Main Content */}
      <div className="w-full flex flex-col justify-center items-center gap-12 px-4 pb-4 lg:px-12">
        {/* Mobile Toggle */}
        <div className="lg:hidden px-4 py-2 w-full">
          <button
            onClick={toggleSidebar}
            className="text-primary flex items-center gap-2 border border-primary px-2 py-1 rounded-md"
          >
            {isOpen ? <X /> : <Menu />}
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default HeroSection;
