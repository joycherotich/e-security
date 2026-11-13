import { useState } from 'react'
import { ChevronDown, Mail, MessageCircle, Check } from 'lucide-react'
import { COMPANY, ROLES } from '../data'

const EXPERIENCE = ['No experience yet', 'Under 1 year', '1 to 3 years', '3 to 5 years', 'Over 5 years']

export default function Careers() {
  const [openId, setOpenId] = useState(ROLES[0].id)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', role: ROLES[0].title,
    experience: EXPERIENCE[0], certificate: false, message: '',
  })

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const body = [
    `Position: ${form.role}`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || '-'}`,
    `Experience: ${form.experience}`,
    `Security training certificate: ${form.certificate ? 'Yes' : 'No'}`,
    '',
    form.message,
    '',
    'I will attach my CV and certificates to this email.',
  ].join('\n')

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Job application: ${form.role} - ${form.name}`)
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const whatsappHref = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Job application\n' + body)}`

  const applyFor = (title) => {
    setForm((f) => ({ ...f, role: title }))
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="careers" className="bg-zinc-50 text-ink">
      <div className="section">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold leading-tight sm:text-5xl">
            Build a career with E-Security
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            We are growing our first team of guards and supervisors in Nairobi. We hire for character and
            reliability, then train, equip and supervise you properly.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="font-display text-xl font-semibold text-gold-deep">Open positions</h3>
            <ul className="mt-4 divide-y divide-zinc-200 border-y border-zinc-200">
              {ROLES.map((r) => {
                const open = openId === r.id
                return (
                  <li key={r.id}>
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : r.id)}
                      aria-expanded={open}
                      aria-controls={`role-${r.id}`}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span>
                        <span className="block font-display text-xl font-semibold">{r.title}</span>
                        <span className="text-sm text-zinc-600">{r.type} · {r.openings}</span>
                      </span>
                      <ChevronDown className={`h-6 w-6 shrink-0 text-gold-deep transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {open && (
                      <div id={`role-${r.id}`} className="pb-7">
                        <p className="leading-relaxed text-zinc-600">{r.summary}</p>
                        <div className="mt-5 grid gap-6 sm:grid-cols-2">
                          <div>
                            <h4 className="font-display text-base font-semibold">What you will do</h4>
                            <ul className="mt-2 space-y-2 text-zinc-600">
                              {r.duties.map((d) => (
                                <li key={d} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />{d}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-display text-base font-semibold">What we look for</h4>
                            <ul className="mt-2 space-y-2 text-zinc-600">
                              {r.needs.map((d) => (
                                <li key={d} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />{d}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <button type="button" onClick={() => applyFor(r.title)} className="btn btn-gold mt-6 !py-2">
                          Apply for this role
                        </button>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-10 rounded-sm border border-gold bg-gold/10 p-6">
              <h3 className="font-display text-xl font-semibold">What you can expect from us</h3>
              <ul className="mt-3 grid gap-2 text-zinc-600 sm:grid-cols-2">
                {[
                  'Induction on site instructions, customer care and safety',
                  'Clear duty rosters and proper rest periods',
                  'Drinking water and sanitation at your post',
                  'Wages and statutory deductions handled correctly',
                  'Respect, dignity and no discrimination',
                  'A supervisor who follows up on your concerns',
                ].map((t) => (
                  <li key={t} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />{t}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-zinc-600">
                No guard is placed on regulated duties until vetting, training and individual PSRA
                registration (including Guard Force Number where required) are complete.
              </p>
            </div>
          </div>

          <form id="apply-form" onSubmit={submit} className="h-fit rounded-sm border border-zinc-200 bg-white p-6 sm:p-8 lg:col-span-5">
            <h3 className="font-display text-2xl font-semibold">Apply now</h3>
            <p className="mt-1 text-sm text-zinc-600">We will open your email app with the details filled in. Attach your CV and certificates before sending.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="c-role" className="mb-1.5 block text-sm font-semibold">Position</label>
                <select id="c-role" className="field field-light" value={form.role} onChange={set('role')}>
                  {ROLES.map((r) => <option key={r.id}>{r.title}</option>)}
                  <option>General application</option>
                </select>
              </div>
              <div>
                <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold">Full name</label>
                <input id="c-name" required className="field field-light" value={form.name} onChange={set('name')} autoComplete="name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-phone" className="mb-1.5 block text-sm font-semibold">Phone</label>
                  <input id="c-phone" required type="tel" className="field field-light" value={form.phone} onChange={set('phone')} autoComplete="tel" placeholder="07xx xxx xxx" />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold">Email (optional)</label>
                  <input id="c-email" type="email" className="field field-light" value={form.email} onChange={set('email')} autoComplete="email" />
                </div>
              </div>
              <div>
                <label htmlFor="c-exp" className="mb-1.5 block text-sm font-semibold">Security experience</label>
                <select id="c-exp" className="field field-light" value={form.experience} onChange={set('experience')}>
                  {EXPERIENCE.map((x) => <option key={x}>{x}</option>)}
                </select>
              </div>
              <label className="flex items-center gap-3 text-sm">
                <input type="checkbox" checked={form.certificate} onChange={set('certificate')} className="h-5 w-5 accent-[#f2b705]" />
                I hold a security training certificate
              </label>
              <div>
                <label htmlFor="c-msg" className="mb-1.5 block text-sm font-semibold">Anything we should know</label>
                <textarea id="c-msg" rows={3} className="field field-light" value={form.message} onChange={set('message')} />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="btn btn-gold flex-1"><Mail className="h-5 w-5" aria-hidden="true" />Apply by email</button>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-outline-dark flex-1"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp</a>
            </div>
            {sent && (
              <p role="status" className="mt-4 text-sm text-gold-deep">
                Your email app should be open. If not, write to {COMPANY.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
