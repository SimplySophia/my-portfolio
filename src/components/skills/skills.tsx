"use client";

import Image from "next/image";
import SectionHeading from "../helper/SectionHeading";


const Skills = () => {
    return ( 
        <section
            aria-labelledby="about-heading"
             className="bg-base-200 min-h-screen px-4 md:px-8 py-8 max-w-7xl mx-auto lg:pl-[24rem]"
        >
            <div className="flex flex-col gap-8 items-start">
                <SectionHeading heading="Skills" scrollToId="next-section" />
                <div id="next-section" className="pt-10 animate-fade-in duration-700 flex flex-col gap-4 max-w-2xl">
                    <div className="shadow-[0_0_10px_hsl(var(--color-primary))] rounded-2xl border w-full px-12 py-8">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 w-[600px] h-[300px] mt-4">
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image 
                            src="/images/html5.svg" 
                            alt="HTML5" 
                            width={50} 
                            height={50} 
                            className=""
                           />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image src="/images/css3.svg" alt="CSS3" className="w-12 h-12" width={50} height={50} />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image src="/images/javascript.svg" alt="JavaScript" className="w-12 h-12" width={50} height={50} />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image src="/images/react.svg" alt="React" className="w-12 h-12" width={50} height={50} />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image 
                            src="/images/typescript.svg" 
                            alt="Typescript" 
                            width={50} 
                            height={50} 
                            className=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image 
                            src="/images/nextdotjs.svg" 
                            alt="Next" 
                            width={50} 
                            height={50} 
                            className=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image 
                            src="/images/tailwindcss.svg" 
                            alt="TailwindCss" 
                            width={50} 
                            height={50} 
                            className=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image 
                            src="/images/sass.svg" 
                            alt="sass" 
                            width={50} 
                            height={50} 
                            className=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image 
                            src="/images/shadcnui.svg" 
                            alt="ShadCN" 
                            width={50} 
                            height={50} 
                            className=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image 
                            src="/images/nodedotjs.svg" 
                            alt="node" 
                            width={50} 
                            height={50} 
                            className=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image 
                            src="/images/github.svg" 
                            alt="GitHub" 
                            width={50} 
                            height={50} 
                            className=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center border-primary shadow-[0_0_10px_hsl(var(--color-primary))] hover:scale-120 transition-transform duration-300 rounded-2xl w-17 h-17 text-center">
                            <Image 
                            src="/images/mongodb.svg" 
                            alt="Mongo" 
                            width={50} 
                            height={50} 
                            className=""
                           />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;