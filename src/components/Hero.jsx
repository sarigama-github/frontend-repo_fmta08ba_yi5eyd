import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950/80 pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-end pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]"
        >
          Building immersive, AI-native web experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-slate-200 text-lg"
        >
          I’m Hardik Rohit, a full‑stack engineer crafting futuristic interfaces, scalable systems, and on‑chain/AI products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="/projects" className="px-5 py-2.5 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_20px_rgba(34,211,238,0.5)] transition">
            Explore Projects
          </a>
          <a href="/contact" className="px-5 py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
