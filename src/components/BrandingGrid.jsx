import React from 'react';
import { Church, BookOpenText, Tv } from 'lucide-react';
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
      href: '#mission'
    },
    {
      id: 'tv',
      title: 'EMMAUS TV - JGF',
      subtitle: 'Emmaus TV on YouTube',
      icon: Tv,
      color: 'from-red-500 to-red-700',
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
              className="group block"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brand.color} p-8 h-64 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl animate-fade-in-up ${
                brand.id === 'tv' ? 'hover:rotate-2 hover:shadow-red-500/25' : ''
              }`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-white/20 transform rotate-12 scale-150"></div>
                </div>
                
                {/* Icon */}
                <div className={`relative z-10 mb-4 transform group-hover:scale-110 transition-transform duration-300 ${
                  brand.id === 'tv' ? 'group-hover:animate-pulse' : ''
                }`}>
                  <brand.icon className="w-16 h-16 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-white font-bold text-lg mb-2 transition-colors duration-300 ${
                    brand.id === 'tv' ? 'group-hover:text-yellow-300 group-hover:animate-bounce' : 'group-hover:text-yellow-200'
                  }`}>
                    {brand.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {brand.subtitle}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  brand.id === 'tv' ? 'group-hover:bg-gradient-to-t group-hover:from-red-600/20 group-hover:to-transparent' : ''
                }`}></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingGrid;