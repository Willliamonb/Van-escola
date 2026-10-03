import  Navbar  from '../components/Navbar.jsx';
import  HeroSection from '../components/HeroSection.jsx';
import  ServicesSection  from '../components/ServicesSection.jsx';
import  HowItWorksSection  from '../components/HowItWorksSection.jsx';
import  DriversSection  from '../components/DriversSection.jsx';
import  CorporateSection  from '../components/CorporateSection.jsx';
import  StatsSection  from '../components/StatsSection.jsx';
import  Footer  from '../components/Footer.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <DriversSection />
      <CorporateSection />
      <StatsSection />
      <Footer />
    </div>
  );
}