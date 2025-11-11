import React, { useState, useEffect, useRef } from 'react';
import { Phone, User, Construction, X, Plus, Minus, RotateCcw } from 'lucide-react';

const Churches = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
      name: 'Kunkuduchettupenta Thanda (Nallamalla Forest)',
      pastor: 'Mariyadasu',
      phone: ' +91 7702684554',
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

          {/* Churches Grid - Horizontal scroll on mobile, grid on desktop */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 min-w-max sm:min-w-0">
              {churches.map((church, index) => (
                <ChurchCard
                  key={index}
                  church={church}
                  delay={index * 150}
                  onImageClick={() => setSelectedImage({ src: church.image, alt: church.name })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Zoomable Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

const ChurchCard = ({ church, delay, onImageClick }) => {
  return (
    <div
      className={`w-80 sm:w-auto flex-shrink-0 sm:flex-shrink group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-fade-in-up ${
        church.status === 'construction' ? 'border-2 border-dashed border-orange-300 dark:border-orange-400' : ''
      } dark:bg-gray-700`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {church.status === 'construction' && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Construction className="w-3 h-3" />
            Under Construction
          </div>
        </div>
      )}

      {/* Image */}
      <div
        className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer"
        onClick={onImageClick}
      >
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
              <strong>Pastor:</strong> {church.pastor}
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
    </div>
  );
};

/** Zoomable, pannable, pinchable image modal */
const ImageModal = ({ src, alt, onClose }) => {
  const MIN_SCALE = 1;
  const MAX_SCALE = 5;
  const ZOOM_STEP = 0.25;

  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // touch state
  const touchState = useRef({ pinching: false, startDist: 0, startScale: 1, center: { x: 0, y: 0 } });
  const containerRef = useRef(null);

  // lock background scroll & add esc close
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.key === '+' || e.key === '=') && !e.ctrlKey) zoomIn();
      if ((e.key === '-' || e.key === '_') && !e.ctrlKey) zoomOut();
      if (e.key.toLowerCase() === 'r') resetView();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const clamp = (val, min, max) => Math.min(max, Math.max(min, val));

  const zoomAtPoint = (delta, clientX, clientY) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left - rect.width / 2 - pos.x;
    const offsetY = clientY - rect.top - rect.height / 2 - pos.y;

    const newScale = clamp(scale * (delta > 0 ? 1 - 0.2 : 1 + 0.2), MIN_SCALE, MAX_SCALE);

    // keep point under cursor stable (simple approach)
    const scaleRatio = newScale / scale;
    const newX = pos.x - offsetX * (scaleRatio - 1);
    const newY = pos.y - offsetY * (scaleRatio - 1);

    setScale(newScale);
    setPos({ x: newX, y: newY });
  };

  const onWheel = (e) => {
    e.preventDefault();
    if (!containerRef.current) return;
    const delta = e.deltaY;
    zoomAtPoint(delta, e.clientX, e.clientY);
  };

  const onMouseDown = (e) => {
    if (scale === 1) return;
    setIsPanning(true);
    setStartPan({ x: e.clientX, y: e.clientY });
    setStartPos({ ...pos });
  };
  const onMouseMove = (e) => {
    if (!isPanning) return;
    const dx = e.clientX - startPan.x;
    const dy = e.clientY - startPan.y;
    setPos({ x: startPos.x + dx, y: startPos.y + dy });
  };
  const onMouseUp = () => setIsPanning(false);

  // Double click / double tap to toggle zoom
  const lastTapRef = useRef(0);
  const onDouble = (clientX, clientY) => {
    if (scale === 1) {
      zoomAtPoint(-1, clientX, clientY); // zoom in
    } else {
      resetView();
    }
  };
  const onClickContainer = (e) => {
    // detect double-click-ish on desktop
    if (e.detail === 2) {
      onDouble(e.clientX, e.clientY);
    }
  };

  // Touch handlers (pinch to zoom)
  const distance = (t1, t2) => Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
  const midpoint = (t1, t2) => ({ x: (t1.clientX + t2.clientX) / 2, y: (t1.clientY + t2.clientY) / 2 });

  const onTouchStart = (e) => {
    if (e.touches.length === 2) {
      const [t1, t2] = e.touches;
      touchState.current = {
        pinching: true,
        startDist: distance(t1, t2),
        startScale: scale,
        center: midpoint(t1, t2),
      };
    } else if (e.touches.length === 1 && scale > 1) {
      setIsPanning(true);
      setStartPan({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      setStartPos({ ...pos });
    }
  };

  const onTouchMove = (e) => {
    if (touchState.current.pinching && e.touches.length === 2) {
      e.preventDefault();
      const [t1, t2] = e.touches;
      const newDist = distance(t1, t2);
      const ratio = newDist / touchState.current.startDist;
      const newScale = clamp(touchState.current.startScale * ratio, MIN_SCALE, MAX_SCALE);

      // zoom around pinch center
      const rect = containerRef.current.getBoundingClientRect();
      const { x: cx, y: cy } = touchState.current.center;
      const offsetX = cx - rect.left - rect.width / 2 - pos.x;
      const offsetY = cy - rect.top - rect.height / 2 - pos.y;
      const scaleRatio = newScale / scale;

      setScale(newScale);
      setPos({ x: pos.x - offsetX * (scaleRatio - 1), y: pos.y - offsetY * (scaleRatio - 1) });
    } else if (isPanning && e.touches.length === 1) {
      const dx = e.touches[0].clientX - startPan.x;
      const dy = e.touches[0].clientY - startPan.y;
      setPos({ x: startPos.x + dx, y: startPos.y + dy });
    }
  };

  const onTouchEnd = (e) => {
    if (e.touches.length < 2) {
      touchState.current.pinching = false;
    }
    if (e.touches.length === 0) {
      setIsPanning(false);
    }

    // simple double-tap detection
    const now = Date.now();
    if (now - lastTapRef.current < 300 && e.changedTouches?.[0]) {
      onDouble(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }
    lastTapRef.current = now;
  };

  const zoomIn = () => setScale((s) => clamp(s + ZOOM_STEP, MIN_SCALE, MAX_SCALE));
  const zoomOut = () => setScale((s) => clamp(s - ZOOM_STEP, MIN_SCALE, MAX_SCALE));
  const resetView = () => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onClick={(e) => {
        // close when clicking backdrop (not when clicking the image area)
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          onClick={zoomOut}
          aria-label="Zoom out"
        >
          <Minus className="w-5 h-5" />
        </button>
        <button
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          onClick={zoomIn}
          aria-label="Zoom in"
        >
          <Plus className="w-5 h-5" />
        </button>
        <button
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          onClick={resetView}
          aria-label="Reset"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        <button
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Image stage */}
      <div
        ref={containerRef}
        className="relative max-w-[95vw] max-h-[90vh] w-full h-[90vh] md:w-[80vw] select-none overflow-hidden"
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onClick={onClickContainer}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="absolute left-1/2 top-1/2 will-change-transform"
          style={{
            transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(${scale})`,
            transition: isPanning || touchState.current.pinching ? 'none' : 'transform 120ms ease-out',
          }}
        >
          <img
            src={src}
            alt={alt || 'Full view'}
            className="max-w-[90vw] max-h-[90vh] md:max-w-[80vw] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Churches;