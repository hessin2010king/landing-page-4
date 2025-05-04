import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">Who We Are</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-2/3">
            <h3 className="text-6xl font-Gilroy-Light mb-10 text-[#263238]">About Us</h3>
            <p className="text-lg text-[#263238] mb-4">
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
                src="/images/about.png" 
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
