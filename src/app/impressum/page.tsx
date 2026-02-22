import type { Metadata } from "next";
import { ImpressumContent } from "./ImpressumContent";

export const metadata: Metadata = {
  title: "Impressum — Klare Studio",
  description: "Rechtliche Informationen und Angaben gemäss UWG Art. 3 Abs. 1 lit. s.",
};

export default function Impressum() {
  return <ImpressumContent />;
}
