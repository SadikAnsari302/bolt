const chemicalsSubcategories = [
  {
    name: 'Chemical Supplies',
    icon: '🧴',
    items: [
      'Calcium Bromide Hydrate', 'Photochemical', 'Lithium Hexafluorophosphate', 'Hexamine', 'Phosph...'
    ]
  },
  {
    name: 'Industrial Chemicals',
    icon: '⚗️',
    items: [
      'Copper Edta', 'Antimicrobial Chemical', 'Gacl Hydrogen Peroxide', 'Salt Tablets', 'Fatty Acid Ethoxylate'
    ]
  },
  {
    name: 'Rubber & Rubber Products',
    icon: '⚫',
    items: [
      'Rubber Emery', 'Rubber Electrodes', 'Rubber Skid', 'Rubber Sucker', 'Rubber Spider'
    ]
  },
  {
    name: 'Acid',
    icon: '🧪',
    items: [
      'Hypochlorous Acid', 'Fulvic Acid', '3 Methoxybenzoic Acid', 'R-3-carbamoylmethyl-5-methylhexanoic Acid', '...'
    ]
  },
  {
    name: 'Paint & Allied Products',
    icon: '🎨',
    items: [
      'Asian Paints Interior Paint', 'Roller Sleeve', 'Zinc Phosphate Primer', 'Nc Sanding Sealer', 'Fire Retardant Paints'
    ]
  },
  {
    name: 'Soap & Hand Wash',
    icon: '🧼',
    items: [
      'Fruit Soap', 'Sandal Soaps', 'Strawberry Soap', 'Medmix Soap', 'Fairness Soaps'
    ]
  },
  {
    name: 'Fertilizers',
    icon: '🌱',
    items: [
      'Granular Fertilizer', 'Humic Liquid Fertilizer', 'Azotobacter Culture', 'Diammonium...'
    ]
  },
  {
    name: 'Adhesives & Sealants',
    icon: '🩹',
    items: [
      'Conductive Adhesive', 'Medical Adhesives', 'Anti Stripping Agent', 'Leather Adhesive', 'Synthetic Rubber Adhesives'
    ]
  },
  {
    name: 'Flavours & Food Additives',
    icon: '🍬',
    items: [
      'Potassium Propionate', 'Kiwi Flavor', 'Lake Colour', 'Pista Flavor', 'Balsamic Vinegar'
    ]
  },
  {
    name: 'Detergent Powder & Cakes',
    icon: '🧂',
    items: [
      'Whirlpool Whizpro Liquid Detergent', 'Dishwashing Detergent', 'Tide Detergent Powder', 'Washing Powder', 'Fe...'
    ]
  },
  {
    name: 'Perfumes & Fragrances',
    icon: '🌸',
    items: [
      'Air Fragrance', 'Gul Hina Attar', 'Perfume Set', 'Shiseido Perfumes', 'Branded Perfumes'
    ]
  },
  {
    name: 'Resin',
    icon: '🪨',
    items: [
      'Epoxy Resin', 'Acrylic Resins', 'Polypropylene Copolymer', 'Petroleum Resin', 'Maleic...'
    ]
  },
  {
    name: 'Pigments',
    icon: '🎨',
    items: [
      'Textile Dyes', 'Black Pigment', 'Lake Red Pigment', 'Dispersion Pigment', 'Polyester Pigment'
    ]
  },
  {
    name: 'Lab Chemicals & Supplies',
    icon: '⚗️',
    items: [
      'Cyclohexanol', 'Ph Test Papers', 'Ph Indicator Paper', 'Sodium Carbonate Anhydrous', 'Stannous Chloride'
    ]
  },
  {
    name: 'Silicon Products',
    icon: '🧽',
    items: [
      'Silicon Fertilizer', 'Silicone Foley Catheter', 'Silicone Tube', 'Silicone Pad', 'Silicone Rubber Roller'
    ]
  },
  {
    name: 'Textile Chemicals',
    icon: '🧪',
    items: [
      'Sodium Hypochlorite', 'Caustic Soda Lye', 'Chemical Binders', 'Bio Polish Enzyme', 'Textile Finishing Agents'
    ]
  },
  {
    name: 'Water Treatment Chemicals',
    icon: '💧',
    items: [
      'Cooling Water Treatment Chemicals', 'Bromine Tablets', 'Ro Antiscalant', 'Water Repellents', 'Chlorine...'
    ]
  },
  {
    name: 'Dyes',
    icon: '🎨',
    items: [
      'Pumped Blue Dye', 'Sodium Borohydride Powder', 'Thioflavin T', 'Cosmetic Dyes', 'Methyl Violet Dyes'
    ]
  },
  {
    name: 'Pesticides',
    icon: '🌾',
    items: [
      'Flubendiamide', 'Matrine', 'Pesticide Raw Material', 'Microbiocide', 'Quinalphos'
    ]
  },
  {
    name: 'Cleaning Chemicals',
    icon: '🧹',
    items: [
      'Grease Cleaning Chemicals', 'Drain Cleaner', 'Dry Cleaning Chemical', 'Pickling Chemical', 'Mould Cleaner'
    ]
  },
  {
    name: 'Inorganic Salt',
    icon: '🧂',
    items: [
      'Potassium Fluoroborate', 'Calcium Fluoride', 'Bismuth Trioxide', 'Lead Carbonate', 'Potassium Titanate'
    ]
  },
  {
    name: 'Solvents',
    icon: '🧪',
    items: [
      'Solvent Flex', 'Monopropylene Glycol', 'Sulfolane', 'Toluene Solvent', 'Zinc Hydroxide'
    ]
  },
  {
    name: 'Insecticides',
    icon: '🐞',
    items: [
      'Permethrin Insecticides', 'Yellow Sticky Trap', 'Temephos', 'Nitenpyram', 'Dinotefuran'
    ]
  },
  {
    name: 'Plant Growth Regulator',
    icon: '🌱',
    items: [
      'Gibberellic Acid', 'Paclobutrazol', 'Potassium Fulvic Humate', 'Flowering Stimulant', 'Plants Rooting Powders'
    ]
  },
  {
    name: 'Wax & Wax Products',
    icon: '🕯️',
    items: [
      'Anti Corrosion Wax', 'Soy Wax', 'Wax Machine', 'Wax Oil', 'Colored Wax Candles'
    ]
  },
  {
    name: 'Activated Carbon',
    icon: '⚫',
    items: [
      'Conductive Carbon', 'Coconut Shell Carbon', 'Coal Based Activated Carbon', 'Powdered Activated...'
    ]
  },
  {
    name: 'Chemical Reagent',
    icon: '🧪',
    items: [
      'Isoamyl Alcohol', 'N Butyl Bromide', 'Analytical Reagents', 'Ph Booster Chemical', 'Ferrous Sulphate...'
    ]
  },
  {
    name: 'Construction Chemicals',
    icon: '🏗️',
    items: [
      'Superplasticizer Admixture', 'Hydrated Lime Powder', 'Epoxy Putty', 'Putty Powder', 'Water Reducer'
    ]
  },
  {
    name: 'Fungicides',
    icon: '🍃',
    items: [
      'Benomyl', 'Copper Naphthenate', 'Potassium Phosphite', 'Agricultural Fungicides', 'Tebuconazole Fungicide'
    ]
  },
  {
    name: 'Powder Coating Chemicals',
    icon: '🟣',
    items: [
      'Thermal Spray Coatings', 'Silencer Coating', 'Textile Coatings', 'Powder River Coal', 'Car Coating'
    ]
  },
  {
    name: 'Chemical Additives',
    icon: '➕',
    items: [
      'Fuel Additives', 'Battery Additive', 'Gasoline Additives', 'Petroleum Additives', 'Glycerin Monostearate'
    ]
  },
  {
    name: 'Chemical Processing Plants',
    icon: '🏭',
    items: [
      'Distillation Units', 'Agitated Reactors', 'Chemical Equipment', 'Hydrochloric Acid...'
    ]
  },
  {
    name: 'Polymers',
    icon: '🧬',
    items: [
      'Styrene Polymers', 'Polyaniline', 'Polymer Clay', 'Polymer Concentrate', 'Cationic Polymer'
    ]
  },
  {
    name: 'Masterbatches',
    icon: '🎛️',
    items: [
      'Antiblock Masterbatches', 'Anti Rodent Masterbatch', 'Pet Masterbatches', 'Flame Retardant Masterbatch', 'Desiccant...'
    ]
  },
  {
    name: 'Industrial Gases',
    icon: '🧯',
    items: [
      'Liquid Argon', 'Oxygen', 'Ethylene Ripener', 'Liquefied Petroleum Gas', 'Xenon Gas'
    ]
  },
  {
    name: 'Glue & Gelatin',
    icon: '🧴',
    items: [
      'Animal Jelly Glue', 'Animal Glue Powder', 'Super Glue', 'Edible Gelatin', 'Bone Glue'
    ]
  },
  {
    name: 'Gum & Gum Products',
    icon: '🍬',
    items: [
      'Natural Gum', 'Corrugation Gum Powder', 'Pasting Gum', 'Corrugated Paper Gum', 'Myrrh Gum'
    ]
  },
  {
    name: 'Dyes Intermediates',
    icon: '🧪',
    items: [
      'Meta Di Nitro Benzene', 'Azo Dyes', 'Sulphur Black Dyes', 'Pyrazolone Dyes', 'Crystal Violet'
    ]
  },
  {
    name: 'Fodder & Feed Additives',
    icon: '🌾',
    items: [
      'Hay', 'Cod Liver Oil Powder', 'Rapeseed', 'Calcium Butyrate', 'Cattle Feed Additives'
    ]
  },
  {
    name: 'Soil Conditioners',
    icon: '🌱',
    items: [
      'Organic Waste', 'Micronutrient', 'Soil Inoculant', 'Vermiculite Flake', 'Potting Soil'
    ]
  },
  {
    name: 'Silica Gel',
    icon: '🔵',
    items: [
      'Blue Silica Gel', 'White Silica Gel', 'Silica Gel Heating Film', 'Orange Silica Gel', 'Silica Gel Sachet'
    ]
  },
  {
    name: 'Herbicides',
    icon: '🌿',
    items: [
      'Fluroxypyr', 'Fenoxaprop P Ethyl', 'Sugarcane Herbicide', 'Pendimethalin', 'Metsulfuron...'
    ]
  },
  {
    name: 'Corrosion Protection Materials',
    icon: '🛡️',
    items: [
      'Vci Paper', 'Cold Galvanizing Spray', 'Anti Corrosive Coatings', 'Welding Anti Spatter', 'Corrosion Inhibitors'
    ]
  },
  {
    name: 'PVC Resins',
    icon: '⚪',
    items: [
      'Polyester Resin', 'Pvc Paste Resin', 'Suspension Pvc Resins'
    ]
  },
  {
    name: 'Polyurethane Products',
    icon: '🟡',
    items: [
      'Polyurethane Disc', 'Polyurethane Parts', 'Cast Polyurethane', 'Polyurethane Strips', 'Polyurethane Materials'
    ]
  },
  {
    name: 'Rubber Chemicals',
    icon: '⚫',
    items: [
      'Rubber Additives', 'Vulcanizing Solution', 'Silicone Rubber', 'White Factice', 'Rubber Accelerators'
    ]
  },
  {
    name: 'Natural Rubber',
    icon: '🟠',
    items: [
      'Natural Rubber Latex', 'Natural Rubber Sheets'
    ]
  },
  {
    name: 'Chemicals Stocks',
    icon: '📦',
    items: [
      'Tetrabromobisphenol', 'Sodium Gluconate', 'Potassium Bromide', 'Rubidium Carbonate', 'Ethylene Carbonate'
    ]
  },
  {
    name: 'Sulphur',
    icon: '🟡',
    items: [
      'Granular Sulphur', 'Agricultural Sulphur', 'Roll Sulphur', 'Liquid Sulphur', 'Sulphur Granules'
    ]
  },
  {
    name: 'Dyestuffs',
    icon: '🎨',
    items: [
      'Dye Fixative', 'Dihydroxybenzoic Acid Dye', 'Fast Blue Dyestuffs', 'Sulphur Black', 'Reactive Dyestuffs'
    ]
  },
  {
    name: 'Emulsifiers',
    icon: '🥛',
    items: [
      'Anhydrous Lanolin', 'Cutting Oil Emulsifier', 'Paraffin Wax Emulsifier', 'Non Ionic Emulsifier', 'Anionic Emulsifier'
    ]
  },
  {
    name: 'Organic Salt',
    icon: '🧂',
    items: [
      'Calcium Formate', '1 4 Butynediol', 'Dtpa', 'Choline Salts', 'Sodium Tert Butoxide'
    ]
  },
  {
    name: 'Synthetic Rubber',
    icon: '⚫',
    items: [
      'Synthetic Rubber Sheets', 'Silicone Rubber', 'Fluorocarbon Rubber', 'Ethylene Propylene Rubber', 'Butyl Rubber'
    ]
  },
  {
    name: 'Chemicals Agents',
    icon: '🧪',
    items: [
      'Foaming Agent', 'Plastic Brightening Agents', 'Clc Foaming Agent', 'Concrete Foaming Agent'
    ]
  },
  {
    name: 'Nematicides',
    icon: '🐛',
    items: [
      'Natural Pesticides', 'Cypermethrin Pesticides', 'Nitrosomonas', 'Neem Pesticides', 'Neem Cake Powder'
    ]
  },
  {
    name: 'Plasticizer',
    icon: '🧴',
    items: [
      'Polymeric Plasticizers', 'Epoxidized Soybean Oil', 'Concrete Plasticizer', 'Superplasticizer', 'Mortar...'
    ]
  },
  {
    name: 'Organic Acid',
    icon: '⚗️',
    items: [
      'Sodium Methyl Paraben', 'Amino Acids', 'Clavulanic Acid', 'Alpha Pinene', 'Mannich Hcl'
    ]
  },
  {
    name: 'Aerosols',
    icon: '🧴',
    items: [
      'Aerosol Cleaner', 'Aerosol Fragrance', 'Aerosol Spray', 'Aerosol Can'
    ]
  },
  {
    name: 'Ultramarine Blue',
    icon: '🔵',
    items: [
      'Fast Blue Dyestuffs', 'Liquid Blue', 'Indigo Blue Dye', 'Reactive Turquoise Blue', 'Ultramarine Blue Paint'
    ]
  },
  {
    name: 'Inorganic Acid',
    icon: '🧪',
    items: [
      'Hydrochloric Acid', 'Sulphuric Acid', 'Coconut Fatty Acid', 'Potassium Humic Acid', 'Ammonia Solution'
    ]
  },
  {
    name: 'X-Ray Chemicals',
    icon: '🩻',
    items: [
      'Ultrasound Gel', 'Nitrocellulose', 'Sonography Gel'
    ]
  },
  {
    name: 'Detergent Raw Material',
    icon: '🧼',
    items: [
      'Sls Needles'
    ]
  },
  {
    name: 'Paper Chemicals',
    icon: '📄',
    items: [
      'Kraft Paper', 'Paper Packaging Bags', 'Tissue Paper', 'Paper Coating Chemicals', 'Slimicide'
    ]
  },
  {
    name: 'PVC Compounds',
    icon: '🟣',
    items: [
      'Pvc Cable Compound', 'Recycled Pvc Compounds', 'Profile Pvc Compound', 'Flexible Pvc Compound', 'Pvc...'
    ]
  },
  {
    name: 'Bactericides',
    icon: '🦠',
    items: [
      'Bronopol', 'Benzotriazole', 'Thiram', 'Glutaral'
    ]
  },
  {
    name: 'Waterproofing Chemicals',
    icon: '💧',
    items: [
      'Dr Fixit Waterproofing Chemical', 'Pu Foam Spray', 'Fosroc Waterproofing Chemicals', 'Water Resistant Coatings', 'Si...'
    ]
  },
  {
    name: 'Fluorescent Brightening Agent',
    icon: '💡',
    items: [
      'Optical Brightening Agents', 'Fluorescent Dyes', 'Optical Whiteners', 'Optical Whitening Agents'
    ]
  },
  {
    name: 'Natural Dyes',
    icon: '🧶',
    items: [
      'Quinaldine Red Dyes', 'Textile Dyes', 'Direct Blue Dyes', 'Reactive Cold Brand Dyes', 'Reactive Hot Brand Dyes'
    ]
  },
  {
    name: 'Texture Paint',
    icon: '🖌️',
    items: [
      'Textured Finish Paint', 'Exterior Texture Paint', 'Textured Plaster', 'Sand Texture Paint'
    ]
  },
  {
    name: 'Elementary Substance',
    icon: '🧪',
    items: [
      'Cobalt Carbonate', 'Red Phosphorus', 'Boron', 'Boron Powder', 'Selenium Powder'
    ]
  },
  {
    name: 'Polyethylene Foam Films',
    icon: '📦',
    items: []
  },
  {
    name: 'Organic Chemicals & Compounds',
    icon: '🧬',
    items: [
      'Diethylene Glycol', 'Ethyl Ether', 'Isobutyrate', 'Succinimide', 'Dimethyl Terephthalate'
    ]
  },
  {
    name: 'Agro Chemicals',
    icon: '🌱',
    items: [
      'Neem Herbal Pesticide', 'Tebuconazole Fungicide', 'Nicosamide', 'Garden Fertilizer', 'Bio Fertilizers'
    ]
  },
  {
    name: 'Inorganic Chemicals & Compounds',
    icon: '⚗️',
    items: [
      'Calcium Petroleum Sulfonate', 'Ferric Oxide', 'Chromium Oxide', 'Phosphorous Acid', 'Monocalcium Phosphate'
    ]
  },
  {
    name: 'Fine Chemicals',
    icon: '🧴',
    items: [
      'Bleaching Powder', 'Liquid Soaps', 'Ultramarine Blue Powder', 'Aromatic Fragrance', 'Liquid Detergents'
    ]
  },
  {
    name: 'Printing Oil',
    icon: '🖼️',
    items: []
  },
];

const ChemicalsSubcategories = () => (
  <div className="container mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6">Chemicals Subcategories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {chemicalsSubcategories.map((sub, idx) => (
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

export default ChemicalsSubcategories; 