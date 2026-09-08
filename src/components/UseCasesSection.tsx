import React from 'react';
import { PRODUCT_IMAGES } from '../data/productData';

interface UseCasesSectionProps {
  onSelectImage: (url: string, title: string) => void;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ onSelectImage }) => {
  const useCases = [
    { icon: "🥬", label: "Đựng rau xanh", bg: "bg-emerald-50/70 border-emerald-100" },
    { icon: "🍎", label: "Đựng trái cây", bg: "bg-rose-50/70 border-rose-100" },
    { icon: "🥕", label: "Để ráo thực phẩm", bg: "bg-orange-50/70 border-orange-100" },
    { icon: "🍇", label: "Trữ mát tủ lạnh", bg: "bg-blue-50/70 border-blue-100" },
    { icon: "🧅", label: "Phân loại thực phẩm", bg: "bg-amber-50/70 border-amber-100" },
    { icon: "🍅", label: "Sắp xếp nhà bếp", bg: "bg-red-50/70 border-red-100" },
    { icon: "🥚", label: "Đựng đồ sơ chế", bg: "bg-yellow-50/70 border-yellow-100" },
    { icon: "🧄", label: "Đồ dùng gia đình", bg: "bg-teal-50/70 border-teal-100" }
  ];

  return (
    <section id="use-cases-section" className="px-4 py-8 bg-white border-y border-stone-200">
      <div className="text-center mb-5">
        <span className="text-xs font-bold text-purple-700 uppercase tracking-wider bg-purple-100 px-3 py-1 rounded-full">
          Vô Vàn Công Dụng
        </span>
        <h2 className="text-lg font-black text-gray-900 mt-2 uppercase">
          MỘT SẢN PHẨM - NHIỀU CÔNG DỤNG
        </h2>
      </div>

      {/* Feature Image Display */}
      <div 
        className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-5 cursor-pointer group"
        onClick={() => onSelectImage(PRODUCT_IMAGES.useCases, "Một sản phẩm - Vô vàn công dụng tiện ích")}
        title="Nhấn để phóng to hình ảnh"
      >
        <img 
          src={PRODUCT_IMAGES.useCases} 
          alt="Rổ đựng rau củ quả đa năng đẹp mắt" 
          className="w-full h-auto object-cover block group-hover:scale-102 transition-transform duration-300" 
          loading="lazy"
        />
      </div>

      {/* 8 Cute Icon Badges Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {useCases.map((item, idx) => (
          <div 
            key={idx}
            className={`flex items-center gap-2 p-2.5 rounded-xl border ${item.bg} hover:shadow-xs transition-shadow`}
          >
            <span className="text-lg leading-none">{item.icon}</span>
            <span className="text-xs font-semibold text-gray-800">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
