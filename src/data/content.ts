import { Fuel, FlaskConical, Mountain, Cpu, Beaker, Truck, Layers, ShieldCheck, Handshake, HeartHandshake, PackageCheck, type LucideIcon } from 'lucide-react'
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=70`
export const COMPANY = {
  name: 'O. Sylvers C. and Company Ltd', rc: 'RC 1679815', email: 'osujichigozie361@yahoo.com',
  address: 'Sylvester Osuji Compound, Ogwu, Owubinubi, Amakohia, Ikeduru, Owerri, Imo State, Nigeria.',
}
export const NAV = [['Home', '#home'], ['About Us', '#about'], ['Our Services', '#services'], ['Industries', '#industries'], ['Contact Us', '#contact']] as const
export const HERO_IMG = u('photo-1565793298595-6a879b1d9492').replace('w=1000', 'w=1920')
export const SERVICES: { title: string; icon: LucideIcon; img: string; text: string }[] = [
  { title: 'Oil and Gas', icon: Fuel, img: u('photo-1565793298595-6a879b1d9492'), text: 'Supply of oil and gas-related products, equipment, and industrial support solutions.' },
  { title: 'Laboratory Consumables', icon: FlaskConical, img: u('photo-1532094349884-543bc11b234d'), text: 'Laboratory consumables, scientific materials, and essential supplies for research, educational, healthcare, and industrial laboratories.' },
  { title: 'Solid Minerals', icon: Mountain, img: u('photo-1578575437130-527eed3abbec'), text: 'Sourcing, trading, and supply of solid minerals and mineral-related commodities.' },
  { title: 'Electronics', icon: Cpu, img: u('photo-1518770660439-4636190af475'), text: 'Electronic equipment, components, and related technology products.' },
  { title: 'Industrial Chemicals', icon: Beaker, img: u('photo-1581092160562-40aa08e78837'), text: 'Industrial chemicals and chemical-related products for industrial and commercial applications, subject to applicable regulations.' },
  { title: 'Logistics', icon: Truck, img: u('photo-1586528116311-ad8dd3c8310d'), text: 'Logistics, transportation, cargo handling, and delivery support for business operations.' },
]
export const WHY: [string, LucideIcon][] = [
  ['Multi-Sector Expertise', Layers], ['Reliable Product Sourcing', PackageCheck], ['Quality-Focused Operations', ShieldCheck],
  ['Professional Business Relationships', Handshake], ['Customer-Centered Service', HeartHandshake], ['Dependable Logistics Solutions', Truck],
]
export const INDUSTRIES: [string, string][] = [
  ['Oil and Gas Industry', u('photo-1565793298595-6a879b1d9492')], ['Manufacturing Industry', u('photo-1581092160562-40aa08e78837')],
  ['Scientific and Research Institutions', u('photo-1532094349884-543bc11b234d')], ['Mining and Mineral Industry', u('photo-1578575437130-527eed3abbec')],
  ['Corporate and Commercial Organizations', u('photo-1518770660439-4636190af475')], ['Logistics and Supply Chain Industry', u('photo-1586528116311-ad8dd3c8310d')],
]
