import { GraduationCap, Award } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { certifications, education, languages } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Where the foundation came from"
        />

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <article className="glass glass-hover h-full rounded-3xl p-8">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                <GraduationCap size={20} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-accent-cyan">{education.period}</p>

              <div className="mt-6 rounded-2xl border border-border p-5 text-center">
                <p className="font-display text-4xl font-semibold text-gradient">
                  {education.cgpa}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  CGPA
                </p>
              </div>

              <dl className="mt-6 space-y-3 text-sm">
                {education.extra.map((e) => (
                  <div key={e.label} className="flex items-center justify-between gap-3">
                    <dt className="text-muted-foreground">{e.label}</dt>
                    <dd className="font-mono text-foreground">{e.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span key={l} className="chip !text-[10px] !normal-case !tracking-normal">
                    {l}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <article className="glass glass-hover group relative h-full overflow-hidden rounded-3xl p-6">
                  <span className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-brand)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-border text-accent-cyan">
                    <Award size={16} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-accent-purple">{c.issuer}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
