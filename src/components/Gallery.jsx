// src/components/Gallery.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // ===== data =====
  const folder = 'Gospel Crusades';
  const names = useMemo(
    () => Array.from({ length: 41 }, (_, i) => `Gospel crusades  (${i + 1}).jpg`),
    []
  );
  const base = `/images/${encodeURIComponent(folder)}`;
  const images = useMemo(() => names.map(n => `${base}/${encodeURIComponent(n)}`), [base, names]);

  // ===== preload + orientation =====
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    let cancelled = false;
    setReady(false);
    setProgress(0);
    setErrors([]);

    const loaders = images.map((src, idx) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ ok: true, idx });
        img.onerror = () => resolve({ ok: false, idx, src });
        img.src = src;
      }).then((res) => {
        if (!cancelled) setProgress((p) => p + 1);
        return res;
      })
    );

    Promise.all(loaders).then((results) => {
      if (cancelled) return;
      setErrors(results.filter(r => !r.ok).map(r => r.src));
      setReady(true);
    });

    return () => { cancelled = true; };
  }, [images]);

  // ===== lightbox =====
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isOpen = lightboxIndex !== null;
  const startX = useRef(null);

  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i + images.length - 1) % images.length));
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 40) (delta > 0 ? prev : next)();
    startX.current = null;
  };

  const total = images.length;

  return (
    <section id="gallery" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Gallery</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto" />
        </div>

        {!ready ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Loading Images... {Math.min(progress, total)} / {total}
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              {folder}
            </h3>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8">
              {images.map((src, index) => (
                <figure
                  key={src}
                  className="mb-8 break-inside-avoid relative group cursor-pointer transform transition-transform duration-300 hover:-translate-y-1"
                  onClick={() => setLightboxIndex(index)}
                >
                  <img
                    src={src}
                    alt={names[index]}
                    loading="lazy"
                    className="w-full h-auto rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:brightness-105"
                  />
                  <figcaption className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-semibold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {names[index]}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>

            {errors.length > 0 && (
              <div className="mt-8 text-center text-red-500 dark:text-red-400">
                <p><strong>Oops!</strong> {errors.length} image{errors.length > 1 ? 's' : ''} failed to load.</p>
              </div>
            )}

            <div className="text-center mt-16">
              <Link
                to="/gallery"
                className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Full Gallery
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Controls */}
          <button
            aria-label="Close"
            onClick={close}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl leading-none transition-transform hover:scale-110"
          >
            &times;
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/25 text-white text-3xl transition-transform hover:scale-110"
          >
            &lsaquo;
          </button>
          <button
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/25 text-white text-3xl transition-transform hover:scale-110"
          >
            &rsaquo;
          </button>

          {/* Image + caption */}
          <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center gap-2">
            <img
              src={images[lightboxIndex]}
              alt={names[lightboxIndex]}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-white/90 text-base mt-2 text-center">
              <span className="font-bold">
                {lightboxIndex + 1}
              </span> / {total} &mdash; {names[lightboxIndex]}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
