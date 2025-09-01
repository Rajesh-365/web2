import React from 'react';
import { Church, BookOpenText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BrandingGrid = () => {
  const { t } = useLanguage();

  const brands = [
    {
      id: 'jgf',
      title: 'JGF',
      subtitle: 'John Gospel Fellowship',
      icon: Church,
      color: 'from-blue-500 to-blue-700',
      href: '#about'
    },
    {
      id: 'emmaus',
      title: 'EMMAUS INSTITUTE OF THEOLOGY',
      subtitle: 'Theology Institute',
      icon: BookOpenText,
      color: 'from-purple-500 to-purple-700',
              href: '#eit'
    },
    {
      id: 'tv',
      title: 'EMMAUS TV - JGF',
      subtitle: 'Emmaus TV on YouTube',
      color: 'from-gray-900 via-slate-900 to-gray-800', // DIFFERENT (dark) card bg so the red logo stands out
      href: 'https://www.youtube.com/@emmaustv-jgf',
      external: true
    }
  ];

  return (
    <section id="branding" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <a
              key={brand.id}
              href={brand.href}
              target={brand.external ? '_blank' : undefined}
              rel={brand.external ? 'noopener noreferrer' : undefined}
              aria-label={brand.id === 'tv' ? 'Open Emmaus TV – JGF YouTube channel' : undefined}
              className="group block"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brand.id === 'tv' ? brands[2].color : brand.color}
                            p-8 h-64 flex flex-col justify-center items-center text-center
                            transform hover:scale-105 transition-all duration-500
                            shadow-lg hover:shadow-2xl animate-fade-in-up`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-white/20 transform rotate-12 scale-150" />
                </div>

                {/* Subtle red aura behind the YouTube logo (does NOT touch corners) */}
                {brand.id === 'tv' && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="w-[65%] h-[65%] rounded-full bg-red-500/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}

                {/* Icon */}
                <div className="relative z-10 mb-4 transform transition-transform duration-300 group-hover:scale-[1.12]">
                  {brand.id === 'tv' ? (
                    // Clean YouTube SVG with a subtle WHITE outline stroke (no corner color bleed)
                    <svg
                      viewBox="0 0 176 124"
                      className="w-24 sm:w-28 h-auto"
                      role="img"
                      aria-label="YouTube"
                    >
                      {/* Red rounded rectangle */}
                      <rect x="0" y="0" width="176" height="124" rx="24" fill="#FF0000" />

                      {/* Thin white outline stroke (slight glow via drop-shadow) */}
                      <g style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.45))' }}>
                        <rect
                          x="1.5"
                          y="1.5"
                          width="173"
                          height="121"
                          rx="22.5"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeOpacity="0.85"
                          strokeWidth="3"
                        />
                      </g>

                      {/* White play triangle */}
                      <polygon points="70,37 70,87 122,62" fill="#FFFFFF" />
                    </svg>
                  ) : (
                    <brand.icon className="w-16 h-16 text-white" aria-hidden="true" />
                  )}
                </div>

                {/* Content (kept consistent) */}
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-yellow-200">
                    {brand.title}
                  </h3>
                  <p className="text-white/80 text-sm">{brand.subtitle}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingGrid;
