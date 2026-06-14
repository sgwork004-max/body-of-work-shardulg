import FadeIn from "./FadeIn";

export default function GraduationClose() {
  return (
    <section
      className="py-24 md:py-36 overflow-hidden"
      style={{ background: "#1A1A18" }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">

        {/* Year range */}
        <FadeIn>
          <p
            className="font-mono tracking-widest uppercase mb-10"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "#6B6860",
            }}
          >
            Jun 2023 — Jun 2026
          </p>
        </FadeIn>

        {/* Main statement */}
        <FadeIn delay={0.08}>
          <p
            className="font-sketch leading-relaxed mb-6"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              color: "#FAF8F2",
              lineHeight: 1.5,
            }}
          >
            This site is the work.
            <br />
            Not a highlight reel. Not a summary.
            <br />
            The actual thing.
          </p>
        </FadeIn>

        {/* Yellow accent line */}
        <FadeIn delay={0.15}>
          <div
            className="mx-auto mb-8"
            style={{ height: "1px", width: "3rem", background: "#FFE141" }}
          />
        </FadeIn>

        {/* Supporting detail */}
        <FadeIn delay={0.2}>
          <p
            className="font-sketch leading-relaxed"
            style={{
              fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)",
              color: "#6B6860",
              lineHeight: 1.7,
            }}
          >
            The interviews in five cities. The factory floor in Pirangut.
            The campfire in Uttar Pradesh. The 4AM sourcing run.
            The boardroom in Kirloskar. The pipeline hitting someone's
            inbox at 18:30 every evening.
          </p>
        </FadeIn>

        {/* Closing */}
        <FadeIn delay={0.28}>
          <p
            className="font-sketch mt-10"
            style={{
              fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
              color: "#FAF8F2",
            }}
          >
            The rest is next.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
