import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: '+50', label: 'Clientes atendidos' },
  { value: '4.9', label: 'De avaliação em média', star: true },
  { value: '3M+', label: 'De impressões geradas' },
]

export default function ProvaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative z-[2] mx-auto max-w-6xl px-6 pb-40 md:px-12">
      <div ref={ref} className="grid grid-cols-1 gap-5 border-t border-brand-border pt-14 sm:grid-cols-3">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="flex items-center justify-center gap-4 rounded-xl border border-brand-border bg-brand-panel px-6 py-5 transition-all duration-700 ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <div className="flex shrink-0 items-center gap-1.5 font-display text-[clamp(28px,4vw,40px)] font-bold leading-none tracking-tight text-brand-primary">
              {s.value}
              {s.star && <span className="text-amber-400">★</span>}
            </div>
            <div className="text-left font-mono text-[12px] uppercase leading-tight tracking-[0.06em] text-brand-dim">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
