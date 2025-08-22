"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileNavOverlay, MobileNavToggle } from "./MobileNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-8 py-2 bg-white/70 dark:bg-slate-800/80 backdrop-blur fixed top-0 left-0 shadow-md w-full max-w-full z-50">
        <Link href="/" className="text-2xl font-bold">
          &lt;
          <span className="text-primary">
            Sophire <span role="img" aria-label="female developer">👩🏽‍💻</span>
          </span>
          /&gt;
        </Link>

        {/* Hamburger Toggle */}
        <div className="lg:hidden">
          <MobileNavToggle open={open} setOpen={setOpen} />
        </div>
      </div>

      {/* Fullscreen Overlay */}
      <MobileNavOverlay open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
