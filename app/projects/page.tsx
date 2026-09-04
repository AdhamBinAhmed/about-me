"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import Aurora from "../components/Aurora";
import TiltCard from "../components/TiltCard";
import { PROJECTS } from "../lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  return (
    <main className="relative min-h-screen">
      <Aurora />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-10"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back home
          </Link>

          <p className="font-mono text-xs tracking-[0.35em] uppercase text-[var(--violet)]">
            / selected work
          </p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-gradient glow-violet leading-[0.95]">
            Projects
          </h1>
          <p className="mt-5 max-w-xl text-[var(--muted)] text-lg">
            A selection of platforms and product front-ends I&apos;ve designed
            and shipped.
          </p>
        </motion.div>

        {/* grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {PROJECTS.map((p, i) => {
            const accent = `var(${p.accent})`;
            return (
              <motion.a
                key={p.slug}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="scene block"
              >
                <TiltCard
                  max={9}
                  lift={30}
                  className="h-full rounded-3xl border border-[var(--border)] bg-[var(--panel)]
                    backdrop-blur-xl overflow-hidden min-h-[260px]
                    transition-colors duration-300 hover:border-[var(--border-strong)]"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(130% 100% at 0% 0%, ${accent}22, transparent 55%)`,
                    }}
                  />

                  <div
                    className="relative h-full p-7 sm:p-8 flex flex-col"
                    style={{ transform: "translateZ(45px)" }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--border)]"
                        style={{ color: accent }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: accent,
                            boxShadow: `0 0 10px ${accent}`,
                          }}
                        />
                        {p.status === "live" ? "Live" : "In progress"}
                      </span>
                      <FiArrowUpRight className="text-lg text-[var(--dim)] group-hover/tilt:text-[var(--text)] group-hover/tilt:-translate-y-0.5 group-hover/tilt:translate-x-0.5 transition-all" />
                    </div>

                    <h3 className="mt-6 text-2xl sm:text-3xl font-display font-bold text-[var(--text)]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[var(--muted)] flex-grow">
                      {p.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-[var(--border)] text-[var(--text)]/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
