import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Klare Studio",
  description: "Datenschutzerklärung gemäss Schweizer Datenschutzgesetz (nDSG) und DSGVO.",
};

export default function Datenschutz() {
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
            ← Zurück
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-[#B89B6A] uppercase mb-5">Rechtliches</p>
          <h1 className="text-4xl font-[800] tracking-tight mb-4">Datenschutzerklärung</h1>
          <p className="text-sm text-[#1C1916]/45 font-[300] mb-16">
            Gemäss Schweizer Datenschutzgesetz (nDSG / DSG, in Kraft seit 1. September 2023)
            sowie der EU-Datenschutz-Grundverordnung (DSGVO), sofern anwendbar.
          </p>

          <div
            className="space-y-12 text-sm font-[300] leading-loose text-[#1C1916]/80"
            style={{ fontFamily: "var(--font-bricolage), system-ui, sans-serif" }}
          >

            {/* 1. Verantwortliche Stelle */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                1. Verantwortliche Stelle (Art. 19 nDSG)
              </h2>
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
              <p className="mt-4">
                Für Anfragen zum Datenschutz wenden Sie sich bitte direkt an obige E-Mail-Adresse.
              </p>
            </section>

            {/* 2. Erhobene Daten */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                2. Welche Daten wir erheben
              </h2>
              <p className="mb-3">Wir können folgende Kategorien von Personendaten bearbeiten:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Kontaktdaten", "Name, E-Mail-Adresse, Telefonnummer — wenn Sie uns kontaktieren."],
                  ["Kommunikationsdaten", "Inhalte von Nachrichten, die Sie uns senden."],
                  ["Nutzungsdaten", "IP-Adresse (anonymisiert), Browsertyp, Seitenaufrufe, Verweildauer — wenn Analyse-Cookies akzeptiert werden."],
                  ["Technische Daten", "Log-Daten des Webservers (IP-Adresse, Datum/Uhrzeit, aufgerufene URL) — zur Sicherstellung des Betriebs."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-2">
                    <span className="text-[#B89B6A] mt-1.5 flex-shrink-0">—</span>
                    <span><span className="font-[500] text-[#1C1916]">{title}:</span> {desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Zwecke & Rechtsgrundlagen */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                3. Zwecke der Bearbeitung und Rechtsgrundlagen
              </h2>
              <div className="space-y-4">
                {[
                  {
                    purpose: "Betrieb der Website",
                    basis: "Berechtigtes Interesse (Art. 31 nDSG)",
                    desc: "Technisch notwendige Cookies, Server-Log-Daten.",
                  },
                  {
                    purpose: "Beantwortung von Anfragen",
                    basis: "Vertragserfüllung / vorvertragliche Massnahmen",
                    desc: "Wenn Sie uns via E-Mail oder Kontaktformular kontaktieren.",
                  },
                  {
                    purpose: "Website-Analyse",
                    basis: "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO / Art. 31 nDSG)",
                    desc: "Nur wenn Sie Analyse-Cookies im Cookie-Banner akzeptiert haben.",
                  },
                  {
                    purpose: "Rechtliche Verpflichtungen",
                    basis: "Gesetzliche Pflicht",
                    desc: "Einhaltung gesetzlicher Aufbewahrungspflichten.",
                  },
                ].map((item) => (
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
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                4. Cookies und Tracking-Technologien
              </h2>
              <p className="mb-4">
                Wir verwenden Cookies und ähnliche Technologien. Gemäss den Leitlinien des EDÖB
                (Oktober 2025) und Art. 45c FMG unterscheiden wir:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#1C1916]/[0.03]">
                  <p className="font-[500] text-[#1C1916] mb-1">Notwendige Cookies</p>
                  <p className="text-[12px]">
                    Technisch erforderlich für den Betrieb der Website (Session-Verwaltung,
                    Sprachauswahl, Cookie-Einwilligungsstatus). Diese Cookies setzen wir ohne
                    Einwilligung, da sie für die grundlegende Funktionalität unerlässlich sind.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#1C1916]/[0.03]">
                  <p className="font-[500] text-[#1C1916] mb-1">Analyse-Cookies (opt-in)</p>
                  <p className="text-[12px]">
                    Helfen uns, die Nutzung der Website zu verstehen (z.B. Google Analytics 4).
                    Diese Cookies werden nur gesetzt, wenn Sie im Cookie-Banner eingewilligt haben.
                    Daten können an Google LLC (USA) übermittelt werden — siehe Abschnitt 6.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[12px]">
                Sie können Ihre Cookie-Einwilligung jederzeit widerrufen, indem Sie auf{" "}
                <button
                  onClick={undefined}
                  className="underline underline-offset-2 cursor-pointer hover:text-[#1C1916] transition-colors"
                  // Note: this is handled client-side via the footer link
                >
                  Cookie-Einstellungen
                </button>{" "}
                klicken (Link im Footer dieser Website).
              </p>
            </section>

            {/* 5. Empfänger */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                5. Empfänger von Personendaten
              </h2>
              <p className="mb-3">
                Wir geben Ihre Daten nur weiter, wenn dies gesetzlich erlaubt oder Sie
                eingewilligt haben. Mögliche Empfänger:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Hosting-Anbieter", "Vercel Inc. (USA) — Betrieb der Website-Infrastruktur. Datenweitergabe auf Basis von Standardvertragsklauseln (SCC)."],
                  ["Analytics", "Google LLC (USA) — Google Analytics 4, nur bei Einwilligung. SCC vorhanden; IP-Anonymisierung aktiviert."],
                  ["E-Mail", "Ihr E-Mail-Anbieter beim Kontakt per E-Mail."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-2">
                    <span className="text-[#B89B6A] mt-1.5 flex-shrink-0">—</span>
                    <span><span className="font-[500] text-[#1C1916]">{title}:</span> {desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. Internationale Übermittlung */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                6. Internationale Datenübermittlung (Art. 16 nDSG)
              </h2>
              <p className="mb-3">
                Einige unserer Dienstleister haben Ihren Sitz ausserhalb der Schweiz. Soweit
                Daten in Länder ohne angemessenes Datenschutzniveau übermittelt werden, stellen
                wir durch geeignete Garantien sicher, dass ein gleichwertiger Schutz gewährleistet
                ist:
              </p>
              <div className="space-y-2">
                {[
                  { land: "USA", anbieter: "Vercel Inc., Google LLC", schutz: "Standardvertragsklauseln (SCC) gemäss EDÖB-Anerkennungsliste" },
                  { land: "EU/EWR", anbieter: "Ggf. EU-basierte Subunternehmer", schutz: "Angemessenes Schutzniveau (Angemessenheitsbeschluss EDÖB)" },
                ].map((item) => (
                  <div key={item.land} className="p-3 rounded-xl bg-[#1C1916]/[0.03] text-[12px]">
                    <span className="font-[500] text-[#1C1916]">{item.land}</span>
                    {" · "}{item.anbieter}
                    {" · "}<span className="text-[#B89B6A]">{item.schutz}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Aufbewahrung */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                7. Aufbewahrungsdauer
              </h2>
              <p>
                Wir speichern Personendaten nur so lange, wie es für den jeweiligen Zweck
                erforderlich ist oder gesetzliche Aufbewahrungspflichten dies verlangen.
                Kontaktanfragen werden nach Abschluss der Bearbeitung gelöscht, spätestens
                nach 2 Jahren. Server-Log-Daten werden nach 30 Tagen automatisch gelöscht.
                Analytics-Daten werden gemäss den in Google Analytics eingestellten
                Aufbewahrungsfristen (maximal 14 Monate) gelöscht.
              </p>
            </section>

            {/* 8. Ihre Rechte */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                8. Ihre Rechte (Art. 25–27 nDSG)
              </h2>
              <p className="mb-4">Sie haben das Recht auf:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Auskunft", "Welche Personendaten wir über Sie bearbeiten."],
                  ["Berichtigung", "Unrichtige Daten korrigieren zu lassen."],
                  ["Löschung", "Ihre Daten löschen zu lassen, sofern keine gesetzliche Aufbewahrungspflicht besteht."],
                  ["Datenübertragbarkeit", "Ihre Daten in einem strukturierten Format zu erhalten (bei automatisierter Bearbeitung)."],
                  ["Widerspruch", "Der Bearbeitung Ihrer Daten zu widersprechen, insbesondere bei Profiling."],
                  ["Widerruf der Einwilligung", "Eine erteilte Einwilligung jederzeit zu widerrufen, ohne dass die Rechtmässigkeit der bisherigen Bearbeitung berührt wird."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-2">
                    <span className="text-[#B89B6A] mt-1.5 flex-shrink-0">—</span>
                    <span><span className="font-[500] text-[#1C1916]">{title}:</span> {desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Anfragen richten Sie bitte an{" "}
                <a href="mailto:hello@klarestudio.ch" className="underline underline-offset-2 hover:text-[#1C1916] transition-colors">
                  hello@klarestudio.ch
                </a>
                . Wir antworten kostenlos innerhalb von 30 Tagen. Sie haben zudem das Recht,
                Beschwerde beim{" "}
                <a
                  href="https://www.edoeb.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[#1C1916] transition-colors"
                >
                  Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB)
                </a>{" "}
                einzureichen.
              </p>
            </section>

            {/* 9. Änderungen */}
            <section>
              <h2 className="text-base font-[600] text-[#1C1916] mb-4">
                9. Änderungen dieser Datenschutzerklärung
              </h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um
                gesetzlichen Anforderungen zu entsprechen oder Änderungen unserer Dienstleistungen
                abzubilden. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
              </p>
            </section>

          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-[#1C1916]/08">
            <p className="text-xs text-[#1C1916]/30 font-[300]">
              Stand: Februar 2026 · Klare Studio, Schweiz ·{" "}
              <Link href="/impressum" className="underline underline-offset-2 hover:text-[#1C1916]/60 transition-colors">
                Impressum
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
