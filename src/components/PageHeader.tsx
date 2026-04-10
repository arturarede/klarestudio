import { fraktur } from "@/app/fonts";

export default function PageHeader() {
  return (
    <header className="page-header">
      <h1 className={`page-title ${fraktur.className}`}>Orationes Latinae</h1>
      <p className="page-subtitle">Latim &amp; Português — Orações Essenciais</p>
      <hr className="page-rule" />
    </header>
  );
}
