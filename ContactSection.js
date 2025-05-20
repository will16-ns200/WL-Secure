import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contáctanos</h2>
        <p className="text-lg text-gray-600 mb-4">¿Listo para mejorar tu seguridad y automatización?</p>
        <div className="flex flex-col items-center space-y-4">
          <a href="mailto:wlsecure.con@gmail.com" className="text-black hover:underline">
            📧 wlsecure.con@gmail.com
          </a>
          <a href="tel:+573115939874" className="text-black hover:underline">
            📞 311 593 9874
          </a>
          <p className="text-gray-600">Cobertura: Región [personalizar con tu ubicación actual]</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;