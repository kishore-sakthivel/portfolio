import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { projects } from "@/data/portfolio";

const allTech = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech)))];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const byTech = filter === "All" || p.tech.includes(filter);
      const byQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return byTech && byQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I built end to end"
          subtitle="From problem statement to dashboard — each project shipped with data cleaning, modelling and validation."
        />

        <Reveal className="mb-12 flex flex-col items-center gap-5">
          <label className="glass flex w-full max-w-md items-center gap-3 rounded-full px-5 py-3">
            <Search size={16} className="text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
          <div className="flex flex-wrap justify-center gap-2">
            {allTech.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFilter(t)}
                className={`relative rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  filter === t
                    ? "border-transparent text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter === t && (
                  <motion.span
                    layoutId="tech-pill"
                    className="absolute inset-0 rounded-full bg-[image:var(--gradient-brand)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-10">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={0.05}>
              <motion.article
                whileHover={{ rotateX: -1.5, rotateY: i % 2 === 0 ? 1.5 : -1.5, y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                style={{ transformPerspective: 1200 }}
                className="glass grid overflow-hidden rounded-3xl lg:grid-cols-2"
              >
                <div className={`relative min-h-64 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
                </div>

                <div className="p-7 sm:p-9">
                  <h3 className="text-balance font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {p.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-accent-cyan">
                        Problem
                      </dt>
                      <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-accent-cyan">
                        Features
                      </dt>
                      <dd className="mt-1">
                        <ul className="space-y-1 text-muted-foreground">
                          {p.features.map((f) => (
                            <li key={f} className="flex gap-2">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-purple" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-accent-cyan">
                        Challenges
                      </dt>
                      <dd className="mt-1 text-muted-foreground">{p.challenges}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-accent-cyan">
                        Learnings
                      </dt>
                      <dd className="mt-1 text-muted-foreground">{p.learnings}</dd>
                    </div>
                  </dl>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost !px-5 !py-2.5 !text-xs"
                    >
                      <Github size={15} /> GitHub
                    </a>
                    <a
                      href={p.demo ?? p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-brand !px-5 !py-2.5 !text-xs"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">
            No project matches that filter yet.
          </p>
        )}
      </div>
    </section>
  );
}
