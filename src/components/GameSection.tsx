"use client";

import { useState, useEffect } from "react";

export default function GameSection() {
  const [credits, setCredits] = useState(0);
  const [miningProbes, setMiningProbes] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const PROBE_COST = 50;

  // Cargar progreso al montar el componente
  useEffect(() => {
    const savedCredits = localStorage.getItem("odyssey_credits");
    const savedProbes = localStorage.getItem("odyssey_probes");
    
    if (savedCredits) setCredits(parseFloat(savedCredits));
    if (savedProbes) setMiningProbes(parseInt(savedProbes));
    
    setIsLoaded(true);
  }, []);

  // Guardar progreso cada vez que cambia el estado
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("odyssey_credits", credits.toString());
    localStorage.setItem("odyssey_probes", miningProbes.toString());
  }, [credits, miningProbes, isLoaded]);

  // Placeholder para el sonido futurista 
  const playClickSound = () => {
    try {
      const Context = window.AudioContext || (window as any).webkitAudioContext;
      if (!Context) return;
      const ctx = new Context();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine"; 
      osc.frequency.setValueAtTime(800 + Math.random() * 300, ctx.currentTime);
      
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      // Audio silenciado
    }
  };

  const handlePlanetClick = () => {
    setCredits((prev) => prev + 1);
    playClickSound();
  };

  const buyProbe = () => {
    if (credits >= PROBE_COST) {
      setCredits((prev) => prev - PROBE_COST);
      setMiningProbes((prev) => prev + 1);
    }
  };

  const resetProgress = () => {
    if (confirm("Alerta de la Flota: ¿Estás seguro de que deseas reiniciar tu progreso? Todas las sondas y créditos se perderán.")) {
      setCredits(0);
      setMiningProbes(0);
      localStorage.removeItem("odyssey_credits");
      localStorage.removeItem("odyssey_probes");
    }
  };

  // Bucle principal del juego "Idle" para las sondas
  useEffect(() => {
    if (miningProbes === 0) return;
    
    const interval = setInterval(() => {
      setCredits((prev) => prev + miningProbes);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [miningProbes]);

  return (
    <section className="w-full flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-5xl bg-card rounded-2xl border border-accent/20 flex flex-col md:flex-row relative overflow-hidden shadow-[0_0_60px_rgba(0,240,255,0.05)] min-h-[500px]">
        
        {/* Fondo ambiental */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background pointer-events-none opacity-60"></div>

        {/* ZONA PRINCIPAL DE JUEGO (Izquierda/Centro) */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 relative z-10 border-b md:border-b-0 md:border-r border-white/5">
          
          <div className="flex justify-between items-center w-full max-w-sm mb-2">
             <span className="w-6"></span> {/* spacer */}
             <h2 className="text-xl md:text-2xl text-accent/80 uppercase tracking-[0.2em] text-center">Créditos Estelares</h2>
             
             {/* Botón de Reset para purgar los datos locales */}
             <button onClick={resetProgress} title="Reiniciar Sistema" className="w-6 h-6 text-foreground/30 hover:text-red-500 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
               </svg>
             </button>
          </div>
          
          {/* Contador en tamaño grande (oculto en primera carga para evitar parpadeos/hydration mismatch) */}
          <div className={`text-6xl md:text-8xl font-bold text-accent drop-shadow-[0_0_20px_rgba(0,240,255,0.8)] mb-10 tabular-nums select-none transition-opacity duration-300 ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}>
            {Math.floor(credits)}
          </div>

          {/* Botón de Planeta interactivo */}
          <button 
            onClick={handlePlanetClick}
            className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-cyan-300 via-accent to-blue-900 shadow-[0_0_50px_rgba(0,240,255,0.5)] active:scale-90 transition-transform duration-100 flex items-center justify-center group outline-none border-4 border-accent/30"
            title="Extraer recursos"
          >
            <div className="w-[85%] h-[85%] rounded-full border border-white/20 bg-gradient-to-tr from-transparent to-white/20 group-active:opacity-30 transition-opacity"></div>
          </button>
          
          <p className="mt-8 text-xs text-foreground/40 uppercase tracking-[0.3em] animate-pulse select-none">
            Haz clic en el orbe para extraer
          </p>

          {/* Indicador de sistema de guardado (LocalStorage) */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isLoaded ? 'bg-green-500 shadow-[0_0_5px_#22c55e]' : 'bg-yellow-500'}`}></div>
            <span className="text-[10px] text-foreground/40 uppercase tracking-widest">{isLoaded ? 'Auto-Save: OK' : 'Syncing...'}</span>
          </div>
        </div>

        {/* ZONA DE TIENDA (Derecha) */}
        <div className="w-full md:w-80 bg-black/40 p-6 flex flex-col relative z-10 backdrop-blur-md">
          <h3 className="text-lg md:text-xl text-white mb-6 uppercase tracking-[0.1em] border-b border-white/10 pb-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
            Mejoras de Flota
          </h3>

          {/* Item de Mejora: Sonda de Minería */}
          <div className="bg-card/70 p-5 border border-white/5 rounded-xl flex flex-col hover:border-accent/40 transition-colors duration-300 group">
            <div className="flex justify-between items-start mb-3">
              <span className="font-bold text-md tracking-wider group-hover:text-accent transition-colors">Sonda de Minería</span>
              <span className="text-xs bg-accent/10 border border-accent/30 text-accent px-2 py-1 rounded-sm shadow-[0_0_10px_rgba(0,240,255,0.2)]">Lv. {miningProbes}</span>
            </div>
            
            <p className="text-xs text-foreground/50 mb-5 leading-relaxed">
              Automatiza la recolección. Extrae de forma constante <span className="text-accent">+1 crédito automático por segundo.</span>
            </p>
            
            <button 
              onClick={buyProbe}
              disabled={credits < PROBE_COST}
              className={`w-full py-3 rounded-md text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                credits >= PROBE_COST 
                  ? "bg-accent/10 text-accent border border-accent hover:bg-accent hover:text-background hover:shadow-[0_0_20px_rgba(0,240,255,0.8)]" 
                  : "bg-white/5 text-foreground/30 border border-white/5 cursor-not-allowed"
              }`}
            >
              Comprar ({PROBE_COST} C)
            </button>
          </div>
          
          <div className="mt-auto pt-8 text-[10px] text-accent/30 tracking-[0.2em] text-center uppercase">
            Sistema de Comercio y LocalStorage Activo
          </div>
        </div>

      </div>
    </section>
  );
}
