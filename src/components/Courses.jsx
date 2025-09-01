import React, { useState } from 'react';
import { GraduationCap, Clock, BookOpen, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { t } = useLanguage();

  const courses = [
    {
      id: 'CTh',
      title: 'C.Th',
      fullName: 'Certificate in Theology',
      duration: '8 months, 2 semesters',
      color: 'from-blue-500 to-blue-700',
      description: 'Foundation course in theological studies',
      highlights: ['Biblical Studies', 'Christian Doctrine', 'Ministry Basics']
    },
    {
      id: 'DTh',
      title: 'D.Th',
      fullName: 'Diploma in Theology',
      duration: '12 months, 2 semesters',
      color: 'from-green-500 to-green-700',
      description: 'Comprehensive theological education',
      highlights: ['Advanced Biblical Studies', 'Church History', 'Pastoral Care']
    },
    {
      id: 'BTh',
      title: 'B.Th',
      fullName: 'Bachelor of Theology',
      duration: '12 months, 3 semesters',
      color: 'from-purple-500 to-purple-700',
      description: 'Complete undergraduate theological degree',
      highlights: ['Systematic Theology', 'Biblical Languages', 'Homiletics']
    },
    {
      id: 'MTh',
      title: 'M.Th',
      fullName: 'Master of Theology',
      duration: '18 months, 3 semesters',
      color: 'from-orange-500 to-red-600',
      description: 'Advanced postgraduate theological studies',
      highlights: ['Research Methods', 'Advanced Theology', 'Leadership']
    }
  ];

  const handleApply = (courseId) => {
    const element = document.getElementById('admission');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const courseSelect = document.getElementById('course');
        if (courseSelect) {
          courseSelect.value = courseId;
        }
      }, 500);
    }
  };

  return (
    <section
      id="courses"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('coursesTitle')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('coursesDescription')}
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms`, perspective: '1200px' }} // 3D perspective
              >
                <div
                  className="
                    bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl
                    transition-all duration-500 overflow-hidden h-full flex flex-col
                    border border-gray-100 dark:border-white/10
                    transform-gpu
                    group-hover:-translate-y-2 group-hover:rotate-[0.75deg]    /* tilt */
                    dark:hover:border-blue-500/50
                    dark:hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]
                  "
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${course.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-6 -translate-y-6" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <GraduationCap className="w-8 h-8 text-white/95" />
                        <Award className="w-6 h-6 text-white/70" />
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
                      <p className="text-white/90 text-sm">{course.fullName}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-4">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{course.duration}</span>
                    </div>

                    <p className="text-gray-800 dark:text-gray-200 mb-4 flex-1">
                      {course.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-purple-500" />
                        Key Areas:
                      </h4>
                      <ul className="space-y-1">
                        {course.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Apply Button */}
                    <button
                      onClick={() => handleApply(course.id)}
                      className={`w-full bg-gradient-to-r ${course.color} hover:shadow-lg text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900`}
                    >
                      {t('applyNow')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div
            className="mt-16 text-center animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <div className="rounded-2xl p-8 border border-gray-100 dark:border-white/10 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800/60">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('readyToBegin')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Join hundreds of students who have been equipped for ministry through our comprehensive theological programs.
              </p>
              {/* Rectangular rounded corners (not pill) */}
              <button
                onClick={() => handleApply('')}
                className="
                  bg-gradient-to-r from-blue-600 to-purple-600
                  hover:from-blue-700 hover:to-purple-700
                  text-white px-7 py-3.5 rounded-lg font-semibold text-lg
                  transform hover:scale-105 transition-all duration-300
                  shadow-lg hover:shadow-xl
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  focus-visible:ring-blue-500 focus-visible:ring-offset-white
                  dark:focus-visible:ring-offset-gray-900
                "
              >
                {t('startApplication')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
