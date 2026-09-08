import React from 'react';
import { PRODUCT_IMAGES } from '../data/productData';
import { Lightbulb, Maximize2 } from 'lucide-react';

interface SizeGuideSectionProps {
  onSelectImage: (url: string, title: string) => void;
}

export const SizeGuideSection: React.FC<SizeGuideSectionProps> = ({ onSelectImage }) => {
  return (
    <section id="size-guide-section" className="px-4 py-8">
      <div className="text-center mb-5">
        <span className="text-xs font-bold text-orange-700 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
          Kích Thước Đa Dạng
        </span>
        <h2 className="text-lg font-black text-gray-900 mt-2 uppercase">
          3 KÍCH THƯỚC CHO MỌI NHU CẦU
        </h2>
      </div>

      {/* Size Images Grid */}
      <div className="space-y-3 mb-4">
        <div 
          className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm cursor-pointer group relative"
          onClick={() => onSelectImage(PRODUCT_IMAGES.sizeSmall, "Thông số kích thước sản phẩm nhỏ")}
          title="Nhấn để phóng to hình ảnh"
        >
          <img 
            src={PRODUCT_IMAGES.sizeSmall} 
            alt="Thông số kích thước sản phẩm nhỏ" 
            className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300" 
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
            <Maximize2 className="w-2.5 h-2.5" /> Phóng to
          </div>
        </div>

        <div 
          className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm cursor-pointer group relative"
          onClick={() => onSelectImage(PRODUCT_IMAGES.sizeMediumLarge, "Kích thước rổ nhỏ và lớn")}
          title="Nhấn để phóng to hình ảnh"
        >
          <img 
            src={PRODUCT_IMAGES.sizeMediumLarge} 
            alt="Kích thước rổ nhỏ và lớn" 
            className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300" 
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
            <Maximize2 className="w-2.5 h-2.5" /> Phóng to
          </div>
        </div>
      </div>

      {/* Detailed Size Cards */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-white p-2.5 rounded-xl border border-orange-200 shadow-sm hover:border-orange-400 transition-colors">
          <p className="text-[11px] font-extrabold text-orange-600 uppercase">SIZE NHỎ</p>
          <p className="text-xs font-black text-gray-900 mt-1">15 x 11 cm</p>
          <p className="text-[10px] text-gray-500 font-medium">Cao: 8.5 cm</p>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-orange-300 shadow-sm hover:border-orange-500 transition-colors ring-2 ring-orange-400/20">
          <p className="text-[11px] font-extrabold text-orange-600 uppercase">SIZE TRUNG</p>
          <p className="text-xs font-black text-gray-900 mt-1">24 x 16.5 cm</p>
          <p className="text-[10px] text-gray-500 font-medium">Cao: 10.5 cm</p>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-orange-200 shadow-sm hover:border-orange-400 transition-colors">
          <p className="text-[11px] font-extrabold text-orange-600 uppercase">SIZE LỚN</p>
          <p className="text-xs font-black text-gray-900 mt-1">35 x 26 cm</p>
          <p className="text-[10px] text-gray-500 font-medium">Cao: 11.5 cm</p>
        </div>
      </div>

      <div className="mt-3 text-center bg-amber-50/80 border border-amber-200 p-2.5 rounded-xl flex items-center justify-center gap-1.5">
        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
        <p className="text-[11px] font-medium text-gray-700">
          <strong>Mẹo hay:</strong> Có thể lồng vào nhau giúp tiết kiệm không gian lưu trữ tối đa khi không sử dụng.
        </p>
      </div>
    </section>
  );
};
