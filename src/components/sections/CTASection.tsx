import { motion, useReducedMotion } from 'motion/react'
import { CalendarCheck, Camera } from 'lucide-react'

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="contato" className="w-full bg-brand-black px-6 py-16">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, filter: 'blur(6px)', translateY: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, filter: 'blur(0px)', translateY: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-primary via-purple-600 to-fuchsia-600 px-8 py-16 text-center"
      >
        <span className="mb-6 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white">
          🗓 CONVERSA GRATUITA DE 30 MIN
        </span>
        <h2 className="text-3xl font-extrabold text-white md:text-5xl">Pronto para crescer de verdade?</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">Reserve agora sua conversa estratégica gratuita.</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary shadow-lg transition-transform hover:scale-105"
          >
            <CalendarCheck className="size-4" />
            Agendar minha conversa
          </a>
          <a
            href="https://instagram.com/linka_comunicacoes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Camera className="size-4" />
            Ver nosso Instagram
          </a>
        </div>
      </motion.div>
    </section>
  )
}
