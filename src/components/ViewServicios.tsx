import { useState, FormEvent } from 'react';
import { ActiveTab } from '../types';
import { 
  BarChart3, 
  Briefcase, 
  Settings, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

interface ViewServiciosProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function ViewServicios({ setActiveTab }: ViewServiciosProps) {
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

  return (
    <div className="space-y-20 py-10" id="view-servicios-root">
      
      {/* Header Hero Block */}
      <div className="space-y-4 max-w-4xl mx-auto text-center px-4">
        <div className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase mb-1">
          // INGENIERÍA Y ASISTENCIA DE PRECISIÓN
        </div>
        <h1 className="font-display text-3xl sm:text-4.5xl font-extrabold text-white tracking-tight uppercase leading-none select-none">
          CATÁLOGO TÉCNICO DE SERVICIOS
        </h1>
      </div>

      {/* 1. División para Influencers y Podcasts */}
      <div className="space-y-6 px-4 sm:px-6 md:px-8 border-t border-zinc-900/60 pt-10">
        <div className="space-y-3 max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-widest uppercase">
            DIVISIÓN PARA INFLUENCERS Y PODCASTS
          </h2>
          <p className="font-sans text-xs text-zinc-400 leading-normal font-light">
            Juleonix Digital también contará con una división enfocada en creadores de contenido.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/45 p-8">
          <h4 className="text-white font-bold mb-4 uppercase text-sm">Servicios:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-400 text-xs">
            <li>• Gestión de redes sociales.</li>
            <li>• Edición profesional de videos.</li>
            <li>• Búsqueda de invitados para podcasts.</li>
            <li>• Marketing digital para influencers.</li>
            <li>• Gestión de colaboraciones con marcas.</li>
            <li>• Organización operativa.</li>
            <li>• Asistente virtual personalizado.</li>
            <li>• Negociación y cierre de colaboraciones.</li>
          </ul>
        </div>
      </div>

      {/* 2. Planes */}
      <div className="space-y-6 px-4 sm:px-6 md:px-8 border-t border-zinc-900/60 pt-10">
        <h2 className="font-display text-xl font-black text-white uppercase tracking-widest">PLANES OPERATIVOS</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* STARTER */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-8 space-y-4">
            <h3 className="text-2xl font-black text-white">STARTER</h3>
            <p className="text-xs text-zinc-400">Ideal para emprendedores y pequeñas empresas que necesitan organización, asistencia operativa y soporte profesional para comenzar a escalar.</p>
            <div className="text-xs text-zinc-400 space-y-2">
              <p className="font-bold text-cyan-400">Incluye:</p>
              <p>• Soporte administrativo bilingüe.</p>
              <p>• Atención al cliente por canales digitales.</p>
              <p>• Gestión básica de CRM (HubSpot, Salesforce, Zoho y Pipedrive).</p>
              <p>• Administración de correos y agendas.</p>
              <p>• Entrada y organización de datos.</p>
              <p>• Asistente virtual asignado.</p>
              <p>• Reportes básicos en Excel.</p>
              <p>• Manejo inicial de redes y asistencia operativa.</p>
              <p>• Soporte técnico básico para estaciones de trabajo.</p>
            </div>
          </div>

          {/* SCALE */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-8 space-y-4">
            <h3 className="text-2xl font-black text-white">SCALE</h3>
            <p className="text-xs text-zinc-400">Ideal para empresas en crecimiento que necesitan automatización, marketing y una estructura operativa más avanzada.</p>
            <div className="text-xs text-zinc-400 space-y-2">
              <p className="font-bold text-pink-400">Incluye TODO lo del plan Starter más:</p>
              <p>• Transformación y normalización avanzada de bases de datos.</p>
              <p>• Automatización de procesos en Excel y SQL.</p>
              <p>• Desarrollo de macros VBA.</p>
              <p>• Dashboards y reportes BI personalizados.</p>
              <p>• Reconciliación automática de inventarios.</p>
              <p>• Automatización mediante APIs y Webhooks.</p>
              <p>• Integración automática de leads desde Facebook Ads y formularios.</p>
              <p>• Configuración de backups y seguridad informática básica.</p>
              <p>• Marketing digital profesional.</p>
              <p>• Diseño web corporativo personalizado.</p>
              <p>• Equipo parcial asignado para soporte, marketing y automatización.</p>
              <p>• Supervisión operativa y seguimiento continuo.</p>
              <p>• Agentes especializados en cierre de ventas (Sales Closers).</p>
              <p>• Seguimiento y conversión de leads potenciales.</p>
            </div>
          </div>

          {/* ELITE */}
          <div className="rounded-2xl border border-purple-500/40 bg-zinc-950/90 p-8 space-y-4">
            <h3 className="text-2xl font-black text-white">ELITE</h3>
            <p className="text-xs text-zinc-400">Solución empresarial completa para compañías que desean delegar operaciones, automatización, soporte y crecimiento internacional.</p>
            <div className="text-xs text-zinc-400 space-y-2">
              <p className="font-bold text-purple-400">Incluye TODO lo del plan Scale más:</p>
              <p>• Equipo completo dedicado a su empresa.</p>
              <p>• Líder/supervisor operativo asignado.</p>
              <p>• Departamento especializado de marketing y expansión.</p>
              <p>• Gestión avanzada de clientes y soporte multicanal.</p>
              <p>• Atención bilingüe y políglota.</p>
              <p>• Administración técnica de servidores y redes.</p>
              <p>• Configuración avanzada de VPNs y firewalls empresariales.</p>
              <p>• Monitoreo y resolución de incidencias técnicas.</p>
              <p>• Automatizaciones empresariales completas.</p>
              <p>• Escalamiento e internacionalización de la empresa.</p>
              <p>• Optimización continua de procesos internos.</p>
              <p>• Respuesta prioritaria y soporte estratégico.</p>
              <p>• Gestión integral de operaciones digitales.</p>
              <p>• Desarrollo de sistemas organizativos personalizados.</p>
              <p>• Implementación de flujos automáticos para operaciones y ventas.</p>
              <p>• Equipo avanzado de cierre de ventas y captación comercial.</p>
              <p>•Estrategias de expansión nacional e internacional.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nota de Flexibilidad */}
      <div className="px-4 sm:px-6 md:px-8 mt-8">
        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 p-6">
          <p className="text-zinc-400 text-sm italic">
            Todos los servicios aquí descritos pueden solicitarse de forma individual según tus necesidades; no es obligatorio contratar un plan completo.
          </p>
        </div>
      </div>
    </div>
  );
}
