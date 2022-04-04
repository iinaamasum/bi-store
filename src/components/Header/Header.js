import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/home.jpg';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="md:flex items-center justify-between container__home pt-3">
      <div className="md:w-1/2 pr-8 mb-6 md:mb-0">
        <h1 className="text-4xl lg:text-6xl 2xl:text-8xl text-red-500 font-mono font-bold">
          The bi-cycle <br /> You want
        </h1>
        <h2 className="text-3xl md:text-5xl font-serif text-blue-500 font-semibold pt-8">
          Your Dream lies here
        </h2>

        <p className="lg:text-xl pt-4 text-justify">
          Hi there. If you want to buy a bi-cycle this the best store for you.
          You can compare among hundreds of bi-cycle and choose the right one
          for you. See our review to know more.
        </p>

        <button
          onClick={() => navigate('/dashboard')}
          className="border-2 border-gray-700 rounded-lg mt-3 px-10 py-4 hover:bg-gray-700 hover:text-white transition-all duration-500 ease-in-out"
        >
          <span className="text-2xl tracking-wide font-mono font-semibold inline-flex items-center">
            <span className="pt-1">Live Show</span>
            <MdArrowForwardIos className="ml-4" size={30} />
          </span>
        </button>
      </div>
      <div className="md:w-1/2 home__img rounded bg-gray-400">
        <img className="rounded " src={logo} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Header;
