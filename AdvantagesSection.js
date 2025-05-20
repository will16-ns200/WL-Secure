import React from 'react';

const AdvantagesSection = () => {
  const advantages = [
    'Atención personalizada y rápida.',
    'Asesoría técnica incluida.',
    'Precios competitivos.',
    'Garantía en cada instalación.',
    'Soporte postventa confiable.',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ventajas de Elegirnos</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 text-center max-w-2xl mx-auto">
          {advantages.map((advantage, index) => (
            <li key={index} className="mb-2">{advantage}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AdvantagesSection;