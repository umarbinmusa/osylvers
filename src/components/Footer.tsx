import { COMPANY, NAV, SERVICES } from '../data/content'
export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div><p className="font-display text-xl font-extrabold text-white">O. SYLVERS<span className="text-gold">.</span></p>
          <p className="mt-4 text-sm">A Nigerian multi-sector supplier of industrial products and services. CAC {COMPANY.rc}.</p></div>
        <div><h3 className="font-bold text-white">Quick Links</h3><ul className="mt-4 space-y-2 text-sm">{NAV.map(([l, h]) => <li key={h}><a className="hover:text-gold" href={h}>{l}</a></li>)}</ul></div>
        <div><h3 className="font-bold text-white">Our Services</h3><ul className="mt-4 space-y-2 text-sm">{SERVICES.map(s => <li key={s.title}>{s.title}</li>)}</ul></div>
        <div><h3 className="font-bold text-white">Contact</h3><p className="mt-4 text-sm">{COMPANY.address}</p><a className="mt-2 block text-sm hover:text-gold" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-sm">© 2026 O. Sylvers C. and Company Ltd. All Rights Reserved.</p>
    </footer>
  )
}
