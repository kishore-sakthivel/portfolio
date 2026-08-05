import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Training, internships & milestones"
          subtitle="Six months of Python development followed by a data science internship — plus the conference and club work along the way."
        />

        <ol className="relative space-y-6 border-l border-border pl-8">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <li className="relative">
                <span className="absolute -left-[2.35rem] top-6 h-3 w-3 rounded-full bg-[image:var(--gradient-brand)] ring-4 ring-background" />
                <article className="glass glass-hover rounded-3xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <span className="font-mono text-xs text-accent-cyan">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-purple" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
