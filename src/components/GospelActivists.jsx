import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Heart } from 'lucide-react';

const activists = [
  {
    name: "Ps. Lella Joshua (Venkateswarlu)",
    photo: "/images/Persons/L.Jashua Garu.jpeg",
    workArea: "Nallamala Forest Region",
    ministry: "Tribal Ministry",
    description: "Working with tribal communities in remote forest areas, focusing on education and healthcare outreach.",
    phone: "+91 99512 43829" 
  },
  {
    name: "Br. Yohan",
    photo: "/images/Persons/Yohan Garu.jpg",
    workArea: " Vizianagaram Area",
    ministry: "Youth Empowerment",
    description: "Engaging with youth through educational programs and skill development initiatives.",
    phone: "+91 98765 43210" // Replace with actual phone number
  },
  {
    name: "Rev. D. Mariyadasu",
    photo: "/images/Persons/D.mariyadasu Garu.jpeg",
    workArea: "Nallamala Forest Region",
    ministry: "Tribal Ministry",
    description: "Working with tribal communities in remote forest areas, focusing on education and healthcare outreach.",
    phone: "+91 7702684554"
  },
];

const GospelActivists = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Gospel Activists
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our dedicated team of Gospel Activists working tirelessly to spread the message of Christ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activists.map((activist, index) => (
            <motion.div
              key={activist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img
                  src={activist.photo}
                  alt={activist.name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {activist.name}
                  </h3>
                  <p className="text-gray-200 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {activist.workArea}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{activist.ministry}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {activist.description}
                </p>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <a 
                    href={`tel:${activist.phone}`} 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    {activist.phone}
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

export default GospelActivists; 