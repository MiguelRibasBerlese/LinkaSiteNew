import { useEffect, useRef, useState } from 'react'

import algar from '../../assets/portfolio/algar.webp'
import axiota from '../../assets/portfolio/axiota.webp'
import dragons from '../../assets/portfolio/dragons.webp'
import goldenbear from '../../assets/portfolio/goldenbear.webp'
import marciaSiqueira from '../../assets/portfolio/marcia-siqueira.webp'
import psicologoLuis from '../../assets/portfolio/psicologo-luis.webp'

const carrossel1 = Object.values(
  import.meta.glob('../../assets/gallery/carrossel-1/*.webp', { eager: true, import: 'default' }),
) as string[]
const carrossel2 = Object.values(
  import.meta.glob('../../assets/gallery/carrossel-2/*.webp', { eager: true, import: 'default' }),
) as string[]
const carrossel3 = Object.values(
  import.meta.glob('../../assets/gallery/carrossel-3/*.webp', { eager: true, import: 'default' }),
) as string[]

const NODES = [
  { client: 'Algar · Editorial de marca', image: algar, col: 'md:col-span-4', row: 'md:row-span-2' },
  { client: 'Áxiota · Rebranding social', image: axiota, col: 'md:col-span-2', row: 'md:row-span-3' },
  { client: 'Dragons · Série de conteúdo', image: dragons, col: 'md:col-span-2', row: 'md:row-span-2' },
  { client: 'Golden Bear · Editorial de produto', image: goldenbear, col: 'md:col-span-2', row: 'md:row-span-2' },
  { client: 'Márcia Siqueira · Ativação de feed', image: marciaSiqueira, col: 'md:col-span-2', row: 'md:row-span-2' },
  { client: 'Psicólogo Luís · Presença digital', image: psicologoLuis, col: 'md:col-span-2', row: 'md:row-span-2' },
]

type Tilt = { rx: number; ry: number }

function PortfolioCard({ node }: { node: (typeof NODES)[number] }) {
  const [tilt, setTilt] = useState<Tilt>({ rx: 0, ry: 0 })
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div
      onMouseMove={(e) => {
        if (reducedMotion) return
        const rect = e.currentTarget.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        setTilt({ rx: py * -8, ry: px * 8 })
      }}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      className={`group relative min-h-[280px] cursor-pointer overflow-hidden rounded-2xl border border-brand-border transition-[border-color,box-shadow] duration-200 hover:border-brand-primary ${node.col} ${node.row}`}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: 'transform 120ms ease, border-color 200ms ease, box-shadow 200ms ease',
        boxShadow: tilt.rx || tilt.ry ? '0 0 40px -8px rgba(133,71,228,0.55)' : 'none',
      }}
    >
      <img
        src={node.image}
        alt={node.client}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-black/85 via-transparent to-transparent p-6">
        <div>
          <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-brand-accent">Capa</div>
          <div className="font-display text-lg font-semibold text-white">{node.client}</div>
        </div>
      </div>
    </div>
  )
}

const CAROUSELS = [
  { client: 'Carrossel 1', slides: carrossel1 },
  { client: 'Carrossel 2', slides: carrossel2 },
  { client: 'Carrossel 3', slides: carrossel3 },
]

function ScrollCarousel({ carousel }: { carousel: (typeof CAROUSELS)[number] }) {
  const [active, setActive] = useState(0)
  const total = carousel.slides.length

  return (
    <div className="flex w-full shrink-0 flex-col justify-center px-6 md:w-1/3 md:px-10">
      <div className="mb-3.5 font-mono text-xs uppercase tracking-[0.1em] text-brand-primary">
        {carousel.client}
      </div>
      <div className="relative h-[400px] overflow-hidden rounded-2xl border border-brand-border bg-brand-panel">
        <div
          className="flex h-full transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {carousel.slides.map((src, i) => (
            <div key={src} className="relative flex h-full min-w-full items-end overflow-hidden p-6">
              <img src={src} alt={`${carousel.client} slide ${i + 1}`} loading="lazy" className="absolute inset-0 size-full object-cover" />
              <span className="relative z-10 rounded-2xl bg-brand-black/50 px-3 py-1.5 font-mono text-xs text-white">
                {i + 1}/{total}
              </span>
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-label="Slide anterior"
          onClick={() => setActive((v) => (v - 1 + total) % total)}
          className="absolute left-3.5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-accent/50 bg-brand-black/60 text-lg text-white"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Próximo slide"
          onClick={() => setActive((v) => (v + 1) % total)}
          className="absolute right-3.5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-accent/50 bg-brand-black/60 text-lg text-white"
        >
          ›
        </button>
        <div className="absolute bottom-4 right-4 flex gap-1.5">
          {carousel.slides.map((src, i) => (
            <div
              key={src}
              className="size-1.5 rounded-full"
              style={{ background: i === active ? '#8547E4' : '#3A3750' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TrabalhoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      if (!sectionRef.current || !trackRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const raw = total > 0 ? -rect.top / total : 0
      const progress = Math.max(0, Math.min(1, raw))
      trackRef.current.style.transform = `translateX(-${progress * 66.666}%)`
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="trabalho" className="relative z-[2] mx-auto max-w-6xl px-6 pb-24 md:px-12">
      <div className="mb-5 font-mono text-xs uppercase tracking-[0.12em] text-brand-primary">Nós no fio</div>
      <h2 className="m-0 mb-14 font-display text-[clamp(30px,5vw,56px)] font-bold tracking-tight text-white">
        Trabalho
      </h2>

      <div className="grid auto-rows-[140px] grid-cols-1 gap-5 md:grid-cols-6 md:grid-flow-dense">
        {NODES.map((node) => (
          <PortfolioCard key={node.client} node={node} />
        ))}
      </div>

      <div ref={sectionRef} className="relative mt-16 h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div ref={trackRef} className="flex w-[300%] md:flex-row flex-col">
            {CAROUSELS.map((carousel) => (
              <ScrollCarousel key={carousel.client} carousel={carousel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
