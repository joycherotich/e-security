import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { COMPANY } from '../data'

const PREMISES = ['Office or commercial building', 'Shop or retail', 'Warehouse or industrial', 'Residential or apartments', 'Event', 'Other']

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', premises: PREMISES[0], guards: '', message: '' })
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }))

  const text = [
    'Guard quote request',
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Premises: ${f.premises}`,
    `Guards needed: ${f.guards || 'Not sure yet'}`,
    f.message && `Details: ${f.message}`,
  ].filter(Boolean).join('\n')

  const sendEmail = (e) => {
    e.preventDefault()
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent('Guard quote request - ' + f.name)}&body=${encodeURIComponent(text)}`
  }
  const wa = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`

  return (
    <section id="contact" className="bg-ink-soft">
      <div className="section">
        <h2 className="max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-5xl">
          We secure your property, people and assets
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="h-7 w-7 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-sm text-white/60">Call or WhatsApp</p>
                  <a href={`tel:${COMPANY.phoneTel}`} className="font-display text-2xl font-semibold hover:text-gold">{COMPANY.phoneDisplay}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="h-7 w-7 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <a href={`mailto:${COMPANY.email}`} className="break-all text-lg font-semibold hover:text-gold">{COMPANY.email}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="h-7 w-7 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-sm text-white/60">Office</p>
                  <p className="text-lg font-semibold">{COMPANY.address}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-sm border border-ink-line">
              <iframe
                title="Map of E-Security Guard Services Ltd, TRM Roysambu, Nairobi"
                src="https://www.google.com/maps?q=TRM+Roysambu+Nairobi&output=embed"
                loading="lazy"
                className="h-64 w-full border-0 grayscale"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={sendEmail} className="h-fit rounded-sm border border-ink-line bg-ink p-6 sm:p-8 lg:col-span-7">
            <h3 className="font-display text-2xl font-semibold">Request a guard quote</h3>
            <p className="mt-1 text-sm text-white/60">Tell us about your premises. We reply with a site visit proposal.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="q-name" className="mb-1.5 block text-sm font-semibold">Your name</label>
                <input id="q-name" required className="field" value={f.name} onChange={set('name')} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="q-phone" className="mb-1.5 block text-sm font-semibold">Phone</label>
                <input id="q-phone" required type="tel" className="field" value={f.phone} onChange={set('phone')} autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="q-prem" className="mb-1.5 block text-sm font-semibold">Type of premises</label>
                <select id="q-prem" className="field" value={f.premises} onChange={set('premises')}>
                  {PREMISES.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="q-guards" className="mb-1.5 block text-sm font-semibold">Guards needed</label>
                <input id="q-guards" inputMode="numeric" className="field" value={f.guards} onChange={set('guards')} placeholder="Not sure yet" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="q-msg" className="mb-1.5 block text-sm font-semibold">Details</label>
                <textarea id="q-msg" rows={4} className="field" value={f.message} onChange={set('message')} placeholder="Location, hours of cover, day or night shifts" />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="btn btn-gold flex-1"><Mail className="h-5 w-5" aria-hidden="true" />Send by email</button>
              <a href={wa} target="_blank" rel="noreferrer" className="btn btn-outline flex-1"><MessageCircle className="h-5 w-5" aria-hidden="true" />Send on WhatsApp</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
