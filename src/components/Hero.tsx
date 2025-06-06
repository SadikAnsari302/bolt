import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Connecting Businesses Across India",
      description: "Find verified suppliers and buyers from all over India. Get quotes, connect, and grow your business.",
      cta: "Post Your Requirement",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "India's Largest B2B Marketplace",
      description: "Discover millions of products and connect with thousands of suppliers to get the best deals.",
      cta: "Browse Categories",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Grow Your Business Online",
      description: "Showcase your products to millions of potential buyers and increase your business reach.",
      cta: "Start Selling",
      image: "https://images.pexels.com/photos/7412111/pexels-photo-7412111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      {/* Main Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-xl text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-6">{slide.description}</p>
                <Link 
                  href="#" 
                  className="inline-flex items-center bg-[#F76B1C] text-white px-6 py-3 rounded-md hover:bg-[#E55A0B] transition duration-300"
                >
                  {slide.cta}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="bg-white py-4 shadow-md relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link href="#" className="flex items-center text-[#2E5B9A] hover:text-[#F76B1C] transition-colors duration-300">
                <span className="font-medium">Post Buy Requirement</span>
                <ChevronRight size={16} />
              </Link>
              <Link href="#" className="flex items-center text-[#2E5B9A] hover:text-[#F76B1C] transition-colors duration-300">
                <span className="font-medium">Search Products</span>
                <ChevronRight size={16} />
              </Link>
              <Link href="#" className="flex items-center text-[#2E5B9A] hover:text-[#F76B1C] transition-colors duration-300">
                <span className="font-medium">Find Suppliers</span>
                <ChevronRight size={16} />
              </Link>
              <Link href="#" className="flex items-center text-[#2E5B9A] hover:text-[#F76B1C] transition-colors duration-300">
                <span className="font-medium">Get Best Price</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;