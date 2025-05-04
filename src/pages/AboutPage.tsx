
import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/sections/AboutUs';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-blue-900 h-64">
        <div className="absolute inset-0 z-0">
          <img 
            src="/placeholder.svg" 
            alt="About Us Banner" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <Navbar />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutPage;
