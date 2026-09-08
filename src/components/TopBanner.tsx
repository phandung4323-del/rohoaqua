import React from 'react';
import { Flame, Smartphone, Monitor } from 'lucide-react';

interface TopBannerProps {
  isMobileFrame: boolean;
  onToggleFrame: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ isMobileFrame, onToggleFrame }) => {
  return (
    <>
      <aside 
        id="top-urgency-banner"
        className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white text-xs font-bold py-2 px-3 text-center sticky top-0 z-40 shadow-sm flex items-center justify-center gap-1.5 tracking-wide"
      >
        <Flame className="w-4 h-4 text-yellow-300 animate-bounce shrink-0" />
        <span className="text-[11px] sm:text-xs">
          ƯU ĐÃI ĐẶC BIỆT: COMBO 4 MÓN CHỈ 299K • FREESHIP KHI MUA TỪ 2 COMBO
        </span>
      </aside>

      {/* Frame switch toggle bar visible on desktop / wide screens */}
      <div className="hidden lg:flex items-center justify-between px-4 py-1.5 bg-stone-800 text-stone-200 text-xs border-b border-stone-700">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Xem trước giao diện:</span>
        </div>
        <button
          onClick={onToggleFrame}
          className="flex items-center gap-1.5 px-3 py-1 rounded bg-stone-700 hover:bg-stone-600 text-white transition-colors cursor-pointer"
          title="Chuyển đổi giữa chế độ chuẩn Điện thoại (390px) và Màn hình rộng"
        >
          {isMobileFrame ? (
            <>
              <Monitor className="w-3.5 h-3.5 text-orange-400" />
              <span>Chuyển sang Toàn màn hình</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5 text-orange-400" />
              <span>Chuyển sang Khung chuẩn Điện thoại (390px)</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
