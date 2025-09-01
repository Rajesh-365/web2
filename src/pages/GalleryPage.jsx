import React, { useState, useEffect } from 'react';
import { Image, Calendar, ChevronDown, X, Layout } from 'lucide-react';
import { organizeGalleryItems } from '../utils/imageUtils';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('landscape');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleItems, setVisibleItems] = useState(12);
  const [galleryItems, setGalleryItems] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const itemsPerLoad = 12;

  const categories = [
    { id: 'landscape', label: 'Landscape Photos', icon: Layout },
    { id: 'portrait', label: 'Portrait Photos', icon: Image },
  ];

  useEffect(() => {
    const loadGalleryItems = async () => {
      const items = await organizeGalleryItems();
      setGalleryItems(items);
    };
    loadGalleryItems();
  }, []);

  const filteredItems = galleryItems.filter(item => item.orientation === selectedCategory);
  const visibleGalleryItems = filteredItems.slice(0, visibleItems);

  const loadMoreItems = () => {
    setVisibleItems(prev => Math.min(prev + itemsPerLoad, filteredItems.length));
  };

  useEffect(() => {
    setVisibleItems(12);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onSidebarToggle={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="pt-[64px] md:pl-64">
        {/* Category Buttons */}
        <div className="bg-white dark:bg-gray-900 shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-102'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 py-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A visual journey through our ministry activities and events
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">            </h2> 
          </div>

          {/* Gallery Grid */}
          <div
            className={`grid gap-6 ${
              selectedCategory === 'landscape'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            {visibleGalleryItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div
                  className="relative cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div
                    className={`overflow-hidden ${
                      item.orientation === 'landscape'
                        ? 'aspect-w-16 aspect-h-9'
                        : 'aspect-w-3 aspect-h-4'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 px-4 py-2 rounded-full text-white text-sm backdrop-blur-sm">
                        Click to view
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < filteredItems.length && (
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
