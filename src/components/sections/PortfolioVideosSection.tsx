import { motion, useReducedMotion } from 'motion/react'
import { Play } from 'lucide-react'

const VIDEOS = [
  { category: 'Estratégia', title: 'Lançamento Imobiliário', gradient: 'from-fuchsia-600 via-purple-600 to-purple-500' },
  { category: 'Conteúdo', title: 'Antes e Depois — Cabelo Feminino', gradient: 'from-rose-600 via-red-500 to-orange-500' },
  { category: 'Social Media', title: 'Divulgação da Semifinal', gradient: 'from-indigo-600 via-blue-500 to-teal-400' },
]

export default function PortfolioVideosSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="portfolio" className="w-full bg-brand-black px-6 py-16">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, filter: 'blur(4px)', translateY: -8 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, filter: 'blur(0px)', translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="text-xs font-semibold tracking-wide text-fuchsia-400">CONTEÚDO EM VÍDEO</span>
        <h2 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">Vídeos que ensinam e convertem</h2>
        <p className="mt-3 text-white/60">Exemplos de histórias sendo contadas.</p>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, translateY: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3"
      >
        {VIDEOS.map((v) => (
          <div key={v.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className={`flex aspect-video items-center justify-center bg-gradient-to-br ${v.gradient}`}>
              <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-brand-primary shadow-lg">
                <Play className="size-6 translate-x-0.5" fill="currentColor" />
              </span>
            </div>
            <div className="p-4">
              <span className="mb-2 inline-block rounded-full bg-brand-primary/15 px-3 py-1 text-xs font-medium text-brand-primary">
                {v.category}
              </span>
              <p className="font-semibold text-white">{v.title}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
