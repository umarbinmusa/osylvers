import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Building2 } from 'lucide-react'
import { COMPANY, SERVICES } from '../data/content'
const field = 'mt-1 w-full border border-navy/20 bg-white px-4 py-3 focus:border-green'
export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const body = `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nService: ${d.service}\n\n${d.message}`
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent('Inquiry: ' + d.service)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold md:text-4xl">Contact Us</h2>
          <ul className="mt-8 space-y-6">
            <li className="flex gap-4"><Building2 className="shrink-0 text-green" aria-hidden /><span>{COMPANY.name}</span></li>
            <li className="flex gap-4"><MapPin className="shrink-0 text-green" aria-hidden /><address className="not-italic">{COMPANY.address}</address></li>
            <li className="flex gap-4"><Mail className="shrink-0 text-green" aria-hidden /><a className="underline underline-offset-4" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
          </ul>
        </div>
        <form onSubmit={submit} className="grid gap-5 bg-mist p-6 sm:grid-cols-2 md:p-8 lg:col-span-3">
          <label className="block">Name<input required name="name" className={field} /></label>
          <label className="block">Email<input required type="email" name="email" className={field} /></label>
          <label className="block">Phone Number<input type="tel" name="phone" className={field} /></label>
          <label className="block">Service Required
            <select required name="service" className={field} defaultValue="">
              <option value="" disabled>Select a service</option>{SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
            </select></label>
          <label className="block sm:col-span-2">Message<textarea required name="message" rows={5} className={field} /></label>
          <div className="sm:col-span-2">
            <button className="rounded bg-navy px-8 py-3.5 font-semibold text-white hover:bg-green transition-colors">Submit Inquiry</button>
            {sent && <p role="status" className="mt-3 text-sm text-green">Your email app should open with the inquiry ready to send.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
