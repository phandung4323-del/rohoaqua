import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxModalProps {
  image: { url: string; title: string } | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-bold line-clamp-1">{image.title}</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-auto bg-stone-100 flex items-center justify-center p-2">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-auto object-contain max-h-[70vh] rounded-xl"
          />
        </div>

        <div className="p-3 bg-white text-center border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] text-gray-500">Hình ảnh thực tế sản phẩm</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Đóng xem
          </button>
        </div>
      </div>
    </div>
  );
};
