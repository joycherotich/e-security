import { STEPS } from '../data'

export default function Process() {
  return (
    <section id="how-we-work" className="bg-white text-ink">
      <div className="section">
        <h2 className="max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-5xl">
          How an assignment starts
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative border-t-4 border-gold pt-5">
              <span className="font-display text-4xl font-bold text-gold-deep">{i + 1}</span>
              <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
