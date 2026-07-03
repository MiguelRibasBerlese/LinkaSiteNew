import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import RobotScrollSection from '../components/robot-scroll/RobotScrollSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <RobotScrollSection />
      </main>
      <Footer />
    </>
  )
}
