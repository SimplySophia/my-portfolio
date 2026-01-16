'use client';

import { useEffect, useState } from "react";
import AboutMe from '@/components/about/About';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import ContactPage from '@/components/contact/Contact';
import Hero from '@/components/Hero/hero';
import CircleRipple from '@/components/helper/CircleRipple';
import Loader from '@/components/Loader';
import Experience from "@/components/Experience";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <CircleRipple />
      <div className="flex flex-col lg:flex-row min-h-screen transition-colors duration-300">
        {/* Sticky Sidebar for Desktop */}
        

        {/* Main content */}
        <main className="flex-1">
          <Hero />
          <div>
            <AboutMe />
            <Experience />
            <FeaturedProjects />
            <ContactPage />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
