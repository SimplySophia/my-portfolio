"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileConnectMenu = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="lg:hidden relative z-[999]">
      {/* Toggle Button */}
      <button
        onClick={toggle}
        className="text-primary flex items-center gap-2 border border-primary px-3 py-1 rounded-md relative z-[999]"
      >
        {open ? <X /> : <Menu />}
        {open ? "Close" : "Connect"}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Fullscreen Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggle} // Clicking outside closes
            />

            {/* Fullscreen Panel */}
            <motion.div
  className="fixed inset-0 z-[51] flex flex-col items-center justify-center text-center gap-6 px-6"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.3 }}
  onClick={toggle} // closes on outside click
>
  <div className="space-y-6" onClick={(e) => e.stopPropagation()}>
    <h1 className="text-3xl font-bold text-white">Sophia Vincent</h1>
    <p className="text-lg text-gray-300">Let&apos;s connect</p>
    <a
      href="mailto:yourname@example.com"
      className="bg-primary text-black font-semibold py-2 px-6 rounded-md hover:scale-105 transition-transform"
    >
      Send Email
    </a>
  </div>
</motion.div>

          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileConnectMenu;
