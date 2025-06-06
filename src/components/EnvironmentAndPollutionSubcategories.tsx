import React from 'react';

const EnvironmentAndPollutionSubcategories = () => {
  const subcategories = [
    {
      name: 'Water Treatment Plants',
      icon: '💧',
      items: ['Floating Aerators', 'Water Disinfection Systems', 'Paddle Wheel Aerator', 'Pharmaceutical Water...'],
    },
    {
      name: 'Filters-Air, Gas, Liquid',
      icon: '🌫️',
      items: ['T Type Strainer', 'Quartz Sand Filter', 'Honeycomb Filter', 'Automatic Strainer', 'Hydraulic Air Filter'],
    },
    {
      name: 'Filter Cloth, Filter Industrial',
      icon: '🧺',
      items: ['Oil Filter Paper', 'High Temperature Filter Bags', 'Replacement Filter Bags', 'Process Filter', 'Wedge Wire Filters'],
    },
    {
      name: 'Humidification & Ventilation Equipment',
      icon: '🌬️',
      items: ['Stainless Steel Duct', 'Metal Ducts', 'Louver System', 'Roof Extractors', 'Eco Air Ventilator'],
    },
    {
      name: 'Pollution Control & Monitoring Equipment',
      icon: '📊',
      items: ['Drum Scrubbers', 'Fume Scrubber', 'Fume Extractor', 'Air Cleaner', 'Ash Conditioner'],
    },
    {
      name: 'Air Blowers',
      icon: '💨',
      items: ['Electric Blowers', 'Frp Blowers', 'Portable Blowers', 'Industrial Blowers', 'Positive Displacement Blower'],
    },
    {
      name: 'Air Cleaning Equipment',
      icon: '🧹',
      items: ['Dust Remover', 'Air Ionizer', 'Oil Mist Collector', 'Hitachi Air Purifier', 'Air Shower'],
    },
    {
      name: 'Effluent & Sewage Treatment Plants',
      icon: ' канализация ',
      items: ['Surface Aerators', 'Modular Sewage Treatment Plant', 'Skid Mounted Plant', 'Aeration Diffusers', 'Sewage Water...'],
    },
    {
      name: 'Waste Management',
      icon: '🗑️',
      items: ['Waste Recycling Machine', 'Fiber Compactor', 'Bioremediation', 'Grease Trap', 'Organic Waste Composter'],
    },
    {
      name: 'Wastewater Treatment Plants',
      icon: '💧',
      items: ['Stainless Steel Ro Membrane Housing', 'Water Filtration Plant', 'High Rate Thickeners', 'Mechanical Bar...'],
    },
    {
      name: 'Air Curtains',
      icon: '🌬️',
      items: ['Euronics Air Curtain', 'Commercial Air Curtain', 'Air Curtain Units', 'Almonard Air Curtain', 'Industrial Curtains'],
    },
    {
      name: 'Waste Paper',
      icon: '📄',
      items: ['Occ Waste Paper', 'Recycled Paper', 'Paper Waste', 'Waste Paper Scrap', 'White Waste Paper'],
    },
    {
      name: 'Ozone Generators',
      icon: '🌬️',
      items: ['Ozonator', 'Medical Ozone Generator', 'Swimming Pool Ozonator', 'Domestic Ozone Generator', 'A...'],
    },
    {
      name: 'Sewers',
      icon: ' канализация ',
      items: ['Sewer Cleaning Rods', 'Pvc Gutter', 'Sewer Rodding Machine', 'Concrete Manhole Cover', 'Sewer Pipe'],
    },
    {
      name: 'Recycling',
      icon: '♻️',
      items: ['Plastic Recycle Machine', 'Thermocol Recycling Machine', 'Recycling Equipment', 'Waste Plastic Recycling...'],
    },
    {
      name: 'Textile Waste',
      icon: '🧵',
      items: ['Polyester Waste', 'Spinning Waste', 'Fabric Waste', 'Yarn Waste', 'Silk Waste'],
    },
    {
      name: 'Air Distribution Products',
      icon: '🌬️',
      items: ['Air Blaster'],
    },
    {
      name: 'Recycling Oil',
      icon: '💧',
      items: ['Recycled Base Oil'],
    },
    {
      name: 'Metal Waste',
      icon: '🔩',
      items: ['Metal Waste'],
    },
    {
      name: 'Environment Product Agents',
      icon: '👤',
      items: ['Organic Waste Converter', 'Dust Collector Machine', 'Pollution Control Unit', 'Ozonator', 'Liquid Waste Incinerator'],
    },
    {
      name: 'Chemical Waste',
      icon: '🧪',
      items: ['Fiber Compactor'],
    },
    {
      name: 'Gas Disposal',
      icon: '💨',
      items: ['Urology Disposable'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Environment & Pollution Subcategories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((subcategory, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{subcategory.icon}</span>
              <h2 className="text-xl font-semibold">{subcategory.name}</h2>
            </div>
            <div className="text-gray-600 hover:text-gray-900">
              {subcategory.items.join(' • ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentAndPollutionSubcategories; 