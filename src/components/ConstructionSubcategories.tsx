const constructionSubcategories = [
  {
    name: 'Doors/Windows Accessories & Fittings',
    icon: '🚪',
    items: [
      'Safety Hasp', 'Wpc Window', 'Stainless Steel Door Knobs', 'Puff Doors', 'Window Regulator Handle'
    ]
  },
  {
    name: 'Furniture Fittings & Fixtures',
    icon: '🪑',
    items: [
      'Garage Cabinet', 'Telescopic Drawer Channel', 'Iron Mirror Frame', 'Computer Workstation Furniture', 'Banquet Hall...'
    ]
  },
  {
    name: 'Bathroom & Toilet Accessories/Fittings',
    icon: '🚿',
    items: [
      'Towel Stands', 'Bathroom Towel Rail', 'Bath Enclosure', 'Bath Ball', 'Hand Showers'
    ]
  },
  {
    name: 'Building & Construction Material & Supplies',
    icon: '🏗️',
    items: [
      'Cover Block', 'Floor Register', 'Glass Building Material', 'Gypsum Panels', 'Biaxial Geogrid'
    ]
  },
  {
    name: 'Doors/Wooden Door Panels',
    icon: '🚪',
    items: [
      'Blast Doors', 'Patio Door', 'Wooden Kitchen Shutter', 'Glass Door Hinges', 'Upvc Doors'
    ]
  },
  {
    name: 'Tiles',
    icon: '🟫',
    items: [
      'Sanitary Tile', 'Glazed Vitrified Tile', 'Designer Tiles Mould', 'Polished Floor Tiles', 'Stone Floor Tiles'
    ]
  },
  {
    name: 'Paint & Allied Products',
    icon: '🎨',
    items: [
      'Anti Corrosive Paint', 'Epoxy Zinc Phosphate Primer', 'White Contrast Paint', 'Paint Brush Handle', 'Varnishes'
    ]
  },
  {
    name: 'Roofing Systems',
    icon: '🏠',
    items: [
      'Fabric Shades', 'Roofing Tiles', 'Ppgi Roofing Sheet', 'Rooftop Structure', 'Gypsum Ceiling Panels'
    ]
  },
  {
    name: 'Plywood',
    icon: '🪵',
    items: [
      'Wood Board', 'Kitply Plywood', 'Polyester Plywood', 'Veneer Tape', 'Birch Veneer'
    ]
  },
  {
    name: 'PVC Products',
    icon: '🧱',
    items: [
      'Pvc Coated Paper Board', 'Metallized Cpp Films', 'Pvc Patch', 'Pvc Shrink Film', 'Pvc Transparent Card'
    ]
  },
  {
    name: 'Sanitaryware',
    icon: '🚽',
    items: [
      'Water Closet Pan', 'Round Sink', 'Hand Wash Station', 'One Piece Toilet', 'Wash Basin'
    ]
  },
  {
    name: 'Construction Machinery',
    icon: '🚜',
    items: [
      'Wall Plastering Machine', 'Concrete Trailer Pump', 'Internal Concrete Vibrator', 'Hollow Block Making Machine', 'Post Tensioning...'
    ]
  },
  {
    name: 'Gates & Grills',
    icon: '🛡️',
    items: [
      'Stop Log Gates', 'Fence', 'Ornamental Grills', 'Iron Railings', 'Railing Profile'
    ]
  },
  {
    name: 'Prefabricated & Portable Buildings',
    icon: '🏠',
    items: [
      'Prefabricated Metal Building', 'Mobile Cabins', 'Factory Shed', 'Modular Tensile Structure', 'Prefabricated Shed'
    ]
  },
  {
    name: 'Elevators, Lifts & Escalators',
    icon: '🛗',
    items: [
      'Construction Lift', 'Mobile Column Lifts', 'Bed Lift', 'Elevator Pulley', 'Belt Elevators'
    ]
  },
  {
    name: 'Bright Bars',
    icon: '🔩',
    items: [
      'Aluminium Bar', 'Square Bright Bar', 'Tata Tmt Bar', 'Bright Shafting Bars', 'Mild Steel Bright Bars'
    ]
  },
  {
    name: 'Cement & Sand',
    icon: '🧱',
    items: [
      'M Sand', 'Oil Well Cement', 'Pvc Cement Tin', 'Amrit Cement', 'Opc Cement'
    ]
  },
  {
    name: 'Timber, Timber Products & Plank',
    icon: '🪵',
    items: [
      'Mango Wood', 'Ebony Wood', 'Pine Timber', 'Sawdust Powder', 'White Wood Powder'
    ]
  },
  {
    name: 'Builders & Construction Hardware',
    icon: '🛠️',
    items: [
      'Handrail Components', 'Stainless Steel Handrails', 'Brass Escutcheons', 'Glass Staircase', 'Ball Fittings'
    ]
  },
  {
    name: 'Granite',
    icon: '🪨',
    items: [
      'Imperial White Granite', 'Galaxy Granite', 'Premium Black Granite', 'Butterfly Green Granite', 'Granite Palisades'
    ]
  },
  {
    name: 'Locks',
    icon: '🔒',
    items: [
      'Electric Door Strike', 'Door Interlocks', 'Switch Locks', 'Cylindrical Lock', 'Iron Lock'
    ]
  },
  {
    name: 'Flooring',
    icon: '🪟',
    items: [
      'Self Leveling Epoxy Flooring', 'Wooden False Flooring', 'Vinyl Plank', 'Floor Cord Cover', 'Stainless Steel Floor'
    ]
  },
  {
    name: 'Glass & Glass Products',
    icon: '🧊',
    items: [
      'Wooden Glass Door', 'Acid Texture Glass', 'Furnace Observation Glass', 'Double Glazing Glass', 'Cover Glasses'
    ]
  },
  {
    name: 'Marble',
    icon: '🪨',
    items: [
      'Albeta Marble', 'Venatino Marble', 'Rosso Levanto Marble', 'Brown Marble', 'Colored Marble'
    ]
  },
  {
    name: 'Stone',
    icon: '🪨',
    items: [
      'Stone Gates', 'Travertine Stone', 'Cobble', 'Stone Columns', 'Walling Stones'
    ]
  },
  {
    name: 'Bricks',
    icon: '🧱',
    items: [
      'Acid Proof Bricks', 'Magnesia Bricks', 'Aac Bricks', 'Silica Insulation Bricks', 'Paving Bricks'
    ]
  },
  {
    name: 'Nozzles',
    icon: '🔩',
    items: [
      'Short Branch Pipe Nozzle', 'Flow Nozzle', 'Foam Nozzle', 'Quick Clamp Nozzle', 'Revolving Nozzle'
    ]
  },
  {
    name: 'Wall Materials',
    icon: '🧱',
    items: [
      'Printed Wall Covering', 'Wall Bricks', 'Interior Wall Cladding', 'Red Wall Tiles', 'Hpl Cladding'
    ]
  },
  {
    name: 'Wall Tiles',
    icon: '🟫',
    items: [
      'Kajaria Wall Tiles', 'Sandstone Wall Tile', 'Decorative Wall Tiles', '3d Wall Tiles', 'Orient Wall Tiles'
    ]
  },
  {
    name: 'Decorative Laminates',
    icon: '🪵',
    items: [
      'Finger Joint Panel', 'Acrylic Laminate', 'Digital Laminates', 'Marble Sheet', 'Bamboo Laminated Sheet'
    ]
  },
  {
    name: 'Scaffolding',
    icon: '🛠️',
    items: [
      'Light Duty Prop', 'Steel Scaffolding', 'Gogo Machine', 'Mason Frame', 'Swivel Coupler'
    ]
  },
  {
    name: 'Floor Tiles',
    icon: '🟫',
    items: [
      'Slate Floor Tiles', 'Vitrified Floor Tiles', 'Polished Floor Tiles', 'Alkali Resistant Tiles', 'Metal Floor Tiles'
    ]
  },
  {
    name: 'Chimney',
    icon: '🔥',
    items: [
      'Steel Chimney', 'Mild Steel Chimney', 'Chimney Hood', 'Boiler Chimneys', 'Cooker Hood Chimney'
    ]
  },
  {
    name: 'Painting Equipments & Maintenance',
    icon: '🖌️',
    items: [
      'Color Coating Line', 'Automatic Paint Dispenser', 'Paint Sprayer', 'Spray Painting Equipment', 'Paint Spray Gun'
    ]
  },
  {
    name: 'Wallpaper',
    icon: '🖼️',
    items: [
      'Fiberglass Wallpaper', 'Waterproof Wallpaper', 'Leaf Wallpaper', 'Paintable Wallpaper', 'Vinyl Wallpaper'
    ]
  },
  {
    name: 'Building Glass',
    icon: '🪞',
    items: [
      'Designer Glass', 'Embossed Glass', 'Laminated Safety Glass', 'Aluminium Structural Glazing', 'Glass Decorative Film'
    ]
  },
  {
    name: 'Portable Cabins',
    icon: '🏕️',
    items: [
      'Atm Cabin', 'Portable Shop Cabin', 'Executive Portable Cabin', 'Portable Chamber', 'Portable Cabin'
    ]
  },
  {
    name: 'PVC Doors',
    icon: '🚪',
    items: [
      'Pvc Flap Door', 'Pvc Door Panel', 'Pvc Single Panel Doors', 'Decorative Pvc Doors', 'Pvc Flush Door'
    ]
  },
  {
    name: 'Water Tanks',
    icon: 'タンク',
    items: [
      'Pvc Water Storage Tank', 'Ms Water Tank', 'Solar Water Tank', 'Steel Water Tank', 'Smc Water Tanks'
    ]
  },
  {
    name: 'Sandstone',
    icon: '🪨',
    items: [
      'Gravestone', 'Sandstone Pavers', 'Red Sandstone Paver', 'Polished Natural Sandstone', 'Sandstone Slabs'
    ]
  },
  {
    name: 'Construction Chemicals',
    icon: '🧪',
    items: [
      'Air Entraining Agent', 'Coal Tar', 'Concrete Accelerator', 'Non Metallic Floor Hardener', 'Elastomeric Coatings'
    ]
  },
  {
    name: 'Sheet Metal',
    icon: '🔩',
    items: [
      'Aluminum Sheet Metal', 'Metal Sheet Box', 'Roll Formed Components', 'Reflective Sheets', 'Control Panel Cabinet'
    ]
  },
  {
    name: 'Lime & Lime Products',
    icon: '🍋',
    items: [
      'Limestone Block', 'Slaked Lime', 'Dehydrated Lime', 'White Limestone', 'Lime Paste'
    ]
  },
  {
    name: 'AAC Blocks',
    icon: '🧱',
    items: [
      'Concrete Blocks', 'Hollow Blocks', 'Fly Ash Block', 'Aerated Concrete Blocks', 'Concrete Cover Block'
    ]
  },
  {
    name: 'Fountains',
    icon: '⛲',
    items: [
      'Decorative Garden Fountain', 'Stone Wall Fountain', 'Interactive Fountain', 'Matka Fountain', 'Dresser Coupling'
    ]
  },
  {
    name: 'Slotted Angles',
    icon: '📏',
    items: [
      'Galvanized Angle', 'Industrial Angles', 'Slotted Angle Racks', 'Angle Holder', 'Slotted Angle Brackets'
    ]
  },
  {
    name: 'Fabricators',
    icon: '🏭',
    items: [
      'Fabricated Items', 'Pre Engineered Building', 'Fabricated Aluminum Cladding', 'Sheet Metal Fabricators', 'Steel...'
    ]
  },
  {
    name: 'Building Coating',
    icon: '🖌️',
    items: [
      'Water Based Coatings', 'Epoxy Floor Coatings', 'Fire Protective Coating', 'Refractory Coating', 'Powder...'
    ]
  },
  {
    name: 'Bucket Elevator',
    icon: '🏗️',
    items: [
      'Plastic Elevator Bucket', 'Industrial Bucket Elevator', 'Z Type Bucket Elevator', 'Plate Chain Bucket Elevator', 'Heavy Duty...'
    ]
  },
  {
    name: 'Manhole Covers',
    icon: '🕳️',
    items: [
      'Water Gully Cover', 'Circular Manhole Cover', 'Stainless Steel Manhole Cover', 'Sfrc Manhole Cover', 'Pvc Manhol...'
    ]
  },
  {
    name: 'Waterproof Materials',
    icon: '💧',
    items: [
      'Waterproofing Material', 'Polyethylene Waterproof Material', 'Fosroc Waterproofing Chemicals', 'Polyurethane...'
    ]
  },
  {
    name: 'Aluminum Composite Panels',
    icon: '🧱',
    items: [
      'Acp Cladding', 'Pvdf Aluminum Composite Panel', 'Aluminium Partitions', 'Cladding Panel', 'Porous Metal Foam'
    ]
  },
  {
    name: 'Architectural Hardware',
    icon: '🏛️',
    items: [
      'Truss System', 'Architectural Louver', 'Architectural Baluster', 'Acrylic Baluster', 'Architectural Door'
    ]
  },
  {
    name: 'Hooks & Mounts',
    icon: '🔩',
    items: [
      'Ceiling Mount', 'Alloy Hook', 'Antenna Mount', 'Ball Hook', 'Tv Bracket'
    ]
  },
  {
    name: 'Clean Room Equipment',
    icon: '🧼',
    items: [
      'Clean Room', 'Return Air Riser', 'Cleanroom Accessories', 'Cleanroom Furniture', 'Pass Box'
    ]
  },
  {
    name: 'Soundproofing Materials',
    icon: '🔇',
    items: [
      'Acoustic Window', 'Sound Proof Walls', 'Sound Proof Canopy', 'Rf Shielded Enclosure', 'Acoustic Partition'
    ]
  },
  {
    name: 'Vinyl Flooring',
    icon: 'พื้น',
    items: [
      'Printed Vinyl Flooring', 'Pvc Commercial Floor', 'Vinyl Roll Flooring', 'Vinyl Sheet', 'Pvc Floor Covering'
    ]
  },
  {
    name: 'Heat Insulation',
    icon: '🔥',
    items: [
      'Mineral Wool Board', 'Heat Insulation Foil', 'High Tension Insulators', 'Heat Resistant Tape', 'Roof Heat Insulation'
    ]
  },
  {
    name: 'Doorbell',
    icon: '🔔',
    items: [
      'Musical Door Bell', 'Electrical Door Bells', 'Electronic School Bell', 'Video Doorbell', 'Doorbell Switch'
    ]
  },
  {
    name: 'Paint Brushes',
    icon: '🖌️',
    items: [
      'Premium Paint Brushes', 'Polyester Brushes', 'Painting Stencil', 'Foam Brush', 'Brushes'
    ]
  },
  {
    name: 'Slate Stone',
    icon: '🪨',
    items: [
      'Slate Tiles', 'Slate Slabs', 'Black Slate Stone', 'Natural Slate Stone', 'Lilac Slate'
    ]
  },
  {
    name: 'Fire Bricks',
    icon: '🧱',
    items: [
      'High Alumina Fire Brick'
    ]
  },
  {
    name: 'Fireproof/Flameproof Materials & Equipment',
    icon: '🔥',
    items: [
      'Fireproof Plywood', 'Fireproof Board', 'Calcined Fire Clay', 'Fire Retardant Paints', 'Fireproof Panel'
    ]
  },
  {
    name: 'Roof Tiles',
    icon: '🏠',
    items: [
      'Concrete Roof Tile', 'Stone Coated Metal Roof Tile', 'Roofing Stone', 'Terrace Tiles', 'Mineral Fiber Ceiling Tiles'
    ]
  },
  {
    name: 'Building Ceramic',
    icon: '🧱',
    items: [
      'Ceramic Fiber Module', 'Ceramic Colours', 'Zig Zag Tiles', 'Ceramic Flooring', 
    ]
  },
  {
    name: 'Residential Property',
    icon: '🏠',
    items: []
  },
  {
    name: 'Real Estate Agents',
    icon: '👨‍💼',
    items: []
  },
  {
    name: 'Building Metallic Materials',
    icon: '🔩',
    items: [
      'Plate Girders', 'Porous Metal Foam', 'Lead Bricks', 'Tin Sheet', 'Metal Channel', 
    ]
  },
  {
    name: 'Industrial Property',
    icon: '🏭',
    items: [
      'Service Centre', 'Rotary Kiln', 
    ]
  },
  {
    name: 'Waterproofing Chemicals',
    icon: '💧',
    items: [
      'Sika Waterproofing Chemicals', 'Dr Fixit Waterproofing Chemical', 'Water Repellent Coatings', 'Water Based Coatings', 'Fosroc...', 
    ]
  },
  {
    name: 'Commercial & Residential Land',
    icon: '🏞️',
    items: []
  },
  {
    name: 'Construction Equipment',
    icon: '🚜',
    items: [
      'Synthetic Court', 'Temporary Suspended Platform', 'Steel Girder Bridge', 'Suspended Platform', 'Concrete Float', 
    ]
  },
  {
    name: 'Texture Paint',
    icon: '🖌️',
    items: [
      'Textured Finish Paint', 'Textured Plaster', 'Exterior Texture Paint', 'Sand Texture Paint', 
    ]
  },
  {
    name: 'Sluice Gate',
    icon: '⚙️',
    items: [
      'Cast Iron Sluices Gates', 
    ]
  },
  {
    name: 'Bus Shelter',
    icon: '🚌',
    items: [
      'Modern Bus Shelter', 'Bus Shelter Glass', 
    ]
  },
  {
    name: 'Building Facilities',
    icon: '🏗️',
    items: [
      'Debris Chute', 'Garbage Chute', 'Building Maintenance System', 'Linen Chute', 'Steel Building Facilities', 
    ]
  },
  {
    name: 'Construction Materials Stocks',
    icon: '🧱',
    items: []
  },
  {
    name: 'Building Plastic',
    icon: '🧱',
    items: []
  },
  {
    name: 'Modular Toilet',
    icon: '🚽',
    items: []
  },
  {
    name: 'Undertaking Contracted Projects',
    icon: '👷',
    items: []
  },
  {
    name: 'Commercial Property',
    icon: '🏢',
    items: []
  },
  {
    name: 'Property For Lease',
    icon: '🌾',
    items: []
  },
  {
    name: 'Property For Rent',
    icon: '🏠',
    items: []
  },
];

const ConstructionSubcategories = () => (
  <div className="container mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6">Construction & Real Estate Subcategories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {constructionSubcategories.map((sub, idx) => (
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

export default ConstructionSubcategories; 