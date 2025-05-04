
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-blue-900 h-screen min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/placeholder.svg" 
          alt="Modern building construction" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Building</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Strong Foundations<br />
            Building Bright Futures
          </h1>
          <p className="text-sm md:text-base mb-6">
            Soft Landings is a building delivery process that helps bridge the performance
            gap from inception to completion and beyond to ensure all partners across
            every phase are heard. It's intended to improve operational performance of new buildings or spaces and the experience of those who use them,
            and to inform future project delivery. It provides a range
            of services to help implement Soft Landings successfully throughout all stages
            of a project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
