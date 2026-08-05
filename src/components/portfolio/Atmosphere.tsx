import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Animated gradient blobs + grid + mouse-follow glow + scroll progress bar. */
export function Atmosphere() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.3 });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
        style={{ scaleX: progress }}
      />

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid-backdrop opacity-60" />
        <motion.div
          className="blob left-[-10%] top-[-10%] h-[45rem] w-[45rem] bg-accent-blue/25"
          animate={{ x: [0, 60, -30, 0], y: [0, 40, 80, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob right-[-15%] top-[20%] h-[40rem] w-[40rem] bg-accent-purple/25"
          animate={{ x: [0, -50, 30, 0], y: [0, 70, -40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob bottom-[-20%] left-[25%] h-[38rem] w-[38rem] bg-accent-cyan/20"
          animate={{ x: [0, 40, -60, 0], y: [0, -50, 20, 0] }}
          transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute h-[36rem] w-[36rem] rounded-full opacity-40 blur-[100px] transition-transform duration-300 ease-out"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--accent-blue) 35%, transparent), transparent 65%)",
            left: `calc(${pos.x * 100}% - 18rem)`,
            top: `calc(${pos.y * 100}% - 18rem)`,
          }}
        />
      </div>
    </>
  );
}
