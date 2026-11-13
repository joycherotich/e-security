import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { COMPANY, NAV } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${COMPANY.name} home`}>
          <img src="/images/logo.png" alt="" className="h-12 w-auto" />
          <span className="font-display leading-none">
            <span className="block text-xl font-bold tracking-wide">E-SECURITY</span>
            <span className="block text-xs font-semibold tracking-[0.08em] text-gold">GUARD SERVICES LTD</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="font-medium text-white/85 transition-colors hover:text-gold">
              {n.label}
            </a>
          ))}
          <a href={`tel:${COMPANY.phoneTel}`} className="btn btn-gold !py-2 text-base">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {COMPANY.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          className="rounded-sm p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-ink-line bg-ink px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink-line py-4 font-display text-xl font-semibold hover:text-gold"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={`tel:${COMPANY.phoneTel}`} className="btn btn-gold mt-5 w-full">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {COMPANY.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  )
}
