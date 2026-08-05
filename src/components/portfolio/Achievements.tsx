import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { achievements } from "@/data/portfolio";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <p ref={ref} className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
      {n}
      {suffix}
    </p>
  );
}

export function Achievements() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="By the numbers" title="Progress, quantified" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.06}>
              <div className="glass glass-hover rounded-3xl p-6 text-center">
                <Counter value={a.value} suffix={a.suffix} />
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {a.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
