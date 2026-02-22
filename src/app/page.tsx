"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

/* ─── Language types ─── */
type Language = "de" | "fr" | "it" | "en";

/* ─── Translations ─── */
const translations = {
  de: {
    tagline: "Web Design Studio · Schweiz",
    heroTitle: ["Websites die", "für sich", "selbst sprechen."],
    heroSub:
      "Wir gestalten erstklassige digitale Erlebnisse für Schweizer Unternehmen — klar, modern und konversionsstark.",
    cta1: "Projekt starten",
    cta2: "Unsere Arbeit ↓",
    navLinks: [
      { label: "Leistungen", href: "services" },
      { label: "Referenzen", href: "work" },
      { label: "Über uns", href: "about" },
    ],
    talk: "Kontakt",
    whatWeDo: "Was wir tun",
    servicesTitle: "Leistungen",
    services: [
      { num: "01", title: "Web Design", desc: "Schöne, funktionale Designs, die Ihre Marke widerspiegeln und Besucher in Kunden verwandeln." },
      { num: "02", title: "Entwicklung", desc: "Schnelle, barrierefreie Websites mit modernen Technologien. Performance ist nie optional." },
      { num: "03", title: "Strategie", desc: "Wir helfen Ihnen, Ihre digitale Präsenz klar zu definieren — von der Struktur bis zum Inhalt." },
    ],
    theProcess: "Der Prozess",
    howWeWork: "Wie wir arbeiten",
    steps: [
      { step: "01", title: "Analyse", desc: "Wir lernen Ihr Unternehmen, Ihre Ziele und Ihre Zielgruppe kennen." },
      { step: "02", title: "Design", desc: "Wir entwickeln eine einzigartige visuelle Identität für Ihre Marke." },
      { step: "03", title: "Entwicklung", desc: "Wir bauen schnelle, moderne Websites mit sauberem Code." },
      { step: "04", title: "Launch", desc: "Wir deployen, optimieren und betreuen Ihre Website nach dem Launch." },
    ],
    readyToStart: "Bereit loszulegen?",
    ctaTitle: ["Lass uns etwas", "Grossartiges schaffen."],
    ctaSub: "Erzählen Sie uns von Ihrem Projekt und wir melden uns innerhalb von 24 Stunden.",
    copyright: "© 2026 Klare Studio. Alle Rechte vorbehalten.",
  },
  fr: {
    tagline: "Studio de Design Web · Suisse",
    heroTitle: ["Des sites web qui", "parlent", "d'eux-mêmes."],
    heroSub:
      "Nous créons des expériences numériques premium pour les entreprises suisses — claires, modernes et conçues pour convertir.",
    cta1: "Démarrer un projet",
    cta2: "Voir notre travail ↓",
    navLinks: [
      { label: "Services", href: "services" },
      { label: "Travaux", href: "work" },
      { label: "À propos", href: "about" },
    ],
    talk: "Contact",
    whatWeDo: "Ce que nous faisons",
    servicesTitle: "Services",
    services: [
      { num: "01", title: "Web Design", desc: "Des designs beaux et fonctionnels qui reflètent votre marque et transforment les visiteurs en clients." },
      { num: "02", title: "Développement", desc: "Des sites rapides et accessibles construits avec des technologies modernes. La performance n'est jamais optionnelle." },
      { num: "03", title: "Stratégie", desc: "Nous vous aidons à définir votre présence digitale avec clarté — de la structure au contenu." },
    ],
    theProcess: "Le processus",
    howWeWork: "Comment nous travaillons",
    steps: [
      { step: "01", title: "Découverte", desc: "Nous apprenons à connaître votre entreprise, vos objectifs et votre audience." },
      { step: "02", title: "Design", desc: "Nous créons une identité visuelle unique adaptée à votre marque." },
      { step: "03", title: "Développement", desc: "Nous développons des sites rapides et modernes avec un code propre." },
      { step: "04", title: "Lancement", desc: "Nous déployons, optimisons et accompagnons votre site après le lancement." },
    ],
    readyToStart: "Prêt à commencer ?",
    ctaTitle: ["Construisons", "quelque chose de grand."],
    ctaSub: "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures.",
    copyright: "© 2026 Klare Studio. Tous droits réservés.",
  },
  it: {
    tagline: "Studio di Web Design · Svizzera",
    heroTitle: ["Siti web che", "parlano", "da soli."],
    heroSub:
      "Creiamo esperienze digitali premium per le aziende svizzere — chiare, moderne e progettate per convertire.",
    cta1: "Avvia un progetto",
    cta2: "Vedi il nostro lavoro ↓",
    navLinks: [
      { label: "Servizi", href: "services" },
      { label: "Lavori", href: "work" },
      { label: "Chi siamo", href: "about" },
    ],
    talk: "Contatto",
    whatWeDo: "Cosa facciamo",
    servicesTitle: "Servizi",
    services: [
      { num: "01", title: "Web Design", desc: "Design belli e funzionali che rispecchiano il tuo brand e trasformano i visitatori in clienti." },
      { num: "02", title: "Sviluppo", desc: "Siti veloci e accessibili costruiti con tecnologie moderne. La performance non è mai opzionale." },
      { num: "03", title: "Strategia", desc: "Ti aiutiamo a definire la tua presenza digitale con chiarezza — dalla struttura ai contenuti." },
    ],
    theProcess: "Il processo",
    howWeWork: "Come lavoriamo",
    steps: [
      { step: "01", title: "Scoperta", desc: "Conosciamo la tua azienda, i tuoi obiettivi e il tuo pubblico." },
      { step: "02", title: "Design", desc: "Creiamo un'identità visiva unica su misura per il tuo brand." },
      { step: "03", title: "Sviluppo", desc: "Sviluppiamo siti veloci e moderni con codice pulito." },
      { step: "04", title: "Lancio", desc: "Distribuiamo, ottimizziamo e supportiamo il tuo sito dopo il lancio." },
    ],
    readyToStart: "Pronti a iniziare?",
    ctaTitle: ["Costruiamo", "qualcosa di grande."],
    ctaSub: "Parlaci del tuo progetto e ti risponderemo entro 24 ore.",
    copyright: "© 2026 Klare Studio. Tutti i diritti riservati.",
  },
  en: {
    tagline: "Web Design Studio · Switzerland",
    heroTitle: ["Websites that", "speak for", "themselves."],
    heroSub:
      "We craft premium digital experiences for Swiss businesses — clear, modern, and built to convert.",
    cta1: "Start a project",
    cta2: "See our work ↓",
    navLinks: [
      { label: "Services", href: "services" },
      { label: "Work", href: "work" },
      { label: "About", href: "about" },
    ],
    talk: "Let's talk",
    whatWeDo: "What we do",
    servicesTitle: "Services",
    services: [
      { num: "01", title: "Web Design", desc: "Beautiful, functional designs that reflect your brand and turn visitors into clients." },
      { num: "02", title: "Development", desc: "Fast, accessible websites built with modern technologies. Performance is never optional." },
      { num: "03", title: "Strategy", desc: "We help you define your digital presence with clarity — from structure to content." },
    ],
    theProcess: "The process",
    howWeWork: "How we work",
    steps: [
      { step: "01", title: "Discovery", desc: "We learn about your business, goals, and audience." },
      { step: "02", title: "Design", desc: "We craft a unique visual identity tailored to your brand." },
      { step: "03", title: "Build", desc: "We develop fast, modern websites with clean code." },
      { step: "04", title: "Launch", desc: "We deploy, optimise, and support your site post-launch." },
    ],
    readyToStart: "Ready to start?",
    ctaTitle: ["Let's build", "something great."],
    ctaSub: "Tell us about your project and we'll get back to you within 24 hours.",
    copyright: "© 2026 Klare Studio. All rights reserved.",
  },
};

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
  const [lang, setLang] = useState<Language>("de");
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
    <main className="min-h-screen text-[#1C1916] font-[var(--font-bricolage)] overflow-x-hidden">

      {/* ── Navbar — floating pill ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className="w-full max-w-5xl"
          style={{
            backgroundColor: "rgba(249, 246, 240, 0.18)",
            backdropFilter: "blur(12px) saturate(140%)",
            WebkitBackdropFilter: "blur(12px) saturate(140%)",
            border: "1px solid rgba(28, 25, 22, 0.07)",
            borderRadius: "9999px",
            boxShadow: "0 4px 32px rgba(28,25,22,0.06), 0 1px 4px rgba(28,25,22,0.03)",
          }}
        >
          <div className="h-16 flex items-center justify-between px-8">
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

            {/* Desktop nav links */}
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

            {/* Desktop right: lang switcher + CTA */}
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

            {/* Mobile right: lang switcher + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <LangDropdown
                lang={lang}
                langOpen={langOpen}
                setLang={setLang}
                setLangOpen={setLangOpen}
                dropRef={langMobileRef}
              />
              <button
                className="text-[#1C1916]/50 hover:text-[#1C1916] transition-colors p-1"
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
          {t.navLinks.map((link) => (
            <Link
              key={link.href}
              href={`#${link.href}`}
              className="block py-3 text-base text-[#1C1916]/60 hover:text-[#1C1916] transition-colors border-b border-[#1C1916]/06 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-block mt-4 text-sm font-[600] px-6 py-3 rounded-full bg-[#1C1916] text-[#F9F6F0]"
            onClick={() => setMenuOpen(false)}
          >
            {t.talk}
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
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[#1C1916] transition-colors">
                Datenschutz
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
