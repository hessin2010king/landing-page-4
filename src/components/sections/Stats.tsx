import React from 'react';

const Stats = () => {
  const stats = [
    { value: '15', label: 'YEARS OF EXPERIENCE' },
    { value: '550', label: 'PROJECTS' },
    { value: '6K', label: 'CLIENTS' },
    { value: '30', label: 'AWARDS' },
  ];
  
  return (
    <section className="relative py-10 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'linear-gradient(#1E2A38CC, #1E2A38CC), url("/images/stats.png")'
    }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl md:text-6xl font-Gilrory font-light text-white mb-3">{stat.value}</p>
              <p className="text-sm md:text-xl font-Gilroy-Light text-blue-100 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
