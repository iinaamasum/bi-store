import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useUserData from '../../hooks/useUserData';
import Card from '../Card/Card';

const HeaderReview = () => {
  const navigate = useNavigate();

  const [data] = useUserData();
  return (
    <div className="container mx-auto mt-8  px-4 sm:px-0">
      <div>
        <h1 className="text-5xl text-center text-blue-700 font-mono tracking-wide font-bold">
          Customer Review
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
        {data.slice(0, 3).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div
        onClick={() => navigate('/review')}
        className="text-center pt-6 mb-4"
      >
        <button className="border-2 border-slate-700 p-2 rounded-full hover:bg-slate-700 hover:text-white transition-all duration-500 ease-in-out">
          <span className="px-5 sm:px-16 py-2 text-2xl flex font-mono font-bold">
            See All Review
            <MdArrowForwardIos className="ml-2" size={30} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeaderReview;
