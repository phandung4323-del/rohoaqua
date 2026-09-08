/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { TwoTierSolutionSection } from './components/TwoTierSolutionSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { MaterialQualitySection } from './components/MaterialQualitySection';
import { SizeGuideSection } from './components/SizeGuideSection';
import { UseCasesSection } from './components/UseCasesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FlashSaleSection } from './components/FlashSaleSection';
import { OrderFormSection } from './components/OrderFormSection';
import { GuaranteesSection } from './components/GuaranteesSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { RecentBuyerToast } from './components/RecentBuyerToast';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { OrderData } from './types';

export default function App() {
  const [isMobileFrame, setIsMobileFrame] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);
  const [completedOrder, setCompletedOrder] = useState<OrderData | null>(null);

  const handleScrollToOrder = () => {
    const el = document.getElementById('order-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus on the first input after a brief delay
      setTimeout(() => {
        const input = document.getElementById('fullName');
        if (input) input.focus();
      }, 500);
    }
  };

  const handleOpenLightbox = (url: string, title: string) => {
    setLightboxImage({ url, title });
  };

  const handleOrderSuccess = (order: OrderData) => {
    setCompletedOrder(order);
  };

  return (
    <div className="min-h-screen bg-stone-200 flex flex-col items-center justify-start text-gray-800 antialiased selection:bg-orange-200">
      {/* Mobile Device Wrapper */}
      <div 
        className={`w-full ${
          isMobileFrame ? 'max-w-[440px] shadow-2xl border-x border-stone-300/80 my-0 sm:my-3 sm:rounded-3xl overflow-hidden' : 'max-w-2xl shadow-xl'
        } min-h-screen bg-[#FAF8F5] relative pb-28 transition-all duration-300`}
      >
        {/* Top Announcement Bar & Preview Controls */}
        <TopBanner 
          isMobileFrame={isMobileFrame} 
          onToggleFrame={() => setIsMobileFrame(!isMobileFrame)} 
        />

        {/* 1. Main Hero Presentation */}
        <HeroSection 
          onSelectImage={handleOpenLightbox}
          onScrollToOrder={handleScrollToOrder}
        />

        {/* 2. Pain Points Section */}
        <PainPointsSection />

        {/* 3. Two Tier Solution Section */}
        <TwoTierSolutionSection 
          onSelectImage={handleOpenLightbox}
        />

        {/* 4. Eight Core Advantages */}
        <AdvantagesSection />

        {/* 5. Material & Safety Quality */}
        <MaterialQualitySection 
          onSelectImage={handleOpenLightbox}
        />

        {/* 6. Size Specification Guide */}
        <SizeGuideSection 
          onSelectImage={handleOpenLightbox}
        />

        {/* 7. Multiple Kitchen Use Cases */}
        <UseCasesSection 
          onSelectImage={handleOpenLightbox}
        />

        {/* 8. Actual Photo Gallery */}
        <GallerySection 
          onSelectImage={handleOpenLightbox}
        />

        {/* 9. Verified Customer Reviews */}
        <ReviewsSection />

        {/* 10. Flash Sale Countdown Timer */}
        <FlashSaleSection 
          onScrollToOrder={handleScrollToOrder}
        />

        {/* 11. Quick Order Checkout Form */}
        <OrderFormSection 
          onOrderSuccess={handleOrderSuccess}
        />

        {/* 12. Shop Guarantees & FAQ */}
        <GuaranteesSection />

        {/* 13. Sticky Floating Bottom Action Bar */}
        <StickyBottomBar 
          onScrollToOrder={handleScrollToOrder}
          isMobileFrame={isMobileFrame}
        />

        {/* 14. Real-time Buyer Activity Toast */}
        <RecentBuyerToast />
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal 
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Order Confirmation Receipt Modal */}
      <OrderSuccessModal 
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />
    </div>
  );
}
