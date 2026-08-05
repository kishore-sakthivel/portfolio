import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.
        </p>

        <div className="flex items-center gap-3">
          {[
            { href: profile.github, label: "GitHub", Icon: Github },
            { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
            { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent-cyan hover:text-foreground"
            >
              <Icon size={16} />
            </a>
          ))}
          <motion.a
            href="#top"
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground"
          >
            <ArrowUp size={16} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
