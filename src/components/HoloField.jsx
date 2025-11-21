import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HoloField({ as: Tag = 'input', className = '', ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true })
      tl.to(el, { boxShadow: '0 0 24px rgba(34,211,238,0.45), inset 0 0 12px rgba(168,85,247,0.35)', duration: 0.25 }, 0)
      el.addEventListener('focus', () => tl.play())
      el.addEventListener('blur', () => tl.reverse())
      return () => tl.kill()
    }, ref)
    return () => ctx.revert()
  }, [])

  return <Tag ref={ref} className={"w-full bg-slate-900/70 border border-white/10 rounded px-3 py-2 focus:outline-none " + className} {...props} />
}
