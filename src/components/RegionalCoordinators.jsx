import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Building } from 'lucide-react';

const coordinators = [
  {
    name: "Rev. Tadikemalla VenkataSambasiva Rao",
    photo: "/images/Persons/sambasivarao Garu.jpg",
    area: "Chilakaluripet",
    district: "Palnadu District",
    phone: "+91 79810 00013"
  },
  {
    name: "Rev. Gottemukkala Chennakesavulu",
    photo: "/images/Persons/chennakesavulu Garu.jpg",
    area: "Pullala Cheruvu",
    district: "Prakasam District",
    phone: "+91 9876543212"
  },
];

const RegionalCoordinators = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Regional Coordinators
        </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our dedicated regional coordinators serving different areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {coordinators.map((coordinator, index) => (
            <motion.div
              key={coordinator.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600">
                <img
                  src={coordinator.photo}
                  alt={coordinator.name}
                  className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">
                  {coordinator.name}
                </h3>
                  <p className="text-gray-200 flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5" />
                    {coordinator.area}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Building className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="font-semibold text-lg text-gray-700 dark:text-gray-300">{coordinator.district}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                    <a
                      href={`tel:${coordinator.phone}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
                    >
                      {coordinator.phone}
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalCoordinators; 