import { IMAGES } from '../data'

export default function Team() {
  const photos = IMAGES.team.slice(0, 3)
  if (photos.length === 0) return null
  return (
    <section aria-labelledby="team-heading" className="bg-gold text-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <h2 id="team-heading" className="font-display text-2xl font-semibold leading-tight sm:text-5xl">
            Guards you can recognise on sight
          </h2>
          <p className="mt-5 max-w-md text-lg font-medium leading-relaxed">
            Uniformed, identified and rostered. Each guard carries clear post instructions, keeps accurate
            records and treats residents, visitors and staff with respect.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 lg:col-span-7">
          {photos.map((p) => (
            <img key={p.src} src={p.src} alt={p.alt} loading="lazy" className="h-72 w-full rounded-sm object-cover shadow-xl sm:h-96" />
          ))}
        </div>
      </div>
    </section>
  )
}
