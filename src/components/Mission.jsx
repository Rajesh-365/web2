import React from 'react';
import { BookOpen, Target, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section
      id="mission"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 dark:from-blue-950 dark:via-purple-950 dark:to-indigo-950 transition-all duration-500"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-12 w-36 h-36 bg-black/5 dark:bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-12 w-56 h-56 bg-purple-300/20 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-blue-300/10 dark:bg-blue-400/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
              {t('missionTitle')}
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
          </div>

          {/* Mission Description */}
          <div
            className="bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-3xl px-6 py-10 md:px-12 md:py-14 shadow-xl shadow-indigo-200 dark:shadow-indigo-900 mb-16 animate-fade-in-up transition-all duration-500"
            style={{ animationDelay: '200ms' }}
          >
            <p className="text-lg md:text-2xl text-gray-900 dark:text-white/90 leading-relaxed tracking-wide">
              {t('missionDescription')}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: t('ourMission'),
                description: t('missionDesc'),
                color: 'from-blue-400 to-blue-600'
              },
              {
                icon: Heart,
                title: t('ourVision'),
                description: t('visionDesc'),
                color: 'from-purple-400 to-purple-600'
              },
              {
                icon: BookOpen,
                title: t('ourMethod'),
                description: t('methodDesc'),
                color: 'from-orange-400 to-red-500'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                <div className="bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full shadow-lg shadow-black/10 dark:shadow-black/40 transform transition-all duration-300 group-hover:scale-105 hover:bg-white/80 dark:hover:bg-white/20">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-blue-100 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
