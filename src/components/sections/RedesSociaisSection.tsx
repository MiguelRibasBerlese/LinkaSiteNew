const SOCIALS = [
  {
    name: 'Instagram',
    handle: '@linka_comunicacoes',
    href: 'https://www.instagram.com/linka_comunicacoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    bg: 'bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@linka_comunicacoes',
    href: 'https://www.tiktok.com/@linka_comunicacoes?_r=1&_t=ZS-97VojJ9gxGc',
    bg: 'bg-black',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M16.6 5.82a4.28 4.28 0 0 1-3.16-1.4v9.86a4.62 4.62 0 1 1-4-4.58v2.1a2.52 2.52 0 1 0 1.76 2.4V2h2.13a4.27 4.27 0 0 0 3.27 4.1z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@linka_comunicacoes',
    href: null,
    bg: 'bg-[#FF0000]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18.1 5 12 5 12 5s-6.1 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.6.3 7.7.3 7.7.3s6.1 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8zM10 15V9l5.2 3z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'LINKA Comunicações',
    href: 'https://www.linkedin.com/company/linka-comunicacoes/posts/?feedView=all',
    bg: 'bg-[#0A66C2]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21H9z" />
      </svg>
    ),
  },
]

export default function RedesSociaisSection() {
  return (
    <section id="redes-sociais" className="relative z-[2] mx-auto max-w-6xl px-6 pb-24 pt-24 md:px-12 md:pt-32">
      <div className="mb-5 font-mono text-xs uppercase tracking-[0.12em] text-brand-primary">Redes sociais</div>
      <h2 className="m-0 mb-5 font-display text-[clamp(30px,5vw,56px)] font-bold tracking-tight text-white">
        Onde nos encontrar
      </h2>
      <p className="mb-14 text-lg text-brand-dim">
        Conteúdo diário sobre marketing, estratégia e bastidores. Vem junto!
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {SOCIALS.map((s) => {
          const Card = (
            <div className="group flex h-full flex-col gap-4 rounded-2xl border border-brand-border bg-brand-panel p-6 transition-colors hover:border-brand-primary">
              <div className={`flex size-11 items-center justify-center rounded-xl text-white ${s.bg}`}>{s.icon}</div>
              <div>
                <div className="font-bold text-white">{s.name}</div>
                <div className="text-sm text-brand-dim">{s.handle}</div>
                {!s.href && (
                  <span className="mt-2 inline-block rounded-full border border-brand-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-brand-dim">
                    Em breve
                  </span>
                )}
              </div>
            </div>
          )
          return s.href ? (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
              {Card}
            </a>
          ) : (
            <div key={s.name}>{Card}</div>
          )
        })}
      </div>
    </section>
  )
}
