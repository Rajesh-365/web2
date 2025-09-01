import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import eitLogo from '../images/logo2.png';
import jgfLogo from '../images/logo1.jpeg';
import emmausTvLogo from '../images/logo3.png';
import LoginButtons from './LoginButtons';
import { Sun, Moon, Globe, Menu } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Apply Now', href: '/#admission' },
  { label: 'Contact', href: '#' }, // handled via scroll
];

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);

  const scrollToFooter = (e) => {
    if (e) e.preventDefault();
    const target =
      document.getElementById('footer') ||
      document.getElementById('contact') ||
      document.querySelector('footer');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setNavOpen(false);
    }
  };

  return (
    <header className="w-full md:fixed md:top-0 md:left-0 bg-white dark:bg-gray-900 z-50 shadow-md">
      {/* Institutional Banner */}
      <div className="w-full bg-white dark:bg-gray-900 pt-6 sm:pt-8 pb-4 px-4 sm:px-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
          <div className="flex items-center justify-center gap-4">
            <img src={jgfLogo} alt="John Gospel Fellowship Logo" className="h-[72px] w-[72px] object-cover rounded-lg" />
            <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white text-left">John Gospel Fellowship</span>
          </div>

          <div className="flex flex-row-reverse md:flex-row items-center justify-center gap-4">
            <img src={eitLogo} alt="Emmaus Institute of Theology Logo" className="h-[72px] w-[72px] object-cover rounded-lg" />
            <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white text-left">Emmaus Institute of Theology</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img src={emmausTvLogo} alt="Emmaus TV – JGF Logo" className="h-[72px] w-[72px] object-cover rounded-lg" />
            <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white text-left">Emmaus TV – JGF</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar — with top & bottom lines, minimal */}
      <nav className="w-full bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-700 shadow-sm max-w-full overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 relative max-w-full">
          {/* Mobile header row */}
          <div className="flex md:hidden w-full justify-between items-center">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'తె' : 'EN'}</span>
              </button>
            </div>
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex flex-1 justify-center gap-6 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                {item.label === 'Contact' ? (
                  <button
                    onClick={scrollToFooter}
                    className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 pb-1
                               after:content-[''] after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100
                               after:transition-transform after:duration-300 after:origin-left"
                    aria-label="Go to contact section"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 pb-1
                               after:content-[''] after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100
                               after:transition-transform after:duration-300 after:origin-left"
                  >
                    {item.label}
                  </a>
                )}

                {/* Rectangular utility buttons beside Contact */}
                {item.label === 'Contact' && (
                  <>
                    <button
                      onClick={toggleTheme}
                      className="ml-4 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200"
                      aria-label="Toggle dark mode"
                    >
                      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={toggleLanguage}
                      className="ml-2 flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200"
                      aria-label="Toggle language"
                    >
                      <Globe className="w-4 h-4" />
                      <span>{language === 'en' ? 'తె' : 'EN'}</span>
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop auth/buttons */}
          <div className="hidden md:flex items-center gap-4">
            <LoginButtons />
          </div>

          {/* Mobile dropdown — neutral outlined rectangular buttons */}
          {navOpen && (
            <div className="absolute left-0 top-full w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50 flex flex-col items-center gap-4 py-4 md:hidden">
              <ul className="flex flex-col gap-3 w-full items-center px-4">
                {navItems.map((item) => (
                  <li key={item.label} className="w-full">
                    {item.label === 'Contact' ? (
                      <button
                        onClick={scrollToFooter}
                        className="w-full py-3 text-base font-medium rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 dark:active:bg-gray-600 transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="block w-full py-3 text-base font-medium text-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 dark:active:bg-gray-600 transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="w-full flex flex-col gap-3 items-center mt-4 px-4">
                {/* Update LoginButtons to match style if needed inside that component */}
                <LoginButtons />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
