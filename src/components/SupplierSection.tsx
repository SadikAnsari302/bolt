import React from 'react';
import { Link } from './ui/Link';
import { MapPin, Check, Award, ChevronRight } from 'lucide-react';

interface Supplier {
  id: number;
  name: string;
  logo: string;
  location: string;
  products: string[];
  memberSince: string;
  featured: boolean;
  verified: boolean;
}

const SupplierSection: React.FC = () => {
  const suppliers: Supplier[] = [
    {
      id: 1,
      name: 'Global Industries Ltd.',
      logo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Mumbai, Maharashtra',
      products: ['Industrial Machinery', 'Safety Equipment', 'Tools & Hardware'],
      memberSince: '2015',
      featured: true,
      verified: true
    },
    {
      id: 2,
      name: 'Tech Solutions Pvt. Ltd.',
      logo: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Bangalore, Karnataka',
      products: ['Electronic Components', 'Consumer Electronics', 'LED Products'],
      memberSince: '2018',
      featured: true,
      verified: true
    },
    {
      id: 3,
      name: 'Premium Textiles',
      logo: 'https://images.pexels.com/photos/3928532/pexels-photo-3928532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Surat, Gujarat',
      products: ['Cotton Fabrics', 'Synthetic Textiles', 'Apparel Materials'],
      memberSince: '2016',
      featured: true,
      verified: false
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Suppliers</h2>
          <Link href="/suppliers" className="text-[#2E5B9A] hover:text-[#F76B1C] flex items-center">
            View All Suppliers
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suppliers.map(supplier => (
            <div key={supplier.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={supplier.logo} 
                  alt={supplier.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-semibold">{supplier.name}</h3>
                    <div className="flex items-center mt-1">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-sm">{supplier.location}</span>
                    </div>
                  </div>
                </div>
                
                {supplier.verified && (
                  <div className="absolute top-2 right-2 bg-[#38B54A] text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Check size={12} className="mr-1" />
                    Verified
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <div className="text-sm text-gray-500 mb-2">Main Products:</div>
                  <div className="flex flex-wrap gap-2">
                    {supplier.products.map((product, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Award size={14} className="text-[#2E5B9A] mr-1" />
                  <span>Member since {supplier.memberSince}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Link 
                    href={`/supplier/${supplier.id}`}
                    className="flex-1 bg-[#2E5B9A] text-white py-2 text-center rounded-md hover:bg-[#1E3A6A] transition duration-300 text-sm"
                  >
                    View Profile
                  </Link>
                  <Link 
                    href={`/contact-supplier/${supplier.id}`}
                    className="flex-1 border border-[#F76B1C] text-[#F76B1C] py-2 text-center rounded-md hover:bg-[#F76B1C] hover:text-white transition duration-300 text-sm"
                  >
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplierSection;