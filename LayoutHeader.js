import React from 'react';

const LayoutHeader = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">WL-Secure</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#quienes-somos" className="text-gray-600 hover:text-gray-900 transition-colors">Quiénes Somos</a></li>
            <li><a href="#servicios" className="text-gray-600 hover:text-gray-900 transition-colors">Servicios</a></li>
            <li><a href="#contacto" className="text-gray-600 hover:text-gray-900 transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;