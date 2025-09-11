import './App.css'
import Navbar1 from './components/Navbar1'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import Schedule1 from './components/Schedule1'
import ContactUs from './components/ContactUs'
import NewPricing from './components/NewPricing'
function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar1 />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <NewPricing />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <Schedule1 />
        <ServicesSection />
        <TestimonialsSection />
        <ContactUs />
        <NewsletterSection />
        <Footer />



      </div>
    </main>
  )
}

export default App
