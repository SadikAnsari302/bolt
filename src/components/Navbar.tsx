import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, ShoppingCart, Bell, Menu, X } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-md">
      {/* Top navbar */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center w-full md:w-auto justify-between">
            <Link href="/" className="text-2xl font-bold text-[#2E5B9A] flex items-center">
              <span className="text-[#F76B1C]">India</span>MART
            </Link>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 w-full md:w-auto mt-4 md:mt-0`}>
            <div className="relative w-full md:w-[400px] md:mr-4">
              <input
                type="text"
                placeholder="Search for products, services or suppliers..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E5B9A]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#F76B1C] text-white p-1 rounded-md">
                <Search size={20} />
              </button>
            </div>
            
            <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-start">
              <div className="relative">
                <button 
                  className="flex items-center text-gray-700 hover:text-[#2E5B9A]"
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                >
                  <MapPin size={20} className="mr-1" />
                  <span className="text-sm">New Delhi</span>
                  <ChevronDown size={16} className="ml-1" />
                </button>
                
                {isLocationOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-48 z-10">
                    <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Mumbai</div>
                    <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Bangalore</div>
                    <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Chennai</div>
                    <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Kolkata</div>
                  </div>
                )}
              </div>
              
              <Link href="/cart" className="flex items-center text-gray-700 hover:text-[#2E5B9A]">
                <ShoppingCart size={20} className="mr-1" />
                <span className="text-sm">Cart</span>
              </Link>
              
              <Link href="/notifications" className="flex items-center text-gray-700 hover:text-[#2E5B9A]">
                <Bell size={20} className="mr-1" />
                <span className="text-sm">Alerts</span>
              </Link>
              
              <Link href="/login" className="bg-[#2E5B9A] text-white px-4 py-2 rounded-md text-sm hover:bg-[#1E3A6A] transition duration-300">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category navbar */}
      <nav className="bg-[#2E5B9A] text-white py-2 overflow-x-auto">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 whitespace-nowrap">
            <li><Link href="/category/building-construction" className="text-sm hover:text-[#F76B1C]">Building & Construction</Link></li>
            <li><Link href="/category/electronics-electrical" className="text-sm hover:text-[#F76B1C]">Electronics & Electrical</Link></li>
            <li><Link href="/category/industrial-supplies" className="text-sm hover:text-[#F76B1C]">Industrial Supplies</Link></li>
            <li><Link href="/category/pharmaceuticals" className="text-sm hover:text-[#F76B1C]">Pharmaceuticals</Link></li>
            <li><Link href="/category/food-agriculture" className="text-sm hover:text-[#F76B1C]">Food & Agriculture</Link></li>
            <li><Link href="/category/apparel-textiles" className="text-sm hover:text-[#F76B1C]">Apparel & Textiles</Link></li>
            <li><Link href="/categories" className="text-sm hover:text-[#F76B1C]">All Categories</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;