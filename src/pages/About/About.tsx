import React from 'react';
import images from '../../config/images';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [refVision, inViewVision] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div>
      <div className="relative flex justify-center">
        <img
          src={images.aboutLogo}
          alt="Gom Bakery Logo"
          className="w-full h-[80vh] object-cover" // Keep the height at 60vh and cover the width
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>{' '}
        {/* Optional dark overlay */}
      </div>

      {/* Vision and Current Status Section */}
      <div className="container mx-auto p-20 space-y-12">
        {' '}
        {/* Add spacing between sections */}
        <div
          ref={refVision}
          className={`transition-transform duration-700 ease-in-out ${
            inViewVision ? 'translate-x-0' : '-translate-x-20 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-6">Our Vision</h2>
          <p className="text-lg mb-4">
            Gom Bakery is a non-profit bakery with a commitment to community and
            quality. Our mission is to create exceptional baked goods while
            supporting local initiatives and fostering a spirit of generosity.
            Culpa obcaecati labore placeat. Delectus labore aliquam at facilis
            totam neque explicabo. Atque molestias tempora totam qui rem vero.
            Est eius minus rem autem reiciendis distinctio ad ex. Laudantium
            recusandae aut sint porro doloremque iste ipsum rerum voluptatum
            autem corporis voluptatibus sunt mollitia repellat qui deleniti
            odit, culpa atque doloribus sapiente eaque ipsam eligendi?
            Recusandae ex voluptatem mollitia qui magnam velit earum ipsum est
            aut fugiat natus aliquam temporibus placeat excepturi accusantium
            sint odio, hic vero totam, dolorem voluptates! Iusto exercitationem
            harum quasi quaerat error?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
