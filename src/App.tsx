import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CategoryGrid } from './components/CategoryGrid';
import { StatsSection } from './components/StatsSection';
import { BusinessSpotlight } from './components/BusinessSpotlight';
import { BusinessSection } from './components/BusinessSection';
import { About } from './components/About';
import { PartnerProgram } from './components/PartnerProgram';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { PartnershipForm } from './components/PartnershipForm';
import { ContactForm } from './components/ContactForm';
import type { Region } from './lib/bizdata';

function App() {
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const [region, setRegion] = useState<Region>('All Regions');
  const [industry, setIndustry] = useState<string>('all');

  const handleAdminAccess = () => {
    const password = prompt('Enter admin password:');
    if (password === 'bizplug2024') {
      setShowAdminDashboard(true);
    } else if (password) {
      alert('Incorrect password');
    }
  };

  const handleSearch = () => {
    document.getElementById('businesses')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectIndustry = (slug: string) => {
    setIndustry(slug);
    document.getElementById('businesses')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showAdminDashboard) {
    return <AdminDashboard onLogout={() => setShowAdminDashboard(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminAccess={handleAdminAccess} />
      <Hero
        region={region}
        setRegion={setRegion}
        industry={industry}
        setIndustry={setIndustry}
        onSearch={handleSearch}
      />
      <TrustBar />
      <CategoryGrid onSelectIndustry={handleSelectIndustry} activeIndustry={industry} />
      <StatsSection />
      <BusinessSpotlight />
      <BusinessSection
        region={region}
        industry={industry}
        setRegion={setRegion}
        setIndustry={setIndustry}
      />
      <About />
      <PartnerProgram onOpenForm={() => setShowPartnershipForm(true)} />
      <Testimonials />
      <Contact onOpenForm={() => setShowContactForm(true)} />
      <Footer />

      {showPartnershipForm && (
        <PartnershipForm onClose={() => setShowPartnershipForm(false)} />
      )}

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
}

export default App;
