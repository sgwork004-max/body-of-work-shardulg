import { HERO_PROJECTS } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function ProjectsTeaser() {
  const projects = HERO_PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="py-24 md:py-36 bg-paper border-t border-line">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint block mb-4">
                Selected
              </span>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}
              >
                Projects
              </h2>
            </div>
            <a
              href="/projects"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-ink transition-colors duration-200 group"
            >
              All {HERO_PROJECTS.length} projects
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.07}>
              <a
                href="/projects"
                className="group block border border-line hover:border-line-dark transition-all duration-200 overflow-hidden bg-paper hover:bg-surface"
              >
                {/* Yellow accent bar — signature */}
                <div className="h-[3px] bg-yellow" />
                <div className="p-6 md:p-7">
                  <div className="font-mono text-[0.5rem] tracking-widest uppercase text-ink-faint mb-3">
                    {p.company} · {p.year}
                  </div>
                  <h3 className="font-display font-medium text-ink text-xl md:text-2xl leading-tight mb-2.5 group-hover:text-ink transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-5">
                    {p.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.domain.slice(0, 3).map((d) => (
                      <span key={d} className="label px-2 py-0.5 border border-line bg-surface group-hover:bg-paper transition-colors">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.32}>
          <div className="mt-8">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-line text-sm text-ink hover:bg-yellow hover:border-yellow transition-colors duration-200 group"
            >
              All {HERO_PROJECTS.length} projects →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
