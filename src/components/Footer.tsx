import React from 'react';
import { Link } from './ui/Link';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white flex items-center mb-4">
              <span className="text-[#F76B1C]">India</span>MART
            </Link>
            <p className="mb-4">India's largest online B2B marketplace, connecting buyers with suppliers since 1996.</p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-[#F76B1C]" />
                <span>123 Business Park, Sector 5<br />Noida, Uttar Pradesh 201301</span>
              </div>
              <div className="flex items-center">
                <PhoneCall size={18} className="mr-2 text-[#F76B1C]" />
                <span>+91-120-4000000</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-[#F76B1C]" />
                <span>info@indiamart.com</span>
              </div>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/building-construction" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Building & Construction
                </Link>
              </li>
              <li>
                <Link href="/category/electronics-electrical" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Electronics & Electrical
                </Link>
              </li>
              <li>
                <Link href="/category/industrial-supplies" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Industrial Supplies
                </Link>
              </li>
              <li>
                <Link href="/category/pharmaceuticals" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Pharmaceuticals
                </Link>
              </li>
              <li>
                <Link href="/category/food-agriculture" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Food & Agriculture
                </Link>
              </li>
              <li>
                <Link href="/category/apparel-textiles" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Apparel & Textiles
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Sell on IndiaMART
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Advertise
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#F76B1C] flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest product news, updates and offers.</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-[#F76B1C] text-white px-4 py-2 rounded-r-md hover:bg-[#E55A0B] transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div>
              <h4 className="text-white font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#F76B1C] transition duration-300">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#F76B1C] transition duration-300">
                  <Twitter size={18} />
                </Link>
                <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#F76B1C] transition duration-300">
                  <Linkedin size={18} />
                </Link>
                <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#F76B1C] transition duration-300">
                  <Instagram size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} IndiaMART. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-[#F76B1C]">Privacy Policy</Link>
              <Link href="/terms-of-use" className="hover:text-[#F76B1C]">Terms of Use</Link>
              <Link href="/sitemap" className="hover:text-[#F76B1C]">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;