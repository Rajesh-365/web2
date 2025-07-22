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
  { label: 'Contact', href: '/#contact' },
];

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 shadow-md border-b border-gray-200 dark:border-gray-800">
      {/* Institutional Banner */}
      <div className="w-full bg-white dark:bg-gray-900 py-4 px-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
          {/* John Gospel Fellowship */}
          <div className="flex items-center justify-center gap-3">
            <img src={jgfLogo} alt="John Gospel Fellowship Logo" className="h-[60px] w-[60px] object-cover rounded-lg" />
            <span className="text-lg md:text-xl font-bold text-gray-800 dark:text-white text-left">John Gospel Fellowship</span>
          </div>

          {/* Emmaus Institute of Theology */}
          <div className="flex flex-row-reverse md:flex-row items-center justify-center gap-2 md:gap-3">
            <img src={eitLogo} alt="Emmaus Institute of Theology Logo" className="h-[60px] w-[60px] object-cover rounded-lg" />
            <span className="text-lg md:text-xl font-bold text-gray-800 dark:text-white text-left">Emmaus Institute of Theology</span>
          </div>

          {/* Emmaus TV – JGF */}
          <div className="flex items-center justify-center gap-3">
            <img src={emmausTvLogo} alt="Emmaus TV – JGF Logo" className="h-[60px] w-[60px] object-cover rounded-lg" />
            <span className="text-lg md:text-xl font-bold text-gray-800 dark:text-white text-left">Emmaus TV – JGF</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full border-t border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 relative">
          {/* Hamburger for mobile */}
          <div className="flex md:hidden w-full justify-between items-center">
            <button onClick={() => setNavOpen(!navOpen)} className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800" aria-label="Toggle dark mode">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={toggleLanguage} className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800" aria-label="Toggle language">
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'తె' : 'EN'}</span>
              </button>
            </div>
          </div>

          {/* Nav menu (desktop) */}
          <ul className="hidden md:flex flex-1 justify-center gap-6 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <a
                  href={item.href}
                  className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 pb-1 after:content-[''] after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {item.label}
                </a>
                {item.label === 'Contact' && (
                  <>
                    <button onClick={toggleTheme} className="ml-4 p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200" aria-label="Toggle dark mode">
                      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button onClick={toggleLanguage} className="ml-2 flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200" aria-label="Toggle language">
                      <Globe className="w-4 h-4" />
                      <span>{language === 'en' ? 'తె' : 'EN'}</span>
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Buttons (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <LoginButtons />
          </div>

          {/* Mobile nav dropdown */}
          {navOpen && (
            <div className="absolute left-0 top-full w-full bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col items-center gap-4 py-4 md:hidden">
              <ul className="flex flex-col gap-4 w-full items-center">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 px-2 py-1 rounded block text-lg">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="w-full flex flex-col gap-2 items-center mt-2">
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