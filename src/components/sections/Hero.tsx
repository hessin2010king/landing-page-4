import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-blue-900 h-screen min-h-[1000px] flex items-center ">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Modern building construction" 
          className="w-full h-full object-fit opacity-60"
        />
      </div>
      <div className="container mx-auto mt- px-4 z-10 text-white ">
        <div className="max-w-2xl ">
          <h2 className="text-4xl md:text-3xl font-bold mb-4 ">Building</h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Strong Foundations<br />
            Building Bright Futures
          </h2>
          <p className="text-sm font-Gilroy-Medium md:text-base mb-6 ">
          Soft Landings is a building delivery process which runs through the project, from inception to completion and beyond, to ensure all decisions made during the project are based on improving operational performance of the building and meeting the client’s expectations.” BLUTOWER provides a range of services to help implement Soft Landings successfully throughout all stages of a project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
