import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-gray-600 mt-8 py-3">
      <div className="text-center flex justify-center items-center pt-2">
        <BsFacebook size={30} className="ml-5 rounded-full text-white" />
        <BsLinkedin size={30} className="ml-5 rounded-full text-white" />
        <AiFillTwitterCircle
          size={30}
          className="ml-5 rounded-full text-white"
        />
        <BsGithub size={30} className="ml-5 rounded-full text-white" />
      </div>
      <p className="text-center text-xl text-white mt-1">
        &copy; All rights reserved to{' '}
        <a
          href="https://github.com/iinaamasum"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-green-500 text-3xl">iinaamasum</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
