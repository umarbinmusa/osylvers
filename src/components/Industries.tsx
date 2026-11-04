import { INDUSTRIES } from '../data/content'
import Img from './Img'
export default function Industries() {
  return (
    <section id="industries" className="bg-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-3xl font-bold md:text-4xl">Industries We Serve</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(([name, img]) => (
            <figure key={name} className="group relative h-56 overflow-hidden">
              <Img src={img} alt={name} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 to-transparent p-5 pt-12 text-lg font-semibold">{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
