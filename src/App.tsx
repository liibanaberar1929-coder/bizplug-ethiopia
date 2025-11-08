import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { About } from './components/About';
import { PartnerProgram } from './components/PartnerProgram';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { PartnershipForm } from './components/PartnershipForm';
import { ContactForm } from './components/ContactForm';

function App() {
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleAdminAccess = () => {
    const password = prompt('Enter admin password:');
    if (password === 'bizplug2024') {
      setShowAdminDashboard(true);
    } else if (password) {
      alert('Incorrect password');
    }
  };

  if (showAdminDashboard) {
    return <AdminDashboard onLogout={() => setShowAdminDashboard(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminAccess={handleAdminAccess} />
      <Hero />
      <ProductSection />
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
