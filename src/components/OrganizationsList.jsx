import React from 'react';
import { Building2, Users, Youtube } from 'lucide-react';

const OrganizationsList = () => {
  return (
    <section className="relative bg-gradient-to-b from-yellow-100 via-amber-50 to-yellow-100 -mt-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/10"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0" style={{ opacity: 0.1 }}>
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 1px 1px, yellow 1px, transparent 0)',
                 backgroundSize: '30px 30px' 
               }}>
          </div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Emmaus Institute of Theology */}
          <div className="group transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 bg-white/40 rounded-xl p-3 backdrop-blur-sm border border-yellow-200 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex-shrink-0">
                <Building2 className="w-6 h-6 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300" />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-yellow-800 group-hover:text-yellow-900 transition-colors duration-300 truncate">
                Emmaus Institute
              </h3>
            </div>
          </div>

          {/* John Gospel Fellowship */}
          <div className="group transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 bg-white/40 rounded-xl p-3 backdrop-blur-sm border border-yellow-200 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex-shrink-0">
                <Users className="w-6 h-6 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300" />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-yellow-800 group-hover:text-yellow-900 transition-colors duration-300 truncate">
                JG Fellowship
              </h3>
            </div>
          </div>

          {/* Emmaus TV - JGF */}
          <div className="group transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 bg-white/40 rounded-xl p-3 backdrop-blur-sm border border-yellow-200 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex-shrink-0">
                <Youtube className="w-6 h-6 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300" />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-yellow-800 group-hover:text-yellow-900 transition-colors duration-300 truncate">
                Emmaus TV
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationsList; 