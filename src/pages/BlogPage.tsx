
import React from 'react';
import Navbar from '../components/Navbar';
import BlogSection from '../components/sections/BlogSection';
import Footer from '../components/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-blue-900 h-64">
        <div className="absolute inset-0 z-0">
          <img 
            src="/placeholder.svg" 
            alt="Blog Banner" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <Navbar />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <h1 className="text-4xl font-bold text-white">Our Blog</h1>
        </div>
      </div>
      <BlogSection />
      <Footer />
    </div>
  );
};

export default BlogPage;
