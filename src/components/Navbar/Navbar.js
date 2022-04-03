import React, { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const links = [
    { id: 1, link: '/', name: 'Home' },
    { id: 2, link: '/review', name: 'Review' },
    { id: 3, link: '/dashboard', name: 'Dashboard' },
    { id: 4, link: '/blog', name: 'Blogs' },
    { id: 5, link: '/about', name: 'about' },
  ];
  return (
    <div className="shadow-lg sticky top-0 left-0">
      <nav className="container mx-auto py-4">
        <div className="text-4xl flex items-center justify-between">
          <h1 className="uppercase tracking-wide font-mono font-bold pt-2 cursor-pointer">
            Product Checker
          </h1>

          {/* FaHamburger */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 md:hidden"
          >
            {open ? <FaHamburger /> : <RiCloseLine />}
          </div>

          <ul
            className={`md:flex md:items-center absolute md:static w-full md:w-auto pl-8 md:pl-0 transition-all duration-500 ease-in-out left-0 ${
              open ? 'top-17' : 'top-[-500px]'
            }`}
          >
            {links.map((link) => (
              <li key={link.id} className="text-2xl pl-3">
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
