import React, { useState } from 'react';
import { Award, Mail } from 'lucide-react';

const council = [
  {
    name: 'K.Mohan Prabhakar',
    position: 'Correspondent',
    color: 'from-orange-500 to-red-600',
    image: '/images/Persons/Mohan.png'
  },
  {
    name: 'Rev. Venu Babu',
    position: 'Dean of Studies',
    color: 'from-blue-500 to-blue-700',
    image: '/images/Persons/venu garu.png'
  },
  {
    name: 'Rev. Abraham',
    position: 'Admissions In-Charge',
    color: 'from-purple-500 to-purple-700',
    image: '/images/Persons/Abraham garu.png'
  },
  {
    name: 'Rev. Ananiah',
    position: 'Examination Co-ordinator',
    color: 'from-green-500 to-green-700',
    image: '/images/Persons/Ananiah garu.png'
  },
];

const ExecutiveCouncil = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="core-committee" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Executive Council</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto my-5"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the core leaders behind the vision and mission of our institute.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
          {/* Main Card */}
          <div className="w-full max-w-2xl transform transition-transform duration-300 hover:scale-105 will-change-transform">
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
              <div className={`relative h-72 sm:h-96 bg-gradient-to-br ${council[activeIndex].color}`}>
                <img
                  src={council[activeIndex].image}
                  alt={council[activeIndex].name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
                {/* Light gradient overlay (subtle, optional) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {council[activeIndex].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2 mt-2 mb-5">
                  <Award className="w-5 h-5 text-blue-500" />
                  {council[activeIndex].position}
                </p>
                <button className="btn-primary w-full flex justify-center items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Side Thumbnails */}
          <div className="flex flex-col gap-4 min-w-[200px]">
            {council.map((member, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative w-48 h-24 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 will-change-transform ${
                  index === activeIndex
                    ? 'ring-2 ring-blue-500 scale-[1.02] shadow-md'
                    : 'opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-3 text-white text-sm font-medium">
                  {member.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCouncil;
