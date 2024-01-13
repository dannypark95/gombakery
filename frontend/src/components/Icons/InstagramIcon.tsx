// src/components/icons/InstagramIcon.tsx
import React from 'react';
import icons from '../../config/icons';
import externalLinks from '../../config/extrernalLinks';

interface InstagramIconProps {
  className?: string;
}

const InstagramIcon: React.FC<InstagramIconProps> = ({ className }) => {
  return (
    <a
      href={externalLinks.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <icons.instagram className="w-8 h-8" />
    </a>
  );
};

export default InstagramIcon;
