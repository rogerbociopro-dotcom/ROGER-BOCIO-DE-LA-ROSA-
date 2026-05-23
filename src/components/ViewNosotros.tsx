import { useState, useRef } from 'react';
import { ActiveTab } from '../types';
import { Sparkles, Briefcase, Award, ShieldAlert, History, Upload, Camera } from 'lucide-react';
import { TEAM_DATA, TIMELINE_DATA } from '../data';

interface ViewNosotrosProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function ViewNosotros({ setActiveTab }: ViewNosotrosProps) {
  const [team, setTeam] = useState(TEAM_DATA);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const fileInputsRef = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handlePhotoUpload = (id: string, file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Por favor, seleccione un formato de imagen válido (PNG, JPG, JPEG, WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setTeam(prev => prev.map(member => 
          member.id === id ? { ...member, avatar: e.target!.result as string } : member
        ));
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-20 py-10" id="view-nosotros-root">
      
      {/* 1. Header Identity Section */}
      <div className="space-y-4 max-w-4xl mx-auto text-center px-4">
        <div className="font-mono text-xs text-pink-500 font-bold tracking-widest uppercase mb-1">
          // NUESTRA IDENTIDAD & FILOSOFÍA
        </div>
        <h1 className="font-display text-3xl sm:text-4.5xl font-extrabold text-white tracking-tight uppercase leading-none select-none">
          LA TRAYECTORIA DE NUESTRO EQUIPO
        </h1>
        <p className="text-zinc-400 text-sm font-light max-w-2xl mx-auto leading-relaxed">
          Nacimos con una premisa clara: toda empresa merece engranajes internos limpios, automatizados y libres de cuellos de botella técnicos. Conozca nuestra historia de evolución.
        </p>
      </div>

      {/* 2. Visión Sistémica and Stats panel layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch px-4 sm:px-6 md:px-8" id="nosotros-vision-grid">
        
        {/* Left Side (Visión) */}
        <div className="lg:col-span-7 flex flex-col justify-center rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 sm:p-8 space-y-4">
          <div className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase">
            // VISIÓN SISTÉMICA
          </div>
          <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight leading-tight">
            SINCRONIZAMOS TECNOLOGÍA Y TALENTO PARA ASEGURAR TU TRANQUILIDAD.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed font-light text-justify">
            No nos consideramos un contratista externo ordinario; actuamos como el núcleo de soporte que protege, organiza y automatiza el flujo técnico completo de su empresa. Nuestro equipo está compuesto por ingenieros de bases de datos, especialistas certificados en plataformas de CRM y técnicos experimentados en resolución de incidencias en redes de telecomunicación.
          </p>
        </div>

        {/* Right Side (Stats Panel) */}
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          <div className="grid grid-cols-2 gap-4">
            
            {/* Stat Card 1 */}
            <div className="rounded-xl border border-zinc-900 bg-[#060608]/90 p-4 space-y-2">
              <div className="font-display text-3.5xl font-black tracking-tight text-[#00f0ff]">
                99.98%
              </div>
              <div className="font-mono text-[9px] font-bold text-zinc-400 tracking-wider">
                EFICIENCIA DE DATOS
              </div>
              <p className="font-sans text-[11px] text-zinc-500 font-light">
                Saneamientos robustos en Data Entry.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="rounded-xl border border-zinc-900 bg-[#060608]/90 p-4 space-y-2">
              <div className="font-display text-3.5xl font-black tracking-tight text-pink-500">
                +50
              </div>
              <div className="font-mono text-[9px] font-bold text-zinc-400 tracking-wider">
                EMPRESAS SOPORTADAS
              </div>
              <p className="font-sans text-[11px] text-zinc-500 font-light">
                Crecimiento seguro y sostenido.
              </p>
            </div>

          </div>

          {/* Long horizontal bar below matching exact branding text and emoji */}
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/80 p-4 flex items-center justify-center text-center font-mono text-[10px] text-zinc-400 tracking-widest py-4.5 bg-gradient-to-r from-zinc-950 to-zinc-900 leading-none">
            ⏱️ TIEMPOS DE ENTREGA COMPROMETIDOS &nbsp;|&nbsp; 100% CUMPLIMIENTO SLA
          </div>
        </div>

      </div>

      {/* 3. Values section banner layout */}
      <div className="mx-4 sm:mx-6 md:mx-8 rounded-2xl border border-zinc-900 bg-zinc-950/80 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6" id="nosotros-values-banner">
        <div className="space-y-1.5 md:max-w-xl">
          <h3 className="font-display text-lg font-bold text-white tracking-widest uppercase">
            NUESTROS VALORES GUÍAN CADA ENTREGA
          </h3>
          <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
            Trabajamos bajo estrictos acuerdos de nivel de servicio (SLA) para asegurar que su negocio no se detenga jamás.
          </p>
        </div>

        {/* Real-time formatted values stats block in the screenshot */}
        <div className="flex gap-4">
          <div className="rounded-xl border border-zinc-900 bg-black/90 p-4 min-w-[130px] space-y-1">
            <span className="font-mono text-[8px] font-bold text-zinc-500 tracking-widest block uppercase">MINUTO LÍMITE</span>
            <span className="font-display text-lg font-bold text-[#00f0ff]">15m SNE</span>
          </div>

          <div className="rounded-xl border border-zinc-900 bg-black/90 p-4 min-w-[130px] space-y-1">
            <span className="font-mono text-[8px] font-bold text-zinc-500 tracking-widest block uppercase">DATA ERROR</span>
            <span className="font-display text-lg font-bold text-pink-500">0.00% Tolerancia</span>
          </div>
        </div>
      </div>

      {/* 4. Team profiles section */}
      <div className="space-y-8 px-4 sm:px-6 md:px-8" id="nosotros-team-section">
        
        <div className="space-y-2">
          <div className="font-mono text-xs text-pink-500 font-bold tracking-widest uppercase">// EXPERTOS TECNOLÓGICOS</div>
          <h2 className="font-display text-xl sm:text-2xl font-black text-white tracking-wide uppercase">
            EL TALENTO DETRÁS DE JULEONIX
          </h2>
          <p className="font-sans text-xs text-zinc-400 font-light max-w-2xl leading-relaxed">
            Perfiles directivos y técnicos dedicados a la máxima calidad de despliegue informático y administrativo.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="team-profiles-grid">
          {team.map((member) => {
            const isDragging = draggingId === member.id;
            return (
              <div 
                key={member.id}
                className={`group relative rounded-2xl border bg-zinc-950/60 p-5 flex flex-col justify-between hover:border-cyan-500/25 transition-all duration-350 ${
                  isDragging ? 'border-[#00f0ff]/60 bg-cyan-950/5' : 'border-zinc-900'
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDraggingId(member.id);
                }}
                onDragLeave={() => setDraggingId(null)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDraggingId(null);
                  const file = e.dataTransfer.files?.[0];
                  if (file) handlePhotoUpload(member.id, file);
                }}
              >
                <div className="space-y-4">
                  
                  {/* Aspect-Ratio Photo Upload Space */}
                  <div 
                    onClick={() => fileInputsRef.current[member.id]?.click()}
                    className={`relative aspect-[4/3] w-full rounded-xl bg-zinc-900/60 border-2 border-dashed flex flex-col items-center justify-center cursor-pointer overflow-hidden select-none transition-all duration-300 ${
                      isDragging 
                        ? 'border-[#00f0ff] bg-cyan-950/15' 
                        : 'border-zinc-800/80 hover:border-cyan-500/35 group-hover:bg-zinc-900/90'
                    }`}
                    title="Arrastre una foto o haga clic para seleccionarla"
                    id={`photo-upload-space-${member.id}`}
                  >
                    <input 
                      type="file"
                      ref={(el) => (fileInputsRef.current[member.id] = el)}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handlePhotoUpload(member.id, file);
                      }}
                    />

                    {member.avatar ? (
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="text-center space-y-2 p-4">
                        <div className="h-12 w-12 rounded-full mx-auto bg-gradient-to-tr from-[#151528] to-[#251025] flex items-center justify-center font-display text-base font-bold text-white">
                          {member.initials}
                        </div>
                        <p className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                          Sin foto cargada
                        </p>
                      </div>
                    )}

                    {/* Interactive Hover Cover conforming to Drag & Drop upload specs */}
                    <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1.5 transition-all duration-300">
                      <div className="h-8 w-8 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-[#00f0ff] animate-pulse">
                        <Upload className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-[9px] font-bold text-white tracking-widest uppercase">
                        {member.avatar ? 'CAMBIAR FOTO' : 'CARGAR FOTO'}
                      </span>
                      <p className="font-sans text-[8px] text-zinc-400 font-light text-center px-4 max-w-xs leading-tight">
                        Suelte su archivo o haga clic para buscar
                      </p>
                    </div>
                  </div>

                  {/* Name and cargo / role placed directly below the photo */}
                  <div className="space-y-1 pt-1">
                    <h4 className="font-display text-base font-extrabold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h4>
                    <p className="font-mono text-[9px] text-pink-500 font-bold tracking-wider uppercase">
                      {member.role}
                    </p>
                  </div>

                  {/* Specialty and details below names/cargos */}
                  <div className="border-t border-zinc-900 pt-3 space-y-1">
                    <span className="font-mono text-[8px] text-zinc-500 font-bold tracking-widest uppercase block">
                      ESPECIALIDAD DIRECTA
                    </span>
                    <span className="font-sans text-xs font-semibold text-white">
                      {member.specialty}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed text-left text-justify">
                    {member.desc}
                  </p>
                </div>

                <div className="absolute bottom-5 right-5 text-zinc-900/60 font-mono text-2xl font-black group-hover:text-[#00f0ff]/10 select-none transition-colors">
                  {member.initials}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 5. Milestones timeline section */}
      <div className="space-y-10 px-4 sm:px-6 md:px-8" id="nosotros-timeline-section">
        
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <div className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase">// NUESTRO MAPA DE EVOLUCIÓN</div>
          <h2 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
            HITOS DE NUESTRA TRAYECTORIA
          </h2>
        </div>

        {/* Timeline thread layout */}
        <div className="relative max-w-4xl mx-auto space-y-8 pl-8 md:pl-0" id="trajectory-timeline">
          
          {/* Central thread line */}
          <div className="absolute left-2.5 md:left-1/2 top-4 bottom-4 w-px bg-zinc-900 -translate-x-1/2" />

          {TIMELINE_DATA.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={milestone.year}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Year Badge Node inside thread */}
                <div className="absolute left-2.5 md:left-1/2 top-1.5 h-6 w-6 rounded-full bg-zinc-950 border-2 border-cyan-500/80 flex items-center justify-center -translate-x-1/2 select-none z-10 animate-pulse">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                {/* Content Panel */}
                <div className={`w-full md:w-[45%] rounded-xl border border-zinc-900 bg-zinc-950/80 p-5 space-y-3.5 hover:border-cyan-500/20 transition-all ${
                  isEven ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-black text-cyan-400">
                      {milestone.year}
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider leading-none">
                        {milestone.title}
                      </h4>
                      <span className="font-mono text-[8px] text-zinc-500 font-medium tracking-widest uppercase block leading-none pt-0.5">
                        {milestone.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light text-justify">
                    {milestone.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}
