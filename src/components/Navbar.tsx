"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileNavOverlay, MobileNavToggle } from "./MobileNav";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-8 py-2 bg-(--color-primary) dark:bg-(--color-secondary) fixed top-0 left-0 shadow-md w-full max-w-full z-50 text-white overflow-x-hidden">
        <Link href="/" className="text-2xl font-bold">
          &lt;
          <span className="text-white">
            Sophire <span role="img" aria-label="female developer">👩🏽‍💻</span>
          </span>
          /&gt;
        </Link>
       <div className="flex items-center gap-4">
        {/* Hamburger Toggle */}
        <div className="lg:hidden">
          <MobileNavToggle open={open} setOpen={setOpen} />
        </div>

        {/* 👇 Theme Toggle only visible on mobile */}
      <div className="block">
        <ThemeToggler />
      </div>
       </div>
      </div>

      {/* Fullscreen Overlay */}
      <MobileNavOverlay open={open} setOpen={setOpen} />

    </>
  );
};

export default Navbar;
