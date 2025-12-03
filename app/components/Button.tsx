interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        cursor-pointer flex items-center justify-center
        text-center text-nowrap 
        px-4 sm:px-6 py-2 sm:py-3
        uppercase tracking-[1.5px]
        text-[15px] sm:text-[16px]
        bg-white text-black
        shadow-[0_0_8px_rgba(0,0,0,0.05)]
        transition-all duration-500 ease-in-out
        hover:tracking-[3px]
        hover:text-white
        hover:shadow-[0_7px_29px_rgba(93,24,220,1)]
        active:shadow-[0_0_0_rgba(93,24,220,1)]
        active:translate-y-1 active:duration-100
        ${className}  /* must be at the end */
      `}
    >
      {label}
    </button>
  );
}
