import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Order from './pages/Order/Order';

const Main: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/order' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
