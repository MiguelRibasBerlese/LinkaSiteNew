import Navbar from '../components/layout/Navbar'
import { Footer } from '../components/ui/footer-section'
import HeroIntroSection from '../components/sections/HeroIntroSection'
import SocialCardsSection from '../components/sections/SocialCardsSection'
import SocialLinksSection from '../components/sections/SocialLinksSection'
import PortfolioVideosSection from '../components/sections/PortfolioVideosSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroIntroSection />
        <SocialCardsSection />
        <PortfolioVideosSection />
        <SocialLinksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
