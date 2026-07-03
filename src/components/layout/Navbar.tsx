import { useEffect, useState } from 'react'
import logo from '../../assets/brand/LINKA_COM_LOGO_SEM_FUNDO.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 transition-all duration-300 md:px-10 ${
        scrolled ? 'bg-brand-black/80 py-2 shadow-lg backdrop-blur-sm' : 'bg-transparent py-4'
      }`}
    >
      <img
        src={logo}
        alt="Linka Comunicações"
        className={`w-auto transition-all duration-300 ${scrolled ? 'h-6' : 'h-8'}`}
      />
      <nav className="hidden gap-8 text-sm text-white/80 md:flex">
        {/* placeholder de menu */}
      </nav>
    </header>
  )
}
