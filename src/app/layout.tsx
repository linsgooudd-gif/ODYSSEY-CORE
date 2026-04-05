import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ODYSSEY - Aether Projects",
  description: "Minería Espacial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Este es el código que Google te pidió que pegaras en el <head> */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7289422453597401"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={orbitron.className}>
        {children}
      </body>
    </html>
  );
}<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7289422453597401"
     crossorigin="anonymous"></script>
