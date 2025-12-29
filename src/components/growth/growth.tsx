"use client";

const Growth = () => {
  return (
    <div
      className="
        mt-8 mx-auto
        w-[95%] sm:w-[90%] md:w-[95%] lg:w-[75%] xl:w-[90%]
        rounded-b-full rounded-r-full
        px-4 sm:px-8 py-6 sm:py-10 lg:py-20

        bg-linear-to-br
        from-(--color-primary)
        via-(--color-secondary)
        to-(--color-primary)
        shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]

      "
    >
      <div className="flex flex-row lg:flex-col justify-center items-center gap-4 sm:gap-8 mt-3 sm:mt-5">
        
        {/* Programming Languages */}
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <span className="text-3xl sm:text-4xl lg:text-6xl text-white/95 animate-fade-1">
            3
          </span>
          <p className="text-[11px] sm:text-sm lg:text-base font-medium text-white/80 text-center">
            Programming Languages
          </p>
        </div>

        {/* Development Tools */}
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <span className="text-3xl sm:text-4xl lg:text-6xl text-white/95 animate-fade-2">
            4
          </span>
          <p className="text-[11px] sm:text-sm lg:text-base font-medium text-white/80 text-center">
            Development Tools
          </p>
        </div>

        {/* Years of Experience */}
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <span className="text-3xl sm:text-4xl lg:text-6xl text-white/95 animate-fade-3">
            2
          </span>
          <p className="text-[11px] sm:text-sm lg:text-base font-medium text-white/80 text-center">
            Years of Experience
          </p>
        </div>

      </div>
    </div>
  );
};

export default Growth;
