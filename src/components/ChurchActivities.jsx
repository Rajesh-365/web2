import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ChurchActivities = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  // Helper function to get description based on photo index
  const getPhotoDescription = (index) => {
    const categories = [
      { range: [1, 50], type: "Sunday Worship Service", desc: "Joyful congregation gathering for Sunday worship and praise" },
      { range: [51, 100], type: "Bible Study", desc: "Deep diving into God's Word through systematic Bible study sessions" },
      { range: [101, 150], type: "Youth Ministry", desc: "Young people actively participating in church activities and spiritual growth" },
      { range: [151, 200], type: "Prayer Meetings", desc: "Faithful gathering for intercessory prayer and spiritual warfare" },
      { range: [201, 250], type: "Baptism Services", desc: "New believers declaring their faith through water baptism" },
      { range: [251, 300], type: "Community Outreach", desc: "Reaching out to communities with God's love and service" },
      { range: [301, 350], type: "Special Events", desc: "Celebrating special occasions and festivals in the church" },
      { range: [351, 400], type: "Children's Ministry", desc: "Nurturing young minds with Biblical teachings and values" },
      { range: [401, 461], type: "Leadership Meetings", desc: "Church leaders gathering for prayer and planning" }
    ];

    const category = categories.find(cat => 
      index >= cat.range[0] && index <= cat.range[1]
    ) || categories[0];

    return {
      title: `${category.type} - Photo ${index}`,
      description: category.desc,
      date: new Date(2024, 0, index % 30 + 1).toLocaleDateString()
    };
  };

  // Function to check image dimensions and filter similar photos
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Array.from({ length: 461 }, async (_, index) => {
        const id = index + 1;
        const path = `/src/images/JGF Activities/1 (${id}).jpg`;
        
        try {
          // Create a promise that resolves with the image dimensions
          const dimensionsPromise = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                width: img.width,
                height: img.height,
                aspectRatio: img.width / img.height
              });
            };
            img.onerror = () => {
              resolve(null);
            };
            img.src = path;
          });

          const dimensions = await dimensionsPromise;
          if (!dimensions) return null;

          const photoInfo = getPhotoDescription(id);
          return {
            id,
            path,
            ...photoInfo,
            ...dimensions,
            orientation: dimensions.width > dimensions.height ? 'landscape' : 'portrait'
          };
        } catch (error) {
          console.error(`Error loading image ${id}:`, error);
          return null;
        }
      });

      const loadedImages = (await Promise.all(imagePromises)).filter(img => img !== null);

      // Filter out similar photos based on aspect ratio and timing
      const filteredImages = loadedImages.reduce((acc, current) => {
        const similarPhoto = acc.find(photo => 
          Math.abs(photo.aspectRatio - current.aspectRatio) < 0.1 && // Similar aspect ratio
          Math.abs(photo.id - current.id) < 5 // Taken close together
        );

        if (!similarPhoto) {
          acc.push(current);
        }
        return acc;
      }, []);

      setImages(filteredImages);
    };

    loadImages();
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
          </div>
          <div className="text-gray-600">
            <span className="font-semibold">Church Activities Gallery</span>
          </div>
        </div>
      </nav>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Church Activities Gallery</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Documenting our journey of faith, fellowship, and service through the years
              </p>
            </div>

            {/* Category Quick Links */}
            <div className="mb-12 overflow-x-auto">
              <div className="flex gap-4 pb-4 min-w-max px-4">
                {[
                  "Sunday Worship Service",
                  "Bible Study",
                  "Youth Ministry",
                  "Prayer Meetings",
                  "Baptism Services",
                  "Community Outreach",
                  "Special Events",
                  "Children's Ministry",
                  "Leadership Meetings"
                ].map((category, index) => (
                  <button
                    key={category}
                    onClick={() => {
                      const element = document.getElementById(`category-${index + 1}`);
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-purple-600 whitespace-nowrap"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  id={`category-${Math.floor((image.id - 1) / 50) + 1}`}
                  className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up cursor-pointer ${
                    image.orientation === 'portrait' ? 'row-span-2' : ''
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                  }}
                  onClick={() => openLightbox(image)}
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${
                    image.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}>
                    <img
                      src={image.path}
                      alt={image.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {image.description}
                      </p>
                      <p className="text-white/60 text-xs mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        {image.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.path}
              alt={selectedImage.title}
              className={`max-w-full max-h-[80vh] object-contain rounded-lg ${
                selectedImage.orientation === 'portrait' ? 'max-h-[90vh] w-auto' : 'max-w-[90vw] h-auto'
              }`}
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/90 mb-2">{selectedImage.description}</p>
              <p className="text-white/60 text-sm">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChurchActivities; 