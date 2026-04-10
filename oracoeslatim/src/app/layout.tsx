import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orações Latinas — Latim & Português",
  description:
    "Orações essenciais da tradição católica em Latim com tradução em Português. Pater Noster, Ave Maria, Salve Regina e muito mais.",
  openGraph: {
    title: "Orações Latinas — Latim & Português",
    description:
      "Orações essenciais da tradição católica em Latim com tradução em Português.",
    url: "https://oracoeslatim.pt",
    siteName: "Orações Latinas",
    locale: "pt_PT",
    type: "website",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://oracoeslatim.pt"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=UnifrakturMaguntia&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
