import React, { useState, useEffect } from 'react';
import { LIVE_BUYERS } from '../data/productData';
import { ShoppingBag, X } from 'lucide-react';

export const RecentBuyerToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show after 3s initially
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    // Loop interval
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_BUYERS.length);
        setIsVisible(true);
      }, 1000);
    }, 8500);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !isVisible) return null;

  const current = LIVE_BUYERS[currentIndex];

  return (
    <div 
      className="fixed bottom-20 left-3 z-30 max-w-[280px] bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-orange-200 animate-in fade-in slide-in-from-bottom-3 duration-300 flex items-center gap-2.5"
    >
      <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
        <ShoppingBag className="w-4 h-4" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold text-gray-900 leading-tight truncate">
          {current.name} ({current.location})
        </p>
        <p className="text-[10px] text-orange-600 font-semibold truncate">
          Vừa đặt {current.combo}
        </p>
        <p className="text-[9px] text-gray-400">
          {current.time}
        </p>
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="text-gray-400 hover:text-gray-600 p-1 rounded-full cursor-pointer"
        aria-label="Tắt thông báo"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
