import { lazy, Suspense } from 'react'
import Navbar from '../components/layout/Navbar'
import { Footer } from '../components/ui/footer-section'
import FioLine from '../components/ui/FioLine'
import HeroSection from '../components/sections/HeroSection'
import ManifestoSection from '../components/sections/ManifestoSection'
import RedesSociaisSection from '../components/sections/RedesSociaisSection'
import DepoimentosSection from '../components/sections/DepoimentosSection'
import ProvaSection from '../components/sections/ProvaSection'
import CTASection from '../components/sections/CTASection'

// split out: the only two sections that pull in framer-motion, so it's no longer in the initial bundle
const ServicosSection = lazy(() => import('../components/sections/ServicosSection'))
const TrabalhoSection = lazy(() => import('../components/sections/TrabalhoSection'))

export default function Home() {
  return (
    <div className="relative w-full">
      <FioLine />
      <Navbar />
      <main id="top">
        <HeroSection />
        <ManifestoSection />
        <Suspense fallback={null}>
          <ServicosSection />
        </Suspense>
        <Suspense fallback={null}>
          <TrabalhoSection />
        </Suspense>
        <RedesSociaisSection />
        <DepoimentosSection />
        <ProvaSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
