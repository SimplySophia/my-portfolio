"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export const MobileNavToggle = ({ open, setOpen }: MobileNavProps) => (
  <button
    onClick={() => setOpen(!open)}
    className="text-primary flex items-center gap-2 border border-secondary px-2 rounded-md relative z-[999] hover:bg-primary/10 transition-colors"
  >
    {open ? <X /> : <Menu />}
    {open ? "Close" : "Connect"}
  </button>
);

export const MobileNavOverlay = ({ open, setOpen }: MobileNavProps) => (
  <AnimatePresence>
    {open && (
      <>
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[998]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        />

        {/* Content */}
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-x-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() => setOpen(false)}
        >
          <div className="space-y-6 max-w-xs w-full" onClick={(e) => e.stopPropagation()}>
            <h1 className="text-2xl sm:text-3xl font-bold text-white break-words">
              Sophia Vincent
            </h1>
            <p className="text-base sm:text-lg text-gray-300">Let&apos;s connect</p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sophire33@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black font-semibold py-2 px-6 rounded-md hover:scale-105 transition-transform block"
            >
              Send Email
            </a>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
