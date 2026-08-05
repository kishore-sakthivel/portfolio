import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { skillGroups } from "@/data/portfolio";

function ProgressRing({ value }: { value: number }) {
  const r = 18;
  const c = 2 * Math.PI * r;
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" className="shrink-0 -rotate-90">
      <circle cx="23" cy="23" r={r} fill="none" stroke="var(--border)" strokeWidth="4" />
      <motion.circle
        cx="23"
        cy="23"
        r={r}
        fill="none"
        stroke="url(#ring-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c - (c * value) / 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <defs>
        <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-blue)" />
          <stop offset="50%" stopColor="var(--accent-purple)" />
          <stop offset="100%" stopColor="var(--accent-cyan)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Skills() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return skillGroups;
    return skillGroups
      .map((g) => ({ ...g, skills: g.skills.filter((s) => s.name.toLowerCase().includes(q)) }))
      .filter((g) => g.skills.length > 0 || g.category.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind the work"
          subtitle="Depth in Python and data, breadth across the stack that surrounds it."
        />

        <Reveal className="mx-auto mb-10 max-w-md">
          <label className="glass flex items-center gap-3 rounded-full px-5 py-3">
            <Search size={16} className="text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a skill…"
              aria-label="Search skills"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.05}>
              <article className="glass glass-hover h-full rounded-3xl p-6">
                <h3 className="font-display text-base font-semibold tracking-tight">
                  {group.category}
                </h3>
                <ul className="mt-5 space-y-4">
                  {group.skills.map((s) => (
                    <li key={s.name} className="flex items-center gap-4">
                      <ProgressRing value={s.level} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="truncate text-sm font-medium">{s.name}</span>
                          <span className="font-mono text-xs text-muted-foreground">
                            {s.level}%
                          </span>
                        </div>
                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            className="h-full rounded-full bg-[image:var(--gradient-brand)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            No skill matches “{query}”.
          </p>
        )}
      </div>
    </section>
  );
}
