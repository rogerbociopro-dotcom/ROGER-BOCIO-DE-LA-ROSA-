import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Zap, Clock, Copy, ShieldAlert, Check, Send, Sparkles, Terminal, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

export default function ViewContacto() {
  
  // --- States ---
  
  // 1. Copy Email action helper
  const [copyFeedback, setCopyFeedback] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@juleonixdigital.com');
    setCopyFeedback(true);
    setTimeout(() => {
      setCopyFeedback(false);
    }, 2000);
  };

  // 2. Interactive Selection check states for Time Estimator
  const [selections, setSelections] = useState({
    datos: true, // checked by default in screenshots
    crm: false,
    soporte: false,
    auto: false
  });

  const handleToggleSelection = (key: 'datos' | 'crm' | 'soporte' | 'auto') => {
    setSelections({
      ...selections,
      [key]: !selections[key]
    });
  };

  // Calculate overall deployment time dynamically
  // If multiple are selected, we find the highest value among checked items
  const getCalculatedTime = () => {
    const checkedTimes = [];
    if (selections.datos) checkedTimes.push(7);
    if (selections.crm) checkedTimes.push(5);
    if (selections.soporte) checkedTimes.push(10);
    if (selections.auto) checkedTimes.push(14);

    if (checkedTimes.length === 0) {
      return '0 Días';
    }
    const maxTime = Math.max(...checkedTimes);
    return `~${maxTime} Días Hábiles`;
  };

  // 3. Project Transmission Form States
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    reqs: ''
  });
  
  const [compiling, setCompiling] = useState(false);
  const [compilerLogs, setCompilerLogs] = useState<string[]>([]);
  const [compilationSuccess, setCompilationSuccess] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleCompilePropuesta = (e: FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email) {
      alert('Suministre al menos Nombre/Empresa y Correo de retorno.');
      return;
    }

    setCompiling(true);
    setCompilationSuccess(false);
    setCompilerLogs(['[COMPILER] Iniciando encriptación AES-256 local...']);

    setTimeout(() => {
      setCompilerLogs(prev => [...prev, '[COMPILER] Codificando canales y requisitos...']);
      setTimeout(() => {
        setCompilerLogs(prev => [...prev, '[COMPILER] Calculando SLA de compromiso con tolerancias...']);
        setTimeout(() => {
          setCompilerLogs(prev => [...prev, '[SUCCESS] Propuesta técnica compilada de manera segura. El equipo de Juleonix ha sido notificado.']);
          setCompiling(false);
          setCompilationSuccess(true);
          // Pre-populate response or reset form
        }, 800);
      }, 600);
    }, 500);
  };

  return (
    <div className="space-y-16 py-10" id="view-contacto-root">
      
      {/* 1. Header Identity */}
      <div className="space-y-4 max-w-4xl mx-auto text-center px-4">
        <div className="font-mono text-xs text-pink-500 font-bold tracking-widest uppercase mb-1">
          // CANAL DE ATENCIÓN DIRECTA
        </div>
        <h1 className="font-display text-3.5xl sm:text-4.5xl font-extrabold text-white tracking-tight uppercase leading-none select-none">
          PROPUESTAS Y CONTACTO
        </h1>
        <p className="text-zinc-400 text-sm font-light max-w-2xl mx-auto leading-relaxed">
          Inicie su solicitud de servicio preventivo o preventivo corporativo. Personalice los alcances técnicos requeridos para evaluar su despliegue prioritario.
        </p>
      </div>

      {/* 2. Symmetrical contact bento layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-4 sm:px-6 md:px-8" id="contacto-bento-grid">
        
        {/* Left column: Canales de Soporte (width ratio: 3cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Seccion Contacto Dividido */}
          <div className="space-y-4" id="seccion-contacto-dividido">
            {/* Bloque 1: WhatsApp */}
            <a 
              href="https://wa.me/message/AMNIPYTYFMYCE1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-emerald-950/10 hover:bg-emerald-950/20 p-5 hover:border-emerald-400 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer text-left block"
              id="contacto-bloque-whatsapp"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] font-extrabold text-emerald-400 tracking-widest block uppercase">// MENSAJES RÁPIDOS</span>
                  <span className="font-display text-base font-black text-white tracking-wide block">
                    Vía WhatsApp
                  </span>
                </div>
                <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                  <MessageSquare className="h-4.5 w-4.5" />
                </div>
              </div>
              <p className="font-sans text-xs text-zinc-300 leading-normal font-light mt-3">
                Para mensajes rápidos e incidencias, contáctanos por WhatsApp.
              </p>
              <span className="font-mono text-[10px] text-emerald-300 font-semibold mt-3 block group-hover:underline">
                Escríbenos por WhatsApp &rarr;
              </span>
            </a>

            {/* Bloque 2: Llamadas */}
            <a 
              href="tel:+18295780968" 
              className="group flex flex-col justify-between rounded-2xl border border-cyan-500/30 bg-cyan-950/10 hover:bg-cyan-950/20 p-5 hover:border-cyan-400 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer text-left block"
              id="contacto-bloque-llamadas"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] font-extrabold text-cyan-400 tracking-widest block uppercase">// SOPORTE INMEDIATO</span>
                  <span className="font-display text-base font-black text-white tracking-wide block">
                    Llamada Directa
                  </span>
                </div>
                <div className="h-9 w-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
              </div>
              <p className="font-sans text-xs text-zinc-300 leading-normal font-light mt-3">
                Si necesitas una llamada de soporte crítico o una consulta directiva, llámanos directamente al:
              </p>
              <span className="font-mono text-xs text-cyan-300 font-bold mt-3 block group-hover:underline">
                +1 (829) 578-0968
              </span>
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-[#060608]/90 p-6 space-y-6">
            <h3 className="font-display text-sm font-extrabold text-white tracking-widest border-b border-zinc-900 pb-3 uppercase">
              CANALES DE SOPORTE
            </h3>

            {/* Support item 1 */}
            <div className="flex items-start gap-4">
              <div className="h-9 w-9 rounded-lg bg-cyan-950/40 border border-cyan-500/10 flex items-center justify-center text-[#00f0ff] shrink-0 mt-0.5">
                <Mail className="h-4 w-4" />
              </div>
              <div className="space-y-1.5">
                <span className="font-mono text-[9px] font-bold text-zinc-500 tracking-wider block">CORREO ELECTRÓNICO</span>
                <span className="font-sans text-xs font-semibold text-white block">
                  hello@juleonixdigital.com
                </span>
              </div>
            </div>

            {/* Support item 2 */}
            <div className="flex items-start gap-4">
              <div className="h-9 w-9 rounded-lg bg-cyan-950/40 border border-cyan-500/10 flex items-center justify-center text-[#00f0ff] shrink-0 mt-0.5">
                <Zap className="h-4 w-4" />
              </div>
              <div className="space-y-1.5">
                <span className="font-mono text-[9px] font-bold text-zinc-500 tracking-wider block">SOPORTE EXPRESS</span>
                <span className="font-sans text-xs text-zinc-400 leading-relaxed font-light block">
                  Asignación de gestores en menos de 15 minutos de lunes a viernes.
                </span>
              </div>
            </div>

            {/* Support item 3 */}
            <div className="flex items-start gap-4">
              <div className="h-9 w-9 rounded-lg bg-[#270c1b]/30 border border-pink-500/15 flex items-center justify-center text-pink-400 shrink-0 mt-0.5">
                <Clock className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-[9px] font-bold text-zinc-500 tracking-wider block">HORARIO DE ATENCIÓN</span>
                <div className="space-y-1 font-sans text-xs leading-normal font-light text-zinc-300">
                  <p className="font-semibold text-white">
                    <span className="text-cyan-400 font-mono text-[10px] mr-1">●</span>
                    Lunes a Viernes: 9:00 AM – 6:00 PM <span className="text-zinc-500">(Horario de oficina)</span>.
                  </p>
                  <p>
                    <span className="text-pink-500 font-mono text-[10px] mr-1">●</span>
                    Sábados y Domingos: 8:00 AM – 12:00 PM.
                  </p>
                </div>
                <div className="pt-2 border-t border-zinc-900 font-sans text-[10px] text-zinc-450 leading-relaxed font-normal italic">
                  Atención remota prioritaria en horario laboral. Disponibilidad para emergencias técnicas 24/7 mediante nuestro sistema de tickets.
                </div>
              </div>
            </div>

          </div>

          {/* Copiar Firma tool */}
          <div className="rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-950 to-zinc-900/60 p-6 space-y-4">
            <div className="space-y-1">
              <span className="font-mono text-[9px] font-bold text-pink-500 tracking-widest block uppercase">// MÉTODO DE COPIA RÁPIDA</span>
              <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase">
                ¿PREFIERE ESCRIBIR DIRECTAMENTE?
              </h4>
              <p className="font-sans text-[11px] text-zinc-400 font-light leading-relaxed">
                Copie nuestra firma de correo al portapapeles y contáctenos desde su gestor habitual.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-black border border-zinc-850 p-2.5">
              <span className="flex-1 font-mono text-[11px] text-zinc-400 select-all overflow-x-auto truncate pr-2">
                hello@juleonixdigital.com
              </span>
              <button 
                onClick={handleCopyEmail}
                className="rounded bg-pink-500 hover:bg-pink-600 active:scale-95 text-white font-mono text-[9px] font-bold tracking-widest px-3 py-1.5 transition-all flex items-center gap-1.5 cursor-pointer uppercase shrink-0"
              >
                {copyFeedback ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copyFeedback ? 'COPIADO' : 'COPIAR'}
              </button>
            </div>
          </div>

        </div>

        {/* Middle column: Módulos Requeridos Checkboxes & Calculator (width ratio: 4cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="rounded-2xl border border-zinc-900 bg-[#060608]/90 p-6 space-y-5">
            <h3 className="font-display text-sm font-extrabold text-white tracking-widest border-b border-zinc-900 pb-3 uppercase">
              MÓDULOS TECNOLÓGICOS REQUERIDOS
            </h3>
            <p className="font-sans text-[11px] text-zinc-400 leading-normal font-light">
              Active los servicios específicos que requiere su organización para consolidar estimados de tiempo de despliegue garantizados.
            </p>

            {/* Checkbox Group list */}
            <div className="space-y-4 pt-1" id="modules-selection-list">
              
              {/* Box 1 */}
              <div 
                onClick={() => handleToggleSelection('datos')}
                className={`group border rounded-xl p-4 cursor-pointer transition-all ${
                  selections.datos 
                    ? 'bg-zinc-950/80 border-[#03f0ff]/40 shadow-sm shadow-cyan-400/5' 
                    : 'bg-zinc-950/20 border-zinc-900 hover:border-zinc-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`h-4.5 w-4.5 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-all ${
                    selections.datos ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff]' : 'border-zinc-750 text-transparent'
                  }`}>
                    <Check className="h-3.5 w-3.5 stroke-[3px]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display text-[11px] font-bold text-white tracking-wide uppercase leading-tight">
                      GESTIÓN DE DATOS Y EXCEL AVANZADO
                    </h4>
                    <p className="font-sans text-[10px] text-zinc-450 leading-relaxed font-light">
                      Procesamiento masivo de datos (Data Entry), depuración de registros sin redundancias, macros VBA Avanzado y diseño de dashboards en Power BI / Excel.
                    </p>
                    <span className="inline-block font-mono text-[8px] text-pink-500 font-semibold bg-pink-500/5 border border-pink-500/10 px-1.5 py-0.5 rounded leading-none">
                      PLAZO DE PRUEBA: ~7 DÍAS HÁBILES
                    </span>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div 
                onClick={() => handleToggleSelection('crm')}
                className={`group border rounded-xl p-4 cursor-pointer transition-all ${
                  selections.crm 
                    ? 'bg-zinc-950/80 border-[#03f0ff]/40 shadow-sm shadow-cyan-400/5' 
                    : 'bg-zinc-950/20 border-zinc-900 hover:border-zinc-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`h-4.5 w-4.5 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-all ${
                    selections.crm ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff]' : 'border-zinc-750 text-transparent'
                  }`}>
                    <Check className="h-3.5 w-3.5 stroke-[3px]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display text-[11px] font-bold text-white tracking-wide uppercase leading-tight">
                      ASISTENCIA VIRTUAL Y CRM
                    </h4>
                    <p className="font-sans text-[10px] text-zinc-450 leading-relaxed font-light">
                      Soporte operativo y administración remota bilingüe. Saneamiento y mapeo de leads en HubSpot, Salesforce, Pipedrive y manejo de agendas complejas.
                    </p>
                    <span className="inline-block font-mono text-[8px] text-pink-500 font-semibold bg-pink-500/5 border border-pink-500/10 px-1.5 py-0.5 rounded leading-none">
                      PLAZO DE PRUEBA: ~5 DÍAS HÁBILES
                    </span>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div 
                onClick={() => handleToggleSelection('soporte')}
                className={`group border rounded-xl p-4 cursor-pointer transition-all ${
                  selections.soporte 
                    ? 'bg-zinc-950/80 border-[#03f0ff]/40 shadow-sm shadow-cyan-400/5' 
                    : 'bg-zinc-950/20 border-zinc-900 hover:border-zinc-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`h-4.5 w-4.5 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-all ${
                    selections.soporte ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff]' : 'border-zinc-750 text-transparent'
                  }`}>
                    <Check className="h-3.5 w-3.5 stroke-[3px]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display text-[11px] font-bold text-white tracking-wide uppercase leading-tight">
                      SOPORTE TÉCNICO Y SISTEMAS
                    </h4>
                    <p className="font-sans text-[10px] text-zinc-450 leading-relaxed font-light">
                      Mantenimiento preventivo local, configuración de firewalls perimetrales, VPN corporativas seguras, enrutamiento IT y gestión de redes.
                    </p>
                    <span className="inline-block font-mono text-[8px] text-pink-500 font-semibold bg-pink-500/5 border border-pink-500/10 px-1.5 py-0.5 rounded leading-none">
                      PLAZO DE PRUEBA: ~10 DÍAS HÁBILES
                    </span>
                  </div>
                </div>
              </div>

              {/* Box 4 */}
              <div 
                onClick={() => handleToggleSelection('auto')}
                className={`group border rounded-xl p-4 cursor-pointer transition-all ${
                  selections.auto 
                    ? 'bg-zinc-950/80 border-[#03f0ff]/40 shadow-sm shadow-cyan-400/5' 
                    : 'bg-zinc-950/20 border-zinc-900 hover:border-zinc-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`h-4.5 w-4.5 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-all ${
                    selections.auto ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff]' : 'border-zinc-750 text-transparent'
                  }`}>
                    <Check className="h-3.5 w-3.5 stroke-[3px]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display text-[11px] font-bold text-white tracking-wide uppercase leading-tight">
                      AUTOMATIZACIÓN COMPLETA DE FLUJOS
                    </h4>
                    <p className="font-sans text-[10px] text-zinc-450 leading-relaxed font-light">
                      Integración avanzada de APIs mediante webhooks seguros con reintentos y alertas automatizadas a correos, Slack o CRM.
                    </p>
                    <span className="inline-block font-mono text-[8px] text-pink-500 font-semibold bg-pink-500/5 border border-pink-500/10 px-1.5 py-0.5 rounded leading-none">
                      PLAZO DE PRUEBA: ~14 DÍAS HÁBILES
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Dynamic Calculated Output Block with standard colors from screenshots */}
            <div className="rounded-xl border border-zinc-900 bg-black/85 p-4.5 space-y-1 bg-gradient-to-r from-black to-zinc-950">
              <span className="font-mono text-[9px] font-bold text-zinc-500 tracking-widest block uppercase">
                PLAZO TOTAL DE DESPLIEGUE
              </span>
              <div className="font-display text-2xl font-black text-cyan-400 tracking-tight leading-tight">
                {getCalculatedTime()}
              </div>
              <span className="font-mono text-[8px] font-bold text-zinc-650 tracking-widest block uppercase leading-none pt-0.5">
                COMPROMISO SLA SIN RETRASOS IMPREVISTOS
              </span>
            </div>

          </div>

        </div>

        {/* Right column: Canal de Transgresion / Form with beautiful Fingerprint grid background (width ratio. 5cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="relative rounded-2xl border border-zinc-900 bg-[#060608]/90 p-6 overflow-hidden md:p-8">
            
            {/* Background vector stylized fingerprint shape or mesh */}
            <div className="absolute right-4 top-4 h-24 w-24 opacity-5 bg-[radial-gradient(#00f0ff_1px,transparent_1.5px)] bg-[size:8px_8px] rounded-full pointer-events-none" />

            {/* Form Title & Header */}
            <div className="space-y-4 mb-6 relative z-10">
              <h3 className="font-display text-sm font-extrabold text-white tracking-widest border-b border-zinc-900 pb-3 uppercase flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-pink-500 animate-pulse" />
                CANAL DE TRANSMISIÓN
              </h3>
            </div>

            <form onSubmit={handleCompilePropuesta} className="space-y-4 font-mono text-xs relative z-10">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">NOMBRE O EMPRESA</label>
                <input 
                  type="text" 
                  name="nombre"
                  required
                  placeholder="Ej. Julio, Juleonix Tech"
                  value={form.nombre}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-zinc-850 focus:border-cyan-500/50 outline-none text-zinc-200 px-3.5 py-3 rounded-lg font-sans transition-all text-xs placeholder-zinc-600 font-light"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">FIRMA DE CORREO RETORNO</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Ej. director@juleonix.com"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-zinc-850 focus:border-cyan-500/50 outline-none text-zinc-200 px-3.5 py-3 rounded-lg font-sans transition-all text-xs placeholder-zinc-600 font-light"
                />
              </div>

              {/* Telephone */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">TELÉFONO (OPCIONAL)</label>
                <input 
                  type="text" 
                  name="telefono"
                  placeholder="Ej. +34 600 000 000"
                  value={form.telefono}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-zinc-850 focus:border-cyan-500/50 outline-none text-zinc-200 px-3.5 py-3 rounded-lg font-sans transition-all text-xs placeholder-zinc-600 font-light"
                />
              </div>

              {/* Requirements text */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">REQUERIMIENTOS DEL PROYECTO</label>
                <textarea 
                  name="reqs"
                  rows={3}
                  placeholder="Coméntenos los desafíos técnicos actuales de su empresa..."
                  value={form.reqs}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-zinc-850 focus:border-cyan-500/50 outline-none text-zinc-200 px-3.5 py-3 rounded-lg font-sans transition-all text-xs placeholder-zinc-600 font-light resize-none leading-relaxed"
                />
              </div>

              {/* Submit / Compile Indicator */}
              <button
                type="submit"
                disabled={compiling}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-zinc-100 disabled:opacity-55 active:scale-98 font-sans text-xs font-bold text-black py-3 px-4 shadow-lg shadow-white/5 cursor-pointer transition-all uppercase"
                id="compile-propuesta-btn"
              >
                <Send className="h-3.5 w-3.5" />
                {compiling ? 'COMPILANDO PROPUESTA...' : 'COMPILAR PROPUESTA'}
              </button>

            </form>

            {/* Compiler Console Interface for premium look! */}
            {(compilerLogs.length > 0 || compilationSuccess) && (
              <div className="mt-5 rounded-lg border border-zinc-90 w-full bg-black p-3.5 space-y-2.5 font-mono text-[9px] text-[#00f0ff] relative z-10">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-1.5">
                  <span className="text-zinc-500 font-bold leading-none uppercase">CONSOLA DE COMPILACIÓN JULEONIX</span>
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="space-y-1 max-h-[100px] overflow-y-auto">
                  {compilerLogs.map((log, idx) => (
                    <div key={idx} className={`${log.startsWith('[SUCCESS]') ? 'text-emerald-400 font-bold' : log.startsWith('[error]') ? 'text-pink-500' : 'text-zinc-500'}`}>
                      {log}
                    </div>
                  ))}
                </div>
                {compilationSuccess && (
                  <div className="rounded bg-emerald-950/20 text-emerald-400 p-2 text-justify select-none font-sans font-normal border border-emerald-950">
                    <strong>¡Compilación exitosa!</strong> Nuestro Director de Operaciones (Julio León) ha programado una revisión automatizada de su estructura. Recibirá una respuesta técnica formal en 15 minutos.
                  </div>
                )}
              </div>
            )}

          </div>

          {/* GDPR Protected Box info */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-5 flex items-start gap-3.5">
            <div className="h-8 w-8 rounded-lg bg-pink-950/40 border border-pink-500/10 flex items-center justify-center text-pink-500 shrink-0">
              <ShieldAlert className="h-4 w-4" />
            </div>
            <div className="space-y-1 leading-none">
              <span className="font-mono text-[9px] font-bold text-cyan-400 tracking-widest block uppercase">
                POLÍTICA RGPD PROTEGIDA
              </span>
              <p className="font-sans text-[11px] text-zinc-450 leading-relaxed font-light">
                Toda metadata de proyecto y correo de retorno introducidos se cifran localmente bajo el estándar de ciberseguridad AES_256 antes de guardarse.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
