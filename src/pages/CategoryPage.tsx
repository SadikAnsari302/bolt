import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Category: {id}</h1>
      {/* Category products will be implemented here */}
    </div>
  );
};

export default CategoryPage;