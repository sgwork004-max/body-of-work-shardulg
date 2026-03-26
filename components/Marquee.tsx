"use client";

type MarqueeProps = {
  items: string[];
  speed?: "normal" | "slow";
  className?: string;
};

export default function Marquee({ items, speed = "normal", className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex whitespace-nowrap ${speed === "slow" ? "animate-marquee-slow" : "animate-marquee"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-5 font-sketch text-base text-ink-muted select-none"
          >
            {item}
            {/* Small yellow diamond separator */}
            <svg viewBox="0 0 8 8" fill="none" className="w-2 h-2 flex-shrink-0">
              <rect x="1" y="1" width="6" height="6" transform="rotate(45 4 4)" fill="#FFE141" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
