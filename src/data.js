// Single place to edit company details used across the site.
export const COMPANY = {
  name: 'E-Security Guard Services Ltd',
  short: 'E-Security',
  tagline: 'Your Safety, Our Priority',
  phoneDisplay: '0703 226 153',
  phoneTel: '+254703226153',
  whatsapp: '254703226153',
  email: 'esecurityguardserviceltd@gmail.com',
  address: 'TRM, Roysambu, Nairobi, Kenya',
  // Keep this wording accurate. Update it once PSRA issues the licence,
  // and add the registration / licence numbers below.
  psraStatus: 'PSRA registration in progress',
  psraNumber: '',
  companyRegNumber: '',
}

export const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why choose us' },
  { href: '#how-we-work', label: 'How we work' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
]

export const ROLES = [
  {
    id: 'guard',
    title: 'Security Guard',
    type: 'Full-time, shift-based',
    openings: 'Initial team of 10',
    summary:
      'Hold an assigned post at an office, shop, warehouse or residential property, following the written site instructions and reporting to your supervisor.',
    duties: [
      'Control the gate, greet visitors and keep visitor and vehicle records',
      'Carry out routine patrols within the assigned premises',
      'Record and report incidents, hazards and suspicious activity promptly',
      'Complete accurate shift handovers',
    ],
    needs: [
      'Valid national ID and verifiable references',
      'Security training certificate (or willingness to complete approved training)',
      'Fit for standing duty and shift work',
      'Honest, alert and respectful toward the public',
    ],
  },
  {
    id: 'supervisor',
    title: 'Operations / Security Supervisor',
    type: 'Full-time',
    openings: '1 position',
    summary:
      'Run rosters, inspect posts and follow up on incidents so every site is covered and every client hears from us.',
    duties: [
      'Prepare duty rosters and check attendance',
      'Visit sites, inspect posts and review records',
      'Follow up incidents and report to clients and management',
      'Coach guards on procedures and conduct',
    ],
    needs: [
      'Previous guarding or supervisory experience',
      'Meets PSRA registration requirements for the role',
      'Good record-keeping and communication',
      'Able to travel between sites',
    ],
  },
  {
    id: 'leader',
    title: 'Site Team Leader',
    type: 'Full-time, shift-based',
    openings: 'Where a site needs one',
    summary:
      'Coordinate the day-to-day running of a larger post: attendance, communication with the supervisor, and a steady example on duty.',
    duties: [
      'Coordinate the guards on your post each shift',
      'Check attendance and equipment',
      'Pass incidents and client requests to the supervisor',
    ],
    needs: [
      'Guarding experience and a clean work record',
      'Clear communication in English and Kiswahili',
      'Security training certificate',
    ],
  },
]

export const SERVICES = [
  {
    icon: 'ShieldCheck',
    title: 'Security guards and patrols',
    text: 'Static guards for your premises with routine patrols inside the assigned area and a written record of every shift.',
  },
  {
    icon: 'DoorOpen',
    title: 'Access control and reception',
    text: 'Gate control, visitor assistance and ID checks so you know who comes in, when, and who they came to see.',
  },
  {
    icon: 'Building2',
    title: 'Commercial and corporate sites',
    text: 'Guarding for offices, shops, warehouses and institutions, with opening and closing checks and key-control logs.',
  },
  {
    icon: 'Home',
    title: 'Residential and apartments',
    text: 'Courteous, vigilant posts for apartment blocks and homes, treating residents and visitors with respect.',
  },
  {
    icon: 'Users',
    title: 'Event security and crowd control',
    text: 'Temporary guarding for events, offered where it fits our approved scope and available staff.',
  },
  {
    icon: 'ClipboardList',
    title: 'Incident reporting',
    text: 'Calm, accurate reporting to you and, when needed, to the police or emergency services, while preserving evidence.',
  },
]

export const REASONS = [
  { icon: 'BadgeCheck', title: 'Trained, professional guards', text: 'Induction on site instructions, customer care, incident reporting, safety and human rights before any post.' },
  { icon: 'Fingerprint', title: 'Strict screening and vetting', text: 'Identity checks, references, employment history and role-relevant background checks for every guard.' },
  { icon: 'Timer', title: 'Prompt response', text: 'Hazards, damage and emergencies are reported to you straight away and escalated to the right agency.' },
  { icon: 'Headset', title: '24/7 support', text: 'One named contact for operational matters and complaints, reachable by phone or WhatsApp.' },
  { icon: 'Wallet', title: 'Competitive rates', text: 'A written agreement that sets out scope, fees and working hours, so there are no surprises.' },
  { icon: 'HeartHandshake', title: 'Customer-centric service', text: 'Regular service reviews and corrective action wherever we find a gap.' },
]

export const STEPS = [
  { title: 'Site visit and risk review', text: 'We walk the premises with you, note the entry points and risks, and agree what the post must cover.' },
  { title: 'Written site instructions', text: 'Post, hours, reporting line, access rules, patrol areas and emergency contacts go in writing, agreed with you.' },
  { title: 'Guards deployed and supervised', text: 'Identified, uniformed guards start on a duty roster. A supervisor inspects the post and checks handovers.' },
  { title: 'Reports and regular reviews', text: 'You get the agreed reports and incident notifications, and we review service with you and fix any gaps.' },
]

// Real photos: drop files into public/images/ and set the paths here.
// Leave empty to show the clean brand panel instead (no photo needed).
export const IMAGES = {
  hero: '/images/hero.jpg', // photo shown in the hero (set to '' for the logo panel)
  heroAlt: 'Security guard in a high-visibility vest on patrol',
  team: [], // e.g. [{ src: '/images/guard-1.jpg', alt: 'E-Security guard at a gate' }, ...] (up to 3, portrait)
}
