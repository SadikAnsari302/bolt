import React from 'react';

const EnergyAndPowerSubcategories = () => {
  const subcategories = [
    // Subcategories from the first screenshot
    {
      name: 'Solar Products & Equipment',
      icon: '☀️',
      items: ['Solar Home System', 'Solar Power Generator', 'Solar Water Heater Pipe', 'Solar Powered Light', 'Solar Sensors'],
    },
    {
      name: 'Oil & Lubricants',
      icon: '💧',
      items: ['Aerosol Lubricants', 'Hp Hydraulic Oil', 'Oil Additive', 'Soluble Cutting Oil', 'Grease Additives'],
    },
    {
      name: 'Inverters & Ups Equipment',
      icon: '🔋',
      items: ['Triple Conversion Ups', 'Eaton Online Ups', 'Lift Ups', 'Hybrid Ups', 'Cfl Inverter'],
    },
    {
      name: 'Solar Panels',
      icon: '☀️',
      items: ['Solar Control Glass', 'Luminous Solar Panels', 'Adani Solar Panels', 'Solar Panel Stand', 'Solar Power Panel'],
    },
    {
      name: 'Batteries',
      icon: '🔋',
      items: ['Drone Battery', 'Exide Battery', 'Rechargeable Battery', 'E Rickshaw Battery', 'Hbl Batteries'],
    },
    {
      name: 'Industrial Batteries',
      icon: '🔋',
      items: ['Sealed Lead Acid Battery', 'Pvc Dry Battery', 'Agm Batteries', 'Battery Eliminator', 'Lead Acid Battery Plate'],
    },
    {
      name: 'Coal & Coke',
      icon: '🔥',
      items: ['Agro Waste Briquette', 'Coking Coal', 'Biomass White Coal', 'Raw Petroleum Coke', 'Soft Coke'],
    },
    {
      name: 'Oil & Gas Field Machinery & Equipment',
      icon: '🛢️',
      items: ['Lube Oil Cooler', 'Gas Fuse', 'Air Gas Ratio Regulator', 'Gas Chiller', 'Oil Immersed Starter'],
    },
    {
      name: 'Charcoal',
      icon: '🔥',
      items: ['Coal Tar Pitch', 'Charcoal Tablets', 'Premium Charcoal', 'Charcoal Granules', 'Barbecue Charcoal'],
    },
    {
      name: 'Lubrication System & Equipment',
      icon: '🔧',
      items: ['Radial Lubricator', 'Grease Feeder', 'Constant Level Oiler', 'Air Lubricator', 'Lubricant Tube'],
    },
    {
      name: 'Bitumen',
      icon: '🛣️',
      items: ['Bitumen Boiler', 'Bitumen Mastic', 'Oxidized Bitumen', 'Natural Bitumen', 'Gilsonite'],
    },
    {
      name: 'Turbine',
      icon: '💨',
      items: ['Wind Turbine Blades', 'Power Generation Turbine', 'Gas Turbine Component', 'Turbine Control Panel', 'Turbine Generators'],
    },
    {
      name: 'Battery Management Systems',
      icon: '🔋',
      items: ['Battery Separator', 'Button Cell Batteries', 'Fuel Cell', 'Industrial Alkaline Batteries', 'Battery Case'],
    },
    {
      name: 'Paraffin Wax',
      icon: '🕯️',
      items: ['Paraffin Wax Emulsion', 'Paraffin Oil', 'Liquid Paraffin', 'Paraffin Candle Wax', 'Light Liquid Paraffin'],
    },
    {
      name: 'Base Oils',
      icon: '💧',
      items: ['Cashew Nut Shell Liquid', 'Balsam Oil', 'Lemon Oil', 'Fenugreek Oil', 'Tulsi Oil'],
    },
    {
      name: 'Energy Saving Devices',
      icon: '🔋',
      items: ['Power Saver', 'Energy Saving Equipment', 'Electric Power Saver', 'Lpg Gas Saver', 'Solar Led Street Light'],
    },
    // Subcategories from the second screenshot
    {
      name: 'Energy Conservation Products',
      icon: '💡',
      items: ['Wind Power Plant', 'Wind Turbine Charge Controller', 'Inductive Load Bank', 'Alternative Energy'],
    },
    {
      name: 'Fuel Oil',
      icon: '⛽',
      items: ['Fuel Oil Heaters', 'Motor Fuel', 'White Mineral Oil', 'Green Fuel', 'Fuel Additives'],
    },
    {
      name: 'Power & Energy Measurement Equipments',
      icon: ' 측정 도구 ',
      items: ['Power Balance Bracelet', 'Smart Energy Meter', 'Static Energy Meters', 'Mass Spectrometer', 'Power Measurement...'],
    },
    {
      name: 'Energy Management System',
      icon: '📊',
      items: ['Lpg Gas Saver', 'Power Saving Devices', 'Battery Electrolyte', 'Electricity Saver', 'Energy Saver Panel'],
    },
    {
      name: 'Petrochemical Products',
      icon: '🛢️',
      items: ['Oil Stabilizer', 'Petrochemicals Solvents', 'Oleochemicals', 'Oil Spill Dispersant', 'Oil Finding Paste'],
    },
    {
      name: 'Biofuel',
      icon: '🌱',
      items: ['Biofuel Briquettes', 'Cow Dung Cake', 'Biomass Fuel', 'Bio Pellets', 'Wood Briquettes'],
    },
    {
      name: 'Crude Oil',
      icon: '🛢️',
      items: ['Bonny Light Crude Oil', 'Mazut'],
    },
    {
      name: 'Biogas',
      icon: '💨',
      items: ['Biogas Balloon', 'Biomass Plant', 'Biodigester', 'Biogas Power Plant', 'Biogas Holder'],
    },
    {
      name: 'Graphite',
      icon: '✏️',
      items: ['Mineral Graphite', 'Crystalline Graphite', 'Molded Graphite', 'Colloidal Graphite', 'Artificial Graphite'],
    },
    {
      name: 'Compressed Natural Gas',
      icon: '⛽',
      items: ['Gas Saver', 'Cng Dispenser', 'Liquefied Natural Gas', 'Cng Pressure Regulator', 'Cng'],
    },
    {
      name: 'Coal Gas',
      icon: '🔥',
      items: ['Coal Fired Furnaces', 'Energetic Coal', 'Raw Coal', 'Lignite Coal', 'Coal Gasifier'],
    },
    {
      name: 'Kerosene Oil',
      icon: '🛢️',
      items: ['Chlorinated Paraffin Oil', 'Refined Kerosines', 'Deodorized Kerosene'],
    },
    {
      name: 'Natural Gas',
      icon: '⛽',
      items: ['Cng', 'Liquefied Natural Gas', 'Natural Gas Hose', 'Natural Gas Compressors', 'Natural Gas Engine'],
    },
    {
      name: 'Energy Agents',
      icon: '👤',
      items: ['Aviation Fuel', 'Motor Fuel', 'Engine Oil', 'Coolant Oil', 'Paraffin Oil'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Energy & Power Subcategories</h1>
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

export default EnergyAndPowerSubcategories;
