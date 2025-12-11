"use client";

interface FancyButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function FancyButton({ label, onClick, className = "" }: FancyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        relative overflow-hidden cursor-pointer font-bold tracking-[0.3em] uppercase text-[15px]
        text-[#2c9caf] px-4 py-3 rounded-md outline outline-2 outline-[#2c9caf]
        transition-all duration-[1000ms]
        ${className}
        hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391]
      `}
    >
      <span className="relative z-10 text-center transition-colors duration-[1000ms] group-hover:text-white">
        {label}
      </span>

      {/* Skew sliding background */}
      <span
        className="
          absolute top-0 left-[-50px] h-full w-0
          bg-[#2c9caf] skew-x-[45deg]
          transition-all duration-[1000ms]
          group-hover:w-[250%]
          -z-10
        "
      ></span>
    </button>
  );
}
