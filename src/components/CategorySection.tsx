import React from 'react';
import { Link } from './ui/Link';
import { ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
}

const CategorySection: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'agriculture',
      name: 'Agriculture',
      icon: '🌱',
      subcategories: [
        'Agricultural Machines & Tools',
        'Agriculture & By-product Agents',
        'Agriculture Products',
        'Agricultural Equipment',
        'Farming Tools',
        'Seeds & Plants'
      ]
    },
    {
      id: 'apparel',
      name: 'Apparel & Fashion',
      icon: '👕',
      subcategories: [
        'Apparel & Fashion Agents',
        'Apparel Stocks',
        'Athletic Wear',
        'Baby Wear',
        'Casual Wear',
        'Designer Clothing'
      ]
    },
    {
      id: 'automobile',
      name: 'Automobile',
      icon: '🚗',
      subcategories: [
        'Auto Accessories',
        'Auto Batteries',
        'Auto Bearing',
        'Auto Electronics',
        'Auto Ignition',
        'Auto Parts'
      ]
    },
    {
      id: 'brass-hardware',
      name: 'Brass Hardware & Components',
      icon: '🔧',
      subcategories: [
        'Brass Anchors',
        'Brass Auto Parts',
        'Brass Builders Hardware',
        'Brass Cable',
        'Brass Fittings',
        'Brass Valves'
      ]
    },
    {
      id: 'chemicals',
      name: 'Chemicals',
      icon: '🧪',
      subcategories: [
        'Acid',
        'Activated Carbon',
        'Adhesives & Sealants',
        'Aerosols',
        'Agro Chemicals',
        'Industrial Chemicals'
      ]
    },
    {
      id: 'computer',
      name: 'Computer Hardware & Software',
      icon: '💻',
      subcategories: [
        'CAD CAM Design Services',
        'Computer',
        'Computer & Software Agents',
        'Computer Hardware',
        'Software Solutions',
        'Network Components'
      ]
    },
    {
      id: 'construction',
      name: 'Construction & Real Estate',
      icon: '🏗️',
      subcategories: [
        'AAC Blocks',
        'Aluminum Composite Panels',
        'Architectural Hardware',
        'Bathroom & Toilet Accessories',
        'Bricks',
        'Bright Bars',
        'Bucket Elevator',
        'Building Facilities',
        'Building Ceramic',
        'Building Coating',
        'Building Glass',
        'Building Metallic Material',
        'Building Plastic',
        'Bus Shelter',
        'Cement & Sand',
        'Chimney',
        'Clean Room Equipment',
        'Construction Materials'
      ]
    },
    {
      id: 'consumer-electronics',
      name: 'Consumer Electronics',
      icon: '📱',
      subcategories: [
        'Air Cleaning Equipment',
        'Air Conditioner',
        'Air Cooler',
        'Amplifiers',
        'Audio & Video',
        'Home Appliances'
      ]
    },
    {
      id: 'electronics',
      name: 'Electronics & Electrical Supplies',
      icon: '⚡',
      subcategories: [
        'Brass Electrical & Electronic Components',
        'Bulbs & Tubelight',
        'Cable Terminal',
        'Circuit Breakers',
        'Control Panels',
        'Electric Motors'
      ]
    },
    {
      id: 'energy',
      name: 'Energy & Power',
      icon: '🔋',
      subcategories: [
        'Base Oils',
        'Batteries',
        'Battery Management Systems',
        'Biofuel',
        'Biogas',
        'Solar Products'
      ]
    },
    {
      id: 'environment-pollution',
      name: 'Environment & Pollution',
      icon: '♻️',
      subcategories: [
        'Air Blowers',
        'Air Cleaning Equipment',
        'Air Curtains',
        'Air Distribution Products',
        'Chemical Treatment',
        'Waste Management'
      ]
    },
    {
      id: 'food',
      name: 'Food & Beverage',
      icon: '🍽️',
      subcategories: [
        'Aquatic Products',
        'Asafoetida',
        'Bean Products',
        'Beverages',
        'Canned Food',
        'Dairy Products'
      ]
    },
    {
      id: 'furniture',
      name: 'Furniture',
      icon: '🪑',
      subcategories: [
        'Antique Furniture',
        'Bamboo Furniture',
        'Bathroom Furniture',
        'Bedroom Furniture',
        'Office Furniture',
        'Outdoor Furniture'
      ]
    },
    {
      id: 'gifts',
      name: 'Gifts & Crafts',
      icon: '🎁',
      subcategories: [
        'Advertising Materials',
        'Aluminium Handicrafts',
        'Antique Imitation Crafts',
        'Art & Collectibles',
        'Festive Decorations'
      ]
    },
    {
      id: 'health',
      name: 'Health & Beauty',
      icon: '💊',
      subcategories: [
        'Adult Diapers',
        'Anti Infective Drugs & Medicines',
        'Ayurvedic & Herbal Powder',
        'Ayurvedic Products',
        'Beauty Products'
      ]
    },
    {
      id: 'home-supplies',
      name: 'Home Supplies',
      icon: '🏠',
      subcategories: [
        'Aluminium & Foils',
        'Aluminium Utensils',
        'Aquarium Supplies',
        'Baby & Infant Products',
        'Cleaning Supplies'
      ]
    },
    {
      id: 'home-textiles',
      name: 'Home Textiles & Furnishings',
      icon: '🛋️',
      subcategories: [
        'Bath Mats',
        'Bath Rugs',
        'Bath Towels',
        'Bathrobe',
        'Bed Linen',
        'Curtains'
      ]
    },
    {
      id: 'hospital',
      name: 'Hospital & Medical Supplies',
      icon: '🏥',
      subcategories: [
        'Adult Diapers',
        'Autoclaves & Sterilizers',
        'Ayurvedic Therapy Equipment',
        'Blood Pressure Monitors',
        'Medical Equipment'
      ]
    },
    {
      id: 'hotel',
      name: 'Hotel Supplies & Equipment',
      icon: '🏨',
      subcategories: [
        'Bakery Equipment',
        'Bar Accessories',
        'Commercial Kitchen Equipment',
        'Electrical Appliances',
        'Hotel Furniture'
      ]
    },
    {
      id: 'industrial',
      name: 'Industrial Supplies',
      icon: '🏭',
      subcategories: [
        'Abrasives',
        'Acoustic Products',
        'Acrylic Sheets',
        'Air Blowers',
        'Air Compressors',
        'Machine Tools'
      ]
    },
    {
      id: 'jewelry',
      name: 'Jewelry & Gemstones',
      icon: '💎',
      subcategories: [
        'Antique Jewelry',
        'Artificial Jewelry',
        'Beaded Jewelry',
        'Beads',
        'Bracelets',
        'Diamond Jewelry'
      ]
    },
    {
      id: 'leather',
      name: 'Leather & Leather Products',
      icon: '👜',
      subcategories: [
        'Equestrian Clothing',
        'Equestrian Products',
        'Finished Leather',
        'Leather Accessories',
        'Leather Bags'
      ]
    },
    {
      id: 'machinery',
      name: 'Machinery',
      icon: '⚙️',
      subcategories: [
        'Agarbatti Making Machines',
        'Agricultural Machines & Tools',
        'Bag Closing Machines',
        'Industrial Machinery',
        'Packaging Machinery'
      ]
    },
    {
      id: 'minerals',
      name: 'Mineral & Metals',
      icon: '🪨',
      subcategories: [
        'Aluminium & Foils',
        'Aluminium Scrap',
        'Aluminum & Aluminum Products',
        'Asbestos',
        'Metal Products'
      ]
    },
    {
      id: 'office-supplies',
      name: 'Office & School Supplies',
      icon: '📚',
      subcategories: [
        'Billing Machine',
        'Calculator',
        'Computer Printers & Scanners',
        'Diaries',
        'Office Stationery'
      ]
    },
    {
      id: 'packaging',
      name: 'Packaging & Paper',
      icon: '📦',
      subcategories: [
        'Adhesive Tapes',
        'Aerosols',
        'Agricultural Films',
        'Aluminium Packaging',
        'Paper Products'
      ]
    },
    {
      id: 'pharmaceuticals',
      name: 'Pharmaceuticals',
      icon: '💊',
      subcategories: [
        'Anti Infective Drugs & Medicines',
        'Ayurvedic Medicines',
        'Generic Medicines',
        'Healthcare Supplements',
        'Herbal Products'
      ]
    },
    {
      id: 'pipes',
      name: 'Pipes, Tubes & Fittings',
      icon: '🔧',
      subcategories: [
        'Alloy Steel Flanges',
        'Alloy Steel Pipes & Tubes',
        'Aluminium Pipes & Tubes',
        'Brass Pipes',
        'Industrial Pipes'
      ]
    },
    {
      id: 'plastics',
      name: 'Plastics & Products',
      icon: '🥤',
      subcategories: [
        'BOPP Films',
        'Fluro Carbon',
        'HDPE Sheets',
        'Injection Molding',
        'Plastic Products'
      ]
    },
    {
      id: 'printing',
      name: 'Printing & Publishing',
      icon: '🖨️',
      subcategories: [
        'Barcode Stickers & Equipment',
        'Binding Machines',
        'Book Printing',
        'Digital Printing',
        'Label Printing'
      ]
    },
    {
      id: 'scientific',
      name: 'Scientific & Laboratory Instruments',
      icon: '🔬',
      subcategories: [
        'Autoclaves & Sterilizers',
        'Data Loggers',
        'Digital Panel Meter',
        'Lab Chemicals',
        'Lab Equipment'
      ]
    },
    {
      id: 'security',
      name: 'Security & Protection',
      icon: '🔒',
      subcategories: [
        'Access Control Cards',
        'Alarm',
        'Bulletproof',
        'Burglary Locks',
        'CCTV Systems'
      ]
    },
    {
      id: 'sports',
      name: 'Sports & Entertainment',
      icon: '⚽',
      subcategories: [
        'Adventure Sporting & Trekking Goods',
        'Amusement Games & Equipment',
        'Awards & Trophies',
        'Sports Equipment',
        'Fitness Gear'
      ]
    },
    {
      id: 'telecommunications',
      name: 'Telecommunications',
      icon: '📡',
      subcategories: [
        'Caller ID Phones',
        'Exchanges',
        'Fax Machines',
        'GPS Devices',
        'Mobile Phones'
      ]
    },
    {
      id: 'textiles',
      name: 'Textiles & Fabrics',
      icon: '🧵',
      subcategories: [
        'Acrylic Fabric',
        'Blend Fabric',
        'Chiffon Fabric',
        'Coated Fabrics',
        'Corduroy & Velvet'
      ]
    },
    {
      id: 'toys',
      name: 'Toys',
      icon: '🧸',
      subcategories: [
        'Ball',
        'Balloons',
        'Dolls',
        'Educational Toys & Games',
        'Electrical Pets'
      ]
    },
    {
      id: 'transportation',
      name: 'Transportation',
      icon: '🚛',
      subcategories: [
        'Aero Engines & Aircraft Components',
        'Aviation Equipment',
        'Bicycle',
        'Commercial Vehicles',
        'Marine Equipment'
      ]
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Browse by Category</h2>
          <Link href="/categories" className="text-[#2E5B9A] hover:text-[#F76B1C] flex items-center">
            View All
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-4 border-b">
                <Link 
                  href={category.id === 'automobile' ? '/category/automobile' : category.id === 'apparel' ? '/category/apparel' : category.id === 'agriculture' ? '/category/agriculture' : category.id === 'brass-hardware' ? '/category/brass-hardware' : category.id === 'chemicals' ? '/category/chemicals' : category.id === 'computer' ? '/category/computer' : category.id === 'construction' ? '/category/construction' : `/category/${category.id}`}
                  className="flex items-center text-xl font-medium text-gray-800 hover:text-[#2E5B9A]"
                >
                  <span className="mr-2 text-2xl">{category.icon}</span>
                  {category.name}
                </Link>
              </div>
              
              <div className="p-4">
                <ul className="space-y-2">
                  {category.subcategories.slice(0, 5).map((subcat, index) => (
                    <li key={index}>
                      <Link 
                        href={`/category/${category.id}/${subcat.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-600 hover:text-[#F76B1C] flex items-center"
                      >
                        <ChevronRight size={14} className="mr-1 text-gray-400" />
                        {subcat}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/category/${category.id}`}
                  className="mt-4 inline-block text-sm text-[#2E5B9A] hover:text-[#F76B1C]"
                >
                  View all in {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;