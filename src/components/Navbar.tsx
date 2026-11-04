import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data/content'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-mist">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 h-16" aria-label="Main">
        <a href="#home" className="font-display text-xl font-extrabold text-navy">O. SYLVERS<span className="text-gold">.</span></a>
        <ul className="hidden lg:flex gap-8 text-sm font-medium">
          {NAV.map(([l, h]) => <li key={h}><a href={h} className="hover:text-green transition-colors">{l}</a></li>)}
        </ul>
        <a href="#contact" className="hidden lg:inline-block rounded bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors">Request a Quote</a>
        <button className="lg:hidden p-2" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-mist bg-white px-5 pb-5">
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 font-medium border-b border-mist">{l}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 block rounded bg-gold py-3 text-center font-semibold">Request a Quote</a>
        </div>
      )}
    </header>
  )
}
