import React, { useState } from 'react';
import { Award, Phone, MessageCircle } from 'lucide-react';

const council = [
  {
    name: 'K. Mohan Prabhakar',
    position: 'Founder & Correspondent',
    color: 'from-orange-500 to-red-600',
    image: '/images/Persons/Mohan.png',
    phone: '+91 9908663276',        // call number
    whatsapp: '+91 7981724802',     // WhatsApp number
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
  const phone = digitsOnly(rawPhone); // e.g. "919908663276"
  if (!phone) return;

  const encoded = encodeURIComponent(text || '');

  // Reliable links
  const deepLink = `whatsapp://send?phone=${phone}${encoded ? `&text=${encoded}` : ''}`;
  const waLink   = `https://wa.me/${phone}${encoded ? `?text=${encoded}` : ''}`;

  if (isMobileUA()) {
    // Mobile: try app first, fallback to wa.me
    window.location.href = deepLink;
    setTimeout(() => {
      window.location.href = waLink;
    }, 700);
    return;
  }

  // Desktop: send to Web WhatsApp
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
  const [activeIndex, setActiveIndex] = useState(0);
  const active = council[activeIndex];
  const prefilled = `Hello ${active.name}, I’m reaching out from the website regarding ${active.position}.`;

  // pick WhatsApp number: prefer `whatsapp`, fallback to `phone`
  const whatsappNumber = active.whatsapp || active.phone;

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
            Meet the core leaders behind the vision and EIT of our institute.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start justify-center">
          {/* Main Card */}
          <div className="w-full max-w-2xl">
            <div className="rounded-3xl overflow-hidden bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border border-black/5 dark:border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-0.5">
              {/* Header image with gradient wash */}
              <div className={`relative h-72 sm:h-96 bg-gradient-to-br ${active.color}`}>
                <img
                  src={active.image}
                  alt={active.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>

              <div className="p-6 sm:p-7 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {active.name}
                </h3>
                <p className="mt-2 mb-6 inline-flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>{active.position}</span>
                </p>

                {/* Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Call */}
                  <a
                    href={getTelHref(active.phone)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition"
                    aria-label={`Call ${active.name}`}
                  >
                    <Phone className="w-5 h-5" />
                    Call
                  </a>

                  {/* WhatsApp */}
                  <button
                    type="button"
                    onClick={() => openWhatsApp(whatsappNumber, prefilled)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium text-green-900 bg-green-100 hover:bg-green-200 dark:text-green-100 dark:bg-emerald-700/40 dark:hover:bg-emerald-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition"
                    aria-label={`WhatsApp ${active.name}`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Thumbnails */}
          <div className="w-full lg:w-auto">
            <div
              role="tablist"
              aria-label="Executive council members"
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-4"
            >
              {council.map((member, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`council-panel-${index}`}
                    onClick={() => setActiveIndex(index)}
                    className={[
                      "relative w-full h-24 rounded-2xl overflow-hidden text-left",
                      "border transition-transform duration-300 focus:outline-none",
                      "hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-blue-500",
                      isActive
                        ? "border-blue-500 ring-1 ring-blue-500 shadow-md"
                        : "border-black/10 dark:border-white/10 opacity-90 hover:opacity-100",
                    ].join(" ")}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                      <span className="text-white text-sm font-medium truncate pr-2">{member.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hidden panels (for a11y relation, not used visually) */}
        {council.map((member, i) => (
          <div key={i} id={`council-panel-${i}`} hidden={i !== activeIndex} />
        ))}
      </div>
    </section>
  );
};

export default ExecutiveCouncil;
