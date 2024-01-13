import React, { Fragment } from 'react';

import HomeCarousel from '../../components/Carousel/HomeCarousel';
import FeaturesSection from '../../components/Feature/FeatureSection';
import Story from '../../components/Story/Story';

const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeCarousel />
      <FeaturesSection />
      <Story />
    </Fragment>
  );
};

export default Home;
