import { useEffect, useState } from 'react'
import logo from '../../assets/brand/LINKA_COM_LOGO_SEM_FUNDO.png'

export default function Navbar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero-scroll')
      const pastHero = hero
        ? hero.getBoundingClientRect().bottom <= 24
        : window.scrollY > window.innerHeight
      setVisible(pastHero)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-8 rounded-full border border-white/10 bg-brand-black/80 px-6 py-2 shadow-lg backdrop-blur-sm transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-4 pointer-events-none opacity-0'
      }`}
    >
      <img src={logo} alt="Linka Comunicações" className="h-6 w-auto" />
      <nav className="hidden gap-8 text-sm text-white/80 md:flex">
        {/* placeholder de menu */}
      </nav>
    </header>
  )
}
