import { motion, useReducedMotion } from 'motion/react'
import { Camera, Music2, Play, Briefcase } from 'lucide-react'

const PLATFORMS = [
  { name: 'Instagram', handle: '@linka_comunicacoes', icon: Camera, color: 'from-pink-500 to-orange-400', href: 'https://instagram.com/linka_comunicacoes' },
  { name: 'TikTok', handle: '@linka_comunicacoes', icon: Music2, color: 'from-neutral-800 to-black', href: 'https://tiktok.com/@linka_comunicacoes' },
  { name: 'YouTube', handle: '@linka_comunicacoes', icon: Play, color: 'from-red-600 to-red-500', soon: true },
  { name: 'LinkedIn', handle: 'LINKA Comunicações', icon: Briefcase, color: 'from-blue-600 to-blue-500', href: 'https://linkedin.com' },
]

export default function SocialLinksSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="w-full bg-brand-black px-6 py-16">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, filter: 'blur(4px)', translateY: -8 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, filter: 'blur(0px)', translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="text-xs font-semibold tracking-wide text-fuchsia-400">REDES SOCIAIS</span>
        <h2 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">Me encontre por aí</h2>
        <p className="mt-3 text-white/60">Conteúdo diário sobre marketing, estratégia e bastidores. Vem junto!</p>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, translateY: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
      >
        {PLATFORMS.map((p) => {
          const Icon = p.icon
          const content = (
            <>
              <span className={`mb-3 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.color}`}>
                <Icon className="size-5 text-white" />
              </span>
              <p className="font-semibold text-white">{p.name}</p>
              <p className="mt-1 text-sm text-white/40">{p.handle}</p>
              {p.soon && (
                <span className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-white/50">
                  EM BREVE
                </span>
              )}
            </>
          )
          const className = 'flex flex-col items-start rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06]'
          return p.href ? (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={className}>
              {content}
            </a>
          ) : (
            <div key={p.name} className={className}>
              {content}
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
