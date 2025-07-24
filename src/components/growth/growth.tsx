"use client";

const Growth = () => {
    return ( 
        <div className="mt-15 bg-secondary border-3 border-primary shadow-[0_0_10px_hsl(var(--color-primary))] w-60 h-75 lg:h-100 rounded-b-full rounded-r-full px-4 lg:px-8 py-2 lg:py-15 md:flex">
            <div className="flex flex-col justify-center items-center space-y-8 p-2">
                <div className="flex items-center justify-center gap-5">
                    <span className="text-6xl text-primary animate-fade-1">3</span>
                    <p className="text-sm font-medium animate-fade-in">Programming Languages</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <span className="text-6xl text-primary animate-fade-2">4</span>
                    <p className="text-sm font-medium animate-fade-in">Development Tools</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <span className="text-6xl text-primary animate-fade-3">2</span>
                    <p className="text-sm font-medium animate-fade-in">Years of Experience</p>
                </div>
            </div>
        </div>
     );
}
 
export default Growth;