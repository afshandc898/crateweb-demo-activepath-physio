import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </div>
  )
}
