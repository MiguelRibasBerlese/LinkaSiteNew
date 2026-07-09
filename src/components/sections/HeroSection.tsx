import { useEffect, useState } from 'react'

const FORM_HREF = 'https://form.respondi.app/tYwQVYod'

export default function HeroSection() {
  const [played, setPlayed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setPlayed(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative z-[2] mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 pb-24 pt-40 md:px-12"
    >
      <div
        className="mb-7 inline-flex items-center gap-3 transition-opacity duration-500"
        style={{ opacity: played ? 1 : 0 }}
      >
        <span className="size-2.5 shrink-0 rounded-full bg-brand-primary shadow-[0_0_24px_6px_rgba(133,71,228,0.7)]" />
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-brand-primary">
          Marketing & Social Media
        </span>
      </div>

      <h1 className="m-0 font-display text-[clamp(48px,10vw,132px)] font-bold leading-[0.98] tracking-tight text-white">
        {['Sua marca merece', 'estar no', 'próximo nível'].map((line, i) => (
          <div key={line} className="overflow-hidden">
            <span
              className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: played ? 'translateY(0%)' : 'translateY(110%)',
                transitionDelay: `${i * 90}ms`,
                color: i === 2 ? '#8547E4' : undefined,
              }}
            >
              {line}
            </span>
          </div>
        ))}
      </h1>

      <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:gap-7">
        <a
          href={FORM_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs rounded-2xl bg-brand-primary px-8 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-[#9A63EE] sm:w-auto"
        >
          Agendar reunião gratuita
        </a>
        <a
          href="#trabalho"
          className="border-b border-brand-primary pb-0.5 text-base font-medium text-white"
        >
          Ver vídeos
        </a>
      </div>
    </section>
  )
}
