import Navbar from '../components/Navbar'
import NeonSection from '../components/NeonSection'
import { motion } from 'framer-motion'
import ThreeCardScene from '../components/ThreeCardScene'

const projects = [
  {
    title: 'Agentic Crypto Copilot',
    stack: ['Next.js', 'FastAPI', 'LangChain', 'Supabase'],
    blurb: 'Autonomous research, risk scoring, and execution with explainability.',
    colors: ['#22d3ee', '#a855f7']
  },
  {
    title: '3D Analytics Studio',
    stack: ['React', 'Three.js', 'WebGL'],
    blurb: 'Rotating 3D charts with spatial filters and shader‑driven visuals.',
    colors: ['#a78bfa', '#06b6d4']
  },
  {
    title: 'RAG Knowledge Hub',
    stack: ['React', 'Python', 'FAISS', 'OpenAI'],
    blurb: 'Company brain with secure embeddings, chat, and dashboarding.',
    colors: ['#06b6d4', '#f472b6']
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Projects</h1>
          <p className="mt-3 text-slate-300">A selection of prototypes and shipped products.</p>
        </div>
      </section>

      <NeonSection>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, rotateY: -15, y: 20 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
              className="[transform-style:preserve-3d] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
            >
              <div className="text-cyan-300 text-sm">{p.stack.join(' • ')}</div>
              <h3 className="text-xl font-semibold mt-1">{p.title}</h3>
              <p className="text-slate-300 mt-2">{p.blurb}</p>
              <div className="mt-4 h-48 rounded-xl overflow-hidden border border-white/10">
                <ThreeCardScene colorA={p.colors[0]} colorB={p.colors[1]} />
              </div>
            </motion.div>
          ))}
        </div>
      </NeonSection>
    </div>
  )
}
