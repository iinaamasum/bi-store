import React from 'react';
import E404 from '../../Assets/404-Not-Found-SVG-1024x576.png';
import './Error404.css';
const Error404 = () => {
  return (
    <div style={{ height: '82vh' }}>
      <div className="back__ground">
        <img src={E404} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Error404;
