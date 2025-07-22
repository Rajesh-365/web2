import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [orientations, setOrientations] = useState({});

  const gospelSection = {
    title: 'Gospel Crusades',
    images: [
      'Gospel crusades  (1).jpg',
      'Gospel crusades  (2).jpg',
      'Gospel crusades  (3).jpg',
      'Gospel crusades  (4).jpg',
      'Gospel crusades  (5).jpg',
      'Gospel crusades  (6).jpg',
      'Gospel crusades  (7).jpg',
      'Gospel crusades  (8).jpg',
      'Gospel crusades  (9).jpg',
      'Gospel crusades  (10).jpg',
      'Gospel crusades  (11).jpg',
      'Gospel crusades  (12).jpg',
      'Gospel crusades  (13).jpg',
      'Gospel crusades  (14).jpg',
      'Gospel crusades  (15).jpg',
      'Gospel crusades  (16).jpg',
      'Gospel crusades  (17).jpg',
      'Gospel crusades  (18).jpg',
      'Gospel crusades  (19).jpg',
      'Gospel crusades  (20).jpg',
      'Gospel crusades  (21).jpg',
      'Gospel crusades  (22).jpg',
      'Gospel crusades  (23).jpg',
      'Gospel crusades  (24).jpg',
      'Gospel crusades  (25).jpg',
      'Gospel crusades  (26).jpg',
      'Gospel crusades  (27).jpg',
      'Gospel crusades  (28).jpg',
      'Gospel crusades  (29).jpg',
      'Gospel crusades  (30).jpg',
      'Gospel crusades  (31).jpg',
      'Gospel crusades  (32).jpg',
      'Gospel crusades  (33).jpg',
      'Gospel crusades  (34).jpg',
      'Gospel crusades  (35).jpg',
      'Gospel crusades  (36).jpg',
      'Gospel crusades  (37).jpg',
      'Gospel crusades  (38).jpg',
      'Gospel crusades  (39).jpg',
      'Gospel crusades  (40).jpg',
      'Gospel crusades  (41).jpg',
    ].map(name => `/images/Gospel%20Crusades/${encodeURIComponent(name)}`)
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;
    const orientation = naturalWidth >= naturalHeight ? 'landscape' : 'portrait';
    setOrientations(prev => ({ ...prev, [index]: orientation }));
  };

  return (
    <section id="gallery" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
              {gospelSection.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gospelSection.images.map((image, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                    orientations[index] === 'portrait' ? 'row-span-2' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    onLoad={(e) => handleImageLoad(e, index)}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/gallery"
                className="inline-flex items-center px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02]"
              >
                View Full Gallery
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Gallery;
