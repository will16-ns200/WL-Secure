import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import AdvantagesSection from './components/AdvantagesSection';
import ContactSection from './components/ContactSection';
import LayoutFooter from './components/LayoutFooter';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para la navegación

  // Función para cambiar de página (ejemplo básico)
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="font-sans">
      <LayoutHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <ContactSection />
      <LayoutFooter />
    </div>
  );
};

export default App;

// DONE