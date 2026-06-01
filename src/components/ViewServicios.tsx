import { useState, useEffect, FormEvent } from 'react';
import { ActiveTab } from '../types';
import { 
  BarChart3, 
  Briefcase, 
  Settings, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  Terminal, 
  Play, 
  Activity, 
  Sparkles,
  Layers,
  Check,
  Plus,
  Trash2
} from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ViewServiciosProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function ViewServicios({ setActiveTab }: ViewServiciosProps) {
  // --- Widget States ---
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    datos: false,
    crm: false,
    soporte: false,
    auto: false
  });

  const toggleExpand = (card: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };
  
  // 1. Data Correcting Tool Widget (Pillar 1)
  const [dataAuditStatus, setDataAuditStatus] = useState<'error' | 'correcting' | 'clean'>('error');
  const [dataAuditLog, setDataAuditLog] = useState<string>('Detectados 3 conflictos de tipos en fila 42');

  const handleFixAudit = () => {
    if (dataAuditStatus === 'error') {
      setDataAuditStatus('correcting');
      setDataAuditLog('Iniciando script de validación integral...');
      setTimeout(() => {
        setDataAuditLog('Sanitizando strings, convirtiendo nulos...');
        setTimeout(() => {
          setDataAuditStatus('clean');
          setDataAuditLog('¡Limpieza completada con éxito! Cero errores de sintaxis.');
        }, 1200);
      }, 800);
    } else if (dataAuditStatus === 'clean') {
      setDataAuditStatus('error');
      setDataAuditLog('Establecidas discrepancias de datos simuladas');
    }
  };

  // 2. Tareas Activas CRM Checklist (Pillar 2)
  interface CRMTask {
    id: string;
    text: string;
    time: string;
    done: boolean;
  }
  const [crmTasks, setCrmTasks] = useState<CRMTask[]>([
    { id: '1', text: 'Mapear Leads Orgánicos', time: 'Hace 3m', done: true },
    { id: '2', text: 'Automatizar Buzón Operaciones', time: 'Hace 1h', done: false },
    { id: '3', text: 'Integrar Listas en HubSpot', time: 'Pendiente', done: false }
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleToggleTask = (id: string) => {
    setCrmTasks(
      crmTasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newTask: CRMTask = {
      id: Date.now().toString(),
      text: newTaskText,
      time: 'Hace 10s',
      done: false
    };
    setCrmTasks([...crmTasks, newTask]);
    setNewTaskText('');
  };

  const handleClearDoneTasks = () => {
    setCrmTasks(crmTasks.filter((t) => !t.done));
  };


  // 3. Ping Test Tool (Pillar 3)
  const [pinging, setPinging] = useState(false);
  const [pings, setPings] = useState({
    firewall: 14,
    backup: 28,
    vpn: 6
  });

  const handleProbarPing = () => {
    setPinging(true);
    setTimeout(() => {
      setPings({
        firewall: Math.floor(Math.random() * 20) + 8,
        backup: Math.floor(Math.random() * 40) + 15,
        vpn: Math.floor(Math.random() * 10) + 3
      });
      setPinging(false);
    }, 1200);
  };

  // 4. Webhook Pipeline Visualizer (Pillar 4)
  const [activeStep, setActiveStep] = useState<string>('webhook');
  const [pipelineLogs, setPipelineLogs] = useState<string[]>([
    'Escuchando puerto Webhook...',
    'Sistemas encendidos y listos.'
  ]);

  const triggerPipelineMockEvent = () => {
    const timestamp = new Date().toLocaleTimeString();
    const mockEvents = [
      `[${timestamp}] Webhook recibido desde API Juleonix`,
      `[${timestamp}] Iniciando filtro de duplicados y data cleanup`,
      `[${timestamp}] Insertado registro sanitizado en CRM central`,
      `[${timestamp}] Alerta enviada a Slack / WhatsApp (100% Ok)`
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < mockEvents.length) {
        setPipelineLogs(prev => [mockEvents[i], ...prev.slice(0, 5)]);
        if (i === 0) setActiveStep('webhook');
        if (i === 1) setActiveStep('filtering');
        if (i === 2) setActiveStep('crm');
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600);
  };

  return (
    <div className="space-y-20 py-10" id="view-servicios-root">
      
      {/* 1. Header Hero Block */}
      <div className="space-y-4 max-w-4xl mx-auto text-center px-4">
        <div className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase mb-1">
          // INGENIERÍA Y ASISTENCIA DE PRECISIÓN
        </div>
        <h1 className="font-display text-3xl sm:text-4.5xl font-extrabold text-white tracking-tight uppercase leading-none select-none">
          CATÁLOGO TÉCNCO DE SERVICIOS
        </h1>
        <p className="text-zinc-400 text-sm font-light max-w-2xl mx-auto leading-relaxed">
          Detalle metodológico, capacidades de infraestructura y plazos garantizados de despliegue para cada uno de nuestros pilares de soporte corporativo.
        </p>
      </div>

      {/* 2. Grid of 4 Pillars of service */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8" id="servicios-pillars-grid">
        
        {/* PILLAR 1: Gestión de Datos */}
        <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6 sm:p-8 space-y-6 hover:border-cyan-500/20 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#09252c] border border-cyan-500/30 text-cyan-400 font-mono text-[9px] font-bold tracking-wider">
                <BarChart3 className="h-3 w-3" />
                OPERACIONES DE DATOS
              </div>
              <span className="font-mono text-[9px] font-black text-pink-500 bg-pink-500/5 border border-pink-500/20 px-2 py-0.5 rounded">
                TIEMPO DE DESPLIEGUE: 5 A 7 DÍAS HÁBILES
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Gestión de Datos y Excel Avanzado
            </h3>
            <div className="space-y-2 bg-[#000000]/0">
              <p className={`font-sans text-xs leading-relaxed text-zinc-400 font-light text-justify ${expandedCards.datos ? '' : 'line-clamp-2'}`}>
                Transformación, normalización y procesamiento seguro de bases en Excel y bases SQL. Diseño de macros VBA eficientes, reconciliación automática de inventarios, reportes de BI y dashboards personalizados que simplifican la toma de decisiones críticas con cero errores de transcripción.
              </p>
              <button 
                type="button"
                onClick={() => toggleExpand('datos')}
                className="text-[10px] font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
              >
                {expandedCards.datos ? 'Ver menos ↑' : 'Ver detalles ↓'}
              </button>
            </div>

            <ul className="space-y-2 text-xs font-light text-zinc-450 border-t border-zinc-900 pt-4 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Procesamiento de Datos (Data Entry) masivos y depuración estricta de redundancias.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Creación de Macros VBA a medida para automatizar procesos manuales diarios.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Formularios de captura automatizados con validación de tipos e inputs de datos.</span>
              </li>
            </ul>
          </div>

          {/* Interactive Tool 1: Data Matrix Corrector */}
          <div className="rounded-xl border border-zinc-900 bg-black/95 p-4 space-y-3.5">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase">MATRIZ OPERATIVA / CLICK PARA CORREGIR</span>
              <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded font-black ${
                dataAuditStatus === 'clean' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/35' : 'bg-pink-950 text-pink-500 border border-pink-500/35'
              }`}>
                {dataAuditStatus === 'clean' ? 'CORRECTOR_PASSED' : 'ERROR_DETECTED'}
              </span>
            </div>

            <div className="space-y-2 font-mono text-[10px]" id="audit-items-container">
              <div className="flex justify-between items-center py-1 border-b border-zinc-900/40">
                <span className="text-zinc-500">Procesamiento Ingesta</span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-zinc-600">XLS_VAL_0</span>
                  <span className="text-[#00f0ff] font-bold">Optimizando</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-1 border-b border-zinc-900/40">
                <span className="text-zinc-500">KPI Analytics Dashboard</span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-zinc-600">DB_SINC_1</span>
                  <span className="text-emerald-400 font-bold">En Línea</span>
                </div>
              </div>

              {/* Clickable Toggle Row */}
              <div 
                onClick={handleFixAudit}
                className="flex justify-between items-center py-1.5 px-2 rounded bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-805 cursor-pointer transition-all group"
              >
                <span className="text-zinc-400 group-hover:text-white transition-colors">Auditoría Data Entry</span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-zinc-650 font-mono">AUD_ZERO_ERR</span>
                  {dataAuditStatus === 'error' && (
                    <span className="text-pink-500 font-bold hover:underline">Haga clic para corregir</span>
                  )}
                  {dataAuditStatus === 'correcting' && (
                    <span className="text-cyan-400 animate-pulse font-bold">Sanitizando...</span>
                  )}
                  {dataAuditStatus === 'clean' && (
                    <span className="text-emerald-400 font-bold">Sin Errores</span>
                  )}
                </div>
              </div>
            </div>

            {/* Logging status console */}
            <div className="rounded bg-zinc-950 p-2 font-mono text-[10px] text-zinc-500 flex gap-2 items-start border border-zinc-900">
              <Terminal className="h-3.5 w-3.5 text-zinc-600 shrink-0 mt-0.5" />
              <p className="leading-tight">{dataAuditLog}</p>
            </div>
          </div>
        </div>

        {/* PILLAR 2: Asistencia Virtual and CRM */}
        <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6 sm:p-8 space-y-6 hover:border-pink-500/25 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#31091e] border border-pink-500/30 text-pink-400 font-mono text-[9px] font-bold tracking-wider">
                <Briefcase className="h-3 w-3" />
                ASISTENCIA CORPORATIVA
              </div>
              <span className="font-mono text-[9px] font-black text-pink-500 bg-pink-500/5 border border-pink-500/20 px-2 py-0.5 rounded">
                TIEMPO DE DESPLIEGUE: 3 A 5 DÍAS HÁBILES
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Asistencia Virtual y CRM
            </h3>
            <div className="space-y-2 bg-[#000000]/0">
              <p className={`font-sans text-xs leading-relaxed text-zinc-400 font-light text-justify ${expandedCards.crm ? '' : 'line-clamp-2'}`}>
                Soporte administrativo bilingüe altamente capacitado. Manejo de leads en CRM de clase mundial (HubSpot, Salesforce, Pipedrive, Zoho), clasificación de embudos comerciales, gestión técnica de correo de operaciones, administración de agendas complejas y excelente atención al cliente por canales digitales.
              </p>
              <button 
                type="button"
                onClick={() => toggleExpand('crm')}
                className="text-[10px] font-mono font-bold text-pink-500 hover:text-pink-400 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
              >
                {expandedCards.crm ? 'Ver menos ↑' : 'Ver detalles ↓'}
              </button>
            </div>

            <ul className="space-y-2 text-xs font-light text-zinc-450 border-t border-zinc-900 pt-4 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Administración, ordenamiento y sanitización de registros dentro de tu CRM.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Soporte al cliente de alta respuesta por sistemas de tickets o correos corporativos.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Coordinación logística, control de agendas y agendamientos ejecutivos.</span>
              </li>
            </ul>
          </div>

          {/* Interactive Tool 2: Active Tasks CRM checklist */}
          <div className="rounded-xl border border-zinc-900 bg-black/95 p-4 space-y-3.5">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase">TAREAS ACTIVAS / CLIC DIRECTO</span>
              <button 
                onClick={handleClearDoneTasks}
                className="font-mono text-[9px] text-pink-500 font-semibold hover:text-white flex items-center gap-1 bg-zinc-950 border border-zinc-900 hover:border-pink-500/30 px-2 py-0.5 rounded cursor-pointer transition-colors"
                id="complete-crm-btn"
              >
                COMPLETAR CRM
              </button>
            </div>

            {/* List */}
            <div className="space-y-1.5" id="crm-tasks-container">
              {crmTasks.map((task) => (
                <div 
                  key={task.id}
                  onClick={() => handleToggleTask(task.id)}
                  className={`flex items-center justify-between p-2 rounded border transition-all cursor-pointer ${
                    task.done 
                      ? 'bg-zinc-950/40 border-zinc-900/60 line-through text-zinc-600' 
                      : 'bg-zinc-950 border-zinc-900 hover:border-zinc-800 text-zinc-350'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`h-4 w-4 rounded border flex items-center justify-center transition-all ${
                      task.done ? 'bg-pink-500/20 border-pink-500/80 text-pink-400' : 'border-zinc-750 text-transparent'
                    }`}>
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-sans text-xs">{task.text}</span>
                  </div>
                  <span className="font-mono text-[9px] text-zinc-600">{task.time}</span>
                </div>
              ))}
            </div>

            {/* Form to add mock task */}
            <form onSubmit={handleAddTask} className="flex gap-2">
              <input 
                type="text" 
                placeholder="Introducir nueva tarea virtual..."
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                className="flex-1 bg-zinc-950 border border-zinc-900 outline-none text-xs font-sans px-3 py-1.5 rounded text-white placeholder-zinc-600 focus:border-pink-500/40"
              />
              <button 
                type="submit"
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white p-1.5 rounded cursor-pointer hover:text-pink-400 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* PILLAR 3: Soporte Técnico */}
        <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6 sm:p-8 space-y-6 hover:border-indigo-500/20 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#10102d] border border-indigo-500/30 text-indigo-400 font-mono text-[9px] font-bold tracking-wider">
                <Settings className="h-3 w-3 animate-spin duration-3000" />
                INFRAESTRUCTURA TI
              </div>
              <span className="font-mono text-[9px] font-black text-pink-500 bg-pink-500/5 border border-pink-500/20 px-2 py-0.5 rounded">
                TIEMPO DE DESPLIEGUE: 7 A 10 DÍAS HÁBILES
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Soporte Técnico y Sistemas
            </h3>
            <div className="space-y-2 bg-[#000000]/0">
              <p className={`font-sans text-xs leading-relaxed text-zinc-400 font-light text-justify ${expandedCards.soporte ? '' : 'line-clamp-2'}`}>
                Monitoreo y resolución de problemas sobre estaciones de trabajo, sistemas informáticos locales y almacenamiento distribuido. Configuración segura de redes virtuales privadas (VPNs), firewalls de protección empresarial, esquemas de respaldos redundantes (backups) y administración informática de servidores.
              </p>
              <button 
                type="button"
                onClick={() => toggleExpand('soporte')}
                className="text-[10px] font-mono font-bold text-indigo-400 hover:text-indigo-350 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
              >
                {expandedCards.soporte ? 'Ver menos ↑' : 'Ver detalles ↓'}
              </button>
            </div>

            <ul className="space-y-2 text-xs font-light text-zinc-450 border-t border-zinc-900 pt-4 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Configuración y mantenimiento de firewalls para proteger redes empresariales.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Auditoría e inventario detallado de hardware, software y licencias corporativas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Soporte informático preventivo y correctivo de errores en sistemas locales.</span>
              </li>
            </ul>
          </div>

          {/* Interactive Tool 3: Latency Ping Probar */}
          <div className="rounded-xl border border-zinc-900 bg-black/95 p-4 space-y-3.5" id="ping-widget-root">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase">LATENCIA DE CONEXIÓN</span>
              <button 
                onClick={handleProbarPing}
                disabled={pinging}
                className="font-mono text-[9px] text-purple-400 font-semibold hover:text-white flex items-center gap-1 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-purple-500/40 px-2 py-0.5 rounded cursor-pointer disabled:opacity-50 transition-colors"
                id="probar-ping-btn"
              >
                <Activity className={`h-3 w-3 ${pinging ? 'animate-bounce' : ''}`} />
                PROBAR PING
              </button>
            </div>

            <div className="space-y-2 font-mono text-[10px]">
              <div className="flex justify-between items-center py-1 border-b border-zinc-900/40">
                <span className="text-zinc-500">Firewall de Servidores</span>
                <div className="flex items-center gap-3">
                  <span className={`${pinging ? 'animate-pulse text-zinc-500' : 'text-purple-400'} font-bold`}>
                    {pinging ? '...' : `${pings.firewall}ms`}
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-950/80 text-emerald-400 border border-emerald-900 font-medium">Seguro</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-zinc-900/40">
                <span className="text-zinc-500">Nube Cloud Backups</span>
                <div className="flex items-center gap-3">
                  <span className={`${pinging ? 'animate-pulse text-zinc-500' : 'text-purple-400'} font-bold`}>
                    {pinging ? '...' : `${pings.backup}ms`}
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-950/80 text-emerald-400 border border-emerald-900 font-medium font-mono">Sincronizado</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500">Sistemas Internos VPN</span>
                <div className="flex items-center gap-3">
                  <span className={`${pinging ? 'animate-pulse text-zinc-500' : 'text-purple-400'} font-bold`}>
                    {pinging ? '...' : `${pings.vpn}ms`}
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-950/80 text-emerald-400 border border-emerald-900 font-medium">Estable</span>
                </div>
              </div>
            </div>

            {pinging && (
              <div className="h-1 w-full bg-zinc-950 rounded overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 absolute top-0 left-0 w-1/3 animate-ping-progress" style={{
                  animation: 'ping-progress 1.2s infinite'
                }} />
              </div>
            )}
          </div>
        </div>

        {/* PILLAR 4: Automatización de Flujos */}
        <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6 sm:p-8 space-y-6 hover:border-[#00f0ff]/20 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#011e22] border border-cyan-500/30 text-cyan-400 font-mono text-[9px] font-bold tracking-wider">
                <Database className="h-3 w-3" />
                INTEGRACIONES API
              </div>
              <span className="font-mono text-[9px] font-black text-pink-500 bg-pink-500/5 border border-pink-500/20 px-2 py-0.5 rounded">
                TIEMPO DE DESPLIEGUE: 10 A 14 DÍAS HÁBILES
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Automatización de Flujos
            </h3>
            <div className="space-y-2 bg-[#000000]/0">
              <p className={`font-sans text-xs leading-relaxed text-zinc-400 font-light text-justify ${expandedCards.auto ? '' : 'line-clamp-2'}`}>
                Integración de herramientas en línea mediante webhooks estructurados and APIs seguras. Automatizamos el traspaso automático de leads de Facebook Ads o portales de captura hacia su HubSpot, envío automático de respuestas pre-configuradas a clientes, y alertas automáticas de contingencias técnicas o operativas.
              </p>
              <button 
                type="button"
                onClick={() => toggleExpand('auto')}
                className="text-[10px] font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
              >
                {expandedCards.auto ? 'Ver menos ↑' : 'Ver detalles ↓'}
              </button>
            </div>

            <ul className="space-y-2 text-xs font-light text-zinc-450 border-t border-zinc-900 pt-4 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Configuración de webhooks enriquecidos y control de reintentos automáticos.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Sincronización automatizada entre hojas de Google Sheets, CRM y pasarelas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Alertas automáticas por correo, Slack o WhatsApp ante incidencias de interés.</span>
              </li>
            </ul>
          </div>

          {/* Interactive Tool 4: Webhook Graph Line Flow */}
          <div className="rounded-xl border border-zinc-900 bg-black/95 p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase">FLUJO DE DATOS AUTOMATIZADO</span>
              <button 
                onClick={triggerPipelineMockEvent}
                className="font-mono text-[9px] text-[#00f0ff] font-semibold hover:text-white flex items-center gap-1 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-cyan-500/40 px-2 py-0.5 rounded cursor-pointer transition-colors"
                id="run-pipeline-btn"
              >
                PROBAR FLUJO
              </button>
            </div>

            {/* Graphical flow rendering matching screenshot */}
            <div className="flex flex-wrap items-center justify-center gap-2 py-2 font-mono text-[9px] font-bold text-center" id="workflow-visualizer">
              <div className={`px-2.5 py-1.5 rounded transition-all border ${
                activeStep === 'webhook' 
                  ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-md shadow-cyan-400/10' 
                  : 'bg-zinc-950 border-zinc-900 text-zinc-500'
              }`}>
                [WEBHOOK CLIENTE]
              </div>
              
              <span className="text-zinc-700 select-none">→</span>
              
              <div className={`px-2.5 py-1.5 rounded transition-all border ${
                activeStep === 'filtering' 
                  ? 'bg-[#1b1c2e] border-pink-400 text-white shadow-md shadow-pink-400/10' 
                  : 'bg-zinc-950 border-zinc-900 text-zinc-500'
              }`}>
                [FILTRADO DE DATOS]
              </div>
              
              <span className="text-zinc-700 select-none">→</span>
              
              <div className={`px-2.5 py-1.5 rounded transition-all border ${
                activeStep === 'crm' 
                  ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-md shadow-emerald-400/10' 
                  : 'bg-zinc-950 border-zinc-900 text-zinc-500'
              }`}>
                [CRM / SHEETS]
              </div>
            </div>

            {/* Micro active details */}
            <div className="flex justify-between items-center text-[8px] text-zinc-500 font-mono border-t border-zinc-900/60 pt-2 font-semibold">
              <span>ACTIVACIÓN: INMEDIATA</span>
              <span className="text-emerald-400">ESTADO: ACTIVO / 100% OK</span>
            </div>

            {/* Logs frame */}
            <div className="rounded bg-zinc-950 p-2 border border-zinc-900 max-h-[70px] overflow-y-auto space-y-1 font-mono text-[9px]">
              {pipelineLogs.map((log, idx) => (
                <div key={idx} className={`${idx === 0 ? 'text-zinc-300' : 'text-zinc-600'}`}>{log}</div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* 3. Plazos de entrega Table (Direct match with layout in image 11-12) */}
      <div className="space-y-6 px-4 sm:px-6 md:px-8" id="servicios-plazos-section">
        <div className="space-y-2">
          <h2 className="font-display text-xl sm:text-2xl font-black text-white tracking-widest uppercase">
            PLAZOS DE ENTREGA Y DESPLIEGUE DE SERVICIOS
          </h2>
          <p className="font-sans text-xs text-zinc-400 leading-normal max-w-2xl font-light">
            Los plazos listados garantizan un despliegue optimizado que incluye el período inicial de auditoría, pruebas internas de sanidad operacional y soporte post-servicios.
          </p>
        </div>

        {/* Table representation */}
        <div className="overflow-x-auto rounded-xl border border-zinc-900 bg-zinc-950/50">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-900 text-zinc-500 text-[10px] bg-zinc-950">
                <th className="py-4 px-6 font-bold uppercase tracking-wider">SERVICIO TÉCNICO</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">TIEMPO ESTIMADO</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">MANTENIMIENTO DE PRUEBAS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 text-zinc-400 font-sans">
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="py-4 px-6 font-mono text-xs font-bold text-white">Gestión de Datos y Excel Avanzado</td>
                <td className="py-4 px-6 font-mono font-bold text-pink-500">5 ~ 7 Días Hábiles</td>
                <td className="py-4 px-6 font-sans text-xs font-light text-zinc-400">Procesamiento inicial, auditoría de bases de datos, fórmulas y dashboards integrados.</td>
              </tr>
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="py-4 px-6 font-mono text-xs font-bold text-white">Asistencia Virtual y CRM</td>
                <td className="py-4 px-6 font-mono font-bold text-pink-500">3 ~ 5 Días Hábiles</td>
                <td className="py-4 px-6 font-sans text-xs font-light text-zinc-400">Configuración, homologación de leads en CRM de preferencia y puesta en marcha administrativa.</td>
              </tr>
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="py-4 px-6 font-mono text-xs font-bold text-white">Soporte Técnico y Sistemas</td>
                <td className="py-4 px-6 font-mono font-bold text-pink-500">7 ~ 10 Días Hábiles</td>
                <td className="py-4 px-6 font-sans text-xs font-light text-zinc-400">Mantenimiento preventivo, mapeo de infraestructura IT, auditoría informática y VPNs.</td>
              </tr>
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="py-4 px-6 font-mono text-xs font-bold text-white">Automatización Completa de Flujos</td>
                <td className="py-4 px-6 font-mono font-bold text-pink-500">10 ~ 14 Días Hábiles</td>
                <td className="py-4 px-6 font-sans text-xs font-light text-zinc-400">Integración profunda APIs, webhooks automatizados e ingesta redundante filtrada.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Diagnostico Técnico Bottom card */}
      <div className="mx-4 sm:mx-6 md:mx-8 rounded-2xl border border-zinc-900 bg-zinc-950 p-8 text-center space-y-5" id="servicios-diagnostic-cta">
        <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
          ¿NECESITA UN DIAGNÓSTICO TÉCNICO ENFOCADO A SUS METAS?
        </h3>
        <p className="font-sans text-xs text-zinc-450 leading-relaxed font-light max-w-xl mx-auto">
          Nuestros expertos analizarán sus procesos, bases de datos o sistemas actuales de manera gratuita para proponerle el plan ideal.
        </p>
        <button
          onClick={() => setActiveTab('CONTACTO')}
          id="soluciones-configurator-btn"
          className="rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:opacity-90 active:scale-95 text-white font-mono text-[10px] font-bold tracking-widest px-6 py-3.5 transition-all cursor-pointer shadow-lg uppercase"
        >
          IR AL CONFIGURADOR DE SOLUCIONES
        </button>
      </div>

    </div>
  );
}
