import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative pt-28 pb-10">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_15%_10%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(600px_circle_at_85%_30%,rgba(168,85,247,0.08),transparent_40%)]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact</h1>
          <p className="mt-3 text-slate-300">Have an idea? Let’s build it.</p>

          <form onSubmit={submit} className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input required className="w-full bg-slate-900/70 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" required className="w-full bg-slate-900/70 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea rows="5" required className="w-full bg-slate-900/70 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
              </div>
            </div>
            <button className="mt-4 px-5 py-2.5 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_20px_rgba(34,211,238,0.5)] transition">
              {sent ? 'Sent! (demo)' : 'Send'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
