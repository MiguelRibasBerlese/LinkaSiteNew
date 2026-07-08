import { motion } from 'framer-motion'

const SERVICES = [
  {
    title: 'Estratégia de marca e conteúdo',
    desc: 'Um plano com direção, não posts soltos.',
    span: 'md:col-span-4',
  },
  {
    title: 'Gestão de redes sociais',
    desc: 'Presença constante, com voz e ritmo próprios.',
    span: 'md:col-span-2',
  },
  {
    title: 'Produção de conteúdo e vídeo',
    desc: 'Peças pensadas pra prender atenção nos primeiros segundos.',
    span: 'md:col-span-2',
  },
  {
    title: 'Tráfego pago',
    desc: 'Alcance com verba bem alocada e leitura de resultado.',
    span: 'md:col-span-4',
  },
]

export default function ServicosSection() {
  return (
    <section id="servicos" className="relative z-[2] mx-auto max-w-6xl px-6 pb-40 pt-16 md:px-12">
      <div className="mb-5 font-mono text-xs uppercase tracking-[0.12em] text-brand-primary">O que fazemos</div>
      <h2 className="m-0 mb-14 font-display text-[clamp(30px,5vw,56px)] font-bold tracking-tight text-white">
        Serviços
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
        {SERVICES.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
            className={`group relative flex min-h-[220px] flex-col justify-between rounded-2xl border border-brand-primary/40 bg-brand-panel p-9 transition-all duration-200 hover:border-brand-primary hover:shadow-[0_0_40px_-12px_rgba(133,71,228,0.45)] ${svc.span}`}
          >
            <div className="font-mono text-xs text-brand-dim">{String(i + 1).padStart(2, '0')}</div>
            <div>
              <h3 className="m-0 mb-3 font-display text-2xl font-semibold text-white">{svc.title}</h3>
              <p className="m-0 text-[15px] leading-relaxed text-white/60">{svc.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
