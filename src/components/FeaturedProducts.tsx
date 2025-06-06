import React from 'react';
import { Link } from './ui/Link';
import ProductCard from './ProductCard';

// Mock data for featured products
const products = [
  {
    id: 1,
    title: 'Industrial Safety Helmet',
    price: '₹120 - ₹150',
    minOrder: '100 Pieces',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    supplier: {
      name: 'Safety First Industries',
      location: 'Mumbai, Maharashtra',
      rating: 4.5,
      verified: true,
      yearEstablished: 2010
    }
  },
  {
    id: 2,
    title: 'High Quality Construction Bricks',
    price: '₹8 - ₹12',
    minOrder: '1000 Pieces',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    supplier: {
      name: 'Red Brick Manufacturers',
      location: 'Ahmedabad, Gujarat',
      rating: 4.2,
      verified: true,
      yearEstablished: 2015
    }
  },
  {
    id: 3,
    title: 'Premium Cotton Fabric',
    price: '₹85 - ₹120',
    minOrder: '50 Meters',
    image: 'https://images.pexels.com/photos/4620769/pexels-photo-4620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    supplier: {
      name: 'Textile World Enterprises',
      location: 'Surat, Gujarat',
      rating: 4.7,
      verified: true,
      yearEstablished: 2008
    }
  },
  {
    id: 4,
    title: 'Solar Panel 150W',
    price: '₹2500 - ₹3000',
    minOrder: '10 Pieces',
    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    supplier: {
      name: 'GreenTech Solutions',
      location: 'Bangalore, Karnataka',
      rating: 4.4,
      verified: true,
      yearEstablished: 2012
    }
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <Link href="/products" className="text-[#2E5B9A] hover:text-[#F76B1C]">View All Products</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;