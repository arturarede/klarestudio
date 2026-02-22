"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ─── Types ─── */
type ConsentState = {
  analytics: boolean;
  timestamp: number;
};

const STORAGE_KEY = "klare_cookie_consent";

/* ─── Cookie Banner ─── */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  // Show banner only if consent hasn't been stored yet
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  // Listen for "reopen settings" event triggered from the footer
  useEffect(() => {
    const handler = () => {
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener("openCookieSettings", handler);
    return () => window.removeEventListener("openCookieSettings", handler);
  }, []);

  const save = (consent: ConsentState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {}
    setVisible(false);
    setShowDetails(false);
  };

  const acceptAll = () => save({ analytics: true, timestamp: Date.now() });
  const rejectAll = () => save({ analytics: false, timestamp: Date.now() });
  const saveCustom = () => save({ analytics, timestamp: Date.now() });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[100] flex justify-center"
        >
          <div
            className="w-full max-w-2xl rounded-2xl p-6"
            style={{
              backgroundColor: "rgba(247, 244, 238, 0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(28,25,22,0.09)",
              boxShadow: "0 8px 40px rgba(28,25,22,0.12)",
            }}
          >
            {!showDetails ? (
              /* ── Simple view ── */
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-[600] text-[#1C1916] mb-1">
                    Cookies & Datenschutz
                  </p>
                  <p className="text-xs text-[#1C1916]/55 font-[300] leading-relaxed">
                    Wir nutzen Cookies, um die Website zu betreiben. Mit Ihrer Einwilligung verwenden wir auch Analyse-Cookies.{" "}
                    <Link href="/datenschutz" className="underline underline-offset-2 hover:text-[#1C1916] transition-colors">
                      Datenschutzerklärung
                    </Link>
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-xs font-[400] text-[#1C1916]/45 hover:text-[#1C1916] transition-colors px-3 py-2 rounded-full border border-[#1C1916]/12 hover:border-[#1C1916]/25 whitespace-nowrap"
                  >
                    Einstellungen
                  </button>
                  {/* Reject and Accept equally prominent — FDPIC requirement */}
                  <button
                    onClick={rejectAll}
                    className="text-xs font-[500] text-[#1C1916]/70 hover:text-[#1C1916] transition-colors px-4 py-2 rounded-full border border-[#1C1916]/15 hover:border-[#1C1916]/30 whitespace-nowrap"
                  >
                    Ablehnen
                  </button>
                  <button
                    onClick={acceptAll}
                    className="text-xs font-[600] px-4 py-2 rounded-full bg-[#1C1916] text-[#F9F6F0] hover:bg-[#B89B6A] transition-colors whitespace-nowrap"
                  >
                    Alle akzeptieren
                  </button>
                </div>
              </div>
            ) : (
              /* ── Detailed / granular view ── */
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-[600] text-[#1C1916]">Cookie-Einstellungen</p>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-[#1C1916]/30 hover:text-[#1C1916] transition-colors text-lg leading-none"
                    aria-label="Schliessen"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-3 mb-5">
                  {/* Necessary — always on */}
                  <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-[#1C1916]/[0.03]">
                    <div>
                      <p className="text-xs font-[600] text-[#1C1916] mb-0.5">Notwendig</p>
                      <p className="text-[11px] text-[#1C1916]/45 font-[300] leading-relaxed">
                        Technisch erforderlich für den Betrieb der Website (Session, Sprachauswahl). Nicht deaktivierbar.
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-[500] text-[#B89B6A] tracking-wide uppercase">Immer aktiv</span>
                    </div>
                  </div>

                  {/* Analytics — opt-in */}
                  <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-[#1C1916]/[0.03]">
                    <div>
                      <p className="text-xs font-[600] text-[#1C1916] mb-0.5">Analyse</p>
                      <p className="text-[11px] text-[#1C1916]/45 font-[300] leading-relaxed">
                        Helfen uns zu verstehen, wie Besucher die Website nutzen (z.B. Google Analytics). Daten können in die USA übermittelt werden.
                      </p>
                    </div>
                    {/* Toggle */}
                    <button
                      role="switch"
                      aria-checked={analytics}
                      onClick={() => setAnalytics(!analytics)}
                      className={`flex-shrink-0 mt-0.5 w-9 h-5 rounded-full transition-colors duration-200 relative ${
                        analytics ? "bg-[#1C1916]" : "bg-[#1C1916]/15"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                          analytics ? "translate-x-4.5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <Link
                    href="/datenschutz"
                    className="text-[11px] text-[#1C1916]/35 hover:text-[#1C1916] underline underline-offset-2 transition-colors"
                  >
                    Datenschutzerklärung
                  </Link>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={rejectAll}
                      className="text-xs font-[500] text-[#1C1916]/60 hover:text-[#1C1916] transition-colors px-4 py-2 rounded-full border border-[#1C1916]/15 hover:border-[#1C1916]/30"
                    >
                      Alle ablehnen
                    </button>
                    <button
                      onClick={saveCustom}
                      className="text-xs font-[600] px-4 py-2 rounded-full bg-[#1C1916] text-[#F9F6F0] hover:bg-[#B89B6A] transition-colors"
                    >
                      Auswahl speichern
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
