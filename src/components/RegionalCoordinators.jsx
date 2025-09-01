import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Building } from 'lucide-react';

const coordinators = [
  {
    name: "Rev. Tadikemalla VenkataSambasiva Rao",
    photo: "/images/Persons/sambasivarao Garu.jpg",
    area: "Chilakaluripet",
    district: "Palnadu District",
    phone: "+917981000013"
  },
  {
    name: "Rev. Gottemukkala Chennakesavulu [David Raju]",
    photo: "/images/Persons/chennakesavulu Garu.jpg",
    area: "Pullala Cheruvu",
    district: "Prakasam District",
    phone: "+919876543212"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, duration: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

const RegionalCoordinators = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Regional Coordinators
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our dedicated regional coordinators serving different areas
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch"
        >
          {coordinators.map((c) => (
            <motion.article
              key={c.name}
              variants={item}
              className="
                h-full flex flex-col
                rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow
              "
            >
              {/* Image */}
              <div className="w-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                <img
                  src={c.photo}
                  alt={c.name}
                  className="w-full h-72 md:h-80 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {c.name}
                </h3>

                {/* Three equally spaced boxes */}
                <div className="grid grid-cols-3 gap-3 mt-auto">
                  {/* Area */}
                  <div
                    className="
                      inline-flex items-center justify-center gap-2 rounded-md 
                      bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300
                      px-2 py-2 text-sm font-medium transition
                      hover:-translate-y-0.5 hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-800/50
                      text-center
                    "
                    title={c.area}
                  >
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="truncate transition-all duration-200 hover:font-bold hover:text-base">
                      {c.area}
                    </span>
                  </div>

                  {/* District */}
                  <div
                    className="
                      inline-flex items-center justify-center gap-2 rounded-md 
                      bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300
                      px-2 py-2 text-sm font-medium transition
                      hover:-translate-y-0.5 hover:shadow-md hover:bg-purple-100 dark:hover:bg-purple-800/50
                      text-center
                    "
                    title={c.district}
                  >
                    <Building className="w-4 h-4 shrink-0" />
                    <span className="truncate transition-all duration-200 hover:font-bold hover:text-base">
                      {c.district}
                    </span>
                  </div>

                  {/* Call Button (unchanged) */}
                  <motion.a
                    href={`tel:${c.phone}`}
                    aria-label={`Call ${c.name}`}
                    className="
                      inline-flex items-center justify-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-white
                      bg-gradient-to-r from-blue-600 to-indigo-600
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                      dark:focus:ring-offset-gray-800
                      transition
                    "
                    animate={{
                      scale: [1, 1.03, 1],
                      boxShadow: [
                        "0 0 0px rgba(59,130,246,0.0)",
                        "0 0 18px rgba(59,130,246,0.35)",
                        "0 0 0px rgba(59,130,246,0.0)"
                      ]
                    }}
                    transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                    whileHover={{
                      scale: 1.06,
                      y: -4,
                      boxShadow: "0 12px 26px rgba(59,130,246,0.35)"
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RegionalCoordinators;
