import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ODYSSEY - Aether Projects",
  description: "Embark on an epic idle space tycoon adventure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* MÉTODO 1: METAETIQUETA (LA LLAVE MAESTRA) */}
        <meta name="google-adsense-account" content="ca-pub-7289422453597401" />

        {/* MÉTODO 2: SCRIPT DE ADSENSE */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7289422453597401"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${orbitron.className} min-h-screen bg-background text-foreground flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
