// src/components/Feature/FeaturesSection.tsx
import React from 'react';
import FeatureItem from './FeatureItem';
import images from '../../config/images';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#DDD5BE]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {' '}
        {/* Adjusted width and padding */}
        <FeatureItem
          imgSrc={images.featureHandmade}
          title="Handmade"
          description="Every product is handcrafted with love and care using traditional methods."
        />
        <FeatureItem
          imgSrc={images.featureLocal}
          title="Local"
          description="We pride ourselves on sourcing ingredients from local producers and suppliers."
          reverse={true}
        />
        <FeatureItem
          imgSrc={images.featureUnique}
          title="Unique"
          description="Our bakery offers unique flavors inspired by Korean cuisine, bringing new tastes to Chicago."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
