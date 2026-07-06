import Navbar from '../components/layout/Navbar'
import { Footer } from '../components/ui/footer-section'
import FioLine from '../components/ui/FioLine'
import HeroSection from '../components/sections/HeroSection'
import ManifestoSection from '../components/sections/ManifestoSection'
import ServicosSection from '../components/sections/ServicosSection'
import TrabalhoSection from '../components/sections/TrabalhoSection'
import ProvaSection from '../components/sections/ProvaSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <div className="relative w-full">
      <FioLine />
      <Navbar />
      <main id="top">
        <HeroSection />
        <ManifestoSection />
        <ServicosSection />
        <TrabalhoSection />
        <ProvaSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
