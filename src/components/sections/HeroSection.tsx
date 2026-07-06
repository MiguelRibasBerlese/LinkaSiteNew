import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [played, setPlayed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setPlayed(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative z-[2] mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-24 pt-40 md:px-12"
    >
      <div
        className="mb-7 inline-flex items-center gap-3 transition-opacity duration-500"
        style={{ opacity: played ? 1 : 0 }}
      >
        <span className="size-2.5 shrink-0 rounded-full bg-brand-primary shadow-[0_0_24px_6px_rgba(133,71,228,0.7)]" />
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-brand-primary">
          Agência de estratégia, conteúdo e redes sociais
        </span>
      </div>

      <h1 className="m-0 font-display text-[clamp(48px,10vw,132px)] font-bold leading-[0.98] tracking-tight text-white">
        {['Estratégia.', 'Conteúdo.', 'Conexão.'].map((line, i) => (
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

      <p className="mt-10 max-w-[480px] text-lg leading-relaxed text-white/60">
        Ajudamos marcas a aparecer, ganhar consistência e virar conversa nas redes sociais.
      </p>

      <div className="mt-11 flex items-center gap-7">
        <a
          href="#trabalho"
          className="rounded-2xl bg-brand-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#9A63EE]"
        >
          Ver nosso trabalho
        </a>
        <a
          href="https://instagram.com/linka_comunicacoes"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-brand-primary pb-0.5 text-base font-medium text-white"
        >
          Falar com a gente
        </a>
      </div>
    </section>
  )
}
