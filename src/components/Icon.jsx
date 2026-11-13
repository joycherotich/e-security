import {
  ShieldCheck, DoorOpen, Building2, Home, Users, ClipboardList,
  BadgeCheck, Fingerprint, Timer, Headset, Wallet, HeartHandshake,
} from 'lucide-react'

const MAP = {
  ShieldCheck, DoorOpen, Building2, Home, Users, ClipboardList,
  BadgeCheck, Fingerprint, Timer, Headset, Wallet, HeartHandshake,
}

export default function Icon({ name, className = '' }) {
  const Cmp = MAP[name] || ShieldCheck
  return <Cmp className={className} aria-hidden="true" strokeWidth={1.75} />
}
