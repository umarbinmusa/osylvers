const VALUES = ['Integrity', 'Reliability', 'Quality', 'Professionalism', 'Customer Satisfaction']
export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Who We Are</h2>
          <p className="mt-6 max-w-prose leading-relaxed text-navy/80">O. Sylvers C. and Company Ltd is a Nigerian incorporated company committed to delivering quality products and dependable services across diverse industrial sectors. We serve businesses and organizations through strategic sourcing, supply, and logistics solutions.</p>
          <p className="mt-4 max-w-prose leading-relaxed text-navy/80">Our operations span oil and gas, laboratory consumables, solid minerals, electronics, industrial chemicals, and logistics. We are committed to professionalism, reliability, quality, and building long-term business relationships with our clients and partners.</p>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-navy/15 pt-6 text-sm">
            <div><dt className="text-navy/60">CAC registration</dt><dd className="font-semibold">RC 1679815</dd></div>
            <div><dt className="text-navy/60">Incorporated</dt><dd className="font-semibold">June 29, 2020</dd></div>
          </dl>
        </div>
        <div className="space-y-5">
          <div className="border-l-4 border-green bg-mist p-6"><h3 className="text-xl font-bold">Our Mission</h3><p className="mt-2 text-navy/80">To provide reliable, quality-driven products and services that meet the needs of our clients across diverse industries.</p></div>
          <div className="border-l-4 border-gold bg-mist p-6"><h3 className="text-xl font-bold">Our Vision</h3><p className="mt-2 text-navy/80">To become a trusted and recognized multi-sector industrial solutions provider in Nigeria and beyond.</p></div>
          <div className="bg-navy p-6 text-white"><h3 className="text-xl font-bold">Our Core Values</h3>
            <ul className="mt-3 flex flex-wrap gap-2">{VALUES.map(v => <li key={v} className="rounded-full border border-gold/60 px-4 py-1.5 text-sm">{v}</li>)}</ul></div>
        </div>
      </div>
    </section>
  )
}
