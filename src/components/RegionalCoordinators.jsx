import React from 'react';
import { Phone, MapPin, Building } from 'lucide-react';


const coordinators = [
  {
    name: "Rev. Tadikemalla VenkataSambasiva Rao",
    photo: "/images/Persons/sambasivarao Garu.jpg",
    area: "Chilakaluripet",
    district: "Palnadu District",
    phone: "+917981000013",
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: "Rev. Gottemukkala Chennakesavulu [David Raju]",
    photo: "/images/Persons/chennakesavulu Garu.jpg",
    area: "Pullala Cheruvu",
    district: "Prakasam District",
    phone: "+919876543212",
    color: 'from-purple-500 to-purple-700',
  },
];


/* ---------- Helpers ---------- */
const digitsOnly = (raw = '') => raw.replace(/[^\d]/g, '');


const getTelHref = (rawPhone) => {
  const d = digitsOnly(rawPhone);
  return d ? `tel:+${d}` : '#';
};


const RegionalCoordinators = () => {
  return (
    <section
      id="regional-coordinators"
      className="py-20 bg-gradient-to-br from-white via-indigo-50/30 to-slate-50 dark:from-gray-950 dark:via-slate-950 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50">
            Regional Coordinators
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
          <p className="mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our dedicated regional coordinators serving different areas
          </p>
        </div>


        {/* Cards Container - Single version for all screen sizes */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0">
          <div className="flex gap-6 lg:grid lg:grid-cols-2 lg:gap-8 min-w-max lg:min-w-0">
            {coordinators.map((coordinator, index) => {
              return (
                <div
                  key={index}
                  className="w-80 lg:w-auto flex-shrink-0 lg:flex-shrink group rounded-3xl overflow-hidden bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border border-black/5 dark:border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.45)]"
                >
                  {/* Mobile: Vertical | Desktop: Horizontal */}
                  <div className="flex flex-col lg:flex-row lg:h-72">
                    {/* Image */}
                    <div className={`relative lg:w-64 h-64 lg:h-auto bg-gradient-to-br ${coordinator.color} flex-shrink-0`}>
                      <img
                        src={coordinator.photo}
                        alt={coordinator.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          console.error('Failed to load image:', coordinator.photo);
                          e.target.src = '/images/Persons/Abraham garu.png';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
                    </div>


                    {/* Content */}
                    <div className="p-6 lg:p-8 flex flex-col justify-center lg:flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white text-center lg:text-left mb-4">
                        {coordinator.name}
                      </h3>
                      
                      {/* Area & District Info */}
                      <div className="flex flex-col lg:flex-row lg:gap-4 space-y-2 lg:space-y-0 mb-5">
                        <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-sm lg:text-base text-gray-600 dark:text-gray-300">
                          <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <span className="font-medium">{coordinator.area}</span>
                        </div>
                        <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-sm lg:text-base text-gray-600 dark:text-gray-300">
                          <Building className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                          <span className="font-medium">{coordinator.district}</span>
                        </div>
                      </div>


                      {/* Call Button */}
                      <a
                        href={getTelHref(coordinator.phone)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm lg:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition"
                        aria-label={`Call ${coordinator.name}`}
                      >
                        <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


export default RegionalCoordinators;
