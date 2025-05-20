import React from 'react';

const ServicesSection = () => {
  const services = [
    { title: 'CCTV', description: 'Instalación y mantenimiento de cámaras analógicas, IP y PTZ con visualización remota.', imageUrl: 'https://via.placeholder.com/400x300' }, // Reemplazar con URL de imagen
    { title: 'Control de Acceso', description: 'Lectoras faciales, biométricas y por tarjeta. Integración con video y horarios.', imageUrl: 'https://via.placeholder.com/400x300' }, // Reemplazar con URL de imagen
    { title: 'Automatización', description: 'Motores para portones y talanqueras. Control por botoneras, remotos y lectoras.', imageUrl: 'https://via.placeholder.com/400x300' }, // Reemplazar con URL de imagen
    { title: 'Redes', description: 'Cableado estructurado, configuración de redes LAN y Wi-Fi.', imageUrl: 'https://via.placeholder.com/400x300' }, // Reemplazar con URL de imagen
    { title: 'Soporte Técnico', description: 'Reparación de PCs, impresoras y asesoría tecnológica.', imageUrl: 'https://via.placeholder.com/400x300' }, // Reemplazar con URL de imagen
  ];

  return (
    <section id="servicios" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Servicios que Ofrecemos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src={service.imageUrl}
                alt={`Imagen de ${service.title}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;