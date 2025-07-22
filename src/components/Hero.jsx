import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('branding');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-8 min-h-[500px] sm:min-h-[550px] flex items-center overflow-hidden pb-8 sm:pb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-blue-800 dark:to-indigo-800">
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Geometry */}
        <div className="absolute inset-0">
          {/* Animated floating circle */}
          <div
            className="absolute w-16 sm:w-20 h-16 sm:h-20 border-2 border-white/10 rounded-full animate-floating-slow"
            style={{ top: '2rem', left: '2rem' }}
          ></div>

          <div className="absolute bottom-12 sm:bottom-16 right-12 sm:right-16 w-32 sm:w-40 h-32 sm:h-40 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-24 sm:w-32 h-24 sm:h-32 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-20 sm:w-24 h-20 sm:h-24 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Beams */}
          <div className="absolute inset-0 opacity-75 sm:opacity-100">
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent transform -rotate-45"></div>
            <div className="absolute top-0 right-1/4 w-1/2 h-full bg-gradient-to-b from-purple-500/10 via-transparent to-transparent transform rotate-45"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`space-y-8 sm:space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 font-medium mb-2 sm:mb-4 fade-in-up">
              Welcome to Emmaus Institute of Theology
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight px-4 sm:px-0 fade-in-up">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 animate-gradient">
                {t('heroTitle')}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4 fade-in-up">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4 sm:px-0">
              <button
                onClick={() => document.getElementById('admission').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group pulse-glow"
              >
                {t('applyNow')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm border border-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] fade-in-up"
              >
                {t('exploreCourses')}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <button
            onClick={scrollToNext}
            className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
            aria-label="Scroll Down"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Keyframes and animation classes
const styles = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 0 rgba(255, 255, 255, 0.0); }
    50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); }
  }

  @keyframes floating-slow {
    0%   { transform: translate(0, 0); }
    50%  { transform: translate(10px, 10px); }
    100% { transform: translate(0, 0); }
  }

  .animate-gradient {
    background-size: 200% auto;
    animation: gradient 15s linear infinite;
    background-image: linear-gradient(90deg, #60A5FA, #818CF8, #A78BFA, #818CF8, #60A5FA);
  }

  .fade-in-up {
    animation: fadeInUp 1s ease-out both;
  }

  .pulse-glow {
    animation: pulseGlow 2s infinite;
  }

  .animate-floating-slow {
    animation: floating-slow 6s ease-in-out infinite;
    position: absolute;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}