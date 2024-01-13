import React from 'react';
import InstagramIcon from '../Icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#373736] text-white text-center py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <InstagramIcon className="text-white hover:text-gray-300" />
        </div>

        <p>© {new Date().getFullYear()} Gom Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
