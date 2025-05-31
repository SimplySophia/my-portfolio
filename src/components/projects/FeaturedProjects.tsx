"use client"
import SectionHeading from "../helper/SectionHeading";
const FeaturedProjects = () => {
    return ( 
        <section
            aria-labelledby="about-heading"
             className="bg-base-200 min-h-screen px-4 md:px-8 py-8 max-w-7xl mx-auto lg:pl-[24rem]"
        >
            <div className="flex flex-col gap-8 items-start">
                <SectionHeading heading="Skill" scrollToId="next-section" />
                <div id="next-section" className="pt-10 animate-fade-in duration-700 flex flex-col gap-4 max-w-2xl"></div>
            </div>
        </section>
     );
}
 
export default FeaturedProjects;