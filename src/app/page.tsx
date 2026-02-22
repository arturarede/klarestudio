"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

/* ─── Fade-up animation helper ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

/* ─── Services data ─── */
const services = [
  {
    num: "01",
    title: "Web Design",
    desc: "Beautiful, functional designs that reflect your brand and turn visitors into clients.",
  },
  {
    num: "02",
    title: "Development",
    desc: "Fast, accessible websites built with modern technologies. Performance is never optional.",
  },
  {
    num: "03",
    title: "Strategy",
    desc: "We help you define your digital presence with clarity — from structure to content.",
  },
];

/* ─── Nav links ─── */
const navLinks = ["Services", "Work", "About"];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <main className="min-h-screen text-[#1C1916] font-[var(--font-bricolage)] overflow-x-hidden">

      {/* ── Navbar — floating pill ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className="w-full max-w-5xl"
          style={{
            backgroundColor: "rgba(249, 246, 240, 0.48)",
            backdropFilter: "blur(32px) saturate(200%)",
            WebkitBackdropFilter: "blur(32px) saturate(200%)",
            border: "1px solid rgba(28, 25, 22, 0.07)",
            borderRadius: "9999px",
            boxShadow: "0 4px 32px rgba(28,25,22,0.06), 0 1px 4px rgba(28,25,22,0.03)",
          }}
        >
          <div className="h-16 flex items-center justify-between px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-lg leading-none">🇨🇭</span>
              <div className="flex flex-col leading-none">
                <span className="text-base font-[800] tracking-tight text-[#1C1916] leading-tight">KLARE</span>
                <span className="text-[10px] font-[300] tracking-[0.3em] text-[#1C1916]/40 uppercase leading-tight">
                  Studio
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-[#1C1916]/45 hover:text-[#1C1916] transition-colors duration-200"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-sm font-[500] px-6 py-2.5 rounded-full border border-[#1C1916]/15 text-[#1C1916]/70 hover:bg-[#1C1916] hover:text-[#F9F6F0] hover:border-[#1C1916] transition-all duration-300 whitespace-nowrap"
            >
              Let&apos;s talk
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#1C1916]/50 hover:text-[#1C1916] transition-colors p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="fixed top-[4.5rem] left-4 right-4 z-40 rounded-2xl p-5"
          style={{
            backgroundColor: "rgba(249, 246, 240, 0.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(28, 25, 22, 0.09)",
            boxShadow: "0 8px 32px rgba(28,25,22,0.12)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-base text-[#1C1916]/60 hover:text-[#1C1916] transition-colors border-b border-[#1C1916]/06 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-block mt-4 text-sm font-[600] px-6 py-3 rounded-full bg-[#1C1916] text-[#F9F6F0]"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk
          </Link>
        </div>
      )}

      {/* ── Hero — lightest cream ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
        style={{ backgroundColor: "#F9F6F0" }}
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #1C1916 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* Warm amber blob top-right */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top right, rgba(184,155,106,0.18) 0%, transparent 60%)",
          }}
        />
        {/* Slightly deeper blob bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at bottom left, rgba(210,185,140,0.13) 0%, transparent 60%)",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative text-center max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="inline-flex items-center gap-2.5 text-xs font-[400] tracking-[0.25em] text-[#B89B6A] mb-8 uppercase"
          >
            <span className="w-4 h-px bg-[#B89B6A]" />
            Web Design Studio · Switzerland
            <span className="w-4 h-px bg-[#B89B6A]" />
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-5xl sm:text-7xl md:text-8xl font-[800] leading-[0.92] tracking-[-0.02em] mb-8 text-[#1C1916]"
          >
            Websites that
            <br />
            <span className="text-[#1C1916]/18">speak for</span>
            <br />
            themselves.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="text-base md:text-lg text-[#1C1916]/45 font-[300] max-w-lg mx-auto mb-12 leading-relaxed"
          >
            We craft premium digital experiences for Swiss businesses —
            clear, modern, and built to convert.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              href="#contact"
              className="px-9 py-4 rounded-full bg-[#1C1916] text-[#F9F6F0] font-[600] text-sm tracking-wide hover:bg-[#B89B6A] transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
            >
              Start a project
            </Link>
            <Link
              href="#services"
              className="px-9 py-4 rounded-full border border-[#1C1916]/14 text-[#1C1916]/55 text-sm hover:text-[#1C1916] hover:border-[#1C1916]/28 transition-all duration-300 whitespace-nowrap"
            >
              See our work ↓
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-[#1C1916]/12 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* ── Services — warm beige ── */}
      <section
        id="services"
        className="px-6 py-28 md:py-36"
        style={{ backgroundColor: "#F2EAD6" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-20"
          >
            <p className="text-xs tracking-[0.3em] text-[#B89B6A] uppercase mb-5">
              What we do
            </p>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-tight max-w-sm text-[#1C1916]">
              Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.1}
                className="group p-10 rounded-2xl transition-all duration-500 cursor-default"
                style={{
                  backgroundColor: "rgba(249, 246, 240, 0.55)",
                  border: "1px solid rgba(28,25,22,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(249, 246, 240, 0.90)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(249, 246, 240, 0.55)";
                }}
              >
                <span className="text-xs font-[800] tracking-[0.2em] text-[#B89B6A]/55 mb-10 block">
                  {s.num}
                </span>
                <h3 className="text-xl font-[600] mb-4 text-[#1C1916] group-hover:text-[#B89B6A] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm text-[#1C1916]/45 font-[300] leading-loose">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work — deeper amber beige ── */}
      <section
        id="work"
        className="px-6 py-28 md:py-36"
        style={{ backgroundColor: "#EAE0C8" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-xs tracking-[0.3em] text-[#A07D45] uppercase mb-5">
              The process
            </p>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-tight text-[#1C1916]">
              How we work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your business, goals, and audience." },
              { step: "02", title: "Design", desc: "We craft a unique visual identity tailored to your brand." },
              { step: "03", title: "Build", desc: "We develop fast, modern websites with clean code." },
              { step: "04", title: "Launch", desc: "We deploy, optimise, and support your site post-launch." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.12}
              >
                <span className="text-xs font-[800] tracking-[0.2em] text-[#A07D45]/50 mb-5 block">
                  {item.step}
                </span>
                <div className="w-8 h-px bg-[#1C1916]/15 mb-6" />
                <h3 className="text-base font-[600] mb-3 text-[#1C1916]">{item.title}</h3>
                <p className="text-sm text-[#1C1916]/42 font-[300] leading-loose">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — dark contrast block ── */}
      <section
        id="contact"
        className="px-6 py-28 md:py-36"
        style={{ backgroundColor: "#F2EAD6" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{ backgroundColor: "#1C1916" }}
          >
            {/* Warm glow inside */}
            <div
              className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at top right, rgba(184,155,106,0.18) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at bottom left, rgba(210,185,140,0.08) 0%, transparent 60%)",
              }}
            />

            <div className="relative text-center px-8 py-20 md:py-28">
              <p className="text-xs tracking-[0.3em] text-[#B89B6A] uppercase mb-8">
                Ready to start?
              </p>
              <h2 className="text-4xl md:text-6xl font-[800] tracking-tight mb-8 text-[#F9F6F0]">
                Let&apos;s build
                <br />
                something great.
              </h2>
              <p className="text-[#F9F6F0]/38 font-[300] mb-14 max-w-md mx-auto text-base leading-loose">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
              <Link
                href="mailto:hello@klarestudio.ch"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-[600] text-base transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "#F9F6F0",
                  color: "#1C1916",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#B89B6A";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F9F6F0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F9F6F0";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1C1916";
                }}
              >
                hello@klarestudio.ch
                <span className="text-xs opacity-50">↗</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="px-6 py-10"
        style={{
          backgroundColor: "#EAE0C8",
          borderTop: "1px solid rgba(28,25,22,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-base leading-none">🇨🇭</span>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-[800] tracking-tight text-[#1C1916] leading-tight">KLARE</span>
              <span className="text-[10px] font-[300] tracking-[0.3em] text-[#1C1916]/30 uppercase leading-tight">
                Studio
              </span>
            </div>
          </div>
          <p className="text-xs text-[#1C1916]/30 order-last md:order-none">
            © 2026 Klare Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#1C1916]/40">
            <Link href="#" className="hover:text-[#1C1916] transition-colors">
              Instagram
            </Link>
            <Link href="mailto:hello@klarestudio.ch" className="hover:text-[#1C1916] transition-colors">
              hello@klarestudio.ch
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
