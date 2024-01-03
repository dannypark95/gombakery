import React from 'react';

import HomeCarousel from '../../components/Carousel/HomeCarousel';
import FeaturesSection from '../../components/Feature/FeatureSection';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <HomeCarousel />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Home;
