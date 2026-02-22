import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Klare Studio",
  description: "Rechtliche Informationen und Angaben gemäss UWG Art. 3 Abs. 1 lit. s.",
};

export default function Impressum() {
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
            ← Zurück
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-[#B89B6A] uppercase mb-5">Rechtliches</p>
          <h1 className="text-4xl font-[800] tracking-tight mb-16">Impressum</h1>

          <div className="space-y-12 text-sm font-[300] leading-loose text-[#1C1916]/80">

            {/* Angaben gemäss UWG */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                Angaben gemäss UWG Art. 3 Abs. 1 lit. s
              </h2>
              <div className="space-y-1.5">
                <p><span className="font-[500] text-[#1C1916]">Firma:</span> Klare Studio</p>
                <p><span className="font-[500] text-[#1C1916]">Adresse:</span> [Strasse und Hausnummer], [PLZ] [Ort], Schweiz</p>
                <p><span className="font-[500] text-[#1C1916]">E-Mail:</span>{" "}
                  <a href="mailto:hello@klarestudio.ch" className="underline underline-offset-2 hover:text-[#1C1916] transition-colors">
                    hello@klarestudio.ch
                  </a>
                </p>
                <p><span className="font-[500] text-[#1C1916]">Telefon:</span> [+41 XX XXX XX XX]</p>
              </div>
            </section>

            {/* Handelsregister */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">Handelsregister</h2>
              <div className="space-y-1.5">
                <p><span className="font-[500] text-[#1C1916]">UID:</span> [CHE-XXX.XXX.XXX]</p>
                <p><span className="font-[500] text-[#1C1916]">MWST-Nr.:</span> [CHE-XXX.XXX.XXX MWST] (sofern MWST-pflichtig)</p>
                <p><span className="font-[500] text-[#1C1916]">Handelsregister:</span> [Kanton XX], [Registernummer]</p>
              </div>
            </section>

            {/* Verantwortlich */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                Verantwortlich für den Inhalt
              </h2>
              <p>[Vorname Nachname]<br />Klare Studio<br />[Adresse], Schweiz</p>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">Haftungsausschluss</h2>
              <p>
                Klare Studio übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit und
                Aktualität der Inhalte auf dieser Website. Die Nutzung der Website erfolgt auf
                eigene Gefahr. Klare Studio haftet nicht für Schäden materieller oder
                immaterieller Art, die durch die Nutzung oder Nichtnutzung der dargebotenen
                Informationen entstehen.
              </p>
            </section>

            {/* Externe Links */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">Externe Links</h2>
              <p>
                Diese Website enthält Links zu externen Websites. Für den Inhalt dieser
                externen Seiten ist Klare Studio nicht verantwortlich. Die Betreiber der
                verlinkten Seiten sind für deren Inhalte selbst verantwortlich.
              </p>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">Urheberrecht</h2>
              <p>
                Die auf dieser Website veröffentlichten Inhalte und Werke (Texte, Bilder,
                Grafiken, Logos) unterliegen dem schweizerischen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
                von Klare Studio.
              </p>
            </section>

            {/* Datenschutz */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">Datenschutz</h2>
              <p>
                Informationen zum Umgang mit personenbezogenen Daten finden Sie in unserer{" "}
                <Link href="/datenschutz" className="underline underline-offset-2 hover:text-[#1C1916] transition-colors">
                  Datenschutzerklärung
                </Link>.
              </p>
            </section>
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-[#1C1916]/08">
            <p className="text-xs text-[#1C1916]/30 font-[300]">
              Stand: Februar 2026 · Klare Studio, Schweiz
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
