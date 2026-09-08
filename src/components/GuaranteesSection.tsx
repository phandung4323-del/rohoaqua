import React, { useState } from 'react';
import { FAQS } from '../data/productData';
import { ShieldCheck, ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export const GuaranteesSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const guarantees = [
    { title: "Hàng giống mô tả", desc: "Ảnh thật 100%" },
    { title: "Kiểm hàng trước", desc: "Đồng kiểm khi nhận" },
    { title: "Đổi mới nếu lỗi", desc: "1 đổi 1 trong 7 ngày" },
    { title: "Hỗ trợ tận tâm", desc: "24/7 nhiệt tình" },
    { title: "Giao hàng toàn quốc", desc: "Nhanh chóng an toàn" },
    { title: "Thanh toán COD", desc: "Nhận hàng mới trả tiền" }
  ];

  return (
    <section id="guarantees-section" className="px-4 py-8 bg-stone-50 border-t border-stone-200">
      <div className="text-center mb-5">
        <h2 className="text-base font-black text-gray-900 uppercase">
          CAM KẾT TỪ SHOP
        </h2>
        <p className="text-xs text-gray-500 font-medium">
          Mua sắm an tâm tuyệt đối
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-8">
        {guarantees.map((item, idx) => (
          <div
            key={idx}
            className="p-3 bg-white rounded-xl border border-stone-200 shadow-xs flex items-center gap-2"
          >
            <span className="text-lg">🛡</span>
            <div>
              <p className="text-xs font-semibold text-gray-800">{item.title}</p>
              <p className="text-[10px] text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs mb-6">
        <div className="flex items-center gap-1.5 mb-3">
          <HelpCircle className="w-4 h-4 text-orange-600" />
          <h3 className="text-xs font-bold text-gray-900 uppercase">
            Câu hỏi thường gặp (FAQ)
          </h3>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border border-stone-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-3 bg-stone-50/60 hover:bg-stone-50 flex items-center justify-between text-xs font-semibold text-gray-800 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-3 text-xs text-gray-600 leading-relaxed bg-white border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hotline Support */}
      <div className="text-center mb-6">
        <p className="text-xs text-gray-500 mb-1">Cần hỗ trợ tư vấn trực tiếp?</p>
        <a 
          href="tel:19006868" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Hotline: 1900 6868 (Miễn phí)</span>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-[10px] text-gray-400 border-t border-stone-200/60 pt-4">
        © 2026 Đồ Gia Dụng Thông Minh Cao Cấp. All rights reserved.
      </div>
    </section>
  );
};
