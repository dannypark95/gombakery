import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to the order page
import videos from '../../config/videos';
import externalLinks from '../../config/extrernalLinks';

const HomeCarousel: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === Object.keys(videos).length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {Object.values(videos).map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full flex items-center justify-center ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000 ease-in-out`}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <Link
          // to="/order"
          to={externalLinks.order}
          className="bg-[#202020] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#404040] transition duration-300"
        >
          ORDER NOW
        </Link>
      </div>
    </div>
  );
};

export default HomeCarousel;
