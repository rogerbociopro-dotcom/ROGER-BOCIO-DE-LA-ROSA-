import { useState, FormEvent } from 'react';
import { ActiveTab } from '../types';
import { 
  BarChart3, Briefcase, Settings, Database, CheckCircle2, Terminal, Activity, Plus, Check 
} from 'lucide-react';
// Mantén tus imports y lógica original aquí...

export default function ViewServicios({ setActiveTab }: ViewServiciosProps) {
  // [MANTÉN TUS ESTADOS Y FUNCIONES ORIGINALES AQUÍ: dataAuditStatus, crmTasks, etc.]

  return (
    <div className="space-y-20 py-10" id="view-servicios-root">
      
      {/* 1. Header Hero Block */}
      <div className="space-y-4 max-w-4xl mx-auto text-center px-4">
        <h1 className="font-display text-4xl font-extrabold text-white uppercase">Portafolio de Planes Juleonix</h1>
        <p className="text-zinc-400 text-sm font-light">Estructura escalable para optimizar, automatizar y delegar operaciones.</p>
      </div>

      {/* 2. Sección de Planes detallados */}
      <div className="px-4 sm:px-8 space-y-8">
        
        {/* PLAN STARTER */}
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-8">
          <div className="text-cyan-400 font-mono text-xs font-bold uppercase mb-4">Plan Starter: Operación y Organización</div>
          <p className="text-sm text-zinc-400 mb-6 italic">Ideal para emprendedores y pequeñas empresas que necesitan organización, asistencia operativa y soporte profesional para comenzar a escalar[cite: 1].</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Soporte administrativo bilingüe", "Atención al cliente digital", "Gestión básica de CRM (HubSpot, Salesforce, Zoho, Pipedrive)",
              "Administración de correos y agendas", "Entrada y organización de datos", "Asistente virtual asignado",
              "Reportes básicos en Excel", "Manejo inicial de redes", "Soporte técnico básico"
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> {s}[cite: 1]</div>
            ))}
          </div>
        </div>

        {/* PLAN SCALE */}
        <div className="rounded-2xl border border-pink-900/30 bg-pink-950/10 p-8">
          <div className="text-pink-400 font-mono text-xs font-bold uppercase mb-4">Plan Scale: Automatización y Crecimiento</div>
          <p className="text-sm text-zinc-400 mb-6 italic">Ideal para empresas en crecimiento que necesitan automatización, marketing y una estructura operativa avanzada[cite: 1]. Incluye TODO lo del plan Starter más:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Normalización avanzada de BD", "Automatización en Excel y SQL", "Macros VBA y Dashboards BI",
              "Automatización mediante APIs y Webhooks", "Integración leads Facebook Ads", "Backups y seguridad básica",
              "Marketing digital y Diseño web", "Equipo parcial asignado", "Sales Closers y seguimiento de leads"
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300"><CheckCircle2 className="h-4 w-4 text-pink-400" /> {s}[cite: 1]</div>
            ))}
          </div>
        </div>

        {/* PLAN ELITE */}
        <div className="rounded-2xl border border-indigo-900/30 bg-indigo-950/10 p-8">
          <div className="text-indigo-400 font-mono text-xs font-bold uppercase mb-4">Plan Elite: Solución Empresarial Completa</div>
          <p className="text-sm text-zinc-400 mb-6 italic">Solución para compañías que desean delegar operaciones, automatización, soporte y crecimiento internacional[cite: 1]. Incluye TODO lo del plan Scale más:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Equipo completo dedicado", "Líder/supervisor operativo", "Marketing y expansión",
              "Gestión avanzada de clientes y multicanal", "Atención políglota", "Administración técnica de servidores y redes",
              "VPNs y Firewalls empresariales", "Automatizaciones empresariales completas", "Internacionalización y estrategias"
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300"><CheckCircle2 className="h-4 w-4 text-indigo-400" /> {s}[cite: 1]</div>
            ))}
          </div>
        </div>
      </div>

      {/* [MANTÉN AQUÍ TUS WIDGETS ORIGINALES: Auditoría, CRM, Ping, Webhook] */}
      
    </div>
  );
}
