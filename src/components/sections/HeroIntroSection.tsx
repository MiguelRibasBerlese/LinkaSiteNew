import { motion, useReducedMotion } from 'motion/react'
import { CalendarCheck, PlayCircle } from 'lucide-react'

const STATS = [
  { value: '+50', label: 'clientes atendidos' },
  { value: '4.9★', label: 'avaliação média' },
  { value: '3M+', label: 'impressões geradas' },
]

export default function HeroIntroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="w-full bg-brand-black px-6 py-20 text-center">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, filter: 'blur(6px)', translateY: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, filter: 'blur(0px)', translateY: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl"
      >
        <span className="mb-6 inline-block rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-primary">
          ✧ MARKETING & SOCIAL MEDIA
        </span>
        <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
          Sua marca merece estar no{' '}
          <span className="bg-gradient-to-r from-brand-primary to-fuchsia-500 bg-clip-text text-transparent">
            próximo nível
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/60 md:text-lg">
          Estratégia, conteúdo e gestão de redes sociais para marcas que querem crescer de verdade — com método, dados e criatividade.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contato"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            <CalendarCheck className="size-4" />
            Agendar reunião gratuita
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            <PlayCircle className="size-4" />
            Portfólio
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-10">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="bg-gradient-to-r from-brand-primary to-fuchsia-500 bg-clip-text text-3xl font-extrabold text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
