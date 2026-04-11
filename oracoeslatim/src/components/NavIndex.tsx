import type { Prayer } from "@/data/types";

interface Props {
  prayers: Prayer[];
}

export default function NavIndex({ prayers }: Props) {
  return (
    <nav className="nav-box" aria-label="Índice de orações">
      <p className="nav-title">Índice</p>
      <div className="nav-grid">
        {prayers.map((p) => (
          <a key={p.id} href={`#${p.id}`}>
            {p.label}. {p.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
