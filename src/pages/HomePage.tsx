import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import RequestQuote from '../components/RequestQuote';
import SupplierSection from '../components/SupplierSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <RequestQuote />
      <SupplierSection />
    </>
  );
};

export default HomePage;