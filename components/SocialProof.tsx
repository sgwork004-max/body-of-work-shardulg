import FadeIn from "./FadeIn";

/* ═══════════════════════════════════════════════════════════════════════════
   SOCIAL PROOF — two real founder quotes, visible immediately, no clicks.
   Sits between Hero and Work.
   ═══════════════════════════════════════════════════════════════════════════ */

const QUOTES = [
  {
    quote: "Everything you were able to accomplish in such a short amount of time.",
    name:  "Mooshir Nathu",
    title: "Founder · Rayden Design Studio",
  },
  {
    quote: "A brilliant stint. Thank you for your diligence and contribution.",
    name:  "Dhun Patel",
    title: "Founder · Therefore Design",
  },
];

export default function SocialProof() {
  return (
    <div className="border-b border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line">
          {QUOTES.map((q, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="py-7 md:py-8 md:px-10 first:md:pl-0 last:md:pr-0 flex gap-4 items-start">
                {/* Yellow quotation mark */}
                <span
                  className="font-display font-semibold text-yellow select-none flex-shrink-0 leading-none"
                  style={{ fontSize: "2.8rem", lineHeight: 1, marginTop: "2px" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <div>
                  <p className="text-ink text-[0.97rem] leading-relaxed mb-3 italic">
                    {q.quote}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-px bg-line-dark" />
                    <span className="label text-ink-muted">{q.name}</span>
                    <span className="label text-ink-faint">· {q.title}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
