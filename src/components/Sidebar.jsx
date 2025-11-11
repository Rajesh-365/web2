import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Church,
  BookOpen,
  Users,
  GraduationCap,
  Tv,
  ClipboardCheck,
  Trophy,
  Image,
  Heart,
  HelpCircle,
  UserPlus,
  Search,
  ChevronRight,
  Menu,
  Share2 // Share icon
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'jgf', title: 'JGF', icon: Church, color: 'text-blue-600', bgColor: 'bg-blue-50', href: '#about' },
    { id: 'churches', title: 'JGF Churches', icon: Church, color: 'text-purple-600', bgColor: 'bg-purple-50', href: '#churches' },
    { id: 'eit', title: 'EIT', icon: BookOpen, color: 'text-green-600', bgColor: 'bg-green-50', href: '#eit' },
    { id: 'council', title: 'Executive Council', icon: Users, color: 'text-indigo-600', bgColor: 'bg-indigo-50', href: '#core-committee' },
    { id: 'courses', title: 'Courses Offered', icon: GraduationCap, color: 'text-orange-600', bgColor: 'bg-orange-50', href: '#courses' },
    { id: 'tv', title: 'EMMAUS TV-JGF', icon: Tv, color: 'text-red-600', bgColor: 'bg-red-50', href: '#emmaus-tv' },
    { id: 'examination', title: 'Examination', icon: ClipboardCheck, color: 'text-purple-600', bgColor: 'bg-purple-50', href: '#examination' },
    { id: 'results', title: 'Results', icon: Trophy, color: 'text-green-600', bgColor: 'bg-green-50', href: '/results', isPage: true },
    { id: 'gallery', title: 'Gallery', icon: Image, color: 'text-pink-600', bgColor: 'bg-pink-50', href: '/gallery', isPage: true },
    { id: 'gospel-service', title: 'Application for Gospel Service', icon: Heart, color: 'text-red-600', bgColor: 'bg-red-50', href: '#gospel-service' },
    { id: 'gospel-need', title: 'Request for Gospel Programme', icon: HelpCircle, color: 'text-yellow-600', bgColor: 'bg-yellow-50', href: '#gospel-need' },
    { id: 'admission', title: 'Admission Registration', icon: UserPlus, color: 'text-indigo-600', bgColor: 'bg-indigo-50', href: '#admission' },
    { id: 'research', title: 'Research Papers', icon: Search, color: 'text-gray-600', bgColor: 'bg-gray-50', href: '#research' }
  ];

  const handleItemClick = (item) => {
    setActiveSection(item.id);
    
    // If it's a page navigation (like results page)
    if (item.isPage) {
      navigate(item.href);
      onClose();
      return;
    }
    
    // If we're on a standalone page, navigate to home first, then scroll to section
    if (location.pathname !== '/') {
      navigate(`/${item.href}`);
      onClose();
      return;
    }
    
    // Otherwise, scroll to section on the main page
    const sectionId = item.href.replace('#', '');
    const el = document.getElementById(sectionId);
    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const extraSpacing = 16; // small gap below header

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - extraSpacing;
      window.scrollTo({ top, behavior: 'smooth' });
      setTimeout(() => onClose(), 400);
    } else {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999] md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={[
          'fixed left-0 top-[11.5rem] h-[calc(100vh-11.5rem)] bg-white dark:bg-gray-800 z-[10000]',
          'transform transition-all duration-300 overflow-hidden shadow-2xl md:shadow-lg group',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'w-72',
          isExpanded ? 'lg:w-80' : 'lg:w-20',
          'md:translate-x-0'
        ].join(' ')}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="h-full overflow-y-auto pb-20 scrollbar-hide">
          <div className="p-2 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={[
                  'w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:shadow-md group/item',
                  'hover:bg-gray-50 dark:hover:bg-gray-700',
                  activeSection === item.id ? `${item.bgColor} shadow-md scale-[1.02]` : ''
                ].join(' ')}
              >
                <div className={`min-w-[40px] h-10 rounded-lg ${item.bgColor} flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div
                  className={[
                    'flex-1 text-left transition-all duration-300 min-w-0',
                    isExpanded ? 'lg:opacity-100 lg:translate-x-0' : 'lg:opacity-0 lg:-translate-x-10'
                  ].join(' ')}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-tight whitespace-nowrap truncate">
                    {item.title}
                  </h3>
                </div>
                <div className="ml-auto shrink-0">
                  <ChevronRight
                    className={[
                      'w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform duration-300',
                      activeSection === item.id ? 'rotate-90' : 'group-hover/item:translate-x-1'
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
