import logo from '../../assets/brand/LINKA_COM_LOGO_SEM_FUNDO.png'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-10">
      <img src={logo} alt="Linka Comunicações" className="h-8 w-auto" />
      <nav className="hidden gap-8 text-sm text-white/80 md:flex">
        {/* placeholder de menu */}
      </nav>
    </header>
  )
}
