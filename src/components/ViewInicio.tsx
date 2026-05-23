import { ActiveTab } from '../types';
import { Zap, ShieldCheck, Activity, Database, Cpu, HardDrive, ArrowRight, Sparkles } from 'lucide-react';

interface ViewInicioProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function ViewInicio({ setActiveTab }: ViewInicioProps) {
  return (
    <div className="space-y-16 py-6 sm:py-10" id="view-inicio-root">
      
      {/* 2. Spectacular Hero Section */}
      <div className="text-center space-y-8 max-w-5xl mx-auto px-4 pt-4 sm:pt-8 relative z-10" id="inicio-hero-container">
        
        {/* Animated Capsule Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950/40 border border-cyan-500/30 text-[#00f0ff] font-mono text-[10px] tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.06)] animate-pulse">
          <Sparkles className="h-3 w-3 text-[#00f0ff] animate-spin-slow" />
          JULEONIX DIGITAL <span className="text-zinc-700">•</span> OPERATIVIDAD EMPRESARIAL DE ÉLITE
        </div>

        {/* Giant Centered H1 */}
        <h1 className="font-display text-4.5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white select-none leading-[1.1] sm:leading-[1.1]">
          Impulsamos la Operatividad <br className="hidden sm:inline" />
          <span className="text-[#00f0ff] inline-block filter drop-shadow-[0_0_30px_rgba(0,240,255,0.25)]">Corporativa</span> y{' '}
          <span className="text-[#ff007f] inline-block filter drop-shadow-[0_0_30px_rgba(255,0,127,0.25)]">Tecnológica</span>
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-300 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed text-center px-4">
          En <strong className="font-medium text-white">Juleonix Digital</strong> diseñamos e implementamos sistemas de Gestión de Datos, Asistencia Virtual, Soporte de TI y Soluciones de Automatización que eliminan ineficiencias de su organización y aceleran el crecimiento.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-md mx-auto sm:max-w-none">
          <button
            onClick={() => setActiveTab('CONTACTO')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#ff007f] font-mono text-xs font-bold text-white uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all text-center shadow-[0_0_20px_rgba(0,240,255,0.2)] cursor-pointer"
          >
            INICIAR PROPUESTA
          </button>
          <button
            onClick={() => setActiveTab('SERVICIOS')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-zinc-800 bg-zinc-950/30 font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider hover:bg-zinc-900/40 hover:text-white hover:border-zinc-700 active:scale-95 transition-all text-center cursor-pointer"
          >
            VER SERVICIOS
          </button>
        </div>

        {/* Barra de Estado Inferior / Technical Live Indicators */}
        <div className="mt-12 sm:mt-16 w-full rounded-xl border border-zinc-950 bg-zinc-950/40 px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[9px] sm:text-[10px] text-zinc-400 tracking-wider">
          <div className="flex items-center gap-1.5">
            <Zap className="h-3 w-3 text-cyan-400 fill-cyan-400/25" />
            <span>ESTADO SOPORTE:</span>
            <span className="text-[#00f0ff] font-bold">ONLINE 24/7</span>
          </div>

          <div className="hidden xs:inline text-zinc-800">|</div>

          <div className="flex items-center gap-1.5">
            <Activity className="h-3 w-3 text-pink-500" />
            <span>PRECISIÓN DE AUDITORÍA:</span>
            <span className="text-white font-bold">100% GARANTIZADA</span>
          </div>

          <div className="hidden xs:inline text-zinc-800">|</div>

          <div className="flex items-center gap-1.5">
            <Database className="h-3 w-3 text-cyan-400 fill-cyan-400/25" />
            <span>MIGRACIÓN DE BASES:</span>
            <span className="text-[#00f0ff] font-bold uppercase">ACTIVA VIA API</span>
          </div>

          <div className="hidden xs:inline text-zinc-800">|</div>

          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span>RED:</span>
            <span className="text-zinc-300 font-bold uppercase">NUCLEO ESTABLE</span>
          </div>
        </div>

      </div>

      {/* 3. The 4 Key Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 md:px-8" id="inicio-metrics-grid">
        
        {/* Metric 1 */}
        <div className="group relative rounded-xl border border-zinc-900 bg-zinc-950/80 p-6 hover:border-cyan-500/40 hover:scale-[1.01] transition-all duration-300">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <span className="font-mono text-[9px] font-bold tracking-widest text-zinc-500 uppercase">TIEMPO DE RESPUESTA</span>
              <div className="font-display text-2xl font-black text-white tracking-tight">&lt; 15 min</div>
              <p className="font-sans text-[11px] text-zinc-400 font-light">Garantía de soporte urgente</p>
            </div>
            <div className="rounded-lg bg-cyan-950/50 p-2.5 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
              <Zap className="h-5 w-5 fill-cyan-400/20" />
            </div>
          </div>
          <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Metric 2 */}
        <div className="group relative rounded-xl border border-zinc-900 bg-zinc-950/80 p-6 hover:border-emerald-500/40 hover:scale-[1.01] transition-all duration-300">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <span className="font-mono text-[9px] font-bold tracking-widest text-zinc-500 uppercase">PRECISIÓN DE DATOS</span>
              <div className="font-display text-2xl font-black text-white tracking-tight">99.98%</div>
              <p className="font-sans text-[11px] text-zinc-400 font-light">Auditoría de entrada estricta</p>
            </div>
            <div className="rounded-lg bg-emerald-950/50 p-2.5 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-5 w-5 fill-emerald-400/20" />
            </div>
          </div>
          <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Metric 3 */}
        <div className="group relative rounded-xl border border-zinc-900 bg-zinc-950/80 p-6 hover:border-pink-500/40 hover:scale-[1.01] transition-all duration-300">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <span className="font-mono text-[9px] font-bold tracking-widest text-zinc-500 uppercase">SLA OPERATIVO</span>
              <div className="font-display text-2xl font-black text-white tracking-tight">24 / 7</div>
              <p className="font-sans text-[11px] text-zinc-400 font-light">Disponibilidad permanente</p>
            </div>
            <div className="rounded-lg bg-pink-950/50 p-2.5 text-pink-400 border border-pink-500/20 group-hover:scale-110 transition-transform">
              <Activity className="h-5 w-5" />
            </div>
          </div>
          <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Metric 4 */}
        <div className="group relative rounded-xl border border-zinc-900 bg-zinc-950/80 p-6 hover:border-purple-500/40 hover:scale-[1.01] transition-all duration-300">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <span className="font-mono text-[9px] font-bold tracking-widest text-zinc-500 uppercase">PROCESOS AUTOMATIZADOS</span>
              <div className="font-display text-2xl font-black text-white tracking-tight">1.2M+</div>
              <p className="font-sans text-[11px] text-zinc-400 font-light">Flujos e integraciones seguras</p>
            </div>
            <div className="rounded-lg bg-purple-950/50 p-2.5 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Database className="h-5 w-5 fill-purple-400/20" />
            </div>
          </div>
          <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

      </div>

      {/* 4. Efficiency Section (No Tech-Larping, visually pristine) */}
      <div className="space-y-10 px-4 sm:px-6 md:px-8" id="inicio-efficiency-section">
        
        <div className="space-y-2">
          <div className="font-mono text-xs text-pink-500 font-bold tracking-widest">// EFICIENCIA OPERATIVA REAL</div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
            DISEÑO DE FLUJOS TÉCNICOS INTELIGENTES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card A */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-950 to-[#050508] p-8 group hover:border-[#00f0ff]/30 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950/40 border border-cyan-800/30 text-cyan-400">
                <Cpu className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-lg font-bold text-white tracking-tight group-hover:text-cyan-450 transition-colors">
                  INFRAESTRUCTURA INTEGRADA
                </h3>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light">
                  Conectamos tu CRM, correo de operaciones, base de datos de inventarios y sistemas de soporte en una sola matriz con sincronización en tiempo real.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center gap-1.5 text-cyan-400 text-xs font-mono font-bold hover:text-white transition-colors cursor-pointer" onClick={() => setActiveTab('SERVICIOS')}>
              Diagnosticar Infraestructura <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card B */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-950 to-[#050508] p-8 group hover:border-pink-500/30 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-950/40 border border-pink-800/30 text-pink-400">
                <HardDrive className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-lg font-bold text-white tracking-tight group-hover:text-pink-450 transition-colors">
                  CERO REDUNDANCIAS DE DATOS
                </h3>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light">
                  Limpieza profunda de hojas de cálculo, auditoría de macros en Excel VBA y migración asistida a bases cloud sin interrupción operacional.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center gap-1.5 text-pink-400 text-xs font-mono font-bold hover:text-white transition-colors cursor-pointer" onClick={() => setActiveTab('SERVICIOS')}>
              Limpieza & Saneamiento <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>

      {/* 5. Testimoniales Section */}
      <div className="space-y-10 px-4 sm:px-6 md:px-8 animate-fade-in" id="inicio-testimonials-section">
        <div className="space-y-2">
          <div className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase">// PRUEBA SOCIAL / CASOS DE ÉXITO</div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
            LO QUE DICEN CLIENTES DIRECTIVOS
          </h2>
          <p className="font-sans text-xs text-zinc-400 font-light max-w-2xl leading-relaxed">
            Resultados concretos de eficiencia, saneamiento de datos y automatización en organizaciones medianas que confiaron su flujo informático en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial A */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-cyan-500/20 transition-all duration-300">
            <div className="space-y-4">
              {/* Logo Placeholder */}
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-[9px] font-bold text-cyan-400">
                  ▲
                </div>
                <span className="font-mono text-[10px] text-zinc-500 tracking-wider">LIGA VALENZUELA</span>
              </div>
              
              <p className="font-sans text-xs text-zinc-300 italic leading-relaxed">
                "Gestionar una liga de béisbol con cientos de jugadores y estadísticas manuales era un dolor de cabeza diario. Juleonix Digital no solo automatizó mi entrada de datos; crearon un sistema que me devuelve horas de vida cada fin de semana. Lo que antes me tomaba toda la noche, ahora lo veo reflejado en mis tableros en tiempo real con un solo clic. ¡Una inversión que se paga sola!"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-[#0d2125] border border-cyan-500/10 flex items-center justify-center font-mono text-[10px] font-bold text-cyan-400">
                EV
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">Eliezer Valenzuela</h4>
                <p className="font-mono text-[9px] text-zinc-500 uppercase">Director de Liga Deportiva</p>
              </div>
            </div>
          </div>

          {/* Testimonial B */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-pink-500/20 transition-all duration-300">
            <div className="space-y-4">
              {/* Logo Placeholder */}
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-[9px] font-bold text-pink-500">
                  ■
                </div>
                <span className="font-mono text-[10px] text-zinc-500 tracking-wider">JOSE PRESTAMOS</span>
              </div>
              
              <p className="font-sans text-xs text-zinc-300 italic leading-relaxed">
                "Delegar HubSpot y la asistencia virtual en Juleonix ha sido nuestra mejor decisión. Saneamos nuestro CRM, eliminamos duplicados y logramos una atención al cliente impecable. Su equipo responde incidentes en menos de 15 minutos, garantizando que nuestra operación nunca se detenga. Contratar a Juleonix no es un gasto, es la inversión que garantiza la eficiencia de nuestra agencia."
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-[#270c1b] border border-pink-500/10 flex items-center justify-center font-mono text-[10px] font-bold text-pink-500">
                JF
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">Jose Familia</h4>
                <p className="font-mono text-[9px] text-zinc-500 uppercase">Director de Agencia de Préstamos</p>
              </div>
            </div>
          </div>

          {/* Testimonial C */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-indigo-500/20 transition-all duration-300">
            <div className="space-y-4">
              {/* Logo Placeholder */}
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-[9px] font-bold text-indigo-400">
                  ❖
                </div>
                <span className="font-mono text-[10px] text-zinc-500 tracking-wider">FRANCISCO TECH</span>
              </div>
              
              <p className="font-sans text-xs text-zinc-300 italic leading-relaxed">
                "La automatización de leads mediante webhooks integrados con APIs de redes sociales funciona sin interrupciones. El soporte técnico preventivo y la VPN perimetral nos han brindado una ciberseguridad inquebrantable."
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-[#11112d] border border-indigo-500/10 flex items-center justify-center font-mono text-[10px] font-bold text-indigo-400">
                FM
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">Francisco Martinez</h4>
                <p className="font-mono text-[9px] text-zinc-500 uppercase">Coordinador de Sistemas IT | SolarTec</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Hero Bottom Call To Action Block (Identical layout) */}
      <div className="mx-4 sm:mx-6 md:mx-8 rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 sm:p-12 text-center relative overflow-hidden" id="inicio-cta-block">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e15_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
        
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <span className="font-mono text-xs text-cyan-400 tracking-widest font-bold block uppercase">
            // OPTIMIZACIÓN GARANTIZADA
          </span>
          <h2 className="font-display text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight uppercase leading-snug">
            ¿LISTO PARA ELIMINAR LOS CUELLOS DE BOTELLA DE TU ORGANIZACIÓN?
          </h2>
          <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light max-w-lg mx-auto">
            Obtenga un diagnóstico técnico gratuito completando nuestro configurador de servicios interactivo y un especialista se pondrá en contacto en minutos.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setActiveTab('CONTACTO')}
              id="inicio-config-proposal-btn"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-mono text-xs font-bold text-black hover:bg-zinc-100 transition-all cursor-pointer shadow-lg shadow-white/5 active:scale-95"
            >
              CONFIGURAR PROPUESTA AHORA
              <ArrowRight className="h-4 w-4 text-black group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Ambient background glow dots */}
        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-cyan-500/5 blur-2xl" />
        <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-pink-500/5 blur-2xl" />

      </div>

    </div>
  );
}
