// src/components/Feature/FeaturesSection.tsx
import React from 'react';
import FeatureItem from './FeatureItem';
import images from '../../config/images';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12">
      <FeatureItem
        imgSrc={images.feature_handmade}
        title="Handmade"
        description="Every product is handcrafted with love and care using traditional methods."
      />
      <FeatureItem
        imgSrc={images.feature_local}
        title="Local"
        description="We pride ourselves on sourcing ingredients from local producers and suppliers."
        reverse={true}
      />
      <FeatureItem
        imgSrc={images.feature_unique}
        title="Unique"
        description="Our bakery offers unique flavors inspired by Korean cuisine, bringing new tastes to Chicago."
      />
    </section>
  );
};

export default FeaturesSection;
