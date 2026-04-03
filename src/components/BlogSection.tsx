import AdSensePlaceholder from "./AdSensePlaceholder";
export default function BlogSection() {
  const posts = [
    { 
      title: "Minería de Asteroides: La nueva fiebre del oro en 2026", 
      excerpt: "Descubre cómo las corporaciones estelares están extrayendo trillones en recursos ocultos. Aprende a posicionar tus sondas para obtener un retorno de inversión astronómico.", 
      date: "Nov 12" 
    },
    { 
      title: "Cómo la IA de ODYSSEY está revolucionando el trading espacial", 
      excerpt: "Nuestros algoritmos predecirán el mercado galáctico por ti. Conoce los secretos detrás de los bots comerciales automatizados que dominan la economía.", 
      date: "Nov 08" 
    },
    { 
      title: "Guía de Inversión: De cadete a Magnate Galáctico sin presupuesto", 
      excerpt: "Estrategias de inicio rápido para maximizar tus créditos. Invierte poco, toma el control de hiperrutas y domina galaxias enteras desde cero.", 
      date: "Nov 02" 
    },
  ];

  return (
    <section id="blog" className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="flex items-center gap-4 mb-10">
        <div className="h-8 w-1 bg-accent shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
        <h2 className="text-3xl text-accent tracking-[0.2em] uppercase">Holonet News</h2>
      </div>
      
      {/* Grid structure with interleaved AdSense */}
      <div className="flex flex-col gap-10">
        
        {/* TIER 1: Primer artículo destacado (Full Width) */}
        <NewsCard post={posts[0]} featured />

        {/* PUBLICIDAD INTERCALADA */}
        <div className="w-full flex flex-col items-center my-4">
          <span className="text-[10px] text-accent/60 tracking-[0.3em] uppercase mb-2 animate-pulse">Publicidad Recomendada</span>
          <AdSensePlaceholder />
        </div>

        {/* TIER 2: Siguientes artículos en Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <NewsCard post={posts[1]} />
          <NewsCard post={posts[2]} />
        </div>
        
      </div>

    </section>
  );
}

function NewsCard({ post, featured = false }: { post: any, featured?: boolean }) {
  return (
    <article className={`bg-card/30 backdrop-blur-xl p-8 border border-accent/30 rounded-2xl relative overflow-hidden group hover:border-accent hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] transition-all duration-500 flex flex-col ${featured ? 'md:p-12' : 'h-full'}`}>
      
      {/* Efecto de luz superior */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <h3 className={`${featured ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'} font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300 drop-shadow-md`}>
        {post.title}
      </h3>
      
      <p className="text-sm md:text-base text-foreground/70 mb-10 leading-relaxed font-light">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
        <span className="text-[10px] text-accent/50 tracking-widest uppercase border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
          {post.date}
        </span>
        <button className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-background px-6 py-2 rounded-md text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]">
          Leer más
        </button>
      </div>
    </article>
  );
}
