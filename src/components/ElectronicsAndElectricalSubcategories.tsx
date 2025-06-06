interface Subcategory {
  name: string;
  icon: string;
  items: string[];
}

const electronicsAndElectricalSubcategories: Subcategory[] = [
  {
    name: 'Electrical Goods, Equipment & Supplies',
    icon: '📦', // Box emoji
    items: [
      'Ab Cable Accessories', 'Ac Drives', 'Thermal Fuse', 'Siemens Contactor', 'Single Phase Distribution Box',
    ]
  },
  {
    name: 'LED Products',
    icon: '💡', // Light bulb emoji
    items: [
      'Led Batteries', 'Philips Led Tube Light', 'Rechargeable Led Lights', 'Led Underwater Light', 'Osram Led Tube Light',
    ]
  },
  {
    name: 'Control Panel Boards',
    icon: '📊', // Bar chart emoji
    items: [
      'Single Phase Control Panel', 'Pump Control Panels', 'Outdoor Vcb Panel', 'Havells Distribution Board', 'Automatic Rescue...',
    ]
  },
  {
    name: 'Wires/Cables & Accessories',
    icon: '🔗', // Link emoji
    items: [
      'Extension Boards', 'Stitching Wires', 'Wire Holder', 'Cable Wires', 'Submersible Pump Winding Wire',
    ]
  },
  {
    name: 'Electronic Products & Components',
    icon: '🔌', // Electric plug emoji
    items: [
      'Carbon Potentiometer', 'Led Chip', 'Terminal Module', 'Pogo Pin', 'Electronic Hardware',
    ]
  },
  {
    name: 'Mobile Phones, Accessories & Parts',
    icon: '📱', // Mobile phone emoji
    items: [
      'Wireless Stereo Headphone', 'Sony Bluetooth Headset', 'Mobile Phone Lcd', 'Sony Mobile Phones', 'Mini...',
    ]
  },
  {
    name: 'Bulbs & Tubelight',
    icon: '💡', // Light bulb emoji
    items: [
      'Microscope Bulbs', 'Hid Bulbs', 'Led Bulb Housing', 'Cfl Capsule', 'Bulbs',
    ]
  },
  {
    name: 'Electric Motors & Engines',
    icon: '⚙️', // Gear emoji
    items: [
      'Siemens Dc Motor', 'Baldor Servo Motor', 'Heater Blower Motors', 'Electric Vehicle Motors', 'Baldor Electric Motor',
    ]
  },
  {
    name: 'Electrical / Lighting Products & Components',
    icon: '💡', // Light bulb emoji
    items: [
      'Light Emitting Diode', 'Flood Light Tower', 'Portable Traffic Light', 'Ceiling Light', 'Spiral Cfl',
    ]
  },
  {
    name: 'Cables/Cable Accessories & Conductors',
    icon: '🔗', // Link emoji
    items: [
      'Shielded Twisted Pair Cable', 'Aluminium Armoured Cable', 'Industrial Cable Assemblies', 'Coil Cord', 'Pvc Cable Ties',
    ]
  },
  {
    name: 'Switches',
    icon: '👆', // Index pointing up emoji
    items: [
      'Electrical Modular Switches', 'Electronic Limit Switches', 'Electronic Changeover Switch', 'Proximity Switch Assembly', 'Cran...',
    ]
  },
  {
    name: 'Outdoor Lighting',
    icon: '💡', // Light bulb emoji
    items: [
      'Street Lights', 'Oreva Street Light', 'Halogen Outdoor Lighting', 'Post Top Luminaire', 'Solar Bollard Lights',
    ]
  },
  {
    name: 'Sensors',
    icon: '👁️', // Eye emoji
    items: [
      'Dynamic Sensor', 'Wind Sensor', 'Hall Effect Sensor', 'Fuel Tank Level Sensor', 'Temperature Sensor',
    ]
  },
  {
    name: 'Transformer & Transformer Components',
    icon: '⚡', // High voltage emoji
    items: [
      'Halogen Lamp Transformer', 'Heat Treatment Transformer', 'Magnetic Transformer', 'Line Load Reactors', 'Auto...',
    ]
  },
  {
    name: 'Lamps & Lampshades',
    icon: '🛋️', // Couch and lamp emoji
    items: [
      'Silver Lantern', 'Brass Lanterns', 'Lantern Case', 'Floor Lamp', 'Lighting Floor Lamp',
    ]
  },
  {
    name: 'Electronic Liquid Level Controllers & Indicators',
    icon: '💧', // Droplet emoji
    items: [
      'Oil Level Sensor', 'Automatic Water Level Controller', 'Power Indicators', 'Water Pressure Regulator', 'Proportional...',
    ]
  },
  {
    name: 'Inverters & Ups Equipment',
    icon: '🔋', // Battery emoji
    items: [
      'Industrial Inverter', 'Mini Inverter', 'Emerson Online Ups', 'Cfl Inverter', 'Square Wave Inverter',
    ]
  },
  {
    name: 'Water Heater',
    icon: '♨️', // Hot springs emoji
    items: [
      'Solar Water Heater Pipe', 'Storage Geysers', 'Etc Solar Water Heater', 'Feed Water Heater', 'Ao Smith Water Heater',
    ]
  },
  {
    name: 'Power Supplies',
    icon: '⚡', // High voltage emoji
    items: [
      'Power Led Driver', 'Dc To Ac Converter', 'Servo Drives', 'Power Converter', 'Dc Dc Converter',
    ]
  },
  {
    name: 'Welding Equipment',
    icon: '🔥', // Fire emoji
    items: [
      'Laser Welding System', 'Welding Black Glass', 'Capacitor Welding Machine', 'Co2 Welding Torch', 'Copper Welding Cable',
    ]
  },
  {
    name: 'Electronic Signs & Sign Board',
    icon: '🚦', // Traffic light emoji
    items: [
      'Outdoor Digital Signage', 'Political Magnetic Signs', 'Acp Signage', 'Digital Signages', 'Moulded Glow Signs',
    ]
  },
  {
    name: 'Electrical Enclosures',
    icon: '🗄️', // Filing cabinet emoji
    items: [
      'Metal Electrical Boxes', 'Electrical Panel Box', 'Meter Box', 'Electrical Junction Box', 'Mcb Distribution Box',
    ]
  },
  {
    name: 'Cable Terminal, Lugs & Socket',
    icon: '🔌', // Electric plug emoji
    items: [
      'Tubular Compression Cable Lugs', 'Terminal Boxes', 'Bakelite Strip', 'Welding Lug', 'Electrical Sockets',
    ]
  },
  {
    name: 'Speakers & Speaker Parts',
    icon: '🔊', // Speaker emoji
    items: [
      'Karaoke Speaker', 'Lg Home Theater System', 'Subwoofer Speaker', 'Tweeter', 'Professional Speaker...',
    ]
  },
  {
    name: 'Generators',
    icon: '🔋', // Battery emoji
    items: [
      'Natural Gas Generator', 'Silent Generator', 'Portable Gasoline Generator', 'Hydro Turbine...',
    ]
  },
  {
    name: 'Insulation Material',
    icon: '🧱', // Brick emoji
    items: [
      'Railway Insulators', 'Glass Wool Panel', 'Bobbin Insulator', 'Power Line Fittings', 'Insulation Components',
    ]
  },
  {
    name: 'Chargers',
    icon: '🔌', // Electric plug emoji
    items: [
      'Usb Charger Kit', 'Float Cum Boost Charger', 'Charger Enclosures', 'Camcorder Charger', 'Strips Battery Chargers', 'Smps Battery Charger',
    ]
  },
  {
    name: 'Voltage Stabilizers',
    icon: '⚖️', // Balance scale emoji
    items: [
      'Voltage Corrector', 'Automatic Stabilizer', 'Static Var Generator', 'Digital Voltage Regulator', 'Servo Stabilizer',
    ]
  },
  {
    name: 'Electric Power Tools',
    icon: '🛠️', // Tools emoji
    items: [
      'Wood Working Tools', 'Angle Grinder', 'Ralli Wolf Power Tools', 'Cordless Grinder', 'Electric Nail Guns',
    ]
  },
  {
    name: 'Industrial Automation',
    icon: '🤖', // Robot emoji
    items: [
      'Automation Machines', 'Gripper Assembly', 'Servo Actuators', 'Industrial Robot Arm', 'Remotely Operated Vehicle',
    ]
  },
  {
    name: 'Electrical Testing & Measuring Equipment',
    icon: ' 측정 도구 ', // Measurement tool emoji
    items: [
      'Owens Bridge', 'Water Current Meter', 'Prepayment Meter', 'Surge Counter', 'Fft Analyzer',
    ]
  },
  {
    name: 'Circuit Boards',
    icon: ' CIRCUIT_BOARD ', // Circuit board emoji
    items: [
      'Router Board', 'Double Sided Circuit Boards', 'Weighing Scale Pcb', 'Rigid Flex Pcb', 'Flexible Pcb',
    ]
  },
  {
    name: 'Circuit Breaker',
    icon: '🔌', // Electric plug emoji
    items: [
      'Power Circuit Breaker', 'Vacuum Circuit Breaker Panels', 'Smart Mcb', 'Circuit Breaker Box', 'Breaker Parts',
    ]
  },
  {
    name: 'Relays',
    icon: '🎛️', // Control knobs emoji
    items: [
      'Miniature Power Relay', 'Dc Flasher', 'Motor Protection Relay', 'Electronic Relay', 'Earth Leakage Relay',
    ]
  },
  {
    name: 'Diesel Generator Sets',
    icon: '🔋', // Battery emoji
    items: [
      'Diesel Generators', 'Diesel Welding Generator', 'Diesel Engine Generator Set', 'Ashok Leyland Diesel',
    ]
  },
  {
    name: 'Stainless Steel Wires & Cables',
    icon: '🔗', // Link emoji
    items: [
      'Lead Free Solder Wire', 'Galvanized Steel Wire', 'Stainless Steel Spring Wire', 'Prestressed Concrete Steel',
    ]
  },
  {
    name: 'Cable Trays',
    icon: '🏗️', // Building construction emoji
    items: [
      'Pvc Cable Duct', 'Pvc Cable Trays', 'Cable Ducts', 'Perforated Cable Trays', 'Cable Raceway',
    ]
  },
  {
    name: 'Switchgear & Allied Products',
    icon: '🎛️', // Control knobs emoji
    items: [
      'Switchgear Panels', 'Hazard Warning Switches', 'Lt Switchgears', 'Hager Switchgear', 'Tap Switch',
    ]
  },
  {
    name: 'Electrical Transmission Line Goods',
    icon: ' towers ', // Towers emoji
    items: [
      'Ab Switch', 'Transmission Line Hardware', 'Station Post Insulator', 'Porcelain Bushing', 'High Voltag',
    ]
  },
  {
    name: 'Capacitors',
    icon: '⚡', // High voltage emoji
    items: [
      'Ht Capacitor', 'Filter Capacitors', 'Capacitor Part', 'Capacitor Bank', 'Polyester Film Capacitors',
    ]
  },
  {
    name: 'Flashlights',
    icon: '🔦', // Flashlight emoji
    items: [
      'Rechargeable Led Flashlight', 'Eveready Rechargeable Torch', 'Led Torches', 'Head Torch', 'Pocket Torches',
    ]
  },
  {
    name: 'Brass Electrical & Electronic Components',
    icon: '⚙️', // Gear emoji
    items: [
      'Brass Kit Kat Fuse Parts', 'Brass Block', 'Riveting Brass Wire', 'Brass Plunger', 'Brass Adapters',
    ]
  },
  {
    name: 'Frames & Display',
    icon: '🖼️', // Frame with picture emoji
    items: [
      'Mirror Frames', 'Wall Mounted Display', 'Embossed Frame', 'Bone Picture Frame', 'Poster Frame Display',
    ]
  },
  {
    name: 'Residential Lighting',
    icon: '💡', // Light bulb emoji
    items: [
      'Led Remote Control Lights', 'Chandelier Accessories', 'Chandelier', 'Baby Night Light', 'Led Chandeliers',
    ]
  },
  {
    name: 'Decorative Lights',
    icon: '✨', // Sparkles emoji
    items: [
      'Cluster Light', 'Red Led Floor Light', 'Stage Lights', 'Firework Light', 'Led Pendant Lights',
    ]
  },
  {
    name: 'LED Displays',
    icon: '🖥️', // Desktop computer emoji
    items: [
      'Single Color Led Display', 'Led Token Display Boards', 'Led Video Screen', 'Outdoor Led Display Board', 'Led',
    ]
  },
  {
    name: 'Dc Power Supplies',
    icon: '⚡', // High voltage emoji
    items: [
      'Dc Dc Converter', 'Programmable Dc Power Supply', 'Dc Power Pack', 'Dc Connector', 'Dc Contactor',
    ]
  },
  {
    name: 'Power Cable Accessories',
    icon: '🔌', // Electric plug emoji
    items: [
      'Polycab Power Cable', 'Pvc Power Cables', 'Power Transmitter', 'Portable Power Systems', 'Power Plier',
    ]
  },
  {
    name: 'Emergency & Safety Lights',
    icon: '🚨', // Police Car Light emoji
    items: [
      'Exit Light', 'Portable Emergency Light', 'Siren Light', 'Beacon Light', 'Rechargeable Emergency Light',
    ]
  },
  {
    name: 'Electronic Testing Equipment',
    icon: '🔬', // Microscope emoji
    items: [
      'Digital Function Generator', 'Impedance Testers', 'Electronic Extensometer', 'Digital Tensile Strength Tester', 'Ic Tester',
    ]
  },
  {
    name: 'Rectifiers',
    icon: '⚡', // High voltage emoji
    items: [
      'Silicon Rectifier', 'Alternator Rectifier', 'Ac Dc Rectifier', 'Air Cooled Rectifiers', 'Industrial Rectifier',
    ]
  },
  {
    name: 'Earthing Electrodes',
    icon: '🌍', // Earth emoji
    items: [
      'Earthing Equipments', 'Earthing Pipe', 'Earthing Kit', 'Safe Earthing Electrode', 'Gi Pipe Electrode',
    ]
  },
  {
    name: 'Electronic Instrument',
    icon: '📊', // Bar chart emoji
    items: [
      'Digital Counter', 'Weight Indicators', 'Voice Recorder', 'Rf Detector', 'Vascular Doppler Recorder',
    ]
  },
  {
    name: 'Jacks',
    icon: '🛠️', // Tools emoji
    items: [
      'Scaffolding U Jack', 'Die Lifter', 'Universal Jacks', 'Modular Jacks', 'Hydraulic Car Jack',
    ]
  },
  {
    name: 'Turbine',
    icon: '💨', // Dashing away emoji
    items: [
      'Kaplan Turbines', 'Water Turbine', 'Hydro Turbine Parts', 'Gas Turbine Spare Part', 'Wind Turbine Blades',
    ]
  },
  {
    name: 'Public Address Systems',
    icon: '📢', // Loudspeaker emoji
    items: [
      'Wireless Pa System', 'Reflex Horn', 'Voice Announcer', 'Box Speakers', 'Ceiling Mount Speaker',
    ]
  },
  {
    name: 'Pressure Switches',
    icon: '⚙️', // Gear emoji
    items: [
      'Hydraulic Pressure Switch', 'Pump Pressure Switch', 'Orion Pressure Switch', 'Differential Pressure Switch', 'Air Compressor Pressu...',
    ]
  },
  {
    name: 'Power Transmission Equipment',
    icon: '⚡', // High voltage emoji
    items: [
      'Drive Flex Handle', 'Power Transmission Parts', 'Power Control Centers', 'Collector Ring', 'Industrial Flywheel',
    ]
  },
  {
    name: 'Home Automation Systems',
    icon: '🏠', // House emoji
    items: [
      'Home Automation System', 'Building Automation System',
    ]
  },
  {
    name: 'Electronic Enclosures',
    icon: '🗄️', // Filing cabinet emoji
    items: [
      'Weatherproof Enclosures', 'Vibration Free Acoustic Enclosure', 'Abs Enclosures', 'Flameproof...',
    ]
  },
  {
    name: 'Wiring Harness',
    icon: '🔗', // Link emoji
    items: [
      'Automotive Wire Connector', 'Wire Harness Assembly', 'Cable Harness', 'Control Panel Wiring', 'Engine Wiring Harness',
    ]
  },
  {
    name: 'Doorbell',
    icon: '🛎️', // Bell emoji
    items: [
      'Electrical Door Bells', 'Electronic Doorbells', 'Doorbell Switch', 'Musical Door Bell', 'Antique Door Bells',
    ]
  },
  {
    name: 'Radio & TV Equipment',
    icon: '📻', // Radio emoji
    items: [
      'Satellite Tv Receiver', 'Cable Adapter', 'Outdoor Antenna', 'Tv Pcb Board', 'Radio Modem',
    ]
  },
  {
    name: 'Semiconductors',
    icon: '⚡', // High voltage emoji
    items: [
      'Power Semiconductor', 'Silicon Diode', 'Semiconductor Components', 'Obsolete...',
    ]
  },
  {
    name: 'Energy Saving Devices',
    icon: '🔋', // Battery emoji
    items: [
      'Eco Power Saver', 'Electric Power Saver', 'Solar Led Street Light', 'Power Saver', 'Lpg Gas Saver',
    ]
  },
  {
    name: 'Electro Stampings',
    icon: '🔩', // Nut and bolt emoji
    items: [
      'Submersible Motor Stamping', 'Crno Stamping', 'Lamination Stack', 'Motor Stamping', 'Crgo Transformer Stampings',
    ]
  },
  {
    name: 'Calculator',
    icon: '🧮', // Abacus emoji
    items: [
      'Casio Basic Calculator', 'Ruler Calculator', 'Construction Calculator', 'Pocket Calculators', 'Electroni',
    ]
  },
  {
    name: 'Laser',
    icon: '💥', // Collision emoji
    items: [
      'Laser Transmitter', 'Laser Light', 'Hair Removal Laser Machine', 'Red Line Laser', 'Red Laser Pointer',
    ]
  },
  {
    name: 'Electronic Data Systems',
    icon: '💾', // Floppy disk emoji
    items: [
      'Temperature Data Logger', 'Voting Pad', 'Wireless Data Acquisition System', 'Analog To Digital',
    ]
  },
  {
    name: 'Plastic Enclosures',
    icon: '📦', // Box emoji
    items: [
      'Battery Container', 'Plastic Electrical Enclosure', 'Abs Plastic Enclosure', 'Plastic Closures', 'Equipment Enclosures',
    ]
  },
  {
    name: 'Flood Light',
    icon: '💡', // Light bulb emoji
    items: [
      'Recessed Luminaries', 'Led Flood Light', 'Spot Lights', 'Solar Street Light Luminary', 'Solar Cfl Luminaries',
    ]
  },
  {
    name: 'Lightning Protection System',
    icon: '⚡', // High voltage emoji
    items: [
      'Ese Air Terminal', 'Lightning Strike Counter', 'Power Surge Protector', 'Surge Arresters', 'Lightning Control System',
    ]
  },
  {
    name: 'Electro Magnets',
    icon: ' magnetic field ', // Magnetic field emoji
    items: [
      'Industrial Magnets', 'Electromagnetic Separator', 'Coil Type Magnetizer', 'Electromagnetic Chuck', 'Pro...',
    ]
  },
  {
    name: 'Electrical Safety Products',
    icon: '👷', // Construction worker emoji
    items: [
      'Capacitor Bushing', 'Electrical Insulated Rubber Mats', 'Flameproof Electrical Products', 'Electrical Safety...',
    ]
  },
  {
    name: 'Electronic Safe',
    icon: '🔒', // Lock emoji
    items: [
      'Depository Safes', 'Industrial Lockers', 'Biometric Safe', 'Password Lockers', 'Electric Safes',
    ]
  },
  {
    name: 'Light Fittings & Fixtures',
    icon: '💡', // Light bulb emoji
    items: [
      'Flameproof Light Fittings', 'Light Fixtures', 'Tube Light Fittings', 'Led Light Fittings', 'Wire Suspension',
    ]
  },
  {
    name: 'ESD Products & Equipment',
    icon: '🔌', // Electric plug emoji
    items: [
      'Esd Mat', 'Esd Workbench', 'Esd Brushes', 'Esd Glove', 'Esd Workstation',
    ]
  },
  {
    name: 'Switchboard',
    icon: '🎛️', // Control knobs emoji
    items: [
      'Modular Switchboards', 'Switch Board Sheet', 'Low Voltage Switchboard', 'Switch Box', 'Distribution Switchboards',
    ]
  },
  {
    name: 'Plastic Welding Equipment',
    icon: '🔥', // Fire emoji
    items: [
      'Poli Welding Tool', 'Plastic Welder', 'Plastic Welding Machine', 'Pvc Welding Cable', 'Ultrasonic Plastic Welding...',
    ]
  },
  {
    name: 'Insulation Paper',
    icon: '📄', // Page with curl emoji
    items: [
      'Capacitor Paper', 'Electrical Insulating Paper', 'Fusing Paper', 'Ceramic Fiber Blanket', 'Insulating Kraft Paper',
    ]
  },
  {
    name: 'Generator Parts & Accessories',
    icon: '⚙️', // Gear emoji
    items: [
      'Generator Parts', 'Pollution Control Equipment', 'Generator Voltage Regulator', 'Generator Canopies', 'Hho Kits',
    ]
  },
  {
    name: 'Heat Resistance Wire',
    icon: '🔥', // Fire emoji
    items: [
      'Electrical Heat Tracers',
    ]
  },
  {
    name: 'Electrical Outlets',
    icon: '🔌', // Electric plug emoji
    items: [
      '2 Pin Plug', 'Socket Outlet',
    ]
  },
  {
    name: 'Fibreglass Cable',
    icon: '🔗', // Link emoji
    items: [], // Items not visible in screenshot
  },
  {
    name: 'Radio & TV',
    icon: '📻', // Radio emoji
    items: [
      'Tv Modulator', 'Fm Radio', 'Radio Modem', 'Color Tv Kit', 'Portable Color Tv',
    ]
  },
  {
    name: 'Electrical Product Agent',
    icon: '👨‍💼', // Man in business suit emoji
    items: [], // Items not visible in screenshot
  },
  {
    name: 'Commercial Field',
    icon: '🏢', // Office building emoji
    items: [], // Items not visible in screenshot
  },
  {
    name: 'TV Picture Tubes',
    icon: '📺', // Television emoji
    items: [
      'Tube Sockets',
    ]
  },
  {
    name: 'Electronics Stocks',
    icon: '📈', // Chart increasing emoji
    items: [], // Items not visible in screenshot
  },
  {
    name: 'Financial Field',
    icon: '💰', // Money bag emoji
    items: [], // Items not visible in screenshot
  },
  {
    name: 'Electronics Agents',
    icon: '👩‍💼', // Woman in business suit emoji
    items: [], // Items not visible in screenshot
  },
];

const ElectronicsAndElectricalSubcategories = () => (
  <div className="container mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6">Electronics & Electrical Supplies Subcategories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {electronicsAndElectricalSubcategories.map((sub, idx) => (
        <div key={idx} className="flex flex-col p-4 bg-white rounded shadow">
          <div className="flex items-center mb-2">
            {/* Placeholder for image icon */}
            {/* <img src={sub.icon} alt={sub.name} className="w-12 h-12 object-contain mr-3" /> */}
            <span className="text-4xl mr-3">{sub.icon}</span>
            <span className="text-lg font-semibold">{sub.name}</span>
          </div>
          {sub.items && (
            <div className="text-gray-600 text-sm">
              {sub.items.join(', ')}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ElectronicsAndElectricalSubcategories; 