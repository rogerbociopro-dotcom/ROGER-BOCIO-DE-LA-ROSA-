import { ActiveTab } from '../types';
import LogoJX from './LogoJX';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs: ActiveTab[] = ['INICIO', 'SERVICIOS', 'NOSOTROS', 'CONTACTO'];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#030303]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
        {/* Logo and Brand */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setActiveTab('INICIO')}
          id="header-logo-container"
        >
          <LogoJX className="h-8 w-8 shrink-0 aspect-square object-contain transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" id="header-logo-jx" />
          <span className="font-display text-lg font-bold tracking-wider text-white transition-colors group-hover:text-cyan-400 select-none">
            JULEONIX DIGITAL
          </span>
        </div>

        {/* Middle Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="header-nav">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                id={`nav-tab-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`relative py-1 font-mono text-xs font-semibold tracking-wider transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div>
          <button
            id="proj-crm-btn"
            onClick={() => setActiveTab('CONTACTO')}
            className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 font-mono text-xs font-medium tracking-widest text-[#00f0ff] hover:bg-zinc-900/50 hover:border-cyan-500/50 hover:text-white transition-all duration-300"
          >
            SOLICITAR PROPUESTA
          </button>
        </div>
      </div>

      {/* Mobile Nav Subbar */}
      <div className="flex md:hidden items-center justify-around border-t border-zinc-900 py-2.5 px-2 bg-zinc-950/80" id="header-mobile-tabs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-mono text-[10px] font-bold tracking-widest px-2.5 py-1 rounded transition-all ${
                isActive 
                  ? 'text-cyan-400 bg-zinc-900 border border-zinc-800' 
                  : 'text-zinc-500'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </header>
  );
}
