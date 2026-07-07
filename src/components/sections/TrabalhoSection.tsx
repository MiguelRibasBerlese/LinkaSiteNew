import { ZoomParallax } from '../ui/zoom-parallax'
import logoCentro from '../../assets/portfolio/logo-centro.webp'
import algar from '../../assets/portfolio/algar.webp'
import axiota from '../../assets/portfolio/axiota.webp'
import dragons from '../../assets/portfolio/dragons.webp'
import goldenbear from '../../assets/portfolio/goldenbear.webp'
import marciaSiqueira from '../../assets/portfolio/marcia-siqueira.webp'
import psicologoLuis from '../../assets/portfolio/psicologo-luis.webp'

const NODES = [
  { client: 'Algar · Editorial de marca', image: algar },
  { client: 'Áxiota · Rebranding social', image: axiota },
  { client: 'Dragons · Série de conteúdo', image: dragons },
  { client: 'Golden Bear · Editorial de produto', image: goldenbear },
  { client: 'Márcia Siqueira · Ativação de feed', image: marciaSiqueira },
  { client: 'Psicólogo Luís · Presença digital', image: psicologoLuis },
]

const CAROUSELS = [
  { title: 'Imobiliária', subtitle: 'Lançamento Imobiliário', src: 'https://linkacomunicacoes.com/wp-content/uploads/2026/06/Video-1.mp4' },
  { title: 'Salão de Beleza', subtitle: 'Antes e Depois - Cabelo Feminino', src: 'https://linkacomunicacoes.com/wp-content/uploads/2026/06/Video-2.mp4' },
  { title: 'Esporte', subtitle: 'Divulgação da SemiFinal', src: 'https://linkacomunicacoes.com/wp-content/uploads/2026/06/Video-3.mp4' },
]

function VideoCard({ carousel }: { carousel: (typeof CAROUSELS)[number] }) {
  return (
    <div className="group flex w-full max-w-[260px] flex-col items-center rounded-3xl border border-brand-border/80 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-4 shadow-xl shadow-black/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-brand-primary/10">
      <div className="relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
        <video
          src={carousel.src}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
      <div className="mt-3.5 text-center">
        <div className="font-display text-lg font-bold text-white">{carousel.title}</div>
        <div className="font-mono text-xs uppercase tracking-[0.1em] text-brand-primary">{carousel.subtitle}</div>
      </div>
    </div>
  )
}

export default function TrabalhoSection() {
  return (
    <>
      <section id="trabalho" className="relative z-[2] mx-auto max-w-6xl px-6 pt-24 md:px-12">
        <div className="mb-5 font-mono text-xs uppercase tracking-[0.12em] text-brand-primary">Nós no fio</div>
        <h2 className="m-0 font-display text-[clamp(30px,5vw,56px)] font-bold tracking-tight text-white">
          Trabalho
        </h2>
      </section>

      {/* full-bleed: the zoom-parallax scales images with vw units, so it must span the viewport, not the max-w-6xl column */}
      <div className="relative z-[2] w-full">
        <ZoomParallax
          images={[
            { src: logoCentro, alt: 'Linka Comunicações', aspectClass: 'aspect-[16/9]' },
            ...NODES.map((node) => ({ src: node.image, alt: node.client })),
          ]}
        />
      </div>

      <section className="relative z-[2] mx-auto max-w-6xl px-6 pb-24 pt-24 md:px-12 md:pt-32">
        <div className="mb-10 pl-8">
          <div className="mb-5 font-mono text-xs uppercase tracking-[0.12em] text-brand-primary">Nossas filmagens</div>
          <h3 className="m-0 font-display text-[clamp(24px,4vw,40px)] font-bold tracking-tight text-white">
            Vídeos em movimento
          </h3>
        </div>
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-center">
          {CAROUSELS.map((carousel) => (
            <VideoCard key={carousel.title} carousel={carousel} />
          ))}
        </div>
      </section>
    </>
  )
}
