"use client";

import { useState } from "react";

interface Props {
  cardId: string;
  title: string;
}

export default function PdfButton({ cardId, title }: Props) {
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const card = document.getElementById(cardId);
      if (!card) return;

      // Temporarily hide action bar so it doesn't appear in PDF
      const actions = card.querySelector<HTMLElement>(".card-actions");
      if (actions) actions.style.display = "none";

      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(card, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#f5f0e8",
      });

      if (actions) actions.style.display = "";

      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width / 2, canvas.height / 2],
      });

      pdf.addImage(imgData, "JPEG", 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`${title}.pdf`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="card-btn"
      onClick={generate}
      disabled={loading}
      aria-label="Descarregar PDF desta oração"
      title="Descarregar PDF"
      data-no-pdf
    >
      {loading ? (
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ animation: "spin 1s linear infinite" }}
        >
          <circle cx="6.5" cy="6.5" r="5" strokeDasharray="20 12" />
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
          <path d="M6.5 1v8M3 6.5l3.5 3.5L10 6.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="1" y="10" width="11" height="2" rx="1" />
        </svg>
      )}
      {loading ? "A gerar…" : "PDF"}
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </button>
  );
}
