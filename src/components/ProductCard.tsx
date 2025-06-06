import React from 'react';
import { Link } from './ui/Link';
import { MessageSquare, Star, MapPin, ArrowRight } from 'lucide-react';

interface Supplier {
  name: string;
  location: string;
  rating: number;
  verified: boolean;
  yearEstablished: number;
}

interface Product {
  id: number;
  title: string;
  price: string;
  minOrder: string;
  image: string;
  supplier: Supplier;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {product.supplier.verified && (
          <div className="absolute top-2 right-2 bg-[#38B54A] text-white text-xs px-2 py-1 rounded-full">
            Verified
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow">
        <Link href={`/product/${product.id}`} className="block text-gray-800 font-medium text-lg mb-2 hover:text-[#2E5B9A] line-clamp-2">
          {product.title}
        </Link>
        
        <div className="mt-2 text-[#F76B1C] font-semibold">
          {product.price}
          <span className="text-xs text-gray-500 font-normal ml-1">/ piece</span>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          MOQ: {product.minOrder}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={14} className="text-gray-400 mr-1" />
          {product.supplier.location}
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Star size={14} className="text-yellow-400 mr-1" />
          <span>{product.supplier.rating}</span>
          <span className="mx-2">•</span>
          <span>Since {product.supplier.yearEstablished}</span>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between">
        <Link 
          href={`/contact-supplier/${product.supplier.name.toLowerCase().replace(/\s+/g, '-')}`} 
          className="flex items-center text-[#2E5B9A] hover:text-[#F76B1C]"
        >
          <MessageSquare size={16} className="mr-1" />
          <span className="text-sm">Contact Supplier</span>
        </Link>
        
        <Link
          href={`/product/${product.id}`}
          className="text-gray-500 hover:text-[#2E5B9A]"
        >
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;