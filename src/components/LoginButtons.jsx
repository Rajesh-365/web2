import React, { useState } from 'react';
import { Shield, LogIn, X, GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const LoginButtons = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showStudentLogin, setShowStudentLogin] = useState(false);
  const { isDark } = useTheme();

  const LoginModal = ({ title, icon: Icon, onClose, isAdmin }) => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl w-full max-w-md transform animate-scale-in`}>
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        
        <form className="p-6 space-y-4">
          <div>
            <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              {isAdmin ? 'Admin ID' : 'Student ID'}
            </label>
            <input
              type="text"
              placeholder={`Enter ${isAdmin ? 'admin' : 'student'} ID`}
              className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
          
          <div>
            <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            {`Login as ${isAdmin ? 'Admin' : 'Student'}`}
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowStudentLogin(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105"
        >
          <GraduationCap className="w-4 h-4" />
          <span className="hidden sm:inline">Student</span>
        </button>

        <button
          onClick={() => setShowAdminLogin(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105"
        >
          <Shield className="w-4 h-4" />
          <span className="hidden sm:inline">Admin</span>
        </button>
      </div>

      {showAdminLogin && (
        <LoginModal
          title="Admin Login"
          icon={Shield}
          onClose={() => setShowAdminLogin(false)}
          isAdmin={true}
        />
      )}

      {showStudentLogin && (
        <LoginModal
          title="Student Login"
          icon={GraduationCap}
          onClose={() => setShowStudentLogin(false)}
          isAdmin={false}
        />
      )}
    </>
  );
};

export default LoginButtons;