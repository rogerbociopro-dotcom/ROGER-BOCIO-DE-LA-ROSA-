export type ActiveTab = 'INICIO' | 'SERVICIOS' | 'NOSOTROS' | 'CONTACTO';

export interface ServiceElement {
  id: string;
  name: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  deployTime: string;
  minDays: number;
  maxDays: number;
  badge: string;
  icon: string;
  benefits: string[];
}

export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  specialty: string;
  desc: string;
  avatar?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  desc: string;
}

export interface SupportChannel {
  id: string;
  label: string;
  value: string;
  desc: string;
  icon: string;
}
