import { BadgeCheck, Clock, FileText } from 'lucide-react'
import { COMPANY, IMAGES } from '../data'

const DIAGONAL = 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="hero-rise relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8 lg:py-24 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-10">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-sm border border-gold/60 bg-gold/10 px-3 py-1.5 text-sm font-semibold text-gold-light">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            {COMPANY.psraStatus}
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.12] sm:text-5xl xl:text-6xl">
            Professional security for a <span className="text-gold">safer Kenya.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Trained, vetted guards for offices, shops, warehouses and homes in Nairobi. Written site
            instructions, active supervision and clear reporting on every post.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-gold">Request a guard quote</a>
            <a href="#careers" className="btn btn-outline">Join our team</a>
          </div>

          <ul className="mt-10 grid max-w-lg gap-4 text-sm text-white/80 sm:grid-cols-3">
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />24/7 support line</li>
            <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />Every guard screened</li>
            <li className="flex items-start gap-2"><FileText className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />Written site instructions</li>
          </ul>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[600px]">
          <div className="absolute inset-0 hidden bg-gold lg:block" style={{ clipPath: DIAGONAL }} />
          {IMAGES.hero ? (
            <div className="absolute inset-0 lg:left-3">
              <img
                src={IMAGES.hero}
                alt={IMAGES.heroAlt}
                className="h-full w-full object-cover object-[50%_42%] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"
              />
            </div>
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-gold px-8 text-center text-ink lg:left-3 lg:pl-24 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(115deg, rgba(0,0,0,0.06) 0 2px, transparent 2px 22px)',
              }}
            >
              <img src="/images/logo.png" alt={`${COMPANY.name} logo`} className="h-52 w-auto drop-shadow-2xl sm:h-64 lg:h-72" />
              <p className="font-display text-xl font-semibold sm:text-3xl">{COMPANY.tagline}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
