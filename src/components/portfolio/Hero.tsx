import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import resumeUrl from "@/assets/resume.pdf";
import portraitUrl from "@/assets/kishore.jpg";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = done ? 1600 : cleared ? 240 : deleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

const socials = [
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export function Hero() {
  const words = useMemo(() => profile.roles, []);
  const typed = useTypewriter(words);

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 2 + (i % 3),
        duration: 9 + (i % 7),
      })),
    [],
  );

  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-32 pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-accent-cyan/50"
            style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -40, 0], opacity: [0.15, 0.8, 0.15] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="chip"
          >
            <MapPin size={13} /> {profile.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&rsquo;m <span className="text-gradient">{profile.displayName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 font-mono text-lg text-accent-cyan sm:text-xl"
          >
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 animate-pulse bg-accent-cyan align-middle" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-brand">
              View Projects
            </a>
            <a href={resumeUrl} download="Kishore_S_Resume.pdf" className="btn-ghost">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-10 flex items-center gap-3"
          >
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass glass-hover grid h-11 w-11 place-items-center rounded-full text-muted-foreground hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent-cyan/40 to-accent-purple/40 blur-2xl"
              />
              <img
                src={portraitUrl}
                alt={`Portrait of ${profile.displayName}, Python developer and data analyst`}
                loading="eager"
                className="glass relative h-44 w-44 rounded-full object-cover object-top p-1 sm:h-52 sm:w-52"
              />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass rounded-3xl p-6 font-mono text-[13px] leading-relaxed"
          >
            <div className="mb-4 flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-accent-cyan/60" />
              <span className="h-3 w-3 rounded-full bg-accent-purple/60" />
            </div>
            <pre className="overflow-x-auto text-muted-foreground">
              <code>{`class Engineer:
    name = "Kishore S"
    stack = ["Python", "SQL", "Power BI"]
    focus = "AI • Data Analytics"

    def ship(self, data):
        insights = self.analyze(data)
        return dashboard(insights)`}</code>
            </pre>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { k: "CGPA", v: "8.0" },
                { k: "Projects", v: "3" },
                { k: "Certs", v: "5" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-border p-3 text-center">
                  <p className="font-display text-xl font-semibold text-foreground">{s.v}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.k}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
