import React from 'react';
import { PRODUCT_IMAGES } from '../data/productData';

interface TwoTierSolutionSectionProps {
  onSelectImage: (url: string, title: string) => void;
}

export const TwoTierSolutionSection: React.FC<TwoTierSolutionSectionProps> = ({ onSelectImage }) => {
  return (
    <section id="solution-section" className="px-4 py-8 bg-white border-y border-stone-200">
      <div className="text-center mb-5">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-100 px-3 py-1 rounded-full">
          Giải Pháp Đột Phá
        </span>
        <h2 className="text-xl font-black text-gray-900 mt-2 uppercase">
          THIẾT KẾ 2 TẦNG THÔNG MINH
        </h2>
        <p className="text-xs text-gray-500 mt-1 font-medium">
          Rửa sạch thực phẩm, tiện lợi &amp; tối ưu ráo nước
        </p>
      </div>

      {/* Solution Image with Labels */}
      <div 
        className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-6 bg-slate-50 cursor-pointer group"
        onClick={() => onSelectImage(PRODUCT_IMAGES.twoTierStructure, "Thiết kế 2 tầng thông minh")}
        title="Nhấn để phóng to hình ảnh"
      >
        <img 
          src={PRODUCT_IMAGES.twoTierStructure} 
          alt="Cấu tạo 2 tầng thoát nước nhanh" 
          className="w-full h-auto object-cover block group-hover:scale-102 transition-transform duration-300" 
          loading="lazy"
        />
        <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
          Xem chi tiết cấu tạo
        </div>
      </div>

      {/* Features Cards */}
      <div className="space-y-3">
        {/* Feature 1 */}
        <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 flex gap-3 items-start">
          <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
            1
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-0.5">
              Tầng trên thoát nước nhanh
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Hàng trăm lỗ thoát nước phân bổ đều giúp rau củ ráo nước tức thì ngay sau khi rửa sạch.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 flex gap-3 items-start">
          <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
            2
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-0.5">
              Khay hứng nước riêng biệt
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Hứng trọn lượng nước thừa rơi xuống, giữ mặt bàn bếp và tủ lạnh luôn sạch sẽ, khô ráo tuyệt đối.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex gap-3 items-start">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
            3
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-0.5">
              Thiết kế tháo rời linh hoạt
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Dễ dàng tách đôi để sử dụng độc lập hoặc vệ sinh rửa rổ nhanh gọn chỉ trong 1 thao tác.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
