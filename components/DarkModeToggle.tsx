"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center py-8 border-t border-line">
      <button
        onClick={toggle}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        className="group flex items-center gap-3 px-5 py-2.5 border border-line hover:border-line-dark bg-surface hover:bg-paper transition-all duration-200"
      >
        {/* Icon */}
        <span className="relative w-5 h-5 flex items-center justify-center">
          {dark ? (
            /* Sun */
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
              <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" className="text-ink-muted" />
              {[0,45,90,135,180,225,270,315].map((deg) => (
                <line
                  key={deg}
                  x1={10 + 6.5 * Math.cos((deg * Math.PI) / 180)}
                  y1={10 + 6.5 * Math.sin((deg * Math.PI) / 180)}
                  x2={10 + 8.5 * Math.cos((deg * Math.PI) / 180)}
                  y2={10 + 8.5 * Math.sin((deg * Math.PI) / 180)}
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  className="text-ink-muted"
                />
              ))}
            </svg>
          ) : (
            /* Moon */
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
              <path
                d="M 14 10 A 6 6 0 1 1 8 4 A 4.5 4.5 0 0 0 14 10 Z"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                className="text-ink-muted"
              />
            </svg>
          )}
        </span>

        {/* Label */}
        <span className="font-mono text-[0.6rem] tracking-widest uppercase text-ink-muted group-hover:text-ink transition-colors duration-200">
          {dark ? "Light mode" : "Dark mode"}
        </span>

        {/* Toggle pill */}
        <span className="relative w-8 h-4 rounded-full border border-line bg-paper flex items-center px-0.5 transition-all duration-200">
          <span
            className="w-3 h-3 rounded-full bg-ink-faint transition-all duration-300"
            style={{ transform: dark ? "translateX(16px)" : "translateX(0)" }}
          />
        </span>
      </button>
    </div>
  );
}
