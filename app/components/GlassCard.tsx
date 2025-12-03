"use client";

interface BlobGlassCardProps {
    children?: React.ReactNode;
    className?: string;
    blobColor?: string;
}


export default function GlassCard({children, className="", blobColor=""}: BlobGlassCardProps){
    return (
<div
      className={`
        relative w-[250px] h-[300px] rounded-[14px]
        flex items-center justify-center flex-col overflow-hidden z-[1111]
        shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
        ${className}
      `}
    >
      {/* Blurred bouncing blob background */}
      <span
        className="
          absolute top-1/2 left-1/2 w-[200px] h-[200px]
          rounded-full opacity-100 blur-[12px]
          animate-blob-bounce
        "
        style={{ backgroundColor: blobColor }}
      ></span>

      {/* frosted glass card layer */}
      <div
        className="
          absolute top-[5px] left-[5px] w-[240px] h-[290px] rounded-[10px]
          bg-[rgba(255,255,255,0.95)] backdrop-blur-[24px] overflow-hidden
          outline outline-2 outline-white z-[2]
        "
      ></div>

      {/* actual card content on top */}
      <div className="relative z-[5] flex flex-col items-center p-4">
        {children}
      </div>
    </div>
    )
}