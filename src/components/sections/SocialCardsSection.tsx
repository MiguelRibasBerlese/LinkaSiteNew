import SocialCards, { type CardItem } from '../ui/card-fan-carousel'

const CARDS: CardItem[] = [
  { imgUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=700&fit=crop', alt: 'Equipe em reunião de comunicação' },
  { imgUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=700&fit=crop', alt: 'Estúdio de produção audiovisual' },
  { imgUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=700&fit=crop', alt: 'Planejamento de campanha' },
  { imgUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=700&fit=crop', alt: 'Time criativo colaborando' },
  { imgUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=700&fit=crop', alt: 'Apresentação de estratégia' },
  { imgUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=700&fit=crop', alt: 'Equipe de marketing digital' },
  { imgUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=700&fit=crop', alt: 'Produção de conteúdo' },
]

export default function SocialCardsSection() {
  return (
    <section className="w-full bg-brand-black py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-white md:text-3xl">
        Nosso trabalho
      </h2>
      <SocialCards cards={CARDS} />
    </section>
  )
}
