import { ServiceElement, TeamMember, TimelineMilestone, SupportChannel } from './types';
import avatarRoger from './assets/images/avatar_roger_1779390769535.png';
import avatarHendry from './assets/images/avatar_hendry_1779390786488.png';
import avatarJulieta from './assets/images/avatar_julieta_1779390801252.png';

export const SERVICES_DATA: ServiceElement[] = [
  {
    id: 'datos',
    name: 'Gestión de Datos y Excel Avanzado',
    title: 'Transformación, normalización y procesamiento seguro de bases en Excel y bases SQL. Diseño de macros VBA eficientes, reconciliación automática de inventarios, reportes de BI y dashboards personalizados que simplifican la toma de decisiones críticas con cero errores de transcripción.',
    shortDesc: 'Procesamiento masivo de datos (Data Entry), depuración de registros sin redundancias, macros VBA Avanzado y diseño de dashboards en Power BI / Excel.',
    longDesc: 'Transformación, normalización y procesamiento seguro de bases en Excel y bases SQL. Diseño de macros VBA eficientes, reconciliación automática de inventarios, reportes de BI y dashboards personalizados que simplifican la toma de decisiones críticas con cero errores de transcripción.',
    deployTime: '5 A 7 DÍAS HÁBILES',
    minDays: 5,
    maxDays: 7,
    badge: 'OPERACIONES DE DATOS',
    icon: 'BarChart3',
    benefits: [
      'Procesamiento de Datos (Data Entry) masivos y depuración estricta de redundancias.',
      'Creación de Macros VBA a medida para automatizar procesos manuales diarios.',
      'Formularios de captura automatizados con validación de tipos e inputs de datos.'
    ]
  },
  {
    id: 'crm',
    name: 'Asistencia Virtual y CRM',
    title: 'Soporte administrativo bilingüe altamente capacitado. Manejo de leads en CRM de clase mundial (HubSpot, Salesforce, Pipedrive, Zoho), clasificación de embudos comerciales, gestión técnica de correo de operaciones, administración de agendas complejas y excelente atención al cliente por canales digitales.',
    shortDesc: 'Soporte operativo y administración remota bilingüe. Saneamiento y mapeo de leads en HubSpot, Salesforce, Pipedrive y manejo de agendas complejas.',
    longDesc: 'Soporte administrativo bilingüe altamente capacitado. Manejo de leads en CRM de clase mundial (HubSpot, Salesforce, Pipedrive, Zoho), clasificación de embudos comerciales, gestión técnica de correo de operaciones, administración de agendas complejas y excelente atención al cliente por canales digitales.',
    deployTime: '3 A 5 DÍAS HÁBILES',
    minDays: 3,
    maxDays: 5,
    badge: 'ASISTENCIA CORPORATIVA',
    icon: 'Briefcase',
    benefits: [
      'Administración, ordenamiento y sanitización de registros dentro de tu CRM.',
      'Soporte al cliente de alta respuesta por sistemas de tickets o correos corporativos.',
      'Coordinación logística, control de agendas y agendamientos ejecutivos.'
    ]
  },
  {
    id: 'soporte',
    name: 'Soporte Técnico y Sistemas',
    title: 'Monitoreo y resolución de problemas sobre estaciones de trabajo, sistemas informáticos locales y almacenamiento distribuido. Configuración segura de redes virtuales privadas (VPNs), firewalls de protección empresarial, esquemas de respaldos redundantes (backups) y administración informática de servidores.',
    shortDesc: 'Mantenimiento preventivo local, configuración de firewalls perimetrales, VPN corporativas seguras, enrutamiento IT y gestión de redes.',
    longDesc: 'Monitoreo y resolución de problemas sobre estaciones de trabajo, sistemas informáticos locales y almacenamiento distribuido. Configuración segura de redes virtuales privadas (VPNs), firewalls de protección empresarial, esquemas de respaldos redundantes (backups) y administración informática de servidores.',
    deployTime: '7 A 10 DÍAS HÁBILES',
    minDays: 7,
    maxDays: 10,
    badge: 'INFRAESTRUCTURA TI',
    icon: 'Settings',
    benefits: [
      'Configuración y mantenimiento de firewalls para proteger redes empresariales.',
      'Auditoría e inventario detallado de hardware, software y licencias corporativas.',
      'Soporte informático preventivo y correctivo de errores en sistemas locales.'
    ]
  },
  {
    id: 'automatizacion',
    name: 'Automatización de Flujos',
    title: 'Integración de herramientas en línea mediante webhooks estructurados y APIs seguras. Automatizamos el traspaso automático de leads de Facebook Ads o portales de captura hacia su HubSpot, envío automático de respuestas pre-configuradas a clientes, y alertas automáticas de contingencias técnicas o operativas.',
    shortDesc: 'Integración avanzada de APIs mediante webhooks seguros con reintentos y alertas automatizadas a correos, Slack o CRM.',
    longDesc: 'Integración de herramientas en línea mediante webhooks estructurados y APIs seguras. Automatizamos el traspaso automático de leads de Facebook Ads o portales de captura hacia su HubSpot, envío automático de respuestas pre-configuradas a clientes, y alertas automáticas de contingencias técnicas o operativas.',
    deployTime: '10 A 14 DÍAS HÁBILES',
    minDays: 10,
    maxDays: 14,
    badge: 'INTEGRACIONES API',
    icon: 'Database',
    benefits: [
      'Configuración de webhooks enriquecidos y control de reintentos automáticos.',
      'Sincronización automatizada entre hojas de Google Sheets, CRM y pasarelas.',
      'Alertas automáticas por correo, Slack o WhatsApp ante incidencias de interés.'
    ]
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'roger',
    initials: 'RB',
    name: 'ROGER BOCIO',
    role: 'DIRECTOR DE OPERACIONES Y ARQUITECTURA',
    specialty: 'Sistemas Distribuidos & Base de Datos',
    desc: 'Especialista en la optimización lógica de bases documentales y control de redundancia informática corporativa.',
    avatar: avatarRoger
  },
  {
    id: 'hendry',
    initials: 'HV',
    name: 'HENDRY A. VALDEZ',
    role: 'LÍDER DE SOPORTE INFORMÁTICA & REDES',
    specialty: 'Ciberseguridad & VPNs',
    desc: 'Diseña e implementa firewalls integrados, planes preventivos de recuperación y resolución técnica de hardware local.',
    avatar: avatarHendry
  },
  {
    id: 'julieta',
    initials: 'JR',
    name: 'JULIETA DE LA ROSA',
    role: 'GESTORA SENIOR DE ASISTENCIA & CRM',
    specialty: 'Automatización HubSpot & Salesforce',
    desc: 'Responsable de la dirección de atención al cliente de alto nivel, agendas directivas y reconciliación de embudos de conversión.',
    avatar: avatarJulieta
  }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: '2023',
    title: 'ASENTAMIENTO & OPERACIÓN INICIAL',
    subtitle: 'FUNDACIÓN DE JULEONIX DIGITAL',
    desc: 'Nace la iniciativa con el propósito de erradicar inefficiencies en bases de datos corporativas. Consolidamos un equipo de expertos en Excel VBA Avanzado y soporte técnico de micro-sistemas de red.'
  },
  {
    year: '2024',
    title: 'EXPANSIÓN EN ASISTENCIA & CRM',
    subtitle: 'UNIFICACIÓN DE CANALES ADMINISTRATIVOS',
    desc: 'Ampliamos nuestra infraestructura para cubrir la asistencia virtual bilingüe. Integramos y sanitizamos datos de leads directamente dentro de CRM premium (HubSpot y Salesforce) para medianas y grandes empresas.'
  },
  {
    year: '2025',
    title: 'PILARES DE AUTOMATIZACIÓN & API INGESTION',
    subtitle: 'FLUJOS DE DATOS CON CERO REDUNDANCIA',
    desc: 'Lanzamos soluciones robustas de integración de APIs vía Webhooks seguros. Diseñamos sistemas interconectados que sincronizan correos, agendas en nube y pasarelas de pago de manera automatizada.'
  },
  {
    year: '2026',
    title: 'CONSOLIDACIÓN DE SOLUCIONES IT',
    subtitle: 'SOPORTE PERMANENTE 24/7',
    desc: 'Lideramos la operatividad técnica en España y Latinoamérica, soportando a más de 50 corporaciones con auditoría informática continua, VPN de alta ciberseguridad y procesamiento de datos sin errores de sintaxis.'
  }
];

export const CHANNELS_DATA: SupportChannel[] = [
  {
    id: 'email',
    label: 'CORREO ELECTRÓNICO',
    value: 'hello@juleonixdigital.com',
    desc: 'hello@juleonixdigital.com',
    icon: 'Mail'
  },
  {
    id: 'express',
    label: 'SOPORTE EXPRESS',
    value: 'Asignación de gestores en menos de 15 minutos de lunes a viernes.',
    desc: 'Asignación de gestores en menos de 15 minutos de lunes a viernes.',
    icon: 'Zap'
  },
  {
    id: 'horarios',
    label: 'HORARIOS DE OFICINA',
    value: 'Lunes a Viernes: 09:00 - 18:00 (CET) | 03:00 - 12:00 (EST)',
    desc: 'Lunes a Viernes: 09:00 - 18:00 (CET) | 03:00 - 12:00 (EST)',
    icon: 'Clock'
  }
];
