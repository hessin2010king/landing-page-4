
import React from 'react';

const Stats = () => {
  const stats = [
    { value: '15', label: 'YEARS OF EXPERIENCE' },
    { value: '550', label: 'PROJECTS' },
    { value: '6K', label: 'CLIENTS' },
    { value: '30', label: 'AWARDS' },
  ];
  
  return (
    <section className="py-12 bg-blue-900 bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-4xl md:text-5xl font-bold text-white">{stat.value}</p>
              <p className="text-xs md:text-sm text-blue-100 uppercase tracking-wider mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
