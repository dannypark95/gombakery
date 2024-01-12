import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../../config/images';
import { useInView } from 'react-intersection-observer';

const Story: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { ref: refText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this value as needed
  });

  // Ref for the image container to apply animation
  const { ref: refImages, inView: inViewImages } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this value as needed
  });

  // List of images for the carousel
  const carouselImages = [images.ourStory1, images.ourStory2, images.ourStory3];

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Set up an interval to cycle through images on small screens
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (windowWidth < 1024) {
      timer = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % carouselImages.length
        );
      }, 5000); // Change image every 5 seconds
    }

    return () => clearInterval(timer);
  }, [windowWidth, carouselImages.length]);

  return (
    <section className="bg-[#fcf9f6] text-gray-900 p-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Images section with transition effect */}
          <div
            ref={refImages}
            className={`w-full lg:w-2/3 flex flex-wrap justify-start transition-all duration-700 ease-in-out ${
              inViewImages
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {windowWidth < 1024 ? (
              // Mobile carousel with reduced height and added bottom spacing
              <div className="relative w-full h-[40vh] overflow-hidden mb-4">
                {' '}
                {/* Adjust height and margin-bottom here */}
                {carouselImages.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Our Story ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            ) : (
              // Static images for larger screens
              <>
                <div className="w-full lg:w-1/2 p-2">
                  <img
                    src={images.ourStory1}
                    alt="Kneading Dough"
                    className="h-auto object-cover rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="w-full lg:w-1/4 p-2 flex flex-col justify-between">
                  <img
                    src={images.ourStory2}
                    alt="Fresh Croissants"
                    className="h-auto object-cover rounded-lg shadow-lg w-full mb-4"
                  />
                  <img
                    src={images.ourStory3}
                    alt="Baked Bread"
                    className="h-auto object-cover rounded-lg shadow-lg w-full"
                  />
                </div>
              </>
            )}
          </div>
          {/* Text section */}
          <div
            ref={refText}
            className={`w-full lg:w-1/3 flex flex-col justify-center transition-all duration-700 ease-in-out ${
              inViewText
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-6">OUR STORY</h2>
              <h3 className="text-3xl mb-4">
                Baking Generosity into Every Bite
              </h3>
              <p>
                Gom Bakery offers handcrafted treats with a commitment to
                quality and community. Every purchase supports our mission to
                spread warmth and kindness, one baked good at a time.
              </p>
              <Link
                to="/about"
                className="text-lg font-semibold underline decoration-dotted decoration-[#373736] hover:decoration-solid transition-all duration-300 mt-4 inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
