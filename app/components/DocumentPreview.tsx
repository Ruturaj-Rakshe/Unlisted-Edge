"use client";
import Image from "next/image";

interface DocumentPreviewProps {
  label: string;
  imageUrl: string | null;
}

export default function DocumentPreview({ label, imageUrl }: DocumentPreviewProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="
        w-full h-64 rounded-2xl overflow-hidden 
        shadow-lg 
        border border-transparent 
        hover:border-4 hover:border-[#2c9caf] 
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        bg-gray-50
      ">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={label}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-gray-400">No image uploaded</p>
        )}
      </div>
      <h2 className="mt-2 text-center text-lg font-semibold">{label}</h2>
    </div>
  );
}
