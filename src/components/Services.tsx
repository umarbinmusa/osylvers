import { SERVICES } from '../data/content'
import Img from './Img'
export default function Services() {
  return (
    <section id="services" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
        <p className="mt-3 max-w-2xl text-navy/70">Six sectors, one dependable supply partner.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, icon: Icon, img, text }) => (
            <article key={title} className="group overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative h-44 overflow-hidden">
                <Img src={img} alt={`${title} operations`} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute bottom-0 left-0 bg-green p-3 text-white"><Icon size={22} aria-hidden /></span>
              </div>
              <div className="p-6"><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-navy/75">{text}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-green underline-offset-4 hover:underline">Learn More about {title}</a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
