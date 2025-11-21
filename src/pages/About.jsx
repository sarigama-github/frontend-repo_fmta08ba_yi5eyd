import Navbar from '../components/Navbar'
import NeonSection from '../components/NeonSection'
import { motion } from 'framer-motion'
import ThreeAvatar from '../components/ThreeAvatar'

function TimelineItem({ year, title, desc }) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
      <div className="text-cyan-300 text-sm">{year}</div>
      <div className="text-white font-semibold">{title}</div>
      <div className="text-slate-300">{desc}</div>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative pt-28 pb-10">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_15%_10%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(600px_circle_at_85%_30%,rgba(168,85,247,0.08),transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Hardik</h1>
            <p className="mt-4 text-slate-300 text-lg">Full‑stack engineer obsessed with delightful UX and rigorous systems. I blend AI research with crypto‑native design to build products that feel like the future.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="justify-self-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-fuchsia-600/30 to-cyan-500/30 border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.35)]">
              <div className="absolute inset-0">
                <ThreeAvatar className="w-full h-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <NeonSection title="Journey" subtitle="Key milestones and explorations">
        <div className="relative before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
          <div className="space-y-8">
            <TimelineItem year="2025" title="Launched AI/crypto product suite" desc="Shipped agentic trading tools and on‑chain analytics dashboards" />
            <TimelineItem year="2024" title="Scaled full‑stack platforms" desc="Led React/FastAPI systems with real‑time eventing and RAG features" />
            <TimelineItem year="2023" title="Explored 3D web" desc="Integrated Three.js and Spline for immersive product storytelling" />
          </div>
        </div>
      </NeonSection>
    </div>
  )
}
