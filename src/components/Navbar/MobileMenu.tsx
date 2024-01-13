// MobileMenu.tsx
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import navLinks from '../../config/navLinks';
import images from '../../config/images';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scrolling
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <Fragment>
      <button className="md:hidden text-2xl p-2" onClick={toggleMobileMenu}>
        {/* Animated icon */}
        <div className="w-8 h-8 relative">
          <img
            src={isOpen ? images.exitIcon : images.hambergerIcon}
            alt="Menu"
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-300"
          />
        </div>
      </button>

      {/* Overlay div will cover content to make it less visible when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          style={{ top: '96px' }} // Start below the navbar
          onClick={toggleMobileMenu}
        />
      )}

      {/* The mobile menu container */}
      <div
        className={`fixed top-0 left-0 w-full shadow-md z-20 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-[100px]' : '-translate-y-full'
        } md:hidden`}
      >
        <div className="py-4 bg-[#FCF6EF]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center justify-center py-4 text-gray-700 hover:text-gray-900 text-xl"
              onClick={toggleMobileMenu}
            >
              {link.image && (
                <img src={link.image} alt={link.title} className="h-6 mr-2" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
