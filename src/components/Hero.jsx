import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const computeOffset = () => {
      const header = document.querySelector('header');
      if (header) {
        const rect = header.getBoundingClientRect();
        const height = Math.round(rect.height);
        // Add a small buffer for better visual spacing
        const buffer = window.innerWidth <= 640 ? 5 : 10;
        setHeaderOffset(Math.max(0, height + buffer));
      } else {
        // Fallback for when header isn't found
        setHeaderOffset(window.innerWidth <= 640 ? 120 : 160);
      }
    };
    
    // Initial calculation
    computeOffset();
    
    // Recalculate on resize and orientation change
    window.addEventListener('resize', computeOffset);
    window.addEventListener('orientationchange', computeOffset);
    
    return () => {
      window.removeEventListener('resize', computeOffset);
      window.removeEventListener('orientationchange', computeOffset);
    };
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById('branding');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative overflow-x-hidden overflow-y-visible"
      style={{ '--headerOffset': `${headerOffset}px` }}
    >
      {/* Background (fully clipped) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-blue-800 dark:to-indigo-800" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* small circles */}
          <div className="absolute w-12 sm:w-16 h-12 sm:h-16 border-2 border-white/10 rounded-full animate-floating-slow" style={{ top: '2rem', left: '2rem' }} />
          <div className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 w-24 sm:w-32 h-24 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 left-1/4 w-20 sm:w-28 h-20 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-2/3 right-1/3 w-16 sm:w-20 h-16 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

          {/* diagonal light beams */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-[-20%] h-[180%] w-[140%] -translate-x-1/2 rotate-45 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-[-20%] h-[180%] w-[140%] -translate-x-1/2 -rotate-45 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 hero-inner">
        <div className="max-w-2xl sm:max-w-3xl mx-auto text-center w-full">
          <div
            className={`space-y-4 sm:space-y-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {/* Welcome pill */}
            <div className="inline-flex items-center mt-6 mb-6 sm:mt-0 sm:mb-0 px-3 sm:px-4 py-1 sm:py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm text-white/90 font-medium fade-in-up max-w-[90vw] sm:max-w-none whitespace-nowrap gap-2">
  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
  <span>Welcome to Emmaus Institute of Theology</span>
</div>


            {/* Title */}
            <h1
              className="fade-in-up py-2 px-0 text-center text-white font-extrabold
                         text-3xl sm:text-5xl md:text-6xl leading-tight tracking-tight
                         mx-auto max-w-5xl w-full"
            >
              <span className="inline-flex w-full justify-center">
                {/* Mobile: two lines */}
                <span className="block sm:hidden" style={{ textWrap: 'balance' }}>
                  <span className="block">The Gospel that brings</span>
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient">
                      more than hope,
                    </span>
                  </span>
                </span>
                {/* Desktop: single line */}
                <span className="hidden sm:inline whitespace-nowrap">
                  The Gospel that brings{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient">
                    more than hope,
                  </span>
                </span>
              </span>
              {/* Second line */}
              <span className="block">
                It brings a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient">
                  new Beginning.
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="block text-gray-300 max-w-2xl mx-auto leading-relaxed font-light px-4 sm:px-0 fade-in-up py-2 text-sm sm:text-base md:text-lg">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 pt-3 sm:pt-4 px-4 sm:px-0 pb-0 mb-0">
              <button
                onClick={() => document.getElementById('admission').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto btn-rect btn-sm btn-primary group"
              >
                {t('applyNow')}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 inline-block align-middle" />
              </button>
              <button
                onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto btn-rect btn-sm btn-explore shine-loop"
              >
                {t('Explore Courses')}
              </button>
            </div>
            {/* Arrow */}
            <div
              className={`flex justify-center pt-0 pb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <button
                onClick={scrollToNext}
                className="text-white/75 hover:text-white transition-colors duration-300 animate-bounce p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
                aria-label="Scroll Down"
              >
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* local CSS */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floating-slow {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10px, 10px); }
          100% { transform: translate(0, 0); }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 15s linear infinite;
          background-image: linear-gradient(90deg, #60A5FA, #818CF8, #A78BFA, #818CF8, #60A5FA);
        }
        .fade-in-up { animation: fadeInUp 1s ease-out both; }
        .animate-floating-slow { animation: floating-slow 6s ease-in-out infinite; position: absolute; }

        /* OPTIMIZED SPACING under header (desktop & mobile) */
        #hero .hero-inner {
          padding-top: calc(var(--headerOffset, 0px) + 40px);
          padding-bottom: 0;
          min-height: 85vh;
          display: flex;
          align-items: center;
        }
        @media (max-width: 640px) {
          #hero .hero-inner {
            padding-top: 15px;  /* Increased top padding on mobile */
            margin-top: 0;
            padding-bottom: 5px;  /* 5px bottom padding on mobile */
            min-height: auto;  /* Remove fixed height on mobile */
            align-items: flex-start;  /* Align content to top */
          }
          #hero .hero-inner > div {
            margin-top: 0;  /* No additional margin */
            padding-top: 0;  /* No extra padding on content */
            padding-bottom: 0;
            margin-bottom: 0;
          }
        }
        @media (max-width: 480px) {
          #hero .hero-inner {
            padding-top: 12px;  /* Increased top padding on small phones */
            padding-bottom: 5px;  /* 5px bottom padding on small phones */
            min-height: auto;  /* Remove fixed height on small phones */
            align-items: flex-start;
          }
          #hero .hero-inner > div {
            margin-top: 0;  /* No additional margin */
            padding-top: 0;  /* No extra padding on content */
            padding-bottom: 0;
            margin-bottom: 0;
          }
        }
        
        /* Mobile spacing adjustments */
        @media (max-width: 640px) {
          #hero .hero-inner > div > div:last-child {
            padding-bottom: 0;
            margin-bottom: 0;
          }
          #hero .hero-inner > div {
            padding-bottom: 0;
            margin-bottom: 0;
          }
          /* Add spacing between headings on mobile */
          #hero .inline-block {
            margin-bottom: 8px;
          }
          /* Remove top margin on desktop for welcome pill */
          @media (min-width: 640px) {
            #hero .inline-flex {
              margin-top: 0 !important;
            }
            /* Remove any spacing from parent container on desktop */
            #hero .hero-inner > div > div:first-child {
              margin-top: 0 !important;
              padding-top: 0 !important;
            }
          }
          #hero h1 {
            margin-top: 8px;
            margin-bottom: 12px;
          }
          #hero p {
            margin-top: 8px;
            margin-bottom: 12px;
          }
          #hero .flex {
            margin-top: 8px;
            margin-bottom: 8px;
          }
        }
        
        /* Remove all bottom spacing from hero section */
        #hero {
          padding-bottom: 0;
          margin-bottom: 0;
        }
        #hero .hero-inner > div {
          padding-bottom: 0;
          margin-bottom: 0;
        }

        /* Buttons */
        .btn-rect{
          position: relative; display:inline-flex; align-items:center; justify-content:center; gap:.5rem;
          padding:.85rem 1.25rem; border-radius:.6rem; font-weight:600; font-size:1rem; color:#fff;
          transition: transform .18s ease, box-shadow .22s ease, filter .22s ease;
          overflow:hidden;
        }
        .btn-rect:hover{ transform: translateY(-1px); }
        .btn-rect:active{ transform: translateY(0); }
        .btn-sm{ padding:.7rem 1rem; font-size:.95rem; border-radius:.55rem; }
        @media (min-width:640px){ .btn-sm{ padding:.75rem 1.05rem; } }

        .btn-primary{
          background-image: linear-gradient(90deg, #2563eb, #8b5cf6);
          border: 1px solid rgba(255,255,255,.12);
        }

        .btn-explore{
          background:
            linear-gradient(rgba(13,20,38,.72), rgba(13,20,38,.72)) padding-box,
            conic-gradient(from 0deg, #22d3ee, #60a5fa, #a78bfa, #60a5fa, #22d3ee) border-box;
          border: 1.5px solid transparent;
          isolation: isolate;
        }
        .btn-explore::after{
          content:"";
          position:absolute; inset: -30% auto -30% -60%;
          width: 40%; transform: skewX(-20deg) translateX(-120%);
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.95) 20%,
            rgba(192,192,192,0.85) 40%,
            rgba(169,169,169,0.7) 60%,
            rgba(255,255,255,0.95) 80%,
            transparent 100%
          );
          filter: blur(1.5px);
          opacity:0; pointer-events:none;
          mix-blend-mode: screen;
        }
        @keyframes shineSweep {
          0% { transform: skewX(-20deg) translateX(-120%); opacity: 0; }
          30% { opacity: .9; }
          100% { transform: skewX(-20deg) translateX(260%); opacity: 0; }
        }
        .shine-loop::after {
          animation: shineSweep 0.35s ease-out infinite;
          animation-duration: 3s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
