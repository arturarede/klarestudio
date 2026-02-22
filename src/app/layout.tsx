import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Klare Studio — Web Design Switzerland",
  description:
    "Premium websites for Swiss businesses. Clear, modern, and built to convert.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
