import React from 'react';
import { Phone, User, Construction } from 'lucide-react';

const Churches = () => {
  const churches = [
    {
      name: 'JGF Church, Boppudi – Chilakaluripet, Palnadu[dt]',
      pastor: 'Rev. Abraham',
      phone: '+91 8686284462',
      status: 'active',
      image: '/images/Churches/Boppudi.png'
    },
    {
      name: 'JGF Church, Sirigiripadu - Veldurthi[M], Palnadu[dt]',
      pastor: 'Lella Joshua (Venkateswarlu)',
      phone: '+91 99512 43829',
      status: 'active',
      image: '/images/Churches/sirigiripadu1.jpeg'
    },
    {
      name: 'Kunkudichettupenta Thanda (Nallamalla Forest)',
      pastor: 'To be appointed',
      phone: 'Coming soon',
      status: 'construction',
      image: '/images/Churches/Under Construction  (1).jpeg'
    }
  ];

  return (
    <section id="churches" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Churches</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Through the Gospel, God allowed us to plant two churches, and another is in the making.
            </p>
          </div>

          {/* Churches Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {churches.map((church, index) => (
              <ChurchCard key={index} church={church} delay={index * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ChurchCard = ({ church, delay }) => {
  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-fade-in-up ${
        church.status === 'construction' ? 'border-2 border-dashed border-orange-300 dark:border-orange-400' : ''
      } dark:bg-gray-700`}
      style={{
        animationDelay: `${delay}ms`,
        minWidth: '300px',
        maxWidth: '100%',
        height: 'auto',
      }}
    >
      {/* Status Badge */}
      {church.status === 'construction' && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Construction className="w-3 h-3" />
            Under Construction
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={church.image}
          alt={church.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 text-gray-900 dark:text-white">
        <h3 className="font-bold text-lg mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {church.name}
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <User className="w-4 h-4 text-blue-500" />
            </div>
            <span className="text-sm">
              <strong>{church.Rev ? 'Rev:' : 'Pastor:'}</strong> {church.Rev || church.pastor}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <Phone className="w-4 h-4 text-green-500" />
            </div>
            <span className="text-sm">
              <strong>Phone:</strong> {church.phone}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default Churches;
