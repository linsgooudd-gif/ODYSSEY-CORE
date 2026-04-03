export default function Header() {
  return (
    <header className="w-full p-6 border-b border-white/10 backdrop-blur-sm bg-background/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-widest text-accent drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
          ODYSSEY
        </h1>
        <nav>
          <ul className="flex space-x-8 text-sm uppercase tracking-wide">
            <li><a href="#" className="hover:text-accent transition-colors duration-300">Terminal</a></li>
            <li><a href="#blog" className="hover:text-accent transition-colors duration-300">Comms Log</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
