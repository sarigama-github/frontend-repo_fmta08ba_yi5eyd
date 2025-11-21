import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function CounterStat({ value = 100, label = '' }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { n: 0 }
    const tl = gsap.to(obj, {
      n: value,
      duration: 1.6,
      ease: 'power2.out',
      onUpdate: () => setDisplay(Math.floor(obj.n)),
    })
    return () => tl.kill()
  }, [value])

  return (
    <div ref={ref} className="p-6 text-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
      <div className="text-4xl font-extrabold text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">{display}</div>
      <div className="mt-1 text-slate-300">{label}</div>
    </div>
  )
}
