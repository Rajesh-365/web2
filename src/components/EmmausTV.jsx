import React from 'react';
import { Youtube, Play, BookOpen, Heart, Users, Lightbulb } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import emmausTvLogo from '../images/logo3.png';

const EmmausTV = () => {
  const { isDark } = useTheme();
  const videoSeries = [
    { title: 'Life of Christ', icon: Heart, color: 'text-red-500' },
    { title: 'General Introduction to the Bible', icon: BookOpen, color: 'text-blue-500' },
    { title: 'Bible Parables', icon: Lightbulb, color: 'text-yellow-500' },
    { title: 'Discipleship', icon: Users, color: 'text-green-500' }
  ];

  return (
    <section
      id="emmaus-tv"
      className={`py-20 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-red-50 via-white to-red-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={emmausTvLogo}
                      alt="Emmaus TV Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <h2
                      className={`text-4xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Emmaus TV - JGF
                    </h2>
                    <div
                      className={`p-3 rounded-xl ${
                        isDark
                          ? 'bg-gray-800 hover:bg-red-600'
                          : 'bg-red-50 hover:bg-red-500'
                      } transform hover:scale-110 transition-all duration-300 hover:rotate-6 hover:shadow-lg group cursor-pointer`}
                    >
                      <Youtube
                        className={`w-8 h-8 ${
                          isDark
                            ? 'text-red-500 group-hover:text-white'
                            : 'text-red-600 group-hover:text-white'
                        } transition-colors duration-300`}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-6"></div>
              </div>

              <div
                className="space-y-4 animate-fade-in-up"
                style={{ animationDelay: '200ms' }}
              >
                <p
                  className={`text-lg leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  To reach more people and enable online courses, the group
                  launched the YouTube channel{' '}
                  <strong className="text-red-500">"EMMAUS TV - JGF"</strong>.
                </p>
              </div>

              {/* Video Series */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: '400ms' }}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Current Video Series:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {videoSeries.map((series, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                        isDark
                          ? 'bg-gray-800 hover:bg-gray-700'
                          : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isDark ? 'bg-gray-700' : 'bg-gray-100'
                        }`}
                      >
                        <series.icon
                          className={`w-5 h-5 ${series.color}`}
                        />
                      </div>
                      <span
                        className={`font-medium ${
                          isDark ? 'text-gray-200' : 'text-gray-800'
                        }`}
                      >
                        {series.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: '600ms' }}
              >
                <a
                  href="https://www.youtube.com/@emmaustv-jgf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                    bg-gradient-to-r from-red-500 to-red-700 
                    hover:from-red-600 hover:to-red-800 
                    text-white px-6 py-3 
                    rounded-lg font-semibold text-base
                    transform hover:scale-105 transition-all duration-300 
                    shadow-lg hover:shadow-xl"
                >
                  <Youtube className="w-5 h-5" />
                  Visit Our Channel
                </a>
              </div>
            </div>

            {/* YouTube Preview */}
            <div
              className="relative group animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div
                className={`relative p-6 rounded-2xl shadow-xl transform group-hover:-translate-y-2 transition-all duration-500 ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div
                  className={`aspect-video rounded-xl flex items-center justify-center relative overflow-hidden ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-700 to-gray-600'
                      : 'bg-gradient-to-br from-red-100 to-red-200'
                  }`}
                >
                  {/* YouTube Play Button */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div
                    className="absolute bottom-4 right-4 w-2 h-2 bg-red-400 rounded-full animate-pulse"
                    style={{ animationDelay: '1s' }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-6 w-4 h-4 bg-red-300 rounded-full animate-pulse"
                    style={{ animationDelay: '2s' }}
                  ></div>
                </div>

                <div className="mt-4 text-center">
                  <h3
                    className={`font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    EMMAUS TV - JGF
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Educational Content • Theology • Ministry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmmausTV;
