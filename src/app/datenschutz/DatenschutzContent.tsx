"use client";

import Link from "next/link";
import { translations } from "@/i18n/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export function DatenschutzContent() {
  const { lang } = useLanguage();
  const t = translations[lang].privacy;

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#F9F6F0", color: "#1C1916" }}
    >
      {/* Header */}
      <div className="px-6 py-8 border-b border-[#1C1916]/06">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#D52B1E] flex items-center justify-center flex-shrink-0">
              <svg width="6" height="6" viewBox="0 0 10 10" fill="none" style={{ display: "block" }}>
                <rect x="3.5" y="1" width="3" height="8" fill="white"/>
                <rect x="1" y="3.5" width="8" height="3" fill="white"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-[800] tracking-tight leading-tight">KLARE</span>
              <span className="text-[10px] font-[300] tracking-[0.3em] opacity-40 uppercase leading-tight">Studio</span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm text-[#1C1916]/45 hover:text-[#1C1916] transition-colors"
          >
            {t.back}
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-[#B89B6A] uppercase mb-5">{t.label}</p>
          <h1 className="text-4xl font-[800] tracking-tight mb-4">{t.title}</h1>
          <p className="text-sm text-[#1C1916]/45 font-[300] mb-16">{t.subtitle}</p>

          <div
            className="space-y-12 text-sm font-[300] leading-loose text-[#1C1916]/80"
            style={{ fontFamily: "var(--font-bricolage), system-ui, sans-serif" }}
          >

            {/* 1. Data controller */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s1Title}</h2>
              <div className="space-y-1">
                <p>Klare Studio</p>
                <p>[Strasse und Hausnummer]</p>
                <p>[PLZ] [Ort], Schweiz</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:hello@klarestudio.ch" className="underline underline-offset-2 hover:text-[#1C1916] transition-colors">
                    hello@klarestudio.ch
                  </a>
                </p>
              </div>
              <p className="mt-4">{t.s1Content}</p>
            </section>

            {/* 2. Data collected */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s2Title}</h2>
              <p className="mb-3">{t.s2Intro}</p>
              <ul className="space-y-2 list-none pl-0">
                {t.s2Items.map(([title, desc]) => (
                  <li key={title} className="flex gap-2">
                    <span className="text-[#B89B6A] mt-1.5 flex-shrink-0">—</span>
                    <span><span className="font-[500] text-[#1C1916]">{title}:</span> {desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Purposes & legal bases */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s3Title}</h2>
              <div className="space-y-4">
                {t.s3Items.map((item) => (
                  <div key={item.purpose} className="p-4 rounded-xl bg-[#1C1916]/[0.03]">
                    <p className="font-[500] text-[#1C1916] mb-1">{item.purpose}</p>
                    <p className="text-[11px] text-[#B89B6A] mb-1.5">{item.basis}</p>
                    <p className="text-[12px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Cookies */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s4Title}</h2>
              <p className="mb-4">{t.s4Intro}</p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#1C1916]/[0.03]">
                  <p className="font-[500] text-[#1C1916] mb-1">{t.s4Necessary[0]}</p>
                  <p className="text-[12px]">{t.s4Necessary[1]}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1C1916]/[0.03]">
                  <p className="font-[500] text-[#1C1916] mb-1">{t.s4Analytics[0]}</p>
                  <p className="text-[12px]">{t.s4Analytics[1]}</p>
                </div>
              </div>
              <p className="mt-4 text-[12px]">
                {t.s4Withdraw}{" "}
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("openCookieSettings"))}
                  className="underline underline-offset-2 cursor-pointer hover:text-[#1C1916] transition-colors"
                >
                  {t.s4WithdrawLink}
                </button>{" "}
                {t.s4WithdrawEnd}
              </p>
            </section>

            {/* 5. Recipients */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s5Title}</h2>
              <p className="mb-3">{t.s5Intro}</p>
              <ul className="space-y-2 list-none pl-0">
                {t.s5Items.map(([title, desc]) => (
                  <li key={title} className="flex gap-2">
                    <span className="text-[#B89B6A] mt-1.5 flex-shrink-0">—</span>
                    <span><span className="font-[500] text-[#1C1916]">{title}:</span> {desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. International transfers */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s6Title}</h2>
              <p className="mb-3">{t.s6Intro}</p>
              <div className="space-y-2">
                {t.s6Items.map((item) => (
                  <div key={item.land} className="p-3 rounded-xl bg-[#1C1916]/[0.03] text-[12px]">
                    <span className="font-[500] text-[#1C1916]">{item.land}</span>
                    {" · "}{item.provider}
                    {" · "}<span className="text-[#B89B6A]">{item.protection}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Retention */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s7Title}</h2>
              <p>{t.s7Content}</p>
            </section>

            {/* 8. Your rights */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s8Title}</h2>
              <p className="mb-4">{t.s8Intro}</p>
              <ul className="space-y-2 list-none pl-0">
                {t.s8Items.map(([title, desc]) => (
                  <li key={title} className="flex gap-2">
                    <span className="text-[#B89B6A] mt-1.5 flex-shrink-0">—</span>
                    <span><span className="font-[500] text-[#1C1916]">{title}:</span> {desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                {t.s8Contact}{" "}
                <a href="mailto:hello@klarestudio.ch" className="underline underline-offset-2 hover:text-[#1C1916] transition-colors">
                  hello@klarestudio.ch
                </a>
                {t.s8Response}{" "}
                <a
                  href="https://www.edoeb.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[#1C1916] transition-colors"
                >
                  {t.s8EDOB}
                </a>{" "}
                {t.s8EOBEnd}
              </p>
            </section>

            {/* 9. Changes */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s9Title}</h2>
              <p>{t.s9Content}</p>
            </section>

          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-[#1C1916]/08">
            <p className="text-xs text-[#1C1916]/30 font-[300]">
              {t.footerNote} ·{" "}
              <Link href={t.impressumPath} className="underline underline-offset-2 hover:text-[#1C1916]/60 transition-colors">
                {t.impressumLink}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
