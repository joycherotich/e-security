import Icon from './Icon'
import { REASONS } from '../data'

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-ink">
      <div className="section">
        <h2 className="max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-5xl">
          Why clients choose E-Security
        </h2>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-sm bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title} className="bg-ink-soft p-7">
              <Icon name={r.icon} className="h-9 w-9 text-gold" />
              <dt className="mt-4 font-display text-xl font-semibold">{r.title}</dt>
              <dd className="mt-2 leading-relaxed text-white/70">{r.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
