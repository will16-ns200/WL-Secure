import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20 mt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Soluciones Tecnológicas en Seguridad y Automatización</h1>
        <p className="text-xl text-gray-600 mb-8">Instalación, mantenimiento y soporte para hogares, empresas y conjuntos residenciales.</p>
        <div className="flex justify-center space-x-4">
          <a href="#servicios" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">Ver Servicios</a>
          <a href="#contacto" className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">Contáctanos</a>
        </div>
      </div>
      {/* Placeholder para imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://via.placeholder.com/1920x1080" // Reemplazar con la URL de tu imagen
          alt="Fondo de seguridad tecnológica"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </section>
  );
};

export default HeroSection;