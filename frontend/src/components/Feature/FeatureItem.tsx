import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FeatureItemProps {
  imgSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  imgSrc,
  title,
  description,
  reverse = false,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-wrap ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center justify-center mb-8 transition-all duration-700 ease-in-out mx-auto ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full md:w-2/3 lg:w-2/3 px-4 md:pr-8">
        <div className="max-w-md mx-auto">
          {' '}
          {/* Add a max-width class */}
          <img
            src={imgSrc}
            alt={title}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3 mt-4 md:mt-0 px-4 md:pl-8">
        <h2 className="text-2xl font-semibold mb-3 text-center">{title}</h2>
        <p className="text-center text-lg">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
