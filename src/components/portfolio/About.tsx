import { Reveal, SectionHeading } from "./Reveal";
import { about } from "@/data/portfolio";
import { Brain, Code2, LineChart, Puzzle, Sparkles } from "lucide-react";

const icons = [Code2, Brain, LineChart, Puzzle, Sparkles];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A short story, told in five moves"
          subtitle="Information Technology graduate (2026), Data Science intern at QSpiders, and someone who genuinely enjoys the part where the data finally makes sense."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent-blue/60 via-accent-purple/40 to-transparent md:block"
          />
          <div className="space-y-5">
            {about.map((item, i) => {
              const Icon = icons[i % icons.length]!;
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <article className="glass glass-hover relative rounded-3xl p-6 md:ml-14">
                    <span className="absolute -left-14 top-6 hidden h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground md:grid">
                      <Icon size={17} />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
