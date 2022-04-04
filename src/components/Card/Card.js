import React from 'react';
import './Card.css';

const Card = (props) => {
  const { pic, rating, name, company, des, email } = props.item;
  return (
    <div className="pt-10 bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex flex-col items-center pb-3 card__img">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={pic}
          alt=""
          srcset=""
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {email}
        </span>
        <div className="flex mt-1 space-x-3 lg:mt-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {company}
          </span>
        </div>
      </div>
      <div className="text-2xl text-left p-2">
        <p className="text-mono">Rating: {rating} star</p>
        <p className="text-base text-justify">{des}</p>
      </div>
    </div>
  );
};

export default Card;
