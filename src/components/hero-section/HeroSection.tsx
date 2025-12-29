"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";

const socialLinks = [
  { href: "/linkedin", icon: <FaLinkedin className="w-4 h-4" /> },
  { href: "/github", icon: <FaGithub className="w-4 h-4" /> },
  { href: "/twitter", icon: <SiX className="w-4 h-4" /> },
];

interface HeroSectionProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isOpen }) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 z-50
        h-[70vh] w-[220px]
        bg-(--color-bg)
        text-(--color-text-primary)
        border border-(--color-secondary)
        rounded-full
        shadow-[0_10px_30px_rgba(122,31,255,0.25)]
        p-6
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}

        lg:translate-x-0
        lg:top-40
        lg:left-25
        lg:h-[60vh]
        lg:w-[100px]
      `}
    >
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        {socialLinks.map(({ href, icon }, idx) => (
          <Link
            key={idx}
            href={href}
            className="
              w-9 h-9
              rounded-full
              flex items-center justify-center
              border border-(--color-primary)
              text-(--color-primary)
              hover:bg-(--color-primary)
              hover:text-white
              transition-all duration-200
              mt-10
            "
          >
            {icon}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default HeroSection;
