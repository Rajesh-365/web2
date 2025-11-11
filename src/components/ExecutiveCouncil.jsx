import React from 'react';
import { Award, Phone, MessageCircle } from 'lucide-react';


const council = [
  {
    name: 'K. Mohan Prabhakar',
    position: 'Founder & Correspondent',
    color: 'from-orange-500 to-red-600',
    image: '/images/Persons/Mohan.png',
    phone: '+91 9701936669',
    whatsapp: '+91 7981724802',
  },
  {
    name: 'Rev. Venu Babu',
    position: 'Dean of Studies',
    color: 'from-blue-500 to-blue-700',
    image: '/images/Persons/venu garu.png',
    phone: '+91 9908663276',
  },
  {
    name: 'Rev. Abraham',
    position: 'Admissions In-Charge',
    color: 'from-purple-500 to-purple-700',
    image: '/images/Persons/Abraham garu.png',
    phone: '+91 86862 84462',
  },
  {
    name: 'Rev. Ananiah',
    position: 'Examination Co-ordinator',
    color: 'from-green-500 to-green-700',
    image: '/images/Persons/Ananiah garu.png',
    phone: '+91 98483 82149',
  },
];


/* ---------- Helpers ---------- */
const digitsOnly = (raw = '') => raw.replace(/[^\d]/g, '');


const getTelHref = (rawPhone) => {
  const d = digitsOnly(rawPhone);
  return d ? `tel:+${d}` : '#';
};


const isMobileUA = () => {
  if (typeof navigator === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
};


const openWhatsApp = (rawPhone, text = '') => {
  const phone = digitsOnly(rawPhone);
  if (!phone) return;


  const encoded = encodeURIComponent(text || '');
  const deepLink = `whatsapp://send?phone=${phone}${encoded ? `&text=${encoded}` : ''}`;
  const waLink = `https://wa.me/${phone}${encoded ? `?text=${encoded}` : ''}`;


  if (isMobileUA()) {
    window.location.href = deepLink;
    setTimeout(() => {
      window.location.href = waLink;
    }, 700);
    return;
  }


  const fallbackTimer = setTimeout(() => {
    window.open(waLink, '_blank', 'noopener,noreferrer');
    document.removeEventListener('visibilitychange', onVisibilityChange);
  }, 1200);


  const onVisibilityChange = () => {
    if (document.hidden) {
      clearTimeout(fallbackTimer);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    }
  };


  document.addEventListener('visibilitychange', onVisibilityChange);
  window.location.href = deepLink;
};


const ExecutiveCouncil = () => {
  return (
    <section
      id="core-committee"
      className="py-20 bg-gradient-to-br from-white via-indigo-50/30 to-slate-50 dark:from-gray-950 dark:via-slate-950 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50">
            Executive Council
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
          <p className="mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the core leaders behind the vision and operation of our institute.
          </p>
        </div>


        {/* Cards Container - Horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 min-w-max sm:min-w-0">
            {council.map((member, index) => {
              const prefilled = `Hello ${member.name}, I'm reaching out from the website regarding ${member.position}.`;
              const whatsappNumber = member.whatsapp || member.phone;


              return (
                <div
                  key={index}
                  className="w-72 sm:w-auto flex-shrink-0 sm:flex-shrink group rounded-3xl overflow-hidden bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border border-black/5 dark:border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.45)]"
                >
                  {/* Header image with gradient wash */}
                  <div className={`relative h-56 bg-gradient-to-br ${member.color}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>


                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mt-2 mb-5 inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>{member.position}</span>
                    </p>


                     {/* Actions */}
                     <div className="grid grid-cols-2 gap-2">
                       {/* Call */}
                       <a
                         href={getTelHref(member.phone)}
                         className="inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition"
                         aria-label={`Call ${member.name}`}
                       >
                         <Phone className="w-4 h-4" />
                         Call
                       </a>


                      {/* WhatsApp */}
                      <button
                        type="button"
                        onClick={() => openWhatsApp(whatsappNumber, prefilled)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-medium text-green-900 bg-green-100 hover:bg-green-200 dark:text-green-100 dark:bg-emerald-700/40 dark:hover:bg-emerald-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition"
                        aria-label={`WhatsApp ${member.name}`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chat
                      </button>
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


export default ExecutiveCouncil;