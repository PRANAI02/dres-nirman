import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dresnirman.com"),
  title: {
    default: "DRES NIRMAN Pvt. Ltd. — Multidisciplinary Engineering & Industrial Solutions",
    template: "%s — DRES NIRMAN Pvt. Ltd.",
  },
  description:
    "DRES NIRMAN is a multidisciplinary engineering and industrial solutions company combining construction experience, engineering expertise, modern technology and practical execution.",
  openGraph: {
    title: "DRES NIRMAN Pvt. Ltd.",
    description: "Engineering a Stronger, Smarter, Sustainable Tomorrow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${inter.variable} ${plexMono.variable} antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
