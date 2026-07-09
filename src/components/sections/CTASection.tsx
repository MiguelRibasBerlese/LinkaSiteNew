import { useState } from 'react'

const CTA_HREF = 'https://form.respondi.app/tYwQVYod'

export default function CTASection() {
  const [magnet, setMagnet] = useState({ x: 0, y: 0 })
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section id="contato" className="relative z-[2] mx-auto max-w-6xl px-6 pb-44 md:px-12">
      <h2 className="m-0 mb-6 max-w-2xl font-display text-[clamp(34px,6vw,72px)] font-bold leading-tight tracking-tight text-white">
        Pronto para crescer de verdade?
      </h2>
      <p className="m-0 mb-12 max-w-md text-lg text-white/60">
        Reserve agora sua conversa gratuita.
      </p>
      <a
        href={CTA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={(e) => {
          if (reducedMotion) return
          const rect = e.currentTarget.getBoundingClientRect()
          const px = (e.clientX - rect.left) / rect.width - 0.5
          const py = (e.clientY - rect.top) / rect.height - 0.5
          setMagnet({ x: px * 24, y: py * 18 })
        }}
        onMouseLeave={() => setMagnet({ x: 0, y: 0 })}
        className="inline-flex w-full max-w-xs items-center justify-center gap-3.5 rounded-2xl bg-brand-primary px-6 py-4 text-center font-display text-base font-semibold text-white sm:w-auto sm:max-w-none sm:px-11 sm:py-6 sm:text-xl"
        style={{
          transform: `translate(${magnet.x}px, ${magnet.y}px)`,
          transition: 'transform 150ms ease-out',
        }}
      >
        Agendar minha conversa
        <span className="text-xl">→</span>
      </a>
    </section>
  )
}
