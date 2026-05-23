import { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ViewInicio from './components/ViewInicio';
import ViewServicios from './components/ViewServicios';
import ViewNosotros from './components/ViewNosotros';
import ViewContacto from './components/ViewContacto';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('INICIO');

  // Smooth scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#030303] text-[#f3f4f6] flex flex-col justify-between font-sans selection:bg-[#00f0ff]/20 selection:text-[#00f0ff]" id="app-root">
      
      {/* Background Matrix/Subtle Grid Mesh effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#11111620_1px,transparent_1px),linear-gradient(to_bottom,#11111620_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      
      {/* Decorative ambient blurred background glows */}
      <div className="fixed top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-pink-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Main Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content wrapper with matching desktop standard bounds */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 relative z-10">
        
        {activeTab === 'INICIO' && (
          <div className="animate-fade-in duration-300">
            <ViewInicio setActiveTab={setActiveTab} />
          </div>
        )}

        {activeTab === 'SERVICIOS' && (
          <div className="animate-fade-in duration-300">
            <ViewServicios setActiveTab={setActiveTab} />
          </div>
        )}

        {activeTab === 'NOSOTROS' && (
          <div className="animate-fade-in duration-300">
            <ViewNosotros setActiveTab={setActiveTab} />
          </div>
        )}

        {activeTab === 'CONTACTO' && (
          <div className="animate-fade-in duration-300">
            <ViewContacto />
          </div>
        )}

      </main>

      {/* Symmetrical optimized footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
