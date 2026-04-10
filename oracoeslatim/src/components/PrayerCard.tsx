import Image from "next/image";
import { fraktur } from "@/app/fonts";
import type { Prayer } from "@/data/types";
import AudioPlayer from "./AudioPlayer";
import PdfButton from "./PdfButton";

interface Props {
  prayer: Prayer;
}

export default function PrayerCard({ prayer }: Props) {
  const { id, label, title, subtitle, image, stanzas, sections } = prayer;

  return (
    <article className="prayer-card" id={id}>
      <p className="prayer-label">{label}</p>
      <h2 className={`prayer-title ${fraktur.className}`}>{title}</h2>
      <p className="prayer-subtitle">{subtitle}</p>
      <hr className="prayer-divider" />

      {/* Painting */}
      <figure className="painting-wrapper">
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={450}
          style={{ width: "100%", height: "280px", objectFit: "cover", objectPosition: "center top" }}
          sizes="(max-width: 760px) 100vw, 760px"
        />
      </figure>
      <p className="painting-attribution">{image.attribution}</p>

      {/* Content: flat stanzas or sectioned */}
      {stanzas && (
        <div className="stanzas">
          {stanzas.map((s, i) => (
            <div className="stanza" key={i}>
              <span className="stanza-latin">{s.latin}</span>
              <span className="stanza-portuguese">{s.portuguese}</span>
            </div>
          ))}
        </div>
      )}

      {sections && (
        <div>
          {sections.map((sec, si) => (
            <div key={si}>
              <p className="section-label">{sec.label}</p>
              <div className="stanzas">
                {sec.stanzas.map((s, i) => (
                  <div className="stanza" key={i}>
                    <span className="stanza-latin">{s.latin}</span>
                    <span className="stanza-portuguese">{s.portuguese}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="card-actions">
        <AudioPlayer id={id} />
        <PdfButton cardId={id} title={title} />
      </div>
    </article>
  );
}
