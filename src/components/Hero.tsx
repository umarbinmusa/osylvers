import { HERO_IMG } from '../data/content'
import Img from './Img'
export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy text-white">
      <Img src={HERO_IMG} alt="Industrial oil and gas facility" className="absolute inset-0 -z-20 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-navy/80" />
      <div className="mx-auto max-w-7xl px-5 py-28 md:py-40">
        <h1 className="rise max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Reliable Industrial Solutions. Trusted Business Partnerships.</h1>
        <p className="rise mt-6 max-w-2xl text-lg text-white/85" style={{ animationDelay: '.15s' }}>O. Sylvers C. and Company Ltd delivers dependable products and services across oil and gas, laboratory supplies, solid minerals, industrial chemicals, electronics, and logistics.</p>
        <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: '.3s' }}>
          <a href="#services" className="rounded bg-green px-7 py-3.5 font-semibold hover:bg-green/85 transition-colors">Explore Our Services</a>
          <a href="#contact" className="rounded bg-gold px-7 py-3.5 font-semibold text-navy hover:bg-white transition-colors">Request a Quote</a>
        </div>
      </div>
    </section>
  )
}
