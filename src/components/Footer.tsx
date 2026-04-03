import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 backdrop-blur-sm bg-background/50 flex flex-col items-center justify-center space-y-4 relative z-10 mt-auto">
      <div className="flex space-x-6 text-xs uppercase tracking-widest text-accent/80 drop-shadow-[0_0_5px_rgba(0,240,255,0.4)]">
        <Link href="/privacidad" className="hover:text-accent transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">Privacidad</Link>
        <Link href="/terminos" className="hover:text-accent transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">Términos</Link>
        <Link href="/contacto" className="hover:text-accent transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">Contacto</Link>
      </div>
      <p className="text-[10px] text-foreground/40 uppercase tracking-[0.2em] text-center">
        &copy; 2026 ODYSSEY - Creado por Linsgooudd
      </p>
    </footer>
  );
} {/* SECCIÓN LEGAL PARA ADSENSE */}
<div className="mt-8 pt-4 border-t border-white/5 w-full max-w-5xl mx-auto px-4 text-center">
  <p className="text-[10px] text-foreground/30 uppercase tracking-[0.2em] leading-relaxed">
    Privacy Policy: ODYSSEY (Aether Projects) uses cookies for Google AdSense and local storage to save your game progress (credits and ships). 
    <span className="block mt-1">Contact: admin@aether-projects.com</span>
  </p>
</div>
