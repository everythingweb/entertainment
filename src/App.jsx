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
import DataAnalysisDetail from './components/DataAnalysisDetail' // Corrected spelling
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import WebsiteDevelopmentDetail from './components/WebDevDetail'
import CybersecurityDetail from './components/CyberSecurity'
const App = () => {
  return (
    <BrowserRouter basename="/bucregaltech">
      <Routes>
        {/* Route for the main landing page */}
        <Route path="/" element={
          <main className="relative min-h-screen overflow-x-hidden bg-white text-gray-800 font-sans">
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
              <Schedule1 /> {/* This component is now on the home page route */}
              <ServicesSection />
              <TestimonialsSection />
              <ContactUs />
              <NewsletterSection />
              <Footer />

            </div>
          </main>
        } />

        {/* Route for the data analysis detail page */}
        <Route path="/data-analysis-detail" element={<DataAnalysisDetail  />} />
        <Route path="/web-development" element={<WebsiteDevelopmentDetail />} />
        <Route path="/cyber-security" element={<CybersecurityDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
