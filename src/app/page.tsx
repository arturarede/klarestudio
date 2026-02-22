"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { translations, type Language } from "@/i18n/translations";
import { useLanguage } from "@/contexts/LanguageContext";

/* ─── Fade-up animation helper ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const LANGUAGES: Language[] = ["de", "fr", "it", "en"];

/* ─── Language Dropdown ─── */
function LangDropdown({
  lang,
  langOpen,
  setLang,
  setLangOpen,
  dropRef,
}: {
  lang: Language;
  langOpen: boolean;
  setLang: (l: Language) => void;
  setLangOpen: (v: boolean) => void;
  dropRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={dropRef} className="relative">
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="flex items-center gap-1 text-[#1C1916]/45 hover:text-[#1C1916] transition-colors duration-200 px-2 py-1"
        aria-label="Select language"
      >
        <span className="text-xs font-[500] tracking-widest">{lang.toUpperCase()}</span>
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          style={{ display: "block" }}
          className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
        >
          <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {langOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 rounded-xl overflow-hidden z-50"
            style={{
              backgroundColor: "rgba(249, 246, 240, 0.98)",
              border: "1px solid rgba(28,25,22,0.08)",
              boxShadow: "0 8px 24px rgba(28,25,22,0.10)",
              minWidth: "68px",
            }}
          >
            {LANGUAGES.map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setLangOpen(false); }}
                className={`block w-full text-left px-4 py-2.5 text-xs font-[500] tracking-widest transition-colors duration-150 ${
                  l === lang
                    ? "text-[#1C1916] bg-[#1C1916]/[0.05]"
                    : "text-[#1C1916]/40 hover:text-[#1C1916] hover:bg-[#1C1916]/[0.03]"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const langDesktopRef = useRef<HTMLDivElement>(null);
  const langMobileRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);

  const t = translations[lang];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Close language dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = langDesktopRef.current?.contains(target) ?? false;
      const insideMobile = langMobileRef.current?.contains(target) ?? false;
      if (!insideDesktop && !insideMobile) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <main className="min-h-screen text-[#1C1916] font-[var(--font-bricolage)]">

      {/* ── Navbar — floating pill (expands on mobile) ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className="w-full max-w-5xl"
          style={{
            backgroundColor: menuOpen ? "rgba(249, 246, 240, 0.97)" : "rgba(249, 246, 240, 0.18)",
            backdropFilter: "blur(16px) saturate(140%)",
            WebkitBackdropFilter: "blur(16px) saturate(140%)",
            border: "1px solid rgba(28, 25, 22, 0.07)",
            borderRadius: "16px",
            boxShadow: "0 4px 32px rgba(28,25,22,0.06), 0 1px 4px rgba(28,25,22,0.03)",
            transition: "background-color 0.2s ease",
          }}
        >
          {/* ── Top bar ── */}
          <div className="h-16 flex items-center justify-between px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-3.5 h-3.5 rounded-full bg-[#D52B1E] flex items-center justify-center flex-shrink-0">
                <svg width="6" height="6" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
                  <rect x="3.5" y="1" width="3" height="8" fill="white"/>
                  <rect x="1" y="3.5" width="8" height="3" fill="white"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-[800] tracking-tight text-[#1C1916] leading-tight">KLARE</span>
                <span className="text-[10px] font-[300] tracking-[0.3em] text-[#1C1916]/40 uppercase leading-tight">
                  Studio
                </span>
              </div>
            </Link>

            {/* Desktop: nav links */}
            <div className="hidden md:flex items-center gap-8">
              {t.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`#${link.href}`}
                  className="text-sm text-[#1C1916]/45 hover:text-[#1C1916] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop: lang + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <LangDropdown
                lang={lang}
                langOpen={langOpen}
                setLang={setLang}
                setLangOpen={setLangOpen}
                dropRef={langDesktopRef}
              />
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-[500] px-6 py-2.5 rounded-full border border-[#1C1916]/15 text-[#1C1916]/70 hover:bg-[#1C1916] hover:text-[#F9F6F0] hover:border-[#1C1916] transition-all duration-300 whitespace-nowrap"
              >
                {t.talk}
              </Link>
            </div>

            {/* Mobile: Let's talk + lang + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-[11px] font-[700] px-3.5 py-1.5 rounded-full bg-[#1C1916] text-[#F9F6F0] whitespace-nowrap tracking-wide"
              >
                {t.talk}
              </Link>
              <LangDropdown
                lang={lang}
                langOpen={langOpen}
                setLang={setLang}
                setLangOpen={setLangOpen}
                dropRef={langMobileRef}
              />
              <button
                className="text-[#1C1916]/55 hover:text-[#1C1916] transition-colors p-1"
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
          </div>

          {/* ── Mobile menu — expands inside the pill ── */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="overflow-hidden md:hidden"
              >
                <div
                  className="px-6 pb-5 pt-1 flex flex-col"
                  style={{ borderTop: "1px solid rgba(28,25,22,0.07)" }}
                >
                  {t.navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={`#${link.href}`}
                      className="py-3.5 text-sm font-[400] text-[#1C1916]/55 hover:text-[#1C1916] transition-colors border-b border-[#1C1916]/[0.06] last:border-0"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

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
            {t.tagline}
            <span className="w-4 h-px bg-[#B89B6A]" />
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-5xl sm:text-7xl md:text-8xl font-[800] leading-[0.92] tracking-[-0.02em] mb-8 text-[#1C1916]"
          >
            {t.heroTitle[0]}
            <br />
            <span className="text-[#1C1916]/18">{t.heroTitle[1]}</span>
            <br />
            {t.heroTitle[2]}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="text-base md:text-lg text-[#1C1916]/45 font-[300] max-w-lg mx-auto mb-12 leading-relaxed"
          >
            {t.heroSub}
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
              {t.cta1}
            </Link>
            <Link
              href="#services"
              className="px-9 py-4 rounded-full border border-[#1C1916]/14 text-[#1C1916]/55 text-sm hover:text-[#1C1916] hover:border-[#1C1916]/28 transition-all duration-300 whitespace-nowrap"
            >
              {t.cta2}
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
              {t.whatWeDo}
            </p>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-tight max-w-sm text-[#1C1916]">
              {t.servicesTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {t.services.map((s, i) => (
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
              {t.theProcess}
            </p>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-tight text-[#1C1916]">
              {t.howWeWork}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-10">
            {t.steps.map((item, i) => (
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
                {t.readyToStart}
              </p>
              <h2 className="text-4xl md:text-6xl font-[800] tracking-tight mb-8 text-[#F9F6F0]">
                {t.ctaTitle[0]}
                <br />
                {t.ctaTitle[1]}
              </h2>
              <p className="text-[#F9F6F0]/38 font-[300] mb-14 max-w-md mx-auto text-base leading-loose">
                {t.ctaSub}
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
            <div className="w-3.5 h-3.5 rounded-full bg-[#D52B1E] flex items-center justify-center flex-shrink-0">
              <svg width="6" height="6" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
                <rect x="3.5" y="1" width="3" height="8" fill="white"/>
                <rect x="1" y="3.5" width="8" height="3" fill="white"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-[800] tracking-tight text-[#1C1916] leading-tight">KLARE</span>
              <span className="text-[9px] font-[300] tracking-[0.3em] text-[#1C1916]/30 uppercase leading-tight">
                Studio
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 order-last md:order-none">
            <p className="text-xs text-[#1C1916]/30">{t.copyright}</p>
            <div className="flex items-center gap-4 text-[11px] text-[#1C1916]/35">
              <Link href="/impressum" className="hover:text-[#1C1916] transition-colors">
                {t.impressum.title}
              </Link>
              <Link href="/datenschutz" className="hover:text-[#1C1916] transition-colors">
                {t.footerPrivacy}
              </Link>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openCookieSettings"))}
                className="hover:text-[#1C1916] transition-colors cursor-pointer"
              >
                Cookies
              </button>
            </div>
          </div>
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
