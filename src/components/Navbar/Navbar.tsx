import React from 'react';
import { Link } from 'react-router-dom';

import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';

import images from '../../config/images';

const Navbar: React.FC = () => {
  return (
    <nav className="shadow-lg py-4">
      <div className="max-w-6xl mx-auto px-14">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <img
              src={images.logo_navbar}
              alt="navbar logo"
              className="h-16 w-auto"
            />
          </Link>
          <NavMenu />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
