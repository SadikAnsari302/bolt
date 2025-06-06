const automobileSubcategories = [
  {
    name: 'Automobiles',
    icon: '🚗',
    items: [
      'Used Hyundai Cars', 'Spectrometer', 'Tractor Gears', 'Vanity Van', 'Tire Cover'
    ]
  },
  {
    name: 'Auto Batteries',
    icon: '🔋',
    items: [
      'Exide Car Battery', 'Automotive Battery Charger', 'Exide Truck Battery', 'Bosch Car Battery', 'Sf Sonic Automotive Batteries'
    ]
  },
  {
    name: 'Truck & Parts',
    icon: '🚚',
    items: [
      'Mercedes Benz Truck Parts', 'Truck Side Mirror', 'Mini Truck', 'Garbage Truck', 'Truck Accessories'
    ]
  },
  {
    name: 'Automobile Electrical Spares',
    icon: '💡',
    items: [
      'Automotive Buzzer', 'Head Light Holders', 'Automobile Switches', 'Indicator Lamps', 'Tail Light Covers'
    ]
  },
  {
    name: 'Automotive Filters',
    icon: '🧃',
    items: [
      'Car Diesel Filter', 'Air Filter Parts', 'Two Wheeler Air Filter', 'Tractor Air Filter', 'Engine Oil Filters'
    ]
  },
  {
    name: 'Car Cleaning Products',
    icon: '🧴',
    items: [
      'Carburetor Cleaner', 'Fuel System Cleaners', 'Car Spray Cleaner', 'Steam Car Washer', 'Car Interior Cleaner'
    ]
  },
  {
    name: 'Rickshaw',
    icon: '🛺',
    items: [
      'Tricycle Rickshaw', 'E Rickshaw Meter', 'Electric Rickshaw', 'E Rickshaw Seat', 'Garbage Cycle Rickshaw'
    ]
  },
  {
    name: 'Vehicle Security System & Protection Devices',
    icon: '🔐',
    items: [
      'Vehicle Speed Limiter', 'Vehicle Jammer', 'Safety Seat', 'Fire Hose', 'Back Horn'
    ]
  },
  {
    name: 'Steering & Transmission Parts',
    icon: '🦾',
    items: [
      'Power Steering System', 'Steering Wheel Lock', 'Steering Assemblies', 'Car Steering Wheel', 'Steering Wheels'
    ]
  },
  {
    name: 'Three Wheeler & Parts',
    icon: '🛵',
    items: [
      'Three Wheeler Accessories', 'Cng Auto Rickshaw', 'Three Wheeler Wiring Harness', 'Bajaj Three Wheeler', 'Three Wheeler Parts'
    ]
  },
  {
    name: 'Auto Electronics',
    icon: '📻',
    items: [
      'Instrument Cluster', 'Garmin Dash Cam', 'Starter Motor Parts', 'Car Monitor', 'Car Cassette Player'
    ]
  },
  {
    name: 'Fuel Injection Systems/Pipes',
    icon: '⛽',
    items: [
      'Fuel Injection Pump Test Bench', 'Fuel Pump Nozzle', 'Suntec Fuel Pump', 'Motorcycle Fuel Tap', 'Bosch Fuel...'
    ]
  },
  {
    name: 'Automotive Heating & Air Conditioning System',
    icon: '🌬️',
    items: [
      'Air Vents', 'Crankcase Heater', 'Pressure Relief Damper', 'Cold Plates', 'Air Conditioning Duct'
    ]
  },
  {
    name: 'Auto Bearing',
    icon: '🔩',
    items: [
      'Automobile Bearings', 'Axle Bearing', 'Ball Retainer', 'Auto Ball Bearings', 'Hub Bearings'
    ]
  },
  {
    name: 'Special Transportation Equipment',
    icon: '🚛',
    items: [
      'Transportation Cases', 'Oil Tankers', 'Recreational Vehicle', 'Cane Unloader Trolley', 'Insulated Vans'
    ]
  },
  {
    name: 'Automotive Glass & Mirrors',
    icon: '🪞',
    items: [
      'Light Mirror', 'Laminated Glass', 'Polished Edge Mirror', 'Under Vehicle Search Mirror', 'Bar End Mirror'
    ]
  },
  {
    name: 'Oil & Lubricants',
    icon: '🛢️',
    items: [
      'White Grease', 'Compressor Lubricant', 'Virgin Base Oil', 'Lubricating Greases', 'Immersion Oil'
    ]
  },
  {
    name: 'Automotive Parts & Components',
    icon: '⚙️',
    items: [
      'Tank Units', 'Spark Plug Cap', 'Tubular Components', 'Stator', 'Bajaj Auto Parts'
    ]
  },
  {
    name: 'Auto Accessories',
    icon: '🚗',
    items: [
      'Connecting Rod', 'Headrest Covers', 'Automotive Window Film', 'Key Light', 'Car Sun Visors'
    ]
  },
  {
    name: 'Helmets',
    icon: '🪖',
    items: [
      'Flip Up Helmets', 'Stone Helmets', 'Lighting Helmet', 'Cross Helmets', 'Polyethylene Helmet'
    ]
  },
  {
    name: 'Engine, Engine Parts & Mounts',
    icon: '🛠️',
    items: [
      'Retainer Ring', 'Motorcycle Engine Parts', 'Small Engine Parts', 'Engine Oil Cooler', 'Automotive Engines'
    ]
  },
  {
    name: 'Trailers & Trolleys',
    icon: '🛻',
    items: [
      'Hook Loader', 'Agricultural Tractor Trailer', 'Industrial Trolley', 'Low Bed Trailer', 'Genset Trolley'
    ]
  },
  {
    name: 'Tyres & Tubes',
    icon: '🛞',
    items: [
      'Curing Rim', 'Heavy Duty Tyres', 'Apollo Tyres', 'Nylon Tyre', 'Trailer Tyres'
    ]
  },
  {
    name: 'Sheet Metal Components & Parts',
    icon: '🧰',
    items: [
      'Precision Sheet Metal Parts', 'Powder Metal Part', 'Base Frame', 'Metal Brackets', 'Pressed Metal Parts'
    ]
  },
  {
    name: 'Automotive Gears & Gear Parts',
    icon: '⚙️',
    items: [
      'Camshaft Gear', 'Steering Cone Set', 'Gearbox Mount', 'Clutch Actuator', 'Powdered Metal Gears'
    ]
  },
  {
    name: 'Brakes & Brake Parts',
    icon: '🛑',
    items: [
      'Vacuum Brake Booster', 'Heavy Duty Brake Lining', 'Ceramic Brake Pads', 'Brake Disc', 'Rear Brake Drum'
    ]
  },
  {
    name: 'Garage & Service Station Equipment',
    icon: '🧰',
    items: [
      'Wheel Chocks', 'Transmission Jack', 'Rim Repair Equipment', 'Obd Scanner', 'Washing Hoist'
    ]
  },
  {
    name: 'Clutches & Clutch Parts',
    icon: '🧲',
    items: [
      'Hydraulic Clutches', 'Clutch Cover', 'Slip Clutch', 'Magnetic Clutches', 'Clutch Pulley'
    ]
  },
  {
    name: 'Piston & Piston Rings',
    icon: '🔩',
    items: [
      'Cast Iron Piston Ring', 'Piston Ring Compressor', 'Rocker Arm Assembly', 'Spring Pads', 'Cylinder Heads'
    ]
  },
  {
    name: 'Chains & Sprockets',
    icon: '⛓️',
    items: [
      'Pull Chain', 'Big Sprocket', 'Pitch Chain', 'Idler Sprocket', 'Motorcycle Chain'
    ]
  },
  {
    name: 'Auto Lighting System',
    icon: '💡',
    items: [
      'Automotive Tail Lights', 'Car Alternators', 'Off Road Lights', 'Car Headlight', 'Xenon Light'
    ]
  },
  {
    name: 'Parking Systems',
    icon: '🅿️',
    items: [
      'Manual Parking Barrier', 'Trolley Mirror', 'Parking Brake Lever', 'Scissor Parking Lift', 'Car Shelter'
    ]
  },
  {
    name: 'Bus Body Parts & Spares',
    icon: '🚌',
    items: [
      'Ambulance Body', 'Bus Body Builder', 'Bus Seat Belt', 'Luxury Bus Seats', 'Bus Parts'
    ]
  },
  {
    name: 'Electric Vehicles',
    icon: '⚡🚗',
    items: [
      'Hero Electric Bike', 'Electric Car', 'Rickshaw', 'Battery Operated Loader', 'Electric Garbage Van'
    ]
  },
  {
    name: 'Automotive LED Lights',
    icon: '💡',
    items: [
      'Submersible Led Lights', 'Led Fog Lamp', 'Led Headlamp', 'Led', 'Led Dome Light'
    ]
  },
  {
    name: 'Automotive Radiators & Parts',
    icon: '🌡️',
    items: [
      'Radiator Hoses', 'Radiator Necks', 'Radiator Line', 'Radiator Hose Kit', 'Automobile Radiator'
    ]
  },
  {
    name: 'Precision Auto Turned Parts & Components',
    icon: '🔧',
    items: [
      'Precision Designed Pulley', 'Precision Couplings', 'Precision Wheel', 'Ferrules', 'Precision Components'
    ]
  },
  {
    name: 'Automotive Exhaust System & Parts',
    icon: '🚙',
    items: [
      'Exhaust Plenum', 'Muffler Pipe', 'Exhaust Pipes', 'Exhaust Mounts', 'Automotive Exhaust Parts'
    ]
  },
  {
    name: 'Shock Absorbers',
    icon: '🛞',
    items: [
      'Air Shock Absorbers', 'Motorcycle Shock Absorbers', 'Three Wheeler Shock Absorber', 'Seat Shock Absorber', 'Rubber...'
    ]
  },
  {
    name: 'Auto Starter System',
    icon: '🔌',
    items: [
      'Push Button Starter', 'Electric Starter', 'Enclosed Starter', 'Jump Starter', 'Car Starter'
    ]
  },
  {
    name: 'Auto Ignition System',
    icon: '🔥',
    items: [
      'Spark Plugs', 'Auto Ignition Switch', 'Ignition Electrode', 'Ignition Switch', 'Electronic Ignition Unit'
    ]
  },
  {
    name: 'Windshield Wipers',
    icon: '🧹',
    items: [
      'Conventional Wiper Blades', 'Wiper Arms', 'Car Wiper', 'Windshield Wiper Blades', 'Wiper Plug'
    ]
  },
  {
    name: 'Auto Meters',
    icon: '⏱️',
    items: [
      'Auto Fare Meter', 'Spectrometer', 'Oval Wheel Meters', 'Engine Dynamometer', 'Taxi Meters'
    ]
  },
  {
    name: 'Fuel System',
    icon: '⛽',
    items: [
      'Oil Circulation System', 'Fuel Tanks', 'Diesel Fuel Vaporizer', 'Auto Fuel Pump', 'Fuel Connector'
    ]
  },
  {
    name: 'Engine Valves',
    icon: '🔩',
    items: [
      'Diesel Engine Valve', 'Engine Valve Guides', 'Car Engine Valve', 'Diesel Valve'
    ]
  },
  {
    name: 'Auto Maintenance',
    icon: '🧽',
    items: [
      'Fuel Saver', 'Oil Changer', 'Car Wash Sponge', 'Cross Rod', 'Stain Remover'
    ]
  },
  {
    name: 'Precision Machined Components',
    icon: '⚙️',
    items: [
      'Precision Traub Components', 'Automobile Couplings', 'Precision Machinery Casting', 'Precision Cnc Turned Parts'
    ]
  },
  {
    name: 'Automotive Valves',
    icon: '🛠️',
    items: [
      'Valve Seats', 'Fuel Valve', 'Valve Seat Inserts', 'Piston Valve', 'Thermal Expansion Valve'
    ]
  },
  {
    name: 'Sheet Metal Pressed Components',
    icon: '🧰',
    items: [
      'Pressed Tread Plate', 'Sheet Metal Press Parts', 'Spring Steel Flat', 'Ground Plate', 'Pressed Metal Parts'
    ]
  },
  {
    name: 'Second Hand Automobile',
    icon: '🚙',
    items: [
      'Used Ford Cars', 'Honda Used Cars', 'Used Toyota Cars', 'Alto Used Cars', 'Automobile Forged Parts'
    ]
  },
  {
    name: 'Brass Auto Parts',
    icon: '🔩',
    items: [
      'Brass Automobile Parts', 'Brass Air Vents'
    ]
  },
  {
    name: 'Automobile & Parts Agent',
    icon: '🧑‍💼',
    items: [
      'Car Monitor', 'Garbage Compactor', 'Accelerator Cables', 'Automotive Switches', 'Automotive...'
    ]
  },
  {
    name: 'Used Auto Parts',
    icon: '🔧',
    items: [
      'Rotary Tiller Spares', 'Jcb Parts', 'Engine Control Unit', 'Rebuilt Engines', 'Engine Oil Pan'
    ]
  },
  {
    name: 'Precision Sheet Metal',
    icon: '📏',
    items: [
      'Sheet Metal Enclosures', 'Pressed Metal Parts', 'Precision Sheet Metal Components', 'Brass Sheet Metal...'
    ]
  },
  {
    name: 'Reflex Reflectors',
    icon: '🟧',
    items: [
      'Glass Reflector'
    ]
  },
  {
    name: 'Automobile Stocks',
    icon: '📦',
    items: [
      'Automobile Chassis'
    ]
  },
];

const AutomobileSubcategories = () => (
  <div className="container mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6">Automobile Subcategories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {automobileSubcategories.map((sub, idx) => (
        <div key={idx} className="flex flex-col p-4 bg-white rounded shadow">
          <div className="flex items-center mb-2">
            <span className="text-3xl mr-3">{sub.icon}</span>
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

export default AutomobileSubcategories; 