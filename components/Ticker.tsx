"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "₹6L retail sales",
  "228 BD outreaches",
  "73 founder interviews",
  "20+ qualified meetings",
  "6 months · founder's office",
  "80+ candidates screened",
  "3 hires contributed",
  "1 MIS automated daily",
  "9 companies",
  "3 years",
];

const content = [...ITEMS, ...ITEMS];

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-ink border-y border-line py-3">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {content.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-mono text-[0.52rem] tracking-widest uppercase text-paper/70 px-6">
              {item}
            </span>
            <span className="text-yellow text-xs leading-none">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
