import React from 'react';
import { Flame } from 'lucide-react';

interface StickyBottomBarProps {
  onScrollToOrder: () => void;
  isMobileFrame: boolean;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onScrollToOrder, isMobileFrame }) => {
  return (
    <nav 
      id="sticky-bottom-bar"
      className={`fixed bottom-0 left-0 right-0 ${
        isMobileFrame ? 'max-w-[440px]' : 'max-w-xl'
      } mx-auto bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 z-40 flex items-center justify-between gap-3 shadow-2xl transition-all`}
    >
      <div className="pl-1 shrink-0">
        <span className="text-[10px] uppercase text-gray-500 font-semibold block leading-none mb-1">
          Combo 4 món
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-black text-red-600">299.000đ</span>
          <span className="text-[10px] text-gray-400 line-through">499K</span>
        </div>
      </div>

      <button
        onClick={onScrollToOrder}
        className="flex-1 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-extrabold py-3 px-3 rounded-xl text-center text-xs uppercase tracking-wide shadow-md shadow-orange-500/30 active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <Flame className="w-3.5 h-3.5 text-yellow-300 animate-bounce" />
        <span>MUA COMBO 4 MÓN - 299K</span>
      </button>
    </nav>
  );
};
