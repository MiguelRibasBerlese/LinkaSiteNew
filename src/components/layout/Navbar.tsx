import logo from '../../assets/brand/LINKA_COM_LOGO_SEM_FUNDO.png'

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-8 rounded-full border border-white/10 bg-brand-black/80 px-6 py-2 shadow-lg backdrop-blur-sm">
      <img src={logo} alt="Linka Comunicações" className="h-6 w-auto" />
      <nav className="hidden gap-8 text-sm text-white/80 md:flex">
        {/* placeholder de menu */}
      </nav>
    </header>
  )
}
