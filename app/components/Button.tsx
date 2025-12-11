import React from "react";

interface ButtonProps {
  label?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({ label, onClick, className, icon, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        cursor-pointer flex items-center justify-center
        text-center text-nowrap 
        px-4 sm:px-6 py-2 sm:py-3
        uppercase tracking-[1.5px]
        text-[15px] sm:text-[16px]
        bg-white text-black
        shadow-[0_4px_24px_rgba(0,0,0,0.12)]
        transition-all duration-500 ease-in-out
        hover:tracking-[3px]
        hover:text-white
        hover:shadow-[0_7px_29px_rgba(93,24,220,1)]
        active:shadow-[0_0_0_rgba(93,24,220,1)]
        active:translate-y-1 active:duration-100
        ${className}  /* must be at the end */
      `}
    > 
<div className="flex flex-col items-center justify-center gap-[0.5px]">
  {icon && <span className="flex items-center mr-5">{icon}</span>}
  {label && <span className="">{label}</span>}
</div>

    </button>
  );
}
