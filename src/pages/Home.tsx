import Navbar from '../components/layout/Navbar'
import { Footer } from '../components/ui/footer-section'
import RobotScrollSection from '../components/robot-scroll/RobotScrollSection'
import SocialCardsSection from '../components/sections/SocialCardsSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <RobotScrollSection />
        <SocialCardsSection />
      </main>
      <Footer />
    </>
  )
}
