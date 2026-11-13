import Icon from './Icon'
import { SERVICES } from '../data'

export default function Services() {
  return (
    <section id="services" className="bg-white text-ink">
      <div className="section">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl font-semibold leading-tight sm:text-5xl">
              Guarding for the places people work and live
            </h2>
            <p className="mt-5 max-w-sm text-lg text-zinc-600">
              Every service starts with a written agreement covering scope, fees, working hours and
              responsibilities.
            </p>
          </div>

          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {SERVICES.map((s) => (
              <li key={s.title} className="flex gap-4 border-t border-zinc-200 py-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-gold">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-zinc-600">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
          Our guards are private security officers. They do not represent themselves as police or public
          officers and act within the powers of a private person under Kenyan law.
        </p>
      </div>
    </section>
  )
}
