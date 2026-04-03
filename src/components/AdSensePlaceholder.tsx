export default function AdSensePlaceholder() {
  return (
    <div className="w-full flex justify-center py-2">
      <div className="w-full max-w-[970px] min-h-[90px] md:min-h-[250px] bg-black/40 border border-white/10 rounded-xl flex flex-col items-center justify-center text-white/30 tracking-[0.2em] relative overflow-hidden backdrop-blur-sm group hover:border-accent/30 transition-colors shadow-inner">
        <span className="z-10 text-xs md:text-sm text-foreground/50 group-hover:text-white transition-colors">- ADSENSE RESPONSIVO -</span>
        <span className="z-10 text-[10px] mt-2 opacity-40">[Bloque Monetario de Google]</span>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      </div>
    </div>
  );
}
