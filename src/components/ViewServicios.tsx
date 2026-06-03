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
    starter: false,
    scale: false,
    elite: false
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
          CATÁLOGO TÉCNICO DE SERVICIOS
        </h1>
        <p className="text-zinc-400 text-sm font-light max-w-2xl mx-auto leading-relaxed">
          Detalle metodológico, capacidades de infraestructura y plazos garantizados de despliegue para cada uno de nuestros planes de soporte corporativo.
        </p>
      </div>

      {/* 2. Grid of 3 Plan levels: STARTER, SCALE, ELITE */}
      <div className="space-y-6 px-4 sm:px-6 md:px-8 border-t border-zinc-900/60 pt-10">
        <div className="space-y-2 mb-4">
          <div className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase">// PLANES DE RECONCILIACIÓN Y SOPORTE</div>
          <h2 className="font-display text-xl sm:text-2xl font-black text-white tracking-widest uppercase">
            NUESTROS PLANES OPERATIVOS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="servicios-pillars-grid">
          
          {/* STARTER */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6 sm:p-8 space-y-6 hover:border-cyan-500/20 transition-all duration-300 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#09252c] border border-cyan-500/30 text-cyan-400 font-mono text-[9px] font-bold tracking-wider">
                  <BarChart3 className="h-3 w-3" />
                  EFICIENCIA BÁSICA
                </div>
              </div>

              <div className="border-b border-zinc-900 pb-3">
                <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  STARTER
                </h3>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-1">Saneamiento & Soportes Esenciales</p>
              </div>

              <div className="space-y-2 bg-[#000000]/0">
                <p className={`font-sans text-xs leading-relaxed text-zinc-400 font-light text-justify ${expandedCards.starter ? '' : 'line-clamp-3'}`}>
                  Ideal para emprendedores y pequeñas empresas que necesitan organización, asistencia operativa y soporte profesional para comenzar a escalar.
                </p>
                <button 
                  type="button"
                  onClick={() => toggleExpand('starter')}
                  className="text-[10px] font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
                >
                  {expandedCards.starter ? 'Ver menos ↑' : 'Ver detalles ↓'}
                </button>
              </div>

              <ul className="space-y-2.5 text-xs font-light text-zinc-400 border-t border-zinc-900 pt-4 font-sans">
                <li className="font-mono text-[9px] font-bold text-cyan-400 bg-cyan-400/5 border border-cyan-400/20 px-2 py-1 rounded inline-block mb-1">
                  INCLUYE:
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Soporte administrativo bilingüe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Atención al cliente por canales digitales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Gestión básica de CRM (HubSpot, Salesforce, Zoho y Pipedrive).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Administración de correos y agendas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Entrada y organización de datos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Asistente virtual asignado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Reportes básicos en Excel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Manejo inicial de redes y asistencia operativa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Soporte técnico básico para estaciones de trabajo.</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between">
              <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase">SOPORTE BÁSICO INCLUIDO</span>
              <a
                href="https://wa.me/message/AMNIPYTYFMYCE1?text=Hola,%20me%20interesa%20cotizar%20el%20Starter%20Plan%20de%20Juleonix%20Digital."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono font-bold text-cyan-400 hover:underline transition-all flex items-center gap-1"
              >
                COTIZAR ESTE &rarr;
              </a>
            </div>
          </div>

          {/* SCALE */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6 sm:p-8 space-y-6 hover:border-pink-500/25 transition-all duration-300 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#31091e] border border-pink-500/30 text-pink-400 font-mono text-[9px] font-bold tracking-wider">
                  <Briefcase className="h-3 w-3" />
                  CRECIMIENTO & FLUJOS
                </div>
              </div>

              <div className="border-b border-zinc-900 pb-3">
                <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  SCALE
                </h3>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-1">Automatización & Sistemas Interconectados</p>
              </div>

              <div className="space-y-2 bg-[#000000]/0">
                <p className={`font-sans text-xs leading-relaxed text-zinc-400 font-light text-justify ${expandedCards.scale ? '' : 'line-clamp-3'}`}>
                  Ideal para empresas en crecimiento que necesitan automatización, marketing y una estructura operativa más avanzada.
                </p>
                <button 
                  type="button"
                  onClick={() => toggleExpand('scale')}
                  className="text-[10px] font-mono font-bold text-pink-500 hover:text-pink-400 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
                >
                  {expandedCards.scale ? 'Ver menos ↑' : 'Ver detalles ↓'}
                </button>
              </div>

              <ul className="space-y-2.5 text-xs font-light text-zinc-400 border-t border-zinc-900 pt-4 font-sans">
                <li className="font-mono text-[9px] font-bold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2 py-1 rounded inline-block mb-1">
                  Incluye TODO lo del plan Starter más:
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Transformación y normalización avanzada de bases de datos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Automatización de procesos en Excel y SQL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Desarrollo de macros VBA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Dashboards y reportes BI personalizados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Reconciliación automática de inventarios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Automatización mediante APIs y Webhooks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Integración automática de leads desde Facebook Ads y formularios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Configuración de backups y seguridad informática básica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Marketing digital profesional.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Diseño web corporativo personalizado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Equipo parcial asignado para soporte, marketing y automatización.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Supervisión operativa y seguimiento continuo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Agentes especializados en cierre de ventas (Sales Closers).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Seguimiento y conversión de leads potenciales.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between">
              <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase">SISTEMAS INTEGRALES</span>
              <a
                href="https://wa.me/message/AMNIPYTYFMYCE1?text=Hola,%20me%20interesa%20cotizar%20el%20Scale%20Plan%20de%20Juleonix%20Digital."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono font-bold text-pink-500 hover:underline transition-all flex items-center gap-1"
              >
                COTIZAR ESTE &rarr;
              </a>
            </div>
          </div>

          {/* ELITE */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-purple-500/40 bg-zinc-950/90 p-6 sm:p-8 space-y-6 hover:border-purple-400/70 transition-all duration-300 relative overflow-hidden group shadow-[0_0_25px_rgba(154,0,255,0.08)]">
            {/* Popular Tag Badge background */}
            <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden pointer-events-none">
              <div className="absolute transform rotate-45 bg-gradient-to-r from-purple-600 to-pink-600 text-[8px] font-mono font-black text-center text-white py-1.5 w-28 -right-8 top-4 shadow-sm tracking-widest uppercase">
                RECOMENDADO
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#10102d] border border-purple-500/50 text-purple-300 font-mono text-[9px] font-bold tracking-wider">
                  <Settings className="h-3 w-3 animate-spin duration-3000" />
                  OPERACIÓN GLOBAL
                </div>
              </div>

              <div className="border-b border-zinc-900 pb-3">
                <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  ELITE
                </h3>
                <p className="text-xs text-zinc-450 font-mono uppercase mt-1">Infraestructura Pro & SLA 15m</p>
              </div>

              <div className="space-y-2 bg-[#000000]/0">
                <p className={`font-sans text-xs leading-relaxed text-zinc-400 font-light text-justify ${expandedCards.elite ? '' : 'line-clamp-3'}`}>
                  Solución empresarial completa para compañías que desean delegar operaciones, automatización, soporte y crecimiento internacional.
                </p>
                <button 
                  type="button"
                  onClick={() => toggleExpand('elite')}
                  className="text-[10px] font-mono font-bold text-purple-400 hover:text-purple-300 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
                >
                  {expandedCards.elite ? 'Ver menos ↑' : 'Ver detalles ↓'}
                </button>
              </div>

              <ul className="space-y-2.5 text-xs font-light text-zinc-440 border-t border-zinc-850 pt-4 font-sans">
                <li className="font-mono text-[9px] font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded inline-block mb-1">
                  Incluye TODO lo del plan Scale más:
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Equipo completo dedicado a su empresa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Líder/supervisor operativo asignado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Departamento especializado de marketing y expansión.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Gestión avanzada de clientes y soporte multicanal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Atención bilingüe y políglota.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Administración técnica de servidores y redes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Configuración avanzada de VPNs y firewalls empresariales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Monitoreo y resolución de incidencias técnicas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Automatizaciones empresariales completas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Escalamiento e internacionalización de la empresa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Optimización continua de procesos internos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Respuesta prioritaria y soporte estratégico.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Gestión integral de operaciones digitales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Desarrollo de sistemas organizativos personalizados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Implementación de flujos automáticos para operaciones y ventas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Equipo avanzado de cierre de ventas y captación comercial.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Estrategias de expansión nacional e internacional.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="font-mono text-[9px] text-zinc-450 font-bold uppercase">ALTA DISPONIBILIDAD</span>
              <a
                href="https://wa.me/message/AMNIPYTYFMYCE1?text=Hola,%20me%20interesa%20cotizar%20el%20Elite%20Plan%20de%20Juleonix%20Digital."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono font-bold text-purple-400 hover:underline transition-all flex items-center gap-1"
              >
                COTIZAR ESTE &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Nota destacada sobre flexibilidad de contratación */}
        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 p-6 flex flex-col md:flex-row items-center justify-between gap-4 mt-8" id="nota-flexibilidad-contratacion">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-cyan-400 shrink-0 animate-pulse" />
            <div className="space-y-0.5">
              <h4 className="font-display text-xs font-black text-white uppercase tracking-wider">MÁXIMA FLEXIBILIDAD OPERATIVA</h4>
              <p className="font-sans text-xs text-zinc-400 leading-normal max-w-2xl font-light">
                Todos los servicios aquí descritos pueden solicitarse de forma individual según tus necesidades; no es obligatorio contratar un plan completo.
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('CONTACTO')}
            className="font-mono text-[9px] font-bold text-cyan-400 bg-cyan-400/5 hover:bg-cyan-400/15 border border-cyan-400/35 hover:border-cyan-400 px-4 py-2.5 rounded-lg transition-all uppercase whitespace-nowrap cursor-pointer"
          >
            Consultar servicio individual
          </button>
        </div>

      </div>

      {/* Nueva División: para Influencers y Podcasts */}
      <div className="space-y-6 px-4 sm:px-6 md:px-8 border-t border-zinc-900/60 pt-10" id="division-influencers-podcasts">
        <div className="space-y-3 max-w-4xl">
          <div className="font-mono text-xs text-purple-400 font-bold tracking-widest uppercase">// ESPECIALIZACIÓN CREATIVA Y DE ALCANCE</div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-widest uppercase">
            DIVISIÓN PARA INFLUENCERS Y PODCASTS
          </h2>
          <p className="font-sans text-xs text-zinc-400 leading-normal font-light max-w-2xl">
            Soluciones operativas, creativas y comerciales diseñadas estratégicamente para maximizar el impacto de creadores de contenido, optimizar workflows de publicación y gestionar alianzas corporativas de alto nivel.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/45 p-6 md:p-8 space-y-6 hover:border-purple-500/20 transition-all duration-300 relative group overflow-hidden">
          {/* Subtle decoration line or gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Gestión de redes sociales", desc: "Planificación estratégica de contenidos, moderación activa de comunidades y optimización de interacción." },
              { title: "Edición profesional de videos", desc: "Formatos dinámicos y de alta retención optimizados para YouTube, TikTok, Shorts y Reels." },
              { title: "Búsqueda de invitados para podcasts", desc: "Gestión de contactos y coordinación logística con invitados estratégicos y de alto perfil." },
              { title: "Marketing digital para influencers", desc: "Campañas de visibilidad pagada y orgánica para potenciar creadores y conversiones." },
              { title: "Gestión de colaboraciones con marcas", desc: "Enlace comercial activo, administración de acuerdos publicitarios y patrocinios de marcas." },
              { title: "Organización operativa", desc: "Soporte de back-office integrado, calendarios de producción y flujos eficientes de entrega." },
              { title: "Asistente virtual personalizado", desc: "Delegación ágil de tareas operativas y rutinarias, control de agenda y respuestas inmediatas." },
              { title: "Negociación y cierre de colaboraciones", desc: "Representación profesional encargada de maximizar el valor de sus acuerdos comerciales y contratos de marca." },
            ].map((item, index) => (
              <div key={index} className="flex gap-2.5 items-start p-3 rounded-xl hover:bg-zinc-900/30 transition-colors">
                <CheckCircle2 className="h-4.5 w-4.5 text-purple-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-display text-xs font-black text-white uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">// SOPORTE CREATIVO INTEGRAL</span>
              <p className="font-sans text-[11px] text-zinc-400 font-light mt-0.5">Gestión unificada de redes, edición, patrocinios y logística para creadores de contenido y podcast.</p>
            </div>
            
            <button
              onClick={() => setActiveTab('CONTACTO')}
              className="font-mono text-[10px] font-bold text-white bg-purple-600 hover:bg-purple-500 border border-purple-500 px-5 py-3 rounded-lg transition-all uppercase whitespace-nowrap cursor-pointer hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] duration-200"
            >
              CONTACTAR DIVISIÓN &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* 4. Plazos de entrega Table (STARTER, SCALE, ELITE) */}
      <div className="space-y-6 px-4 sm:px-6 md:px-8" id="servicios-plazos-section">
        <div className="space-y-2">
          <h2 className="font-display text-xl sm:text-2xl font-black text-white tracking-widest uppercase">
            TIEMPOS DE DESPLIEGUE Y COMPROMISO DE CALIDAD (SLA)
          </h2>
          <p className="font-sans text-xs text-zinc-400 leading-normal max-w-2xl font-light">
            Cada tiempo estimado incluye el período inicial de diagnóstico, saneamiento completo estructurado, auditoría interna redundante y soporte técnico de ajuste.
          </p>
        </div>

        {/* Table representation */}
        <div className="overflow-x-auto rounded-xl border border-zinc-900 bg-zinc-950/50">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-900 text-zinc-500 text-[10px] bg-zinc-950">
                <th className="py-4 px-6 font-bold uppercase tracking-wider">PLAN ADQUIRIDO</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">TIEMPO ESTIMADO</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">NIVEL DE SERVICIO PREVENTIVO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 text-zinc-400 font-sans">
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="py-4 px-6 font-mono text-xs font-bold text-white">Plan STARTER (Saneamiento Esencial)</td>
                <td className="py-4 px-6 font-mono font-bold text-cyan-400">3 ~ 5 Días Hábiles</td>
                <td className="py-4 px-6 font-sans text-xs font-light text-zinc-400">Establecimiento de macros, saneamiento de bases, correcciones de errores en CRM y soporte técnico preventivo.</td>
              </tr>
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="py-4 px-6 font-mono text-xs font-bold text-white">Plan SCALE (Sistemas Sincronizados)</td>
                <td className="py-4 px-6 font-mono font-bold text-pink-500">5 ~ 7 Días Hábiles</td>
                <td className="py-4 px-6 font-sans text-xs font-light text-zinc-400">Instalación y normalización de Webhooks automáticos, control de reintentos API de leads y VPNs locales seguras.</td>
              </tr>
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="py-4 px-6 font-mono text-xs font-bold text-white">Plan ELITE (Empresarial SLA Avanzado)</td>
                <td className="py-4 px-6 font-mono font-bold text-purple-400">7 ~ 10 Días Hábiles</td>
                <td className="py-4 px-6 font-sans text-xs font-light text-zinc-400">Monitoreo continuo 24/7 de redes y servidores, tolerancia total a fallos, dashboards directos Power BI y asistencia con SLA &lt; 15m.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Diagnostico Técnico Bottom card */}
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
