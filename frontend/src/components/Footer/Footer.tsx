import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#373736] text-white text-center py-8">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Gom Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
