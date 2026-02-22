import type { Metadata } from "next";
import { DatenschutzContent } from "./DatenschutzContent";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Klare Studio",
  description: "Datenschutzerklärung gemäss Schweizer Datenschutzgesetz (nDSG) und DSGVO.",
};

export default function Datenschutz() {
  return <DatenschutzContent />;
}
