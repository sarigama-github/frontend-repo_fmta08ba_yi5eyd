import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import NeonSection from '../components/NeonSection'
import { motion } from 'framer-motion'

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />

      <NeonSection title="What I Do" subtitle="End‑to‑end product engineering">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: 'Full‑stack Systems',
            desc: 'React, Node, FastAPI, serverless, CI/CD, cloud-native patterns'
          },{
            title: 'AI Interfaces',
            desc: 'LLM apps, RAG pipelines, agents, vector search, real‑time UX'
          },{
            title: 'On‑chain & Crypto',
            desc: 'Smart contracts, wallets, NFT/DeFi UX, analytics'
          }].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition shadow-[0_0_25px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-slate-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </NeonSection>
    </div>
  )
}
