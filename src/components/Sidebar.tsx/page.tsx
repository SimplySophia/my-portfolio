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
import { useState } from "react";
import { CommandShortcut } from "@/components/ui/command";
import ColorSwitcher from "../ColorSwitcher";
import Hero from "../Hero/hero";
import Growth from "../growth/growth";

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

const SidebarWithHero = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="pt-16 min-h-screen bg-base-200 lg:pl-[21rem] px-4 pb-8">
      {/* Toggle button visible on mobile */}
      <div className="lg:hidden px-4 py-2">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-primary flex items-center gap-2 border border-primary px-3 py-1 rounded-md"
        >
          {isSidebarOpen ? <X /> : <Menu />}
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Main Flex Layout */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-12 px-4 lg:px-12 pb-8">
        {/* Sidebar */}
        <aside
  className={`
    bg-secondary border-3 border-primary shadow-[0_0_10px_hsl(var(--color-primary))] 
    w-full max-w-xs lg:w-80 p-8 rounded-4xl
    transition-transform duration-300 ease-in-out
    lg:fixed lg:top-20 lg:left-4 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
    lg:translate-x-0
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

        {/* Hero Section */}
        <div className="flex-1 max-w-7xl mx-auto lg:h-[calc(100vh-6rem)] flex items-center">
            <Hero />
            <Growth />
        </div>
      </div>
    </div>
  );
};

export default SidebarWithHero;
