const brassHardwareSubcategories = [
  {
    name: 'Brass Components',
    icon: '🔩',
    items: [
      'Brass Water Plugs', 'Brass Door Stoppers', 'Brass Napkin Holder', 'Brass Line Taps', 'Brass Plate'
    ]
  },
  {
    name: 'Brass Nuts & Bolts',
    icon: '🔩',
    items: [
      'Brass Xylo Tower Bolt', 'Precision Brass Bolts', 'Brass Banjo Bolts', 'Brass Gas Nut', 'D Nut'
    ]
  },
  {
    name: 'Brass Inserts',
    icon: '🛠️',
    items: [
      'Brass Insert Fitting', 'Brass Cpvc Insert', 'Brass Threaded Inserts', 'Brass Ppr Insert', 'Female Inserts'
    ]
  },
  {
    name: 'Brass Fittings',
    icon: '🔗',
    items: [
      'Brass Xylo Tower Bolt', 'Brass Extension Fittings', 'Brass Lpg Gas Fitting', 'Brass Assemblies', 'Brass Coupling'
    ]
  },
  {
    name: 'Brass Hinges',
    icon: '🚪',
    items: [
      'H Hinges', 'Antique Brass Hinges', 'W Hinges', 'Brass Door Hinges', 'Solid Brass Hinges'
    ]
  },
  {
    name: 'Brass Valves',
    icon: '🚰',
    items: [
      'Brass Gate Valves', 'Brass Float Valve', 'Brass Check Valves', 'Brass Ball Valve', 'Brass Valve Spindle'
    ]
  },
  {
    name: 'Brass Cable Gland',
    icon: '🔌',
    items: [
      'Wiping Glands', 'Cable Gland Kit', 'E1w Cable Gland'
    ]
  },
  {
    name: 'Brass Screws',
    icon: '🔩',
    items: [
      'Brass File Screw', 'Brass Round Head Screws', 'Brass Hex Screw', 'Set Screw', 'Brass Grub Screws'
    ]
  },
  {
    name: 'Brass Extruded Rod',
    icon: '🦯',
    items: [
      'Brass Bars', 'Brass Hex Bar', 'Brass Rods', 'Brass Flat Bar', 'Brass Billets'
    ]
  },
  {
    name: 'Brass Fasteners',
    icon: '🧲',
    items: [
      'Brass Cable Gripper', 'Brass Standoff', 'Silicon Bronze Washer', 'Brass Stud', 'Brass Grease Nipples'
    ]
  },
  {
    name: 'Brass Terminals',
    icon: '🔌',
    items: [
      'Brass Current Terminals', 'Push Terminal', 'Pcb Terminal Block', 'Brass Terminal Connectors', 'Brass Battery...'
    ]
  },
  {
    name: 'Brass Builders Hardware',
    icon: '🛠️',
    items: [
      'Riveting Brass Rods', 'Brass Hooks', 'Brass Corners', 'Brass Aldrops', 'Tin Bronze Rod'
    ]
  },
  {
    name: 'Brass Anchors',
    icon: '⚓',
    items: [
      'Brass Anchor Bolts', 'Brass Pool Anchors'
    ]
  },
  {
    name: 'Brass Scrap',
    icon: '♻️',
    items: [
      'Brass Honey Scrap', 'Red Brass Scrap'
    ]
  },
  {
    name: 'Brass Rivets',
    icon: '🔩',
    items: [
      'Drive Rivet', 'Precision Rivets', 'Contact Rivet', 'Split Rivets', 'Push Rivet'
    ]
  },
  {
    name: 'Brass Turned Components',
    icon: '🔄',
    items: [
      'Brass Pump Parts', 'Precision Brass Turned Components'
    ]
  },
  {
    name: 'Brass Furniture Fitting Parts',
    icon: '🪑',
    items: [
      'Brass Cabinet Knobs', 'Brass Fixtures', 'Brass Chair', 'Brass Cabinet Handle', 'Brass Aldrops'
    ]
  },
  {
    name: 'Brass Auto Parts',
    icon: '🚗',
    items: [
      'Brass Air Vents', 'Brass Automobile Parts'
    ]
  },
  {
    name: 'Brass Pneumatic Fittings',
    icon: '🔩',
    items: [
      'Brass Conduit Fittings', 'Brass Water Meter Body', 'Brass Pneumatic Component', 'Brass Compression Fittings'
    ]
  },
  {
    name: 'Brass Forged Components',
    icon: '⚒️',
    items: [
      'Brass Forgings', 'Brass General Components', 'Brass Forged Fitting'
    ]
  },
  {
    name: 'Brass Stove Parts',
    icon: '🍳',
    items: [
      'Brass Stove', 'Pan Support', 'Brass Kerosene Stoves', 'Brass Gas Parts', 'Brass Gas Stove Part'
    ]
  },
  {
    name: 'Brass Transformer Parts',
    icon: '🔌',
    items: [
      'Brass Hex Screw', 'Brass Terminal Connectors', 'Brass Angle Valve', 'Distribution Transformer Metal...'
    ]
  },
  {
    name: 'Brass Turning Parts',
    icon: '🔄',
    items: [
      'Brass Parts', 'Brass Machined Parts'
    ]
  },
];

const BrassHardwareSubcategories = () => (
  <div className="container mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6">Brass Hardware & Components Subcategories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {brassHardwareSubcategories.map((sub, idx) => (
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

export default BrassHardwareSubcategories; 