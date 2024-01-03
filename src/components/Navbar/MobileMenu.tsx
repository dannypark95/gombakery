// src/components/Navbar/MobileMenu.tsx
import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import navLinks from '../../config/navLinks';
import externalLinks from '../../config/extrernalLinks';
import icons from '../../config/icons';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Bar = icons.bars;

  return (
    <Fragment>
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        <Bar className="w-7 h-7" />
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 z-10">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="block py-2 px-4 text-gray-700 hover:text-gray-900 text-xl"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <a
            href={externalLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-4 text-gray-700 hover:text-gray-900 text-xl"
          >
            Instagram
          </a>
        </div>
      )}
    </Fragment>
  );
};

export default MobileMenu;
