import React, { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, link: '/home', name: 'Home' },
    { id: 2, link: '/review', name: 'Review' },
    { id: 3, link: '/dashboard', name: 'Dashboard' },
    { id: 4, link: '/blog', name: 'Blogs' },
    { id: 5, link: '/about', name: 'about' },
  ];
  return (
    <div className="shadow-md w-full bg-white">
      <div className="md:flex items-center justify-between py-4 container mx-auto">
        {/* logo */}
        <div className="uppercase tracking-wide text-3xl sm:text-4xl cursor-pointer text-gray-900 font-bold ml-8 sm:ml-0">
          BI-store
        </div>
        {/* FaHamburger */}
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {open ? <RiCloseLine /> : <FaHamburger />}
        </div>
        {/* links */}
        <ul
          className={`text-xl md:flex md:items-center absolute md:static bg-white z-50 left-0 w-full md:w-auto pl-12 md:pl-0 transition-all duration-500 ease-in-out ${
            open
              ? 'top-17 opacity-100'
              : 'top-[-900px] md:opacity-100 opacity-0'
          }`}
        >
          {links.map((link) => (
            <li
              className="md:ml-8 my-7 md:my-0 text-gray-900 hover:text-gray-400 transition-all duration-200 uppercase font-semibold"
              key={link.id}
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
