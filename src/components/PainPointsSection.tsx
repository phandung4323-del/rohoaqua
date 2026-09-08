import React from 'react';
import { XCircle, AlertCircle } from 'lucide-react';

export const PainPointsSection: React.FC = () => {
  const painPoints = [
    "Rau củ sau khi rửa không có chỗ để ráo thuận tiện",
    "Nước chảy tràn khắp mặt bàn bếp gây trơn ướt, mất vệ sinh",
    "Rau quả nhanh úng hỏng vì đọng nước ở đáy rổ thông thường",
    "Không gian bếp bừa bộn nhiều loại chậu thau cồng kềnh",
    "Khó sắp xếp thực phẩm ngăn nắp trong tủ lạnh",
    "Mất nhiều thời gian lau chùi dọn dẹp sau mỗi lần nấu nướng"
  ];

  return (
    <section id="pain-points-section" className="px-4 py-8">
      <div className="text-center mb-5">
        <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-100 px-3 py-1 rounded-full">
          Nỗi phiền toái mỗi ngày
        </span>
        <h2 className="text-lg font-black text-gray-900 mt-2">
          BẠN CÓ ĐANG GẶP NHỮNG VẤN ĐỀ NÀY?
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        {painPoints.map((item, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 p-3 bg-white rounded-xl border border-red-100 shadow-sm hover:border-red-200 transition-colors"
          >
            <span className="text-lg shrink-0 leading-tight">❌</span>
            <p className="text-xs text-gray-700 font-medium leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Transition Message Box */}
      <div className="mt-5 p-3.5 bg-gradient-to-r from-amber-500/10 to-orange-500/15 border-l-4 border-orange-500 rounded-r-xl flex items-center gap-2.5">
        <AlertCircle className="w-5 h-5 text-orange-600 shrink-0" />
        <p className="text-xs sm:text-sm font-semibold text-gray-800 italic">
          "Đã đến lúc nâng cấp căn bếp với giải pháp thông minh và tiện nghi hơn."
        </p>
      </div>
    </section>
  );
};
