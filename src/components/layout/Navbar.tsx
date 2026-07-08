import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Trabalho', href: '#trabalho' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const CTA_HREF = 'https://form.respondi.app/tYwQVYod'

function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="size-5">
      <line
        x1="4" y1="7" x2="20" y2="7"
        className="origin-center transition-transform duration-300"
        style={open ? { transform: 'translateY(5px) rotate(45deg)' } : undefined}
      />
      <line
        x1="4" y1="17" x2="20" y2="17"
        className="origin-center transition-transform duration-300"
        style={open ? { transform: 'translateY(-5px) rotate(-45deg)' } : undefined}
      />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // close the mobile menu automatically once the viewport grows back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 mx-auto w-full transition-all duration-300 ease-out md:top-4 md:max-w-4xl ${
          scrolled && !open
            ? 'md:rounded-2xl border-b border-brand-border bg-brand-black/80 backdrop-blur-lg md:border md:shadow-lg md:shadow-black/40'
            : 'border-b border-transparent'
        } ${open ? 'bg-brand-black/95' : ''}`}
      >
        <nav className={`flex h-16 w-full items-center justify-between px-6 transition-all duration-300 ease-out md:h-14 md:px-6 ${scrolled ? 'md:px-4' : ''}`}>
          <a href="#top" className="font-display text-lg font-bold tracking-tight text-white">
            LINKA
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-2xl bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9A63EE]"
            >
              Começar um projeto
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-xl border border-brand-border text-white transition-colors hover:bg-white/5 md:hidden"
          >
            <MenuToggleIcon open={open} />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-hidden border-t border-brand-border bg-brand-black/95 backdrop-blur-lg transition-opacity duration-200 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full w-full flex-col justify-between gap-y-2 p-6">
          <div className="grid gap-y-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="w-full rounded-2xl bg-brand-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#9A63EE]"
          >
            Começar um projeto
          </a>
        </div>
      </div>
    </>
  )
}
