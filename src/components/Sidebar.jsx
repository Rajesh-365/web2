import React, { useState } from 'react';
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
  Menu
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { id: 'jgf', title: 'JGF', icon: Church, color: 'text-blue-600', bgColor: 'bg-blue-50', href: '#about' },
    { id: 'churches', title: 'JGF Churches', icon: Church, color: 'text-purple-600', bgColor: 'bg-purple-50', href: '#churches' },
    { id: 'eit', title: 'EIT', icon: BookOpen, color: 'text-green-600', bgColor: 'bg-green-50', href: '#mission' },
    { id: 'council', title: 'Executive Council', icon: Users, color: 'text-indigo-600', bgColor: 'bg-indigo-50', href: '#core-committee' },
    { id: 'courses', title: 'Courses Offered', icon: GraduationCap, color: 'text-orange-600', bgColor: 'bg-orange-50', href: '#courses' },
    { id: 'tv', title: 'EMMAUS TV-JGF', icon: Tv, color: 'text-red-600', bgColor: 'bg-red-50', href: '#emmaus-tv' },
    { id: 'examination', title: 'Examination', icon: ClipboardCheck, color: 'text-purple-600', bgColor: 'bg-purple-50', href: '#examination' },
    { id: 'results', title: 'Results', icon: Trophy, color: 'text-green-600', bgColor: 'bg-green-50', href: '#results' },
    { id: 'gallery', title: 'Gallery', icon: Image, color: 'text-pink-600', bgColor: 'bg-pink-50', href: '#gallery' },
    { id: 'gospel-service', title: 'Application for Gospel Service', icon: Heart, color: 'text-red-600', bgColor: 'bg-red-50', href: '#gospel-service' },
    { id: 'gospel-need', title: 'Request for Gospel Programme', icon: HelpCircle, color: 'text-yellow-600', bgColor: 'bg-yellow-50', href: '#gospel-need' },
    { id: 'admission', title: 'Admission Registration', icon: UserPlus, color: 'text-indigo-600', bgColor: 'bg-indigo-50', href: '#admission' },
    { id: 'research', title: 'Research Papers', icon: Search, color: 'text-gray-600', bgColor: 'bg-gray-50', href: '#research' }
  ];

  const handleItemClick = (item) => {
    setActiveSection(item.id);

    // Debug logs
    const sectionId = item.href.replace('#', '');
    const element = document.getElementById(sectionId);
    console.log('🟡 Button Clicked:', item.title);
    console.log('🔍 Looking for element ID:', sectionId);
    console.log('📦 Found element:', element);

    if (element) {
      const offset = 80; // Adjust for sticky header
      const top = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });

      setTimeout(() => {
        onClose();
      }, 400);
    } else {
      console.warn('⚠️ No element found with ID:', sectionId);
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed left-0 top-[120px] h-[calc(100vh-120px)] bg-white shadow-2xl z-50 transform transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isExpanded ? 'w-80' : 'w-20'} lg:translate-x-0 lg:shadow-lg dark:bg-gray-800 overflow-hidden group`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="h-full overflow-y-auto pb-20 scrollbar-hide">
          <div className="p-2 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:shadow-md group/item ${
                  activeSection === item.id
                    ? `${item.bgColor} shadow-md scale-[1.02]`
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className={`min-w-[40px] h-10 rounded-lg ${item.bgColor} flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>

                <div className={`flex-1 text-left transition-all duration-300 ${
                  isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-tight whitespace-nowrap">
                    {item.title}
                  </h3>
                </div>

                <ChevronRight className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-all duration-300 
                  ${activeSection === item.id ? 'rotate-90' : 'group-hover/item:translate-x-1'}
                  ${isExpanded ? 'opacity-100' : 'opacity-0'}
                `} />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden fixed bottom-4 left-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
