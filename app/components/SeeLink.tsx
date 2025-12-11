"use client";
export default function SeeLink({
  label = "Explore",
  onClick,
  className = "",
}: {
  label?: string;
  onClick?: () => void;
  className?: string;
}) {
  const chars = label.split("");

  return (
    <button onClick={onClick}
      className={`
        calsans-regular
        relative w-[140px] h-14 overflow-hidden
        flex justify-center
        border border-black/40 rounded-2xl
        font-semibold text-lg
        text-black bg-transparent border-none cursor-pointer
        pb-8
        before:content-[''] before:absolute before:h-[2px] before:bottom-0 before:left-0
        before:w-full before:scale-x-0 before:origin-bottom-right
        before:bg-current before:transition-transform before:duration-200 hover:before:scale-x-100 hover:before:origin-bottom-left
      ${className}`}
    >
      {/* Original text */}
      <div className="absolute inset-0 flex items-center justify-center text">
        {chars.map((c, i) => (
          <span
            key={i}
            className="
              opacity-100 text-[1.3rem] ml-1 transition-all duration-200
              group-hover:opacity-0
            "
            style={{
              transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center clone">
        {chars.map((c, i) => (
          <span
            key={i}
            className="
              opacity-100 ml-1
              translate-y-[60px]
              transition-all duration-200
            "
            style={{
              transitionDelay: `${150 + i * 50}ms`,
              transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Icon */}
        <path d="M278.6 233.4l-160-160C111.2 65.2 96 71 96 84v160H24c-13.3 0-24..."></path>
    </button>
  );
}
