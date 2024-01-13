import React, { useState, useEffect, Fragment } from 'react';
import images from '../../config/images'; // Your images import
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const carouselImages = [
    images.about1,
    images.about2,
    images.about3,
    images.about4,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
    // Add carouselImages.length to the dependency array
  }, [carouselImages.length]);

  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Fragment>
      {/* Top image section */}
      <div className="relative flex justify-center">
        <img
          src={images.aboutLogo}
          alt="Gom Bakery Logo"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Vision and status section */}
      <div className="container mx-auto p-8 md:p-16 lg:p-24 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {' '}
          {/* Flex container for vertical centering */}
          {/* Carousel Section */}
          <div className="relative w-full h-[80vh] overflow-hidden rounded-lg">
            {' '}
            {/* Rounded edges */}
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Carousel Slide ${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out rounded-lg ${
                  // Rounded edges
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          {/* Text column */}
          <div
            ref={refText}
            className={`transition-all duration-1000 ease-in-out ${
              inViewText
                ? 'translate-x-0 opacity-100'
                : 'translate-x-20 opacity-0'
            }`}
          >
            <h2 className="text-3xl font-bold mb-6">
              Gom Bakery: Where Baking Meets Compassion
            </h2>
            <p className="text-lg mb-4">
              At Gom Bakery, our ovens are fired up with more than just flour
              and sugar; they're filled with a passion for giving back to our
              community. Our journey began as a simple hobby, a way to spread
              happiness through the art of baking. Over time, it has transformed
              into a heartfelt mission to make a positive impact in our
              community.
              <br />
              <br />
              <div className="font-bold">Our Vision:</div>
              Gom Bakery is a non-profit bakery with a deep commitment to both
              quality and community. We believe in the power of exceptional
              baked goods to bring joy and warmth to people's lives. Every
              product we create is a testament to our dedication to craft,
              taste, and tradition.
              <br />
              <br />
              <div className="font-bold">Our Mission:</div>
              We started Gom Bakery with a desire to make people feel good with
              our baked goods. It's our way of sharing the simple joy of life's
              sweet moments. But we wanted to go beyond that. We wanted to use
              our passion for baking to help those in need.
              <br />
              <br />
              <div className="font-bold">A Promise to the Future:</div>
              As we look ahead to 2024, we are excited to announce a significant
              step in our journey. Starting this year, we are committing to
              donate 100% of our profits to the "진해 희망의집" (Jinhae House of
              Hope) to support children in need. We believe that together, we
              can make a meaningful difference in the lives of those who require
              it most.
              <br />
              <br />
              Thank you for being a part of our story. Together, we bake a
              brighter future.
              <br />
              <br />
              With warmth and gratitude,
              <br />
              Danny and the Gom Bakery Team
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
