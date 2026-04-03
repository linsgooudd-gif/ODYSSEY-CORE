import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ODYSSEY - Idle Space Tycoon",
  description: "Embark on an epic idle space tycoon adventure. Manage resources, upgrade your fleet, and conquer the stars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} min-h-screen bg-background text-foreground flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
