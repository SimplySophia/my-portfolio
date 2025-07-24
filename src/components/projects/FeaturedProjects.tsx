"use client"
import SectionHeading from "../helper/SectionHeading";
import Image from "next/image";

const projects = [
    {
        title: "Travel Tour App",
        description: "A travel tour app that allows users to explore and book tours.",
        image: "/images/tour.png",
        link: "https://travel-tourcast.vercel.app/",
        repo: "https://github.com/SimplySophia/tourcast",
    },
    {
        title: "Logistics Shipment App",
        description: "A logistics app that provides shipment support and goods haulage services to individuals.",
        image: "/images/haulage.png",
        link: "https://admiral-truckers-b3ck.vercel.app/",
        repo: "https://github.com/SimplySophia/AdmiralTruckers",
    },
    //{
    //    title: "E-commerce App",
    //    description: "An e-commerce app that allows users to buy and sell products.",
    //    image: "/images/ecommerce-app.png",
    //    link: "https://ecommerce-app-omega-ashen.vercel.app/",
    //    github: "https://github.com/SimplySophia/Campus-sync",
   // }
    ]
const FeaturedProjects = () => {
    return ( 
        <section
            aria-labelledby="about-heading"
             className="w-full px-4 md:px-8 py-8 max-w-5xl mx-auto mt-8"
        >
            <div className="flex flex-col gap-8 items-start">
                <SectionHeading heading="My Projects" scrollToId="next-section" />
                <div id="next-section" className="pt-10 animate-fade-in duration-700 flex flex-col gap-4 max-w-2xl">
                    <div className="flex flex-col justify-center gap-2">
                        {projects.map((project, index) => (
                            <div
                              key={index}
                              className="bg-base-100 shadow-lg rounded-xl overflow-hidden border border-primary p-4" 
                              >
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  width={100}
                                  height={100}
                                  className="w-full h-48 object-cover rounded"
                                /> 
                                <h3 className="text-xl font-semibold text-primary mt-4">{project.title}</h3> 
                                <p className="text-gray-400 mt-3">{project.description}</p>
                                <div className="mt-4 flex gap-4">
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-primary underline"
                                    >
                                        Live Demo
                                    </a>
                                    <a 
                                      href={project.repo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-primary underline"
                                      >
                                        Github
                                    </a>
                                </div>
                              </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default FeaturedProjects;