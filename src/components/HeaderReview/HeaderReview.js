import React from 'react';
import useUserData from '../../hooks/useUserData';
import Card from '../Card/Card';

const HeaderReview = () => {
  const [data, setData] = useUserData();
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-5xl text-center text-blue-700 font-mono tracking-wide font-bold">
        Customer Review
      </h1>
      {data.slice(0, 3).map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HeaderReview;
