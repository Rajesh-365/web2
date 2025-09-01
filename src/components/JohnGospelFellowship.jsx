import React from 'react';
import jgfLogo from '../images/logo1.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

const JohnGospelFellowship = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl transform group-hover:-translate-y-2 transition-all duration-500">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center p-4">
                  <img 
                    src={jgfLogo}
                    alt="JGF Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('jgfTitle')}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
              </div>

              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('jgfDescription1')}
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('jgfDescription2')}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t('unreachedAreas')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t('yearsOfService')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JohnGospelFellowship;