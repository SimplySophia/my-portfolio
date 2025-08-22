"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-[9999]">
      {/* Logo / Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/images/logo.png" // 👈 replace with your logo or avatar
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full shadow-lg"
        />
      </motion.div>

      {/* Welcome text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-2xl font-semibold text-primary text-center"
      >
        Welcome to my Portfolio 🚀
      </motion.h2>

      {/* Loading dots */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-2 text-gray-500 dark:text-gray-400"
      >
        Thanks for stopping by! Whether you’re a recruiter, collaborator, or fellow
        developer, I’m glad you’re here. Loading your experience...
      </motion.p>
    </div>
  );
};

export default Loader;
