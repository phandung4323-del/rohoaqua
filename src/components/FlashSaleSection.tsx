import React, { useState, useEffect } from 'react';
import { Flame, AlertTriangle } from 'lucide-react';

interface FlashSaleSectionProps {
  onScrollToOrder: () => void;
}

export const FlashSaleSection: React.FC<FlashSaleSectionProps> = ({ onScrollToOrder }) => {
  // Timer state (2 hours, 45 minutes, 18 seconds)
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 45 * 60 + 18);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 3 * 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section 
      id="flash-sale-section"
      className="px-4 py-8 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white text-center rounded-3xl mx-3 my-6 shadow-xl relative overflow-hidden"
    >
      {/* Background decoration circle */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full pointer-events-none"></div>
      <div className="absolute -left-10 -top-10 w-32 h-32 bg-yellow-400/15 rounded-full pointer-events-none"></div>

      <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2">
        <Flame className="w-3.5 h-3.5 text-yellow-300 animate-bounce" />
        FLASH SALE GIỚI HẠN
      </span>

      <h2 className="text-2xl font-black uppercase mb-1 tracking-tight">
        ƯU ĐÃI HÔM NAY
      </h2>
      <p className="text-xs text-orange-100 mb-4">
        Áp dụng cho khách hàng hoàn tất đặt hàng ngay
      </p>

      {/* Countdown Timer Box */}
      <div className="flex justify-center items-center gap-2 mb-4">
        <div className="bg-black/45 backdrop-blur-sm rounded-xl p-2 min-w-[58px] shadow-inner">
          <span className="block text-2xl font-black text-yellow-300 tabular-nums">
            {pad(hours)}
          </span>
          <span className="text-[10px] text-gray-300 uppercase font-semibold">Giờ</span>
        </div>
        <span className="font-bold text-lg text-yellow-300">:</span>
        <div className="bg-black/45 backdrop-blur-sm rounded-xl p-2 min-w-[58px] shadow-inner">
          <span className="block text-2xl font-black text-yellow-300 tabular-nums">
            {pad(minutes)}
          </span>
          <span className="text-[10px] text-gray-300 uppercase font-semibold">Phút</span>
        </div>
        <span className="font-bold text-lg text-yellow-300">:</span>
        <div className="bg-black/45 backdrop-blur-sm rounded-xl p-2 min-w-[58px] shadow-inner">
          <span className="block text-2xl font-black text-yellow-300 tabular-nums">
            {pad(seconds)}
          </span>
          <span className="text-[10px] text-gray-300 uppercase font-semibold">Giây</span>
        </div>
      </div>

      {/* Pricing Inside Flash Sale */}
      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3.5 mb-4 inline-block w-full max-w-xs border border-white/20">
        <div className="text-xs font-bold text-yellow-300 uppercase mb-1">
          COMBO 4 MÓN (1 NHỎ + 2 VỪA + 1 LỚN)
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm line-through text-orange-200">499.000đ</span>
          <span className="text-2xl font-extrabold text-white">299.000đ</span>
        </div>
        <p className="text-[11px] text-orange-100 mt-1">
          🚚 Phí ship: 20.000đ (Mua 2 combo: <strong className="text-yellow-300 font-bold">FREESHIP</strong>)
        </p>
      </div>

      {/* Scarcity warning */}
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-yellow-200 mb-5">
        <AlertTriangle className="w-4 h-4 text-yellow-300 animate-pulse" />
        <span>Số lượng ưu đãi có hạn chỉ còn 19 bộ cuối cùng!</span>
      </div>

      <button
        onClick={onScrollToOrder}
        className="inline-block w-full bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-black py-3.5 px-6 rounded-xl shadow-lg text-sm uppercase tracking-wider active:scale-95 transition-all animate-pulse-cta cursor-pointer"
      >
        ĐẶT HÀNG NGAY
      </button>
    </section>
  );
};
