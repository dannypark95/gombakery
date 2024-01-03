// src/components/Navbar/NavMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import navLinks from '../../config/navLinks';

const NavMenu: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {navLinks.map((link) => (
        <Link
          key={link.title}
          to={link.path}
          className="py-2 px-2 text-gray-700 hover:text-gray-900 rounded transition duration-300 text-lg"
        >
          {link.image ? (
            <img src={link.image} alt={link.title} className="h-6" />
          ) : (
            <span className="text-gray-700 hover:text-gray-900 text-lg">
              {link.title}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
