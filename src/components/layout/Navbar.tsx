import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/brand/LINKA_COM_LOGO_SEM_FUNDO.png'

const LINKS = [
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2">
      <div className="flex items-center justify-between gap-8 rounded-full border border-white/10 bg-brand-black/80 px-4 py-2 shadow-lg backdrop-blur-sm md:justify-center md:px-6">
        <a href="#top" className="shrink-0">
          <img src={logo} alt="Linka Comunicações" className="h-6 w-auto" />
        </a>
        <nav className="hidden gap-8 text-sm text-white/80 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-brand-black/95 p-3 text-center text-sm text-white/80 shadow-lg backdrop-blur-sm md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2.5 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
