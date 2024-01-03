// src/components/Feature/FeatureItem.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FeatureItemProps {
  imgSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
}

// src/components/Feature/FeatureItem.tsx
const FeatureItem: React.FC<FeatureItemProps> = ({
  imgSrc,
  title,
  description,
  reverse = false,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-wrap ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center justify-center mb-8 transition-all duration-700 ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full md:w-1/3 px-4">
        <img
          src={imgSrc}
          alt={title}
          className="rounded-lg shadow-md w-full h-auto mx-auto"
        />
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-3 text-center">{title}</h2>
        <p className="font-helvetica text-center">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
