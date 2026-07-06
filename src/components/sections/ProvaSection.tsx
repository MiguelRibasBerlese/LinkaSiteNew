const PILLARS = [
  { label: 'Estratégia antes do post' },
  { label: 'Conteúdo pensado pra reter atenção' },
  { label: 'Consistência de marca em toda peça' },
  { label: 'Tráfego pago com leitura de resultado' },
]

export default function ProvaSection() {
  return (
    <section className="relative z-[2] mx-auto max-w-6xl px-6 pb-40 md:px-12">
      <div className="grid grid-cols-1 gap-10 border-t border-brand-border pt-14 sm:grid-cols-2 md:grid-cols-4">
        {PILLARS.map((p) => (
          <div key={p.label}>
            <div className="mb-2.5 size-2 rounded-full bg-brand-primary" />
            <div className="font-mono text-[13px] uppercase leading-relaxed tracking-[0.06em] text-brand-dim">
              {p.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
