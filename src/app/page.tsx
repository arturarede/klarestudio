"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

/* ─── Fade-up animation helper ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Services data ─── */
const services = [
  {
    icon: "◈",
    title: "Web Design",
    desc: "Beautiful, functional designs that reflect your brand and turn visitors into clients.",
  },
  {
    icon: "⬡",
    title: "Development",
    desc: "Fast, accessible websites built with modern technologies. Performance is never optional.",
  },
  {
    icon: "◎",
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
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <main className="min-h-screen bg-[#0D0D1A] text-[#F7F7F5] font-[var(--font-bricolage)] overflow-x-hidden">

      {/* ── Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10"
        style={{
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          backgroundColor: "rgba(13, 13, 26, 0.65)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-base font-[800] tracking-tight">KLARE</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] group-hover:scale-125 transition-transform" />
              <div className="w-px h-3 bg-white/10" />
            </div>
            <span className="text-xs font-[300] tracking-[0.35em] text-white/50 uppercase">
              Studio
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 text-[#4F8EF7] hover:bg-[#4F8EF7] hover:text-white hover:border-[#4F8EF7] transition-all duration-300"
          >
            Let&apos;s talk
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/[0.06]">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-3 text-sm text-white/60 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-block mt-3 text-sm px-5 py-2.5 rounded-full bg-[#4F8EF7] text-white"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk
            </Link>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(79,142,247,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Radial fade overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #0D0D1A 70%)",
            }}
          />
          {/* Blue glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-[0.08]"
            style={{
              background:
                "radial-gradient(ellipse, #4F8EF7 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative text-center max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="inline-flex items-center gap-2.5 text-xs font-[400] tracking-[0.25em] text-[#4F8EF7] mb-8 uppercase"
          >
            <span className="w-4 h-px bg-[#4F8EF7]" />
            Web Design Studio · Switzerland
            <span className="w-4 h-px bg-[#4F8EF7]" />
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-5xl sm:text-7xl md:text-8xl font-[800] leading-[0.92] tracking-[-0.02em] mb-8"
          >
            Websites that
            <br />
            <span className="text-white/25">speak for</span>
            <br />
            themselves.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="text-base md:text-lg text-white/45 font-[300] max-w-lg mx-auto mb-12 leading-relaxed"
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
              className="px-8 py-4 rounded-full bg-[#4F8EF7] text-white font-[600] text-sm hover:bg-white hover:text-[#0D0D1A] transition-all duration-300 hover:scale-105"
            >
              Start a project
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-full border border-white/10 text-white/60 text-sm hover:text-white hover:border-white/30 transition-all duration-300"
            >
              See our work ↓
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="px-6 py-28 md:py-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-[#4F8EF7] uppercase mb-4">
              What we do
            </p>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-tight max-w-sm">
              Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.1}
                className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#4F8EF7]/20 transition-all duration-500 cursor-default"
              >
                <span className="text-xl text-[#4F8EF7] mb-6 block">
                  {s.icon}
                </span>
                <h3 className="text-lg font-[600] mb-3 group-hover:text-[#4F8EF7] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm text-white/40 font-[300] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section id="work" className="px-6 py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-[#4F8EF7] uppercase mb-4">
              The process
            </p>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-tight">
              How we work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
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
                className="relative"
              >
                <span className="text-xs font-[800] tracking-[0.2em] text-[#4F8EF7]/40 mb-4 block">
                  {item.step}
                </span>
                <div className="w-8 h-px bg-[#4F8EF7]/30 mb-4" />
                <h3 className="text-base font-[600] mb-2">{item.title}</h3>
                <p className="text-sm text-white/35 font-[300] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="px-6 py-28 md:py-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/[0.06] overflow-hidden"
            style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
          >
            {/* Inner glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(79,142,247,0.07) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-[#4F8EF7]/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-[#4F8EF7]/20 rounded-br-3xl" />

            <div className="relative text-center px-8 py-20 md:py-28">
              <p className="text-xs tracking-[0.3em] text-[#4F8EF7] uppercase mb-6">
                Ready to start?
              </p>
              <h2 className="text-4xl md:text-6xl font-[800] tracking-tight mb-6">
                Let&apos;s build
                <br />
                something great.
              </h2>
              <p className="text-white/40 font-[300] mb-12 max-w-md mx-auto text-sm leading-relaxed">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
              <Link
                href="mailto:hello@klarestudio.ch"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#4F8EF7] text-white font-[600] text-base hover:bg-white hover:text-[#0D0D1A] transition-all duration-300 hover:scale-105"
              >
                hello@klarestudio.ch
                <span className="text-xs opacity-60">↗</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-10 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-[800] tracking-tight">KLARE</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]" />
            <span className="text-xs font-[300] tracking-[0.35em] text-white/30 uppercase">
              Studio
            </span>
          </div>
          <p className="text-xs text-white/20 order-last md:order-none">
            © 2026 Klare Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <Link href="#" className="hover:text-white transition-colors">
              Instagram
            </Link>
            <Link href="mailto:hello@klarestudio.ch" className="hover:text-white transition-colors">
              hello@klarestudio.ch
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
