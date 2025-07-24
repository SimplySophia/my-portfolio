"use client";

import Image from "next/image";
import SectionHeading from "../helper/SectionHeading";

const skills = [
    { icon: "/icons/html5.svg", name: "HTML5", bgColor: "#E34F26" },
    { icon: "/icons/css3.svg", name: "CSS3", bgColor: "#1572B6" },
    { icon: "/icons/javascript.svg", name: "JavaScript", bgColor: "#F7DF1E" },
    { icon: "/icons/react.svg", name: "React", bgColor: "#61DAFB" },
    { icon: "/icons/typescript.svg", name: "Typescript", bgColor: "#3178C6" },
    { icon: "/icons/nextdotjs.svg", name: "Next.js", bgColor: "#ffffff" },
    { icon: "/icons/tailwindcss.svg", name: "TailwindCss", bgColor: "#06B6D4" },
    { icon: "/icons/sass.svg", name: "Sass", bgColor: "#CC6699" },
    { icon: "/icons/shadcnui.svg", name: "ShadCN UI", bgColor: "#ffffff" },
    { icon: "/icons/nodedotjs.svg", name: "Node.js", bgColor: "#5FA04E" },
    { icon: "/icons/github.svg", name: "GitHub", bgColor: "#181717" },
    { icon: "/icons/mongodb.svg", name: "MongoDB", bgColor: "#47A248" },
];

const Skills = () => {
    return ( 
        <section
            aria-labelledby="about-heading"
             className="w-full px-4 md:px-8 py-8 max-w-5xl mx-auto mt-8"
        >
            <div className="flex flex-col gap-8 items-start">
                <SectionHeading heading="Skills" scrollToId="next-section" />
                <div id="next-section" className="pt-10 animate-fade-in duration-700 flex flex-col gap-4 max-w-2xl">
                    <div className="shadow-[0_0_10px_hsl(var(--color-primary))] rounded-2xl border w-full px-12 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-14 py-8 px-4 mx-auto">
                    {skills.map((skill) => (
                        <div 
                           key={skill.name}
                           className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-22 h-22 text-center"
                        >
                            <Image 
                                src={skill.icon} 
                                alt={`${skill.name} icon`}
                                width={50} 
                                height={50} 
                                className="w-12 h-12"
                                style={{ backgroundColor: skill.bgColor }}
                            />
                            <span className="text-sm text-center text-gray-400 mt-2">{skill.name}</span>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;