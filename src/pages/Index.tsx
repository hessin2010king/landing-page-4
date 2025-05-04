
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import Stats from '../components/sections/Stats';
import BlogSection from '../components/sections/BlogSection';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Stats />
      <BlogSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
