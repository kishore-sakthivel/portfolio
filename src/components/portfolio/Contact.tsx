import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/data/portfolio";

const details = [
  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { Icon: Linkedin, label: "LinkedIn", value: "in/kishores16", href: profile.linkedin },
  { Icon: Github, label: "GitHub", value: "kishores16", href: profile.github },
  { Icon: MapPin, label: "Location", value: profile.location },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend: compose a prefilled email in the visitor's mail client.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") ?? "Portfolio enquiry"));
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something with data"
          subtitle="Open to entry-level Python developer, data analyst and software engineer roles."
        />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={handleSubmit} className="glass relative rounded-3xl p-7 sm:p-9">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Name" placeholder="Your name" />
                <Field name="email" label="Email" type="email" placeholder="you@company.com" />
              </div>
              <div className="mt-4">
                <Field name="subject" label="Subject" placeholder="What is this about?" />
              </div>
              <div className="mt-4">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about the role or project…"
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent-blue"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-brand mt-6 w-full"
              >
                <Send size={16} /> Send message
              </motion.button>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="glass absolute inset-x-7 bottom-7 flex items-center gap-3 rounded-2xl px-5 py-4"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 16 }}
                      className="grid h-8 w-8 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground"
                    >
                      <Check size={16} />
                    </motion.span>
                    <p className="text-sm">Your mail client is opening — thanks for reaching out!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>

          <div className="grid content-start gap-4">
            {details.map((d, i) => {
              const inner = (
                <div className="glass glass-hover flex items-center gap-4 rounded-3xl p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-border text-accent-cyan">
                    <d.Icon size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="truncate text-sm">{d.value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={d.label} delay={i * 0.05}>
                  {d.href ? (
                    <a href={d.href} target="_blank" rel="noreferrer" className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent-blue"
      />
    </div>
  );
}
