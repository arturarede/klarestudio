"use client";

import Link from "next/link";
import { translations } from "@/i18n/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export function ImpressumContent() {
  const { lang } = useLanguage();
  const t = translations[lang].impressum;

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#F9F6F0", color: "#1C1916" }}
    >
      {/* Header */}
      <div className="px-6 py-8 border-b border-[#1C1916]/06">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
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
          <h1 className="text-4xl font-[800] tracking-tight mb-16">{t.title}</h1>

          <div className="space-y-12 text-sm font-[300] leading-loose text-[#1C1916]/80">

            {/* 1. Company details */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s1Title}</h2>
              <div className="space-y-1.5">
                <p><span className="font-[500] text-[#1C1916]">{t.s1Company}:</span> Klare Studio</p>
                <p><span className="font-[500] text-[#1C1916]">{t.s1Address}:</span> [Strasse und Hausnummer], [PLZ] [Ort], Schweiz</p>
                <p>
                  <span className="font-[500] text-[#1C1916]">{t.s1Email}:</span>{" "}
                  <a href="mailto:hello@klarestudio.ch" className="underline underline-offset-2 hover:text-[#1C1916] transition-colors">
                    hello@klarestudio.ch
                  </a>
                </p>
                <p><span className="font-[500] text-[#1C1916]">{t.s1Phone}:</span> [+41 XX XXX XX XX]</p>
              </div>
            </section>

            {/* 2. Commercial Register */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s2Title}</h2>
              <div className="space-y-1.5">
                <p><span className="font-[500] text-[#1C1916]">{t.s2UID}:</span> [CHE-XXX.XXX.XXX]</p>
                <p><span className="font-[500] text-[#1C1916]">{t.s2VAT}:</span> [CHE-XXX.XXX.XXX MWST] {t.s2VATNote}</p>
                <p><span className="font-[500] text-[#1C1916]">{t.s2Register}:</span> [Kanton XX], [Registernummer]</p>
              </div>
            </section>

            {/* 3. Responsible for content */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s3Title}</h2>
              <p style={{ whiteSpace: "pre-line" }}>[Vorname Nachname]{"\n"}Klare Studio{"\n"}[Adresse], Schweiz</p>
            </section>

            {/* 4. Disclaimer */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s4Title}</h2>
              <p>{t.s4Content}</p>
            </section>

            {/* 5. External links */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s5Title}</h2>
              <p>{t.s5Content}</p>
            </section>

            {/* 6. Copyright */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s6Title}</h2>
              <p>{t.s6Content}</p>
            </section>

            {/* 7. Privacy */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">{t.s7Title}</h2>
              <p>
                {t.s7Content}{" "}
                <Link href={t.privacyPath} className="underline underline-offset-2 hover:text-[#1C1916] transition-colors">
                  {t.privacyLinkLabel}
                </Link>
                .
              </p>
            </section>
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-[#1C1916]/08">
            <p className="text-xs text-[#1C1916]/30 font-[300]">{t.footerNote}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
