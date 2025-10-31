"use client";

const Growth = () => {
    return ( 
        <div className="mt-8 mx-auto bg-[#262627] border-2 border-secondary shadow-[0_0_10px_hsl(var(--color-primary))] w-[95%] sm:w-[90%] md:w-[95%] lg:w-[75%] xl:w-[90%] rounded-b-full rounded-r-full px-4 sm:px-8 py-6 sm:py-10 lg:py-20">
  <div className="flex flex-row lg:flex-col justify-center items-center gap-4 sm:gap-8 mt-3 sm:mt-5">
    {/* Programming Languages */}
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      <span className="text-3xl sm:text-4xl lg:text-6xl text-primary animate-fade-1">
        3
      </span>
      <p className="text-[11px] sm:text-sm lg:text-base font-medium animate-fade-in text-white text-center">
        Programming Languages
      </p>
    </div>

    {/* Development Tools */}
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      <span className="text-3xl sm:text-4xl lg:text-6xl text-primary animate-fade-2">
        4
      </span>
      <p className="text-[11px] sm:text-sm lg:text-base font-medium animate-fade-in text-white text-center">
        Development Tools
      </p>
    </div>

    {/* Years of Experience */}
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      <span className="text-3xl sm:text-4xl lg:text-6xl text-primary animate-fade-3">
        2
      </span>
      <p className="text-[11px] sm:text-sm lg:text-base font-medium animate-fade-in text-white text-center">
        Years of Experience
      </p>
    </div>
  </div>
</div>


     );
}
 
export default Growth;