
import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Who We Are</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">About Us</h3>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text for the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem
              Ipsum.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="About Us" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
