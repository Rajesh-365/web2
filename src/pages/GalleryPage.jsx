import React, { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { organizeGalleryItems } from '../utils/imageUtils';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleItems, setVisibleItems] = useState(20);
  const [galleryItems, setGalleryItems] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const itemsPerLoad = 20;

  useEffect(() => {
    const loadGalleryItems = async () => {
      const items = await organizeGalleryItems();
      setGalleryItems(items);
    };
    loadGalleryItems();
  }, []);

  const visibleGalleryItems = galleryItems.slice(0, visibleItems);

  const loadMoreItems = () => {
    setVisibleItems(prev => Math.min(prev + itemsPerLoad, galleryItems.length));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onSidebarToggle={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="pt-[64px] md:pl-64">

        {/* Page Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 py-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A visual journey through our ministry activities and events
            </p>
          </div>
        </div>

        {/* Gallery Categories */}
        <div className="bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700/30">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center">
                  <span className="text-2xl">⛪</span>
                </div>
                <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-1">Gospel Crusades</h3>
                <p className="text-sm text-blue-600 dark:text-blue-300">Evangelistic events</p>
              </div>
              
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700/30">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 dark:bg-green-800/30 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-1">Graduation Photos</h3>
                <p className="text-sm text-green-600 dark:text-green-300">Ceremony moments</p>
              </div>
              
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-700/30">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 dark:bg-purple-800/30 flex items-center justify-center">
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-1">Prayer Meetings</h3>
                <p className="text-sm text-purple-600 dark:text-purple-300">Spiritual gatherings</p>
              </div>
              
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-700/30">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 dark:bg-orange-800/30 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-bold text-orange-800 dark:text-orange-200 mb-1">Fellowship Events</h3>
                <p className="text-sm text-orange-600 dark:text-orange-300">Community activities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">            </h2> 
          </div>

          {/* Gallery Masonry Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8">
            {visibleGalleryItems.map((item) => (
              <figure
                key={item.id}
                className="mb-8 break-inside-avoid relative group cursor-pointer transform transition-transform duration-300 hover:-translate-y-1"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:brightness-105"
                />
                <figcaption className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white text-sm font-semibold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="font-bold">{item.title}</p>
                    <p className="text-xs mt-1 opacity-80">{item.description}</p>
                    <p className="text-xs mt-1 opacity-60">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < galleryItems.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreItems}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 mx-auto"
              >
                <span>Load More Photos</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-7xl w-full mx-auto">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white/80 mb-2">{selectedImage.description}</p>
              <p className="text-white/60">
                {new Date(selectedImage.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
