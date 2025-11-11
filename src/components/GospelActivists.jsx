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
    workArea: "Vizianagaram Area",
    ministry: "Youth Empowerment",
    description: "Engaging with youth through educational programs and skill development initiatives.",
    phone: "+91 98765 43210"
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

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.12 }
  })
};

const GospelActivists = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">
            Gospel Activists
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Our dedicated team of Gospel Activists working tirelessly to spread the message of Christ
          </p>
        </div>

        {/* horizontal scroll on mobile, grid on larger screens */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* mobile: horizontal scroll - portrait cards */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-800 lg:hidden">
            {activists.map((a, i) => (
              <motion.div
                key={a.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/60 via-white/20 to-white/5 dark:from-white/15 dark:via-white/5 dark:to-white/0 shadow-[0_10px_35px_-12px_rgba(0,0,0,0.25)] w-[85vw] sm:w-[75vw] md:w-[45vw] snap-center flex-shrink-0"
              >
                <div className="rounded-2xl overflow-hidden bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10 h-full">
                  {/* image - taller for portrait */}
                  <div className="relative bg-slate-50 dark:bg-slate-900">
                    <div className="h-80 sm:h-96 w-full flex items-center justify-center p-3 sm:p-4">
                      <img
                        src={a.photo}
                        alt={a.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* body */}
                  <div className="p-4 sm:p-5">
                    <div className="mb-3">
                      <h3 className="text-base sm:text-lg font-bold leading-snug text-gray-900 dark:text-white">
                        {a.name}
                      </h3>
                      <p className="mt-1 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="line-clamp-1">{a.workArea}</span>
                      </p>
                    </div>

                    {/* ministry */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-slate-800/80 dark:text-slate-100 dark:ring-white/10">
                        <Heart className="h-4 w-4 text-rose-500 flex-shrink-0" />
                        <span className="line-clamp-1">{a.ministry}</span>
                      </span>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-300/90 mb-4 line-clamp-3">
                      {a.description}
                    </p>

                    {/* call button */}
                    <div className="flex justify-center">
                      <a
                        href={`tel:${a.phone}`}
                        className="inline-flex items-center justify-center gap-2 rounded-lg 
                                   bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
                                   px-4 py-2.5 text-sm font-semibold text-white 
                                   shadow-md shadow-indigo-500/30 transition-all duration-300 
                                   hover:scale-105 hover:shadow-indigo-500/50 
                                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      >
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <span className="whitespace-nowrap">Call Now</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* glow on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15" />
              </motion.div>
            ))}
          </div>

          {/* desktop: normal grid */}
          <div className="hidden lg:contents">
            {activists.map((a, i) => (
              <motion.div
                key={a.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/60 via-white/20 to-white/5 dark:from-white/15 dark:via-white/5 dark:to-white/0 shadow-[0_10px_35px_-12px_rgba(0,0,0,0.25)]"
              >
                <div className="rounded-2xl overflow-hidden bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10">
                  {/* image */}
                  <div className="relative bg-slate-50 dark:bg-slate-900">
                    <div className="h-80 w-full flex items-center justify-center p-4">
                      <img
                        src={a.photo}
                        alt={a.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* body */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold leading-snug text-gray-900 dark:text-white">
                        {a.name}
                      </h3>
                      <p className="mt-1 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4" />
                        {a.workArea}
                      </p>
                    </div>

                    {/* ministry */}
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-slate-800/80 dark:text-slate-100 dark:ring-white/10">
                        <Heart className="h-4 w-4 text-rose-500" />
                        {a.ministry}
                      </span>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-300/90">
                      {a.description}
                    </p>

                    {/* call button */}
                    <div className="mt-6 flex justify-center">
                      <a
                        href={`tel:${a.phone}`}
                        className="inline-flex items-center justify-center gap-2 rounded-lg 
                                   bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
                                   px-5 py-2.5 text-base font-semibold text-white 
                                   shadow-md shadow-indigo-500/30 transition-all duration-300 
                                   hover:scale-105 hover:shadow-indigo-500/50 
                                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Call {a.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* glow on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GospelActivists;