import Navbar from '../components/Navbar'
import NeonSection from '../components/NeonSection'
import { motion } from 'framer-motion'
import CounterStat from '../components/CounterStat'

const stats = [
  { label: 'Years Experience', value: 6 },
  { label: 'Products Shipped', value: 18 },
  { label: 'AI Models Integrated', value: 12 },
  { label: 'Smart Contracts', value: 9 },
]

export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Resume</h1>
          <p className="mt-3 text-slate-300">Snapshot of impact and skills. Full resume available on request.</p>
        </div>
      </section>

      <NeonSection>
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CounterStat value={s.value} label={s.label} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="mt-3 text-slate-300 grid grid-cols-2 gap-2 text-sm">
              {['React','Vite','Next.js','FastAPI','Node','Postgres','MongoDB','Redis','LangChain','OpenAI','Three.js','Spline'].map(s => (
                <li key={s} className="bg-white/5 border border-white/10 rounded px-2 py-1">{s}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold">Experience</h3>
            <ul className="mt-3 text-slate-300 space-y-2">
              <li><span className="text-white">Lead Full‑stack Engineer</span> — AI/crypto products, real‑time systems</li>
              <li><span className="text-white">Product Engineer</span> — Design systems, analytics, platform work</li>
            </ul>
          </div>
        </div>
      </NeonSection>
    </div>
  )
}
