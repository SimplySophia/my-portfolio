"use client";
import SectionHeading from "../helper/SectionHeading";
const AboutMe = () => {
    return ( 
        <section 
           aria-labelledby="about-heading"
      className="bg-base-200 min-h-screen px-4 md:px-8 py-8 max-w-7xl mx-auto lg:pl-[24rem]"
        >
        <div className="flex flex-col gap-8 items-start">

            <SectionHeading heading="About" scrollToId="next-section"/>
            <div id="next-section" className="pt-10 animate-fade-in duration-700 flex flex-col gap-4 max-w-2xl">
                <div className="w-full max-w-2xl mx-auto flex flex-col items-start">
                    <h1 className="text-2xl md:text-4xl font-bold text-primary" id="about-heading">
                        Who am I?
                    </h1>
                    <p className="py-2 px-2 text-gray-400 leading-relaxed text-base md:text-lg">
                        I am a frontend developer with a passion for creating beautiful and functional web applications. My journey in web development began with a fascination for design and user experience, which led me to explore the world of coding. I specialize in using modern frameworks like React and Next.js to build responsive and interactive interfaces that enhance user engagement.
                    </p>
                    <p className="py-2 px-2 text-gray-400 leading-relaxed text-base md:text-lg">
                        When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blogs and tutorials. I believe in continuous learning and strive to stay updated with the latest trends in web development.
                    </p>
                </div>
            </div>
        </div>
        </section>
     );
}
 
export default AboutMe;