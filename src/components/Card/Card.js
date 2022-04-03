import React from 'react';

const Card = (props) => {
  const { id, pic, userPic, rating, name, company, des } = props.item;
  return <div>id:{id}</div>;
};

export default Card;
