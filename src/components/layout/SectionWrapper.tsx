import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full max-w-5xl px-4 md:px-8 mx-auto py-12">
      
      {children}
    </section>
  );
};

export default SectionWrapper;
