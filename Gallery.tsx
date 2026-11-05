import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Language, GalleryImage } from '../types';
import { GALLERY_ITEMS } from '../data/content';

interface GalleryProps {
  lang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', labelHi: 'सभी फोटो (All)', labelEn: 'All Photos' },
    { id: 'ceremony', labelHi: 'विवाह व मंडप', labelEn: 'Mandap & Rituals' },
    { id: 'stage', labelHi: 'स्टेज व लाइटिंग', labelEn: 'Stage & Lighting' },
    { id: 'dining', labelHi: 'डाइनिंग हॉल', labelEn: 'Dining & Catering' },
    { id: 'entrance', labelHi: 'प्रवेश द्वार', labelEn: 'Entrance & Decor' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  const activeImage = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#881329] bg-[#881329]/10 px-3.5 py-1 rounded-full border border-[#881329]/20">
            <Sparkles className="w-3.5 h-3.5 inline mr-1 text-[#D4AF37]" />
            {lang === 'hi' ? 'फोटो गैलरी' : 'Visual Showcase'}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#3B0710] tracking-tight mt-3">
            {lang === 'hi' ? 'हमारे भव्य आयोजन की झलकियां' : 'Glimpses of Grand Celebrations'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#5C4D44] max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'मंडप, स्टेज, लाइटिंग, डाइनिंग और बारात स्वागत की वास्तविक झलकियां। किसी भी फोटो पर क्लिक कर बड़ा देखें।'
              : 'Authentic views of our grand mandap, stage decor, chandeliers, dining setup, and festive entrance.'}
          </p>
        </div>

        {/* Category Tabs (Segmented Button Controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-[#3B0710] text-[#F5E5AB] border-[#D4AF37] shadow-md scale-105'
                  : 'bg-white text-[#4A3B32] border-[#E5DAC6] hover:border-[#D4AF37] hover:bg-[#FAF6EE]'
              }`}
            >
              {lang === 'hi' ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: GalleryImage, idx: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#3B0710] border border-[#D4AF37]/30 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={lang === 'hi' ? item.titleHi : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gradient Overlay & Captions */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#200408] via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#F5E5AB] transition-colors">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 mt-0.5 font-light">
                    {lang === 'hi' ? item.captionHi : item.captionEn}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-[#F5E5AB] flex items-center justify-center shrink-0 border border-white/30 group-hover:bg-[#D4AF37] group-hover:text-[#3B0710] transition-colors shadow">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setActiveCategory('all');
              openLightbox(0);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#D4AF37] text-[#3B0710] hover:bg-[#3B0710] hover:text-[#F5E5AB] text-sm font-semibold shadow-md transition-all duration-300"
          >
            <Eye className="w-4 h-4 text-[#D4AF37]" />
            <span>{lang === 'hi' ? 'पूरी गैलरी स्लाइडशो देखें (View Full Gallery)' : 'View Full Gallery (Slideshow)'}</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && selectedImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#F5E5AB] border border-white/20 transition-all focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#F5E5AB] border border-white/20 transition-all focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl max-h-[70vh]">
              <img
                src={activeImage.image}
                alt={lang === 'hi' ? activeImage.titleHi : activeImage.titleEn}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Captions below */}
            <div className="mt-4 text-center max-w-xl text-white">
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5E5AB]">
                {lang === 'hi' ? activeImage.titleHi : activeImage.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1 font-light">
                {lang === 'hi' ? activeImage.captionHi : activeImage.captionEn}
              </p>
              <div className="mt-2 text-[11px] text-[#D4AF37] font-mono">
                {selectedImageIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
