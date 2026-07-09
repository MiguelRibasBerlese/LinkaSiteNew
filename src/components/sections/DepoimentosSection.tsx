import { GlowCard } from '../ui/spotlight-card'

const TESTIMONIALS = [
  {
    quote:
      'Eu estou adorando trabalhar com vocês e me sinto verdadeiramente próxima e acolhida, nunca pensei que teria essa fluidez! Já aconteceu de trabalhar com pessoas aqui de POA e poucas terem essa sinergia entre o time e devolutiva, parabéns estou impressionada! Desde a primeira abordagem está sendo mt legal, mesmo sem mensurar resultados.',
    name: 'Hayane',
    role: 'Massoterapeuta',
  },
  {
    quote: 'Gostei bastante, está conseguindo descrever exatamente o que eu penso e sinto...',
    name: 'Márcia',
    role: 'Psicóloga',
  },
  {
    quote:
      'Olha, tenho que fazer uma observação sobre os últimos conteúdos e esses que vi agora. Estão excelentes, muito bons mesmo.',
    name: 'Luís',
    role: 'Psicólogo',
  },
]

export default function DepoimentosSection() {
  return (
    <section id="depoimentos" className="relative z-[2] mx-auto max-w-6xl px-6 pb-24 pt-24 md:px-12 md:pt-32">
      <div className="mb-5 font-mono text-xs uppercase tracking-[0.12em] text-brand-primary">Depoimentos</div>
      <h2 className="m-0 mb-5 font-display text-[clamp(30px,5vw,56px)] font-bold tracking-tight text-white">
        O que nossos clientes estão dizendo
      </h2>
      <p className="mb-14 text-lg text-brand-dim">Resultados de quem confiou na estratégia.</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <GlowCard key={t.name} className="flex flex-col rounded-2xl bg-brand-panel p-8">
            <div className="mb-4 text-amber-400">★★★★★</div>
            <p className="mb-8 flex-1 italic text-brand-dim">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-accent font-bold text-white">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-brand-dim">{t.role}</div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  )
}
