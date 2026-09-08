import React from 'react';
import { PRODUCT_IMAGES } from '../data/productData';
import { Sparkles, CheckCircle2, Truck } from 'lucide-react';

interface HeroSectionProps {
  onSelectImage: (url: string, title: string) => void;
  onScrollToOrder: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectImage, onScrollToOrder }) => {
  return (
    <header 
      id="hero-section"
      className="px-4 pt-4 pb-6 bg-white rounded-b-3xl shadow-sm border-b border-orange-100"
    >
      {/* Top Tag & Rating */}
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          TIỆN ÍCH NHÀ BẾP
        </span>
        <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="text-gray-500 text-[11px] font-medium">(1.2k+ đã bán)</span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight uppercase text-center mb-2">
        Rổ Úp Rau Củ Quả <br />
        <span className="text-orange-600">2 Tầng Đa Năng</span>
      </h1>

      {/* Subheadline */}
      <p className="text-xs sm:text-sm text-center text-gray-600 font-medium px-2 mb-4 leading-relaxed">
        Rửa – Để Ráo – Bảo Quản Gọn Gàng Chỉ Trong Một Sản Phẩm
      </p>

      {/* Main Hero Product Image */}
      <div 
        className="relative rounded-2xl overflow-hidden shadow-md bg-stone-100 mb-4 border border-stone-200 cursor-pointer group"
        onClick={() => onSelectImage(PRODUCT_IMAGES.hero, "Rổ Úp Rau Củ Quả 2 Tầng Đa Năng")}
        title="Nhấn để phóng to hình ảnh"
      >
        <img 
          src={PRODUCT_IMAGES.hero} 
          alt="Rổ thoát nước 2 tầng nhà bếp" 
          className="w-full h-auto object-cover block group-hover:scale-102 transition-transform duration-300" 
          loading="eager"
        />
        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>Ráo nước 100% tự nhiên</span>
        </div>
        <div className="absolute top-3 right-3 bg-white/85 backdrop-blur-sm text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-gray-200">
          Chạm để phóng to
        </div>
      </div>

      {/* Key Benefits Bullet List */}
      <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-3.5 mb-5">
        <ul className="space-y-2 text-xs text-gray-700 font-medium">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span><strong>Thiết kế 2 tầng thông minh:</strong> Tách rời linh hoạt</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span><strong>Thoát nước nhanh chóng:</strong> Không đọng vũng bẩn</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span><strong>Giữ rau củ tươi lâu hơn:</strong> Thông thoáng đáy</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span><strong>Tiết kiệm diện tích:</strong> Xếp lồng gọn gàng</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span><strong>Chất liệu cao cấp:</strong> Nhựa PP+PET an toàn thực phẩm</span>
          </li>
        </ul>
      </div>

      {/* Pricing Block */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-4 text-center mb-4">
        <div className="text-xs font-bold text-orange-700 uppercase tracking-wider mb-1">
          🎁 Trọn bộ 4 món (1 Nhỏ + 2 Vừa + 1 Lớn)
        </div>
        <div className="flex items-baseline justify-center gap-2 mb-1.5">
          <span className="text-gray-400 text-sm line-through">499.000đ</span>
          <span className="text-2xl sm:text-3xl font-black text-red-600">299.000đ</span>
          <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
            -40%
          </span>
        </div>
        <p className="text-xs font-semibold text-gray-700 flex items-center justify-center gap-1.5">
          <Truck className="w-3.5 h-3.5 text-orange-600" />
          <span>Phí ship: <strong className="text-orange-600">20.000đ</strong></span>
          <span className="text-gray-400">•</span>
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            Freeship khi mua từ 2 combo
          </span>
        </p>
      </div>

      {/* Hero Call-to-action button */}
      <button
        onClick={onScrollToOrder}
        id="hero-buy-button"
        className="block w-full text-center bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/30 text-base uppercase tracking-wide active:scale-95 transition-all cursor-pointer"
      >
        MUA COMBO 4 MÓN - 299K
      </button>
    </header>
  );
};
