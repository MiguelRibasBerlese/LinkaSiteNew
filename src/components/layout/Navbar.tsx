import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Trabalho', href: '#trabalho' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const CTA_HREF = 'https://instagram.com/linka_comunicacoes'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 backdrop-blur-md transition-colors duration-200 md:px-12"
      style={{
        background: scrolled ? 'rgba(10,10,15,0.72)' : 'rgba(10,10,15,0)',
        borderBottom: `1px solid ${scrolled ? '#201F2C' : 'transparent'}`,
      }}
    >
      <a href="#top" className="font-display text-xl font-bold tracking-tight text-white">
        LINKA
      </a>
      <div className="hidden items-center gap-9 md:flex">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
        <a
          href={CTA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9A63EE]"
        >
          Começar um projeto
        </a>
      </div>
      <a
        href={CTA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl bg-brand-primary px-4 py-2 text-sm font-semibold text-white md:hidden"
      >
        Falar
      </a>
    </nav>
  )
}
