import { COMPANY, NAV } from '../data'

export default function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-black">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="" className="h-16 w-auto" />
              <div className="font-display">
                <p className="text-xl font-bold">{COMPANY.name}</p>
                <p className="text-gold">{COMPANY.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-white/65">
              Dependable, lawful and responsible guarding built on suitable personnel and active supervision.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="font-display text-xl font-bold text-gold">Explore</h2>
            <ul className="mt-3 space-y-2">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="text-white/75 hover:text-gold">{n.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-display text-xl font-bold text-gold">Contact</h2>
            <ul className="mt-3 space-y-2 text-white/75">
              <li><a href={`tel:${COMPANY.phoneTel}`} className="hover:text-gold">{COMPANY.phoneDisplay}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="break-all hover:text-gold">{COMPANY.email}</a></li>
              <li>{COMPANY.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-line pt-6 text-sm text-white/55">
          <p>
            <strong className="text-white/75">Regulatory status:</strong> {COMPANY.psraStatus}. Guarding services for a
            fee will be provided only once the company holds the required licence from the Private Security
            Regulatory Authority (PSRA) under the Private Security Regulation Act, 2016.
            {COMPANY.psraNumber && ` PSRA licence no. ${COMPANY.psraNumber}.`}
            {COMPANY.companyRegNumber && ` Company reg. no. ${COMPANY.companyRegNumber}.`}
          </p>
          <p className="mt-3">&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
