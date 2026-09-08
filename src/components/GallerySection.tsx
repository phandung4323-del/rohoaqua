import React, { useRef } from 'react';
import { PRODUCT_IMAGES } from '../data/productData';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface GallerySectionProps {
  onSelectImage: (url: string, title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -270 : 270;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery-section" className="px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Thực Tế &amp; Chi Tiết
          </span>
          <h2 className="text-lg font-black text-gray-900 mt-1 uppercase">
            HÌNH ẢNH THỰC TẾ
          </h2>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-orange-600 hover:border-orange-300 transition-colors cursor-pointer"
            aria-label="Cuộn sang trái"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-orange-600 hover:border-orange-300 transition-colors cursor-pointer"
            aria-label="Cuộn sang phải"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal scroll snap container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto pb-4 pt-1 px-1 snap-x snap-mandatory hide-scrollbar -mx-4 px-4"
      >
        {PRODUCT_IMAGES.gallery.map((item) => (
          <div
            key={item.id}
            className="snap-center shrink-0 w-[260px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm cursor-pointer group hover:border-orange-300 transition-all"
            onClick={() => onSelectImage(item.url, item.title)}
            title="Nhấn để phóng to ảnh"
          >
            <div className="relative h-56 bg-stone-100 overflow-hidden">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                {item.tag}
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-2 bg-white/90 rounded-full text-gray-800 shadow-md">
                  <Eye className="w-5 h-5 text-orange-600" />
                </span>
              </div>
            </div>
            <div className="p-3 bg-white text-center">
              <p className="text-xs font-bold text-gray-800 line-clamp-1">
                {item.title}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Chạm để xem ảnh chi tiết
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-1">
        <span>← Vuốt ngang để xem thêm góc chụp →</span>
      </div>
    </section>
  );
};
