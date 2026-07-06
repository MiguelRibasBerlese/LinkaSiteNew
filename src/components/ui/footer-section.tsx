const CTA_HREF = 'https://instagram.com/linka_comunicacoes'

const SOCIAL_LINKS = [
  { title: 'Instagram', href: 'https://instagram.com/linka_comunicacoes' },
  { title: 'TikTok', href: 'https://tiktok.com/@linka_comunicacoes' },
  { title: 'LinkedIn', href: 'https://linkedin.com' },
]

export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-brand-border pb-10 pt-14">
      <div
        className="mb-14 overflow-hidden whitespace-nowrap"
        style={{
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="linka-marquee-track inline-block" aria-hidden="true">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-display text-[56px] font-bold tracking-tight text-transparent"
              style={{ WebkitTextStroke: '1px #8547E4' }}
            >
              LINKA · CONEXÃO · CONTEÚDO · LINKA · CONEXÃO · CONTEÚDO ·{' '}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-6 md:px-12">
        <div className="font-display text-xl font-bold text-white">LINKA</div>
        <div className="flex flex-wrap gap-7 text-sm">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
            >
              {link.title}
            </a>
          ))}
        </div>
        <a
          href={CTA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9A63EE]"
        >
          Começar um projeto
        </a>
      </div>
    </footer>
  )
}
