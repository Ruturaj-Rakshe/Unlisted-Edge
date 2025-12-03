"use client";
import React from "react";

interface HoverButtonProps {
  label: string;
  secondLabel?: string;
  onClick?: () => void;
  className?: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({ label, secondLabel, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden rounded-[10px] w-[150px] h-[60px] text-[#e8e8e8] font-semibold uppercase cursor-pointer shadow-lg active:scale-95 ${className}`}
    >
      {/* Bottom label */}
      <span className="absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-300 ease-out group-hover:opacity-0">
        {label}
      </span>

      {/* Top label - slides in on hover */}
      <span className="absolute inset-0 flex items-center justify-center bg-[#2c9caf] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        {secondLabel || label}
      </span>
    </button>
  );
};

export default HoverButton;
