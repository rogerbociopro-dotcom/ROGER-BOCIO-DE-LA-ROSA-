import { ActiveTab } from '../types';
import { ShieldCheck, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import LogoJX from './LogoJX';

interface FooterProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNavLink = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-zinc-900 bg-[#030303] pt-12 pb-8 text-zinc-400 font-mono text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Main upper footer grit */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-4 items-start pb-12" id="footer-upper">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <LogoJX className="h-7 w-7 shrink-0 aspect-square object-contain filter drop-shadow-[0_0_6px_rgba(0,240,255,0.35)]" id="footer-logo-jx" />
              <span className="font-display text-base font-bold tracking-wider text-white">
                JULEONIX DIGITAL
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-zinc-400 md:max-w-xs font-light">
              Sincronizamos la gestión de datos corporativos con asistencia operativa premium y soporte IT de alta precisión. Máxima confiabilidad para tu negocio.
            </p>
          </div>

          {/* Directory Links Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">DIRECTORIO</div>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => handleNavLink('INICIO')}
                  className={`text-left hover:text-white transition-colors cursor-pointer ${activeTab === 'INICIO' ? 'text-cyan-400 font-medium' : ''}`}
                >
                  // INICIO
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLink('SERVICIOS')}
                  className={`text-left hover:text-white transition-colors cursor-pointer ${activeTab === 'SERVICIOS' ? 'text-cyan-400 font-medium' : ''}`}
                >
                  // SERVICIOS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLink('NOSOTROS')}
                  className={`text-left hover:text-white transition-colors cursor-pointer ${activeTab === 'NOSOTROS' ? 'text-cyan-400 font-medium' : ''}`}
                >
                  // NOSOTROS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLink('CONTACTO')}
                  className={`text-left hover:text-white transition-colors cursor-pointer ${activeTab === 'CONTACTO' ? 'text-cyan-400 font-medium' : ''}`}
                >
                  // CONTACTO
                </button>
              </li>
            </ul>
          </div>

          {/* Security Status Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">SEGURIDAD DATOS</div>
            <div className="flex items-center gap-2 group cursor-help">
              <ShieldCheck className="h-4 w-4 text-cyan-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider text-[#00f0ff] group-hover:text-white transition-colors">
                CORTAFUEGOS SISTEMAS
              </span>
            </div>
          </div>

          {/* Channels Status Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">ESTADO CANALES</div>
            <div className="flex items-center gap-1.5 text-pink-500 font-bold text-[11px] tracking-widest">
              <span className="text-zinc-600 font-light mr-0.5">&gt;_</span>
              <span>ACTIVO L-V 09-18</span>
            </div>
          </div>

          {/* Corporate Register Column */}
          <div className="md:col-span-2 space-y-3 text-right md:text-left">
            <div className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">REGISTRO CORPORATIVO</div>
            <p className="text-[11px] font-light leading-relaxed text-zinc-400">
              © 2026 Juleonix Digital.<br />Todos los derechos reservados.
            </p>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-px bg-zinc-900 my-4" />

        {/* Lower terms layout */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[10px] text-zinc-600 tracking-wider font-mono pt-2" id="footer-bottom">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setModalType('privacy')}
              className="hover:text-zinc-400 transition-colors cursor-pointer"
            >
              POLÍTICA DE PRIVACIDAD
            </button>
            <span>•</span>
            <button 
              onClick={() => setModalType('terms')}
              className="hover:text-zinc-400 transition-colors cursor-pointer"
            >
              TÉRMINOS DE OPERACIÓN
            </button>
          </div>

          <div className="text-zinc-800 text-[9px] uppercase font-semibold">
            DISEÑO ESTRUCTURADO Y OPTIMIZADO DE LA OPERATIVIDAD GENERAL
          </div>
        </div>

      </div>

      {/* Info Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg rounded-xl border border-zinc-800 bg-[#08080c] p-6 shadow-2xl relative">
            <button 
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2 mb-4 border-b border-zinc-900 pb-3">
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <h3 className="font-display text-sm font-bold text-white tracking-widest uppercase">
                {modalType === 'privacy' ? 'Directiva de Privacidad Juleonix' : 'Términos de Operación & SLA'}
              </h3>
            </div>

            <div className="space-y-3 font-sans text-xs text-zinc-400 leading-relaxed overflow-y-auto max-h-[300px] pr-2">
              {modalType === 'privacy' ? (
                <>
                  <p>
                    <strong>Cifrado Local:</strong> Conforme a las screenshots, toda la metadata de sus consultas y su correo de retorno se cifran localmente bajo el estándar de ciberseguridad <strong>AES_256</strong> antes de registrarse en nuestros servidores.
                  </p>
                  <p>
                    <strong>Cumplimiento RGPD:</strong> Recopilamos exclusivamente los datos necesarios para estimar y compilar su propuesta técnica. Juleonix Digital se compromete a no comercializar ni transferir su información a terceros.
                  </p>
                  <p>
                    <strong>Control Total:</strong> Puede solicitar la remoción inmediata de su registro técnico y logs de conexión enviando un token cifrado o un correo directo a nuestro canal de soporte.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Acuerdo Nivel de Servicio (SLA):</strong> Juleonix Digital garantiza una tolerancia al error del <strong>0.00%</strong> en las tareas de saneamiento de datos y auditoría de bases de datos.
                  </p>
                  <p>
                    <strong>Tiempo Límite de Atención:</strong> Establecemos un límite técnico estricto de <strong>15 minutos (15m SNE)</strong> para asignarle un gestor técnico ante reportes urgentes de lunes a viernes en horario de oficina.
                  </p>
                  <p>
                    <strong>Compromiso Legal:</strong> La estimación calculada en el configurador representa un compromiso contractual de entrega sujeto a revisión de la infraestructura original de la empresa cliente.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 border-t border-zinc-900 pt-3 flex justify-end">
              <button 
                onClick={() => setModalType(null)}
                className="rounded bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white px-3 py-1.5 font-mono text-[10px] tracking-wider transition-all"
              >
                ENTENDIDO
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
