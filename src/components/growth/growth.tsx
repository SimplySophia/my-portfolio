"use client";

const Growth = () => {
    return ( 
        <div className="mt-8 bg-[#262627] border-3 border-secondary shadow-[0_0_10px_hsl(var(--color-primary))] w-90 md:w-60 h-30 lg:h-100 rounded-b-full rounded-r-full px-4 lg:px-8 py-2 lg:py-15 flex">
            <div className="flex md:flex-col flex-row justify-center items-center space-y-2 md:space-y-8">
                <div className="flex items-center justify-center gap-5">
                    <span className="text-4xl md:text-6xl text-primary animate-fade-1">3</span>
                    <p className="text-xs md:text-sm font-medium animate-fade-in text-white">Programming Languages</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <span className="text-4xl md:text-6xl text-primary animate-fade-2">4</span>
                    <p className="text-xs md:text-sm font-medium animate-fade-in text-white">Development Tools</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <span className="text-4xl md:text-6xl text-primary animate-fade-3">2</span>
                    <p className="text-xs md:text-sm font-medium animate-fade-in text-white">Years of Experience</p>
                </div>
            </div>
        </div>
     );
}
 
export default Growth;