import React from 'react';
import useUserData from '../../hooks/useUserData';
import Card from '../Card/Card';

const Review = () => {
  const [items] = useUserData();
  return (
    <div className="container mx-auto">
      <div className="text-center text-4xl md:text-6xl py-5 text-blue-500 font-bold font-mono">
        <h1>Our Happiest Customers</h1>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Review;
