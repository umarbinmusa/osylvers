import { WHY } from '../data/content'
export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-3xl font-bold md:text-4xl">Why Partner With O. Sylvers?</h2>
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(([t, Icon]) => (
            <li key={t} className="flex items-start gap-4 border-t-2 border-gold pt-5">
              <Icon className="mt-0.5 shrink-0 text-green" aria-hidden /><span className="text-lg font-semibold">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
