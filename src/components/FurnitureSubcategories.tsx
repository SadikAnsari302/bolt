import React from 'react';
import SubcategorySection from './FurnitureSubcategories'; // Ensure this import is present and path is correct

const furnitureSubcategoriesData = [ // Array holding the furniture data
  {
    name: "Furniture Fittings & Fixtures",
    items: ["Antique Cabinet Handle", "Steel Chest Handle", "Chair Frame", "Pole Hook", "Decorative Wooden Almirah"],
    icon: "path/to/furniture_fittings_fixtures_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Office Furniture",
    items: ["Medium Back Chair", "Newspaper Rack", "Recliner Chair", "Visitor Stool", "Glass Office Partition"],
    icon: "path/to/office_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Wooden Furniture",
    items: ["Reception Desk", "Wooden Carved Sofa Set", "Wooden Lorian Dining Set", "Custom Made Furniture", "Wooden Carved Swing"],
    icon: "path/to/wooden_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Modular Kitchen & Furniture",
    items: ["Pvc Modular Kitchen", "Tandem Box", "Stainless Steel Kitchen Cabinet", "Laminated Modular"],
    icon: "path/to/modular_kitchen_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Home Furniture",
    items: ["Designer Dressing Table", "Folding Step Stool", "Handmade Dining Table", "Cot Bed", "Dressing Tables"],
    icon: "path/to/home_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Hospital Furniture",
    items: ["Obstetric Bed", "Patient Examination Table", "Portable Bed", "Commode Stool", "Chair Stretcher"],
    icon: "path/to/hospital_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Bedroom Furniture",
    items: ["Bedroom Wardrobe", "Folding Wardrobe", "Double Bed", "Wardrobe Mirrors", "Bunker Cot"],
    icon: "path/to/bedroom_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Dining Room Furniture",
    items: ["Dining Room Chair", "Rectangular Dining Table", "Granite Dining Table", "Antique Dining Table", "Acrylic Dining Table"],
    icon: "path/to/dining_room_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Stainless Steel Furniture",
    items: ["Galvanized Trunk", "Stainless Steel Sofa Bed", "Stainless Steel Sofa Set", "Stainless Steel Bed", "Stainless Steel Modular"],
    icon: "path/to/stainless_steel_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Living Room Furniture",
    items: ["Decorative Swing", "King Size Sofa", "Traditional Sofa", "Sofa Cum Bed", "Designer Chair"],
    icon: "path/to/living_room_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Restaurant Furniture",
    items: ["Coffee Table", "Canteen Table", "Aluminium Folding Tables", "Canteen Furniture", "Round Folding Table"],
    icon: "path/to/restaurant_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Outdoor Furniture",
    items: ["Cast Iron Park Benches", "Letter Boxes", "Garden Benches", "Outdoor Lounge Chair", "Adirondack Chair"],
    icon: "path/to/outdoor_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Metal Furniture",
    items: ["Iron Stand", "Iron Benches", "Metal Sideboard", "Aluminum Assembly Table", "Metal Chair Parts"],
    icon: "path/to/metal_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Plastic Furniture",
    items: ["Resin Chair", "Fiber Chair", "Plastic Back Chair", "Plastic Storage Drawer", "Plastic Rocking Chair"],
    icon: "path/to/plastic_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "School Furniture",
    items: ["Magazine Display Racks", "Wooden Computer Desk", "Reading Desk", "Modern School Furniture", "School Bench"],
    icon: "path/to/school_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  },
  {
    name: "Antique Furniture",
    items: ["Bone Inlay Furniture", "Antique Kitchen Cabinet", "Antique Wooden Furniture", "Antique Table", "Two Seat Sofa"],
    icon: "path/to/antique_furniture_icon.png" // Placeholder - REPLACE WITH ACTUAL IMAGE PATH
  }
];

const FurnitureSubcategories: React.FC = () => { // Component definition
  return (
    <div>
      {/* SubcategorySection needs to be set up to handle the 'icon' prop as an image source (src) */}
      {furnitureSubcategoriesData.map((category, index) => (
        <SubcategorySection
          key={index}
          title={category.name}
          items={category.items}
          icon={category.icon} // Pass the image icon path
        />
      ))}
    </div>
  );
};

export default FurnitureSubcategories; // Default export for the component
