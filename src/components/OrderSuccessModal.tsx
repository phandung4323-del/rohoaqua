import React from 'react';
import { OrderData } from '../types';
import { CheckCircle, Phone, Package, Calendar, MapPin, X } from 'lucide-react';

interface OrderSuccessModalProps {
  order: OrderData | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl relative text-left overflow-hidden border border-orange-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon Header */}
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
            <CheckCircle className="w-9 h-9" />
          </div>
          <span className="text-[11px] font-extrabold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Đặt Hàng Thành Công
          </span>
          <h3 className="text-lg font-black text-gray-900 mt-2">
            Cảm Ơn {order.fullName}!
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Mã đơn: <strong className="text-gray-800 font-mono">#{order.orderId}</strong>
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200 text-xs space-y-2 mb-4">
          <div className="flex items-start gap-2">
            <Package className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-gray-900 block">{order.comboName}</span>
              <span className="text-[11px] text-gray-500">Màu sắc: {order.colorName}</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <span className="text-gray-700 font-medium">{order.phoneNumber}</span>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <span className="text-gray-700 leading-snug">{order.address}</span>
          </div>

          <div className="flex items-center gap-2 pt-1 text-emerald-700 font-medium">
            <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Dự kiến giao: 2 - 3 ngày làm việc</span>
          </div>

          <div className="border-t border-stone-200 pt-2 flex justify-between items-center text-sm font-black text-gray-900">
            <span>Tổng thanh toán (COD):</span>
            <span className="text-red-600 text-base">{order.totalPrice.toLocaleString('vi-VN')}đ</span>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-2.5 rounded-xl text-[11px] text-orange-900 mb-4 leading-relaxed">
          📞 <strong>Nhân viên CSKH sẽ gọi xác nhận</strong> đơn hàng của quý khách trong vòng 15 phút. Quý khách nhớ để ý điện thoại nhé!
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer"
        >
          Hoàn Tất &amp; Quay Lại
        </button>
      </div>
    </div>
  );
};
