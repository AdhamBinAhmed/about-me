"use client";

import Aurora from "./components/Aurora";
import Hero from "./components/Hero";
import LinkCard from "./components/LinkCard";
import { IDENTITY, LINKS } from "./lib/data";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Aurora />
      <Hero />

      {/* Connect */}
      <section className="relative mx-auto max-w-5xl px-4 sm:px-6 pb-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.35em] uppercase text-[var(--violet)]">
              / connect
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold tracking-tight text-[var(--text)]">
              Find me around
              <br className="hidden sm:block" /> the web.
            </h2>
          </div>
          <p className="hidden sm:block max-w-xs text-sm text-[var(--muted)] text-right">
            Building things at{" "}
            <span className="text-[var(--cyan)]">Mega Devs</span>. Always open to
            a good project or a chat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {LINKS.map((node, i) => (
            <div
              key={node.cmd}
              className={i === 0 ? "sm:col-span-2" : undefined}
            >
              <LinkCard node={node} index={i} featured={i === 0} />
            </div>
          ))}
        </div>

        <footer className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-sm text-[var(--dim)]">
          <span>
            © {new Date().getFullYear()} {IDENTITY.name}
          </span>
          <span className="font-mono text-xs tracking-widest uppercase">
            Designed &amp; built with care
          </span>
        </footer>
      </section>
    </main>
  );
}
