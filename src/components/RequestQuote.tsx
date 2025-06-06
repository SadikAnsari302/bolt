import React, { useState } from 'react';
import { Send } from 'lucide-react';

const RequestQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    product: '',
    quantity: '',
    requirements: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, you would submit this data to your backend
    alert('Your request has been submitted successfully!');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      company: '',
      product: '',
      quantity: '',
      requirements: ''
    });
  };
  
  return (
    <section className="py-12 bg-gradient-to-r from-[#2E5B9A]/10 to-[#F76B1C]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-[#2E5B9A] text-white p-6">
              <h2 className="text-2xl font-bold mb-4">Get Best Quote</h2>
              <p className="mb-6">Tell us what you need, and get quotes from verified suppliers.</p>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">100% Verified Suppliers</p>
                  <p className="text-white/70">All suppliers are thoroughly verified</p>
                </div>
                
                <div>
                  <p className="font-semibold">Quick Responses</p>
                  <p className="text-white/70">Receive multiple quotes within hours</p>
                </div>
                
                <div>
                  <p className="font-semibold">Bulk Discounts</p>
                  <p className="text-white/70">Negotiate for better prices directly</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E5B9A]"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E5B9A]"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number*</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E5B9A]"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E5B9A]"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product/Service*</label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E5B9A]"
                      placeholder="What are you looking for?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity & Unit</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E5B9A]"
                      placeholder="Ex: 100 Pieces"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Requirements Details</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E5B9A]"
                    placeholder="Additional details about your requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#F76B1C] text-white py-3 px-4 rounded-md hover:bg-[#E55A0B] transition duration-300 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Inquiry
                </button>
                
                <p className="text-xs text-gray-500 mt-2 text-center">
                  By clicking "Send Inquiry", you agree to our Terms and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;