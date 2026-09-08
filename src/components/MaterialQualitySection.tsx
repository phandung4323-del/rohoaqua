import React from 'react';
import { PRODUCT_IMAGES } from '../data/productData';
import { ShieldCheck, Check } from 'lucide-react';

interface MaterialQualitySectionProps {
  onSelectImage: (url: string, title: string) => void;
}

export const MaterialQualitySection: React.FC<MaterialQualitySectionProps> = ({ onSelectImage }) => {
  const properties = [
    "Không độc hại",
    "Không mùi nhựa",
    "An toàn thực phẩm",
    "Chịu lực tốt",
    "Khó biến dạng",
    "Bền bỉ thời gian"
  ];

  return (
    <section id="material-section" className="px-4 py-8 bg-white border-y border-stone-200">
      <div className="text-center mb-4">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
          An Toàn Sức Khỏe
        </span>
        <h2 className="text-lg font-black text-gray-900 mt-2 uppercase">
          CHẤT LIỆU PP + PET CAO CẤP
        </h2>
      </div>

      <div 
        className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm mb-4 cursor-pointer group"
        onClick={() => onSelectImage(PRODUCT_IMAGES.materialQuality, "Chất liệu PP + PET Dày Dặn Cao Cấp")}
        title="Nhấn để phóng to hình ảnh"
      >
        <img 
          src={PRODUCT_IMAGES.materialQuality} 
          alt="Chất liệu dày dặn cao cấp" 
          className="w-full h-auto object-cover block group-hover:scale-102 transition-transform duration-300" 
          loading="lazy"
        />
        <div className="p-2.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs text-gray-600">
          <span className="flex items-center gap-1 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Nhựa nguyên sinh không pha tạp
          </span>
          <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded-full">
            Đạt chuẩn BPA Free
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 mb-4">
        {properties.map((prop, idx) => (
          <div 
            key={idx}
            className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center gap-2"
          >
            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 stroke-[3]" />
            </span>
            <span className="font-semibold text-gray-800">{prop}</span>
          </div>
        ))}
      </div>

      <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
        <p className="text-xs font-semibold text-emerald-900 leading-relaxed">
          🌿 "An toàn tiếp xúc trực tiếp với rau củ và thực phẩm tươi sống hàng ngày."
        </p>
      </div>
    </section>
  );
};
