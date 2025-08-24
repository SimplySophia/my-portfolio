'use client';

import { useEffect, useState } from "react";
import HeroSection from '@/components/hero-section/HeroSection';
import AboutMe from '@/components/about/About';
import Skills from '@/components/skills/skills';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import ContactPage from '@/components/contact/Contact';
import Hero from '@/components/Hero/hero';
import CircleRipple from '@/components/helper/CircleRipple';
import Loader from '@/components/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedHome");

    if (hasVisited) {
      // If already visited, don't show loader
      setLoading(false);
    } else {
      // Show loader first time
      const timeout = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisitedHome", "true");
      }, 2000); 

      return () => clearTimeout(timeout);
    }
  }, []);

  if (loading) return <Loader />;

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <CircleRipple />
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sticky Sidebar for Desktop */}
        <aside className="hidden lg:block lg:sticky top-0 h-screen w-64 text-white">
          <HeroSection isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <Hero />
          <div>
            <AboutMe />
            <Skills />
            <FeaturedProjects />
            <ContactPage />
          </div>
        </main>
      </div>
    </>
  );
}
