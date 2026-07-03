import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'motion/react'
import SocialCards, { type CardItem } from '../ui/card-fan-carousel'
import axiota from '../../assets/portfolio/axiota.png'
import dragons from '../../assets/portfolio/dragons.png'
import goldenbear from '../../assets/portfolio/goldenbear.png'
import marciaSiqueira from '../../assets/portfolio/marcia-siqueira.png'
import algar from '../../assets/portfolio/algar.png'
import psicologoLuis from '../../assets/portfolio/psicologo-luis.png'

const CARDS: CardItem[] = [
  { imgUrl: axiota, alt: 'Campanha Dia da Mulher — Axiota/Multimin', client: 'Axiota · Multimin · Lactipro', category: 'Campanha' },
  { imgUrl: dragons, alt: 'Divulgação de uniforme — Moura Lacerda Dragons', client: 'Moura Lacerda Dragons', category: 'Esporte' },
  { imgUrl: goldenbear, alt: 'Anúncio de matrícula — Golden Bear Escola de Idiomas', client: 'Golden Bear', category: 'Educação' },
  { imgUrl: marciaSiqueira, alt: 'Conteúdo educativo — Márcia Siqueira Psicóloga', client: 'Márcia Siqueira', category: 'Saúde' },
  { imgUrl: algar, alt: 'Anúncio de plano de internet — Algar', client: 'Algar', category: 'Telecom' },
  { imgUrl: psicologoLuis, alt: 'Conteúdo educativo — Psicólogo Luís Vergueiro', client: 'Luís Vergueiro', category: 'Saúde' },
]

export default function SocialCardsSection() {
  const shouldReduceMotion = useReducedMotion()
  const [selected, setSelected] = useState<CardItem | null>(null)

  return (
    <section className="w-full overflow-hidden bg-brand-black py-16">
      <motion.h2
        initial={shouldReduceMotion ? undefined : { opacity: 0, filter: 'blur(4px)', translateY: -8 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, filter: 'blur(0px)', translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-2xl font-semibold text-white md:text-3xl"
      >
        Nosso trabalho
      </motion.h2>
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, translateY: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <SocialCards cards={CARDS} onCardClick={setSelected} />
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] w-full max-w-sm overflow-hidden rounded-2xl bg-brand-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white/80 hover:text-white"
              >
                ✕
              </button>
              <img src={selected.imgUrl} alt={selected.alt} className="max-h-[65vh] w-full object-contain" />
              <div className="p-4">
                {selected.category && (
                  <span className="mb-2 inline-block rounded-full bg-brand-primary/20 px-3 py-1 text-xs font-medium text-brand-primary">
                    {selected.category}
                  </span>
                )}
                {selected.client && <p className="font-semibold text-white">{selected.client}</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
