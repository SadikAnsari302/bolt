const agricultureSubcategories = [
  {
    name: 'Rice',
    icon: '🍚',
    items: [
      'Red Rice', 'Aromatic Rice', 'Round White Rice', 'White Rice', 'Swarna Paraboiled Rice'
    ]
  },
  {
    name: 'Fresh Vegetables',
    icon: '🥦',
    items: [
      'Beetroot', 'Jalapeno Peppers', 'Spicy Vegetables', 'Kashmiri Chilli', 'Gourd'
    ]
  },
  {
    name: 'Seeds',
    icon: '🌾',
    items: [
      'Chili Pepper Seeds', 'Raw White Poppy Seeds', 'Garlic Seed', 'Cauliflower Seeds', 'Ajwain Seeds'
    ]
  },
  {
    name: 'Fresh Fruits',
    icon: '🍎',
    items: [
      'Banana', 'Kinnow', 'Raspberry', 'Olives', 'Blueberry'
    ]
  },
  {
    name: 'Pulses',
    icon: '🌰',
    items: [
      'Green Mung Bean', 'Gram Dal', 'Masoor Malka', 'Organic Chana Dal', 'Moong Dal'
    ]
  },
  {
    name: 'Tea',
    icon: '🍵',
    items: [
      'Peppermint Tea', 'Green Tea Powder', 'Darjeeling Tea', 'Wagh Bakri Green Tea', 'Rose Green Tea'
    ]
  },
  {
    name: 'Agricultural Machines & Tools',
    icon: '🚜',
    items: [
      'Reversible Plough', 'Potato Digger', 'Pressure Sprayer', 'Grain Separator', 'Agricultural Cutter'
    ]
  },
  {
    name: 'Nuts & Kernels',
    icon: '🥜',
    items: [
      'Cashew Nut Shell', 'Sunflower Seed Kernel', 'Almond Kernel', 'Betel Nuts', 'Mamra Almond'
    ]
  },
  {
    name: 'Fertilizers',
    icon: '🧪',
    items: [
      'Potash Mobilizing Bacteria', 'Humic Shiny Balls', 'Biofertilizers Rhizobium', 'Micronutrient', 'Vesicular...'
    ]
  },
  {
    name: 'Frozen Fruits',
    icon: '🍍',
    items: [
      'Processed Fruits', 'Frozen Litchi', 'Freeze Dried Mango', 'Frozen Sapota', 'Frozen Pineapple'
    ]
  },
  {
    name: 'Cashews',
    icon: '🥥',
    items: [
      'Broken Cashew Nut', 'Organic Cashew', 'Masala Kaju', 'W180 Cashew Nut', 'Roasted Cashew'
    ]
  },
  {
    name: 'Plant, Flowers & Dried Flowers',
    icon: '🌸',
    items: [
      'Tomato Plant', 'Mexican Grass', 'Ashoka Tree', 'Bellflower', 'Adhatoda Vasica'
    ]
  },
  {
    name: 'Grain',
    icon: '🌾',
    items: [
      'Corn Grits', 'Popcorn', 'Organic Millet', 'Organic Barley', 'Roasted Wheat'
    ]
  },
  {
    name: 'Garden Accessories',
    icon: '🪴',
    items: [
      'Bamboo Planter', 'Plant Container', 'Garden Hose Reels', 'Water Spray Gun', 'Metal Swing'
    ]
  },
  {
    name: 'Cattle Feed Supplements',
    icon: '🐄',
    items: [
      'Crab Shell', 'Oil Cake', 'Cattle Vitamins', 'Paddy Husk', 'Sugarcane Bagasse'
    ]
  },
  {
    name: 'Coconut',
    icon: '🥥',
    items: [
      'Coconut Copra', 'Green Coconut', 'Husked Coconut', 'One Eye Coconut', 'Grated Coconut'
    ]
  },

  // Latest screenshot's subcategories (icon + name + items)
  {
    name: 'Agro Products & Commodities',
    icon: '🧺',
    items: [
      'Agricultural Waste', 'Rapeseed Meal', 'Milk Products', 'Feed Barley', 'Corn Cob'
    ]
  },
  {
    name: 'Wheat',
    icon: '🌾',
    items: [
      'Lokwan Wheat', 'Atta', 'Red Winter Wheat', 'Wheat Grain', 'Puffed Wheat'
    ]
  },
  {
    name: 'Coffee',
    icon: '☕',
    items: [
      'Coffee Capsules', 'Cocoa Coffee Beans', 'Green Coffee', 'Green Coffee Beans', 'Brown Coffee Beans'
    ]
  },
  {
    name: 'Poultry Feed Supplements',
    icon: '🐥',
    items: [
      'Seaweed Powder', 'Toxin Binders', 'Chana Churi', 'Broiler Concentrate', 'Corn Gluten Feed'
    ]
  },
  {
    name: 'Horticulture & Gardening Tools',
    icon: '🛠️',
    items: [
      'Trigger Sprayer', 'Shovels', 'Motorized Weeder', 'Hvlp Spray Gun', 'Digging Tools'
    ]
  },
  {
    name: 'Livestock',
    icon: '🐄',
    items: [
      'Kankrej Cow', 'Poultry Farm Chicks', 'Rottweiler Dog', 'Live Rabbit', 'Greasy Wool'
    ]
  },
  {
    name: 'Tractor Parts',
    icon: '⚙️',
    items: [
      'Center Axle Pin', 'Tractor Brake Lining', 'Tractor Trolley Part', 'Red Hitch Pins', 'Harrow Disc'
    ]
  },
  {
    name: 'Plant Extract',
    icon: '🌿',
    items: [
      'Flower Extract', 'Diosmin', 'Neem Leaf Extract', 'Hibiscus Extract', 'Rhubarb Extract'
    ]
  },
  {
    name: 'Beans',
    icon: '🫘',
    items: [
      'Black Eyed Beans', 'Black Beans', 'Green Coffee Beans', 'Raw Coffee Beans', 'Vanilla Beans'
    ]
  },
  {
    name: 'Frozen Vegetables',
    icon: '🥦',
    items: [
      'Frozen Green Peas', 'White Onion Granules', 'Carrot Flakes', 'Frozen Potato', 'Mushroom Spawn'
    ]
  },
  {
    name: 'Pesticides',
    icon: '👨‍🌾',
    items: [
      'Natural Pesticides', 'Piperonyl Butoxide', 'Rotenone', 'Methyl Bromide', 'Silicone Adjuvant'
    ]
  },
  {
    name: 'Coir Products',
    icon: '🧺',
    items: [
      'Coir Pith Blocks', 'Coir Briquettes', 'Coco Peat Bales', 'Coir Fender', 'Coir Needle Felt'
    ]
  },
  {
    name: 'Raw Cotton & Cotton Waste',
    icon: '🌱',
    items: [
      'Comber Noil', 'Cotton Comber Noil', 'Recycled Cotton', 'Cotton Seed Oil Cake', 'Waste Cotton Yarn'
    ]
  },
  {
    name: 'Greenhouse Supplies & Equipment',
    icon: '🏡',
    items: [
      'Shade Cloth', 'Seedling Trays', 'Nursery Shade Net', 'Green Shade Net', 'Plastic Fogger'
    ]
  },
  {
    name: 'Insecticides',
    icon: '🪰',
    items: [
      'Diethyltoluamide', 'Emamectin Benzoate', 'Hexaflumuron', 'Dimethoate Insecticide', 'Fenvalerate'
    ]
  },
  {
    name: 'Plant Growth Regulator',
    icon: '🌱',
    items: [
      'Preset Regulator', 'Bio Products', 'Polyaspartic Acid', 'Seaweed Extract Powder', 'Seaweed Extract'
    ]
  },

  // New subcategories from the latest screenshot
  {
    name: 'Irrigation Systems',
    icon: '💧',
    items: [
      'Brass Impact Sprinkler', 'Hdpe Irrigation Pipe', 'Drip Irrigation Pipes', 'Pvc Sprinklers', 'Irrigation Filter'
    ]
  },
  {
    name: 'Mushroom & Truffle',
    icon: '🍄',
    items: [
      'Dried Mushroom', 'Milky Mushroom', 'Oyster Mushroom', 'Reishi Mushroom', 'Oyster Mushroom Spawn'
    ]
  },
  {
    name: 'Fungicides',
    icon: '🧪',
    items: [
      'Azoxystrobin', 'Tebuconazole', 'Bacillus Subtilis', 'Kasugamycin', 'Agricultural Fungicides'
    ]
  },
  {
    name: 'Eggs',
    icon: '🥚',
    items: [
      'Kadaknath Egg', 'Fresh Eggs', 'Egg', 'Poultry Eggs', 'Fertilized Eggs'
    ]
  },
  {
    name: 'Animal Fodder & Feed Supplements',
    icon: '🐄',
    items: [
      'Groundnut Cake', 'Pedigree Dog Food', 'Milk Replacer', 'Animal Feed Products', 'Groundnut Meal'
    ]
  },
  {
    name: 'Plant & Animal Oil',
    icon: '🛢️',
    items: [
      'Linseed Oil', 'Flax Seed Oil', 'Basil Oil', 'Ginger Oil', 'Tagetes Oil'
    ]
  },
  {
    name: 'Dehydrated Vegetables',
    icon: '🥕',
    items: [
      'Vegetable Flakes', 'Vegetable Granule', 'Dehydrated Vegetable Flakes', 'Dehydrated White Onion...'
    ]
  },
  {
    name: 'Poultry Equipment',
    icon: '🐔',
    items: [
      'Egg Collection System', 'Electric Brooder', 'Nipple Drinker', 'Egg Shells', 'Pvc Feeders'
    ]
  },
  {
    name: 'Bamboo & Rattan Products',
    icon: '🎍',
    items: [
      'Bamboo Yarn', 'Bamboo Laminated Sheet', 'Bamboo Charcoal', 'Bamboo Chick Blinds', 'Rattan Stick'
    ]
  },
  {
    name: 'Coconut Shell Products',
    icon: '🥥',
    items: [
      'Coconut Shell Charcoal', 'Coconut Husk Chips', 'Coconut Shell Mug', 'Raw Coconut Shell', 'Coconut Shell Carbon'
    ]
  },
  {
    name: 'Cereals',
    icon: '🌾',
    items: [
      'Green Millets', 'Black Gram', 'Patanjali Oats', 'Wheat Flour', 'Organic Cereals'
    ]
  },
  {
    name: 'Horticulture, Gardening & Irrigation Machinery',
    icon: '🚜',
    items: [
      'Knapsack Power Sprayer', 'Chemical Sprayer', 'Roller Type Lawn Mower', 'Irrigation Pipe Making...'
    ]
  },
  {
    name: 'Guar Gum',
    icon: '🌱',
    items: [
      'Cationic Guar Gum', 'Food Grade Guar Gum Powder', 'Fast Hydration Guar Gum Powder', 'Guar Gum Powder', 'Tragacanth...'
    ]
  },
  {
    name: 'Jute Products',
    icon: '🪢',
    items: [
      'Jute Matting', 'Jute Hessian', 'Jute Placemat', 'Jute Mesh', 'Jute Fiber'
    ]
  },
  {
    name: 'Fodder & Feed Additives',
    icon: '🧂',
    items: [
      'Cattle Feed Additives', 'L Lysine Hcl', 'Calcium Iodate', 'Poultry Feed Additives', 'Cattle Milk Booster'
    ]
  },
  {
    name: 'Soil Conditioners',
    icon: '🌱',
    items: [
      'Micronutrient', 'Agro Soil Chemicals', 'Soil Microbes', 'Vermiculite Powder', 'Potassium F Humate'
    ]
  },
  {
    name: 'Tractors',
    icon: '🚜',
    items: [
      'Massey Tractor', 'Hmt Tractors', 'Farmtrac Tractor', 'Eicher Tractor', 'Agricultural Trolley'
    ]
  },
  {
    name: 'Herbicides',
    icon: '🌿',
    items: [
      'Cyclohexylamine', 'Granular Herbicide', 'Paraquat', 'Pretilachlor', 'Weedicides'
    ]
  },
  {
    name: 'Seed Processing Machinery',
    icon: '⚙️',
    items: [
      'Seed Analyzer', 'Seed Cleaning Machine', 'Seed Dryer Machine', 'Gravity Separator', 'Seed Treater'
    ]
  },
  {
    name: 'Shade Net',
    icon: '🟩',
    items: [
      'Nursery Shade Net', 'Green Shade Net', 'Outdoor Shade Net', 'Shade Net Machine', 'Hdpe Shade Net'
    ]
  },
  {
    name: 'Storage Silos',
    icon: '🏗️',
    items: [
      'Bolted Silo', 'Silo Dust Collector', 'Grain Silos', 'Fly Ash Silo', 'Grain Storage Silo'
    ]
  },
  {
    name: 'Coir Rope',
    icon: '🪢',
    items: [
      'Twisted Coir Rope', 'Curled Coir Rope', 'Coconut Coir Rope'
    ]
  },
  {
    name: 'Aquaculture Equipment & Supplies',
    icon: '🐟',
    items: [
      'Helper Bracket', 'Chisel Plough', 'Terrarium Plants', 'Aquaculture', 'Fish Hatchery'
    ]
  },
  {
    name: 'Coir Fiber',
    icon: '🧶',
    items: [
      'Coir Logs', 'Bristle Coir Fiber'
    ]
  },
  {
    name: 'Farm Machinery',
    icon: '🚜',
    items: [
      'Agricultural Trailer', 'Cotton Seed Dryer', 'Automatic Seed Drill', 'Aeration Equipment', 'Maize Thresher'
    ]
  },
  {
    name: 'Organic Vegetables',
    icon: '🍆',
    items: [
      'Organic Ginger', 'Organic Cabbage', 'Organic Garlic', 'Organic Mushroom', 'Organic Lemon'
    ]
  },
  {
    name: 'Animal Products',
    icon: '🐑',
    items: [
      'Animal Horns', 'Cattle Casings', 'Ox Gallstones', 'Buffalo Horn Plates', 'Animal Hair'
    ]
  },
  {
    name: 'Dried Vegetables',
    icon: '🥕',
    items: [
      'Beetroot', 'Freeze Dried Carrot', 'Dehydrated Vegetable Flakes', 'Okra', 'Green Broccoli'
    ]
  },
  {
    name: 'Coir Blocks',
    icon: '🧱',
    items: [
      'Coir Sheet', 'Coco Peat Blocks', 'Coir Logs'
    ]
  },
  {
    name: 'Nematicides',
    icon: '🪲',
    items: [
      'Cypermethrin Pesticides', 'Nitrosomonas', 'Neem Pesticides', 'Abamectin', 'Paecilomyces'
    ]
  },
  {
    name: 'Bactericides',
    icon: '🦠',
    items: [
      'Benzotriazole', 'Thiram', 'Glutaraldehyde', 'Bromadiolone', 'Bacillus Thuringiensis'
    ]
  },
  {
    name: 'Plant Seeds',
    icon: '🌱',
    items: [
      'Sesbania Seed', 'Pumpkin Seeds', 'Methi Seeds', 'Flax Seeds', 'Hemp Seeds'
    ]
  },
  {
    name: 'Farm Machinery Parts',
    icon: '🛠️',
    items: [
      'Farm Equipment', 'Blade Plough', 'Agricultural Machinery Fittings', 'Animal Driven Plough', 'Farm...'
    ]
  },
  {
    name: 'Molasses',
    icon: '🍯',
    items: [
      'Sugar Cane Molasses', 'Organic Molasses', 'Organic Blackstrap Molasses', 'Beet Molasses', 'Dry Molasses'
    ]
  },
  {
    name: 'Aquatic Products',
    icon: '🐟',
    items: [
      'Shrimp Feed', 'Aqua Feed Supplements'
    ]
  },
  {
    name: 'Oil Seed Extraction Machinery',
    icon: '🛢️',
    items: [
      'Rice Bran Oil Equipment', 'Screw Oil Press', 'Oilseed Extraction Plant'
    ]
  },
  {
    name: 'EMU & EMU Products',
    icon: '🦤',
    items: [
      'Emu Egg Incubator', 'Emu Farm Chicks', 'Emu Feed', 'Emu Birds', 'Emu Chicks'
    ]
  },
  {
    name: 'Potpourri',
    icon: '🌸',
    items: [
      'Potpourri Oil', 'Potpourri Boxes', 'Potpourri Stove', 'Potpourri Sticks', 'Potpourri Pouch'
    ]
  },
  {
    name: 'Animal Extract',
    icon: '🐂',
    items: [
      'Cow Horn', 'Horse Hair'
    ]
  },
  {
    name: 'Agriculture Product Stocks',
    icon: '🥬',
    items: [
      'Cereal Flake', 'Aquaculture Aerator', 'Canned Beans', 'Helper Bracket'
    ]
  },
  {
    name: 'Agro Chemicals',
    icon: '🧪',
    items: [
      'Cypermethrin Pesticides', 'Potassium Fertilizer', 'Clodinafop Propargyl', 'Corn Fertilizer', 'Garden Fertilizer'
    ]
  },
  {
    name: 'Animal Casings',
    icon: '🦴',
    items: [
      'Sheep Casings'
    ]
  },
  {
    name: 'EMU Eggs',
    icon: '🥚',
    items: [
      'Brown Eggs', 'Fertilized Eggs'
    ]
  },
  {
    name: 'Agriculture & By-product Agents',
    icon: '🥜',
    items: [
      'Instant Coffee', 'Animal Food', 'Emu Feed', 'Pressed Bones', 'Curled Coir Rope'
    ]
  },
  {
    name: 'Animal Husbandry',
    icon: '🐄',
    items: [
      'Emu Egg Shells', 'Emu Farm Chicks', 'Emu Feather'
    ]
  },
  {
    name: 'EMU Meat',
    icon: '🥩',
    items: []
  },
  {
    name: 'EMU Oil Products',
    icon: '🦤',
    items: []
  },
];

const AgricultureSubcategories = () => (
  <div className="container mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6">Agriculture Subcategories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {agricultureSubcategories.map((sub, idx) => (
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

export default AgricultureSubcategories; 