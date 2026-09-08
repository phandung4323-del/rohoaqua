import React from 'react';
import { CheckCircle } from 'lucide-react';

export const AdvantagesSection: React.FC = () => {
  const advantages = [
    { title: "Thoát nước nhanh", desc: "Không đọng đáy" },
    { title: "Giữ thực phẩm sạch", desc: "Ngăn vi khuẩn" },
    { title: "Hạn chế đọng nước", desc: "Chống úng lá" },
    { title: "Bảo quản tươi lâu", desc: "Thông thoáng khí" },
    { title: "Tiết kiệm diện tích", desc: "Lồng thông minh" },
    { title: "Dễ dàng vệ sinh", desc: "Bề mặt trơn láng" },
    { title: "Chất liệu cao cấp", desc: "Nhựa PP nguyên sinh" },
    { title: "Bền đẹp lâu dài", desc: "Khó nứt vỡ" }
  ];

  return (
    <section id="advantages-section" className="px-4 py-8">
      <div className="text-center mb-5">
        <h2 className="text-lg font-black text-gray-900 uppercase">
          8 ƯU ĐIỂM VƯỢT TRỘI
        </h2>
        <p className="text-xs text-gray-500 mt-0.5 font-medium">
          Được các mẹ nội trợ thông thái tin dùng hàng ngày
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {advantages.map((item, idx) => (
          <div 
            key={idx}
            className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:border-emerald-200 transition-colors"
          >
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs font-semibold text-gray-800 block truncate">
                {item.title}
              </span>
              <span className="text-[10px] text-gray-400 block truncate">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
