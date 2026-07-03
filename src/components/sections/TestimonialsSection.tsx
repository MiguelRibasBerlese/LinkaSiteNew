import { motion, useReducedMotion } from 'motion/react'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: 'Eu estou adorando trabalhar com vocês e me sinto verdadeiramente próxima e acolhida, nunca pensei que teria essa fluidez! Já aconteceu de trabalhar com pessoas aqui de POA e poucas terem essa sinergia entre o time e devolutiva, parabéns estou impressionada!',
    name: 'Hayane',
    role: 'Massoterapeuta',
  },
  {
    quote: 'Gostei bastante, está conseguindo descrever exatamente o que eu penso e sinto...',
    name: 'Márcia',
    role: 'Psicóloga',
  },
  {
    quote: 'Olha, tenho que fazer uma observação sobre os últimos conteúdos e esses que vi agora. Estão excelentes, muito bons mesmo.',
    name: 'Luís',
    role: 'Psicólogo',
  },
]

export default function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="depoimentos" className="w-full bg-brand-black px-6 py-16">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, filter: 'blur(4px)', translateY: -8 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, filter: 'blur(0px)', translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="text-xs font-semibold tracking-wide text-fuchsia-400">DEPOIMENTOS</span>
        <h2 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">O que meus clientes estão dizendo</h2>
        <p className="mt-3 text-white/60">Resultados reais de quem confiou na estratégia.</p>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, translateY: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3"
      >
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4 flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4" fill="currentColor" />
              ))}
            </div>
            <p className="flex-1 text-sm italic text-white/70">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-fuchsia-500 text-sm font-semibold text-white">
                {t.name[0]}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/55">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
