import React, { useState } from 'react';
import { COMBOS, COLORS } from '../data/productData';
import { OrderData } from '../types';
import { Check, Truck, ShieldCheck, Gift } from 'lucide-react';

interface OrderFormSectionProps {
  onOrderSuccess: (order: OrderData) => void;
}

export const OrderFormSection: React.FC<OrderFormSectionProps> = ({ onOrderSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedComboId, setSelectedComboId] = useState('combo-2'); // default to 2 combos best seller
  const [selectedColorId, setSelectedColorId] = useState('blue-pastel');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentCombo = COMBOS.find((c) => c.id === selectedComboId) || COMBOS[0];
  const currentColor = COLORS.find((c) => c.id === selectedColorId) || COLORS[0];

  const shippingFee = currentCombo.shippingFee;
  const totalPrice = currentCombo.price + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim() || !address.trim()) {
      alert('Vui lòng điền đầy đủ thông tin nhận hàng.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const order: OrderData = {
        orderId: `DH${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        address: address.trim(),
        comboId: currentCombo.id,
        comboName: currentCombo.name,
        colorId: currentColor.id,
        colorName: currentColor.name,
        note: note.trim(),
        quantity: 1,
        itemPrice: currentCombo.price,
        shippingFee: shippingFee,
        totalPrice: totalPrice,
        createdAt: new Date().toISOString()
      };

      setIsSubmitting(false);
      onOrderSuccess(order);
    }, 600);
  };

  return (
    <section 
      id="order-form"
      className="px-4 py-8 bg-white border-t border-stone-200"
    >
      <div className="text-center mb-6">
        <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-100 px-3 py-1 rounded-full">
          Đăng Ký Đơn Giản
        </span>
        <h2 className="text-xl font-black text-gray-900 mt-2 uppercase">
          FORM ĐẶT HÀNG NHANH
        </h2>
        <p className="text-xs text-gray-500 mt-1 font-medium">
          Nhận hàng thanh toán tại nhà • Kiểm tra trước khi nhận
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-gray-700 mb-1">
            Họ và tên của bạn *
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Ví dụ: Nguyễn Văn A"
            className="w-full text-xs rounded-xl border-gray-300 focus:border-orange-500 focus:ring-orange-500 py-2.5 px-3 bg-stone-50/50 border transition-all"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-xs font-bold text-gray-700 mb-1">
            Số điện thoại nhận hàng *
          </label>
          <input
            id="phoneNumber"
            type="tel"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Ví dụ: 0912 345 678"
            className="w-full text-xs rounded-xl border-gray-300 focus:border-orange-500 focus:ring-orange-500 py-2.5 px-3 bg-stone-50/50 border transition-all"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-xs font-bold text-gray-700 mb-1">
            Địa chỉ nhận hàng (Số nhà, đường, phường/xã) *
          </label>
          <input
            id="address"
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Ví dụ: 123 Đường Láng, Đống Đa, Hà Nội"
            className="w-full text-xs rounded-xl border-gray-300 focus:border-orange-500 focus:ring-orange-500 py-2.5 px-3 bg-stone-50/50 border transition-all"
          />
        </div>

        {/* Combo Selection */}
        <div>
          <label htmlFor="productOption" className="block text-xs font-bold text-gray-700 mb-1">
            Chọn kích thước / combo *
          </label>
          <select
            id="productOption"
            value={selectedComboId}
            onChange={(e) => setSelectedComboId(e.target.value)}
            className="w-full text-xs rounded-xl border-gray-300 focus:border-orange-500 focus:ring-orange-500 py-2.5 px-3 bg-white border cursor-pointer font-medium"
          >
            {COMBOS.map((combo) => (
              <option key={combo.id} value={combo.id}>
                {combo.isPopular ? '🔥 ' : combo.id === 'combo-1' ? '📦 ' : '⭐ '}
                {combo.name} - {combo.price.toLocaleString('vi-VN')}đ {combo.isFreeShipping ? '(FREESHIP)' : '(+20K ship)'}
              </option>
            ))}
          </select>
        </div>

        {/* Visual Combo Cards selector */}
        <div className="space-y-2 pt-1">
          {COMBOS.map((combo) => {
            const isSelected = combo.id === selectedComboId;
            return (
              <div
                key={combo.id}
                onClick={() => setSelectedComboId(combo.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected 
                    ? 'border-orange-500 bg-orange-50/60 ring-2 ring-orange-500/20 shadow-xs' 
                    : 'border-gray-200 bg-stone-50/40 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center ${
                    isSelected ? 'border-orange-600 bg-orange-600 text-white' : 'border-gray-400 bg-white'
                  }`}>
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold text-gray-900">{combo.name}</span>
                      {combo.badge && (
                        <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${
                          combo.isPopular 
                            ? 'bg-red-500 text-white animate-pulse' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {combo.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                      {combo.itemsDetail}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-2">
                  <div className="text-xs font-black text-red-600">
                    {combo.price.toLocaleString('vi-VN')}đ
                  </div>
                  <div className="text-[10px] text-gray-400 line-through">
                    {combo.originalPrice.toLocaleString('vi-VN')}đ
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Color Choice */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5">
            Chọn tông màu yêu thích *
          </label>
          <div className="grid grid-cols-3 gap-2">
            {COLORS.map((col) => {
              const isSelected = col.id === selectedColorId;
              return (
                <button
                  type="button"
                  key={col.id}
                  onClick={() => setSelectedColorId(col.id)}
                  className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-orange-500 bg-orange-50/70 ring-1 ring-orange-500 font-bold text-orange-900' 
                      : 'border-gray-200 bg-white hover:bg-stone-50 text-gray-700'
                  }`}
                >
                  <span 
                    className="w-3.5 h-3.5 rounded-full inline-block mb-1 border border-black/10 shadow-xs"
                    style={{ backgroundColor: col.badgeColor }}
                  />
                  <span className="text-[11px] block leading-tight truncate">
                    {col.name.split(' ')[0]} {col.name.split(' ')[1]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Note (Optional) */}
        <div>
          <label htmlFor="note" className="block text-xs font-bold text-gray-700 mb-1">
            Ghi chú giao hàng (Tùy chọn)
          </label>
          <input
            id="note"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao"
            className="w-full text-xs rounded-xl border-gray-300 focus:border-orange-500 focus:ring-orange-500 py-2 px-3 bg-stone-50/50 border transition-all"
          />
        </div>

        {/* Order Summary Box */}
        <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 text-xs space-y-1.5 mt-2">
          <div className="flex justify-between text-gray-600">
            <span>Gói sản phẩm:</span>
            <span className="font-semibold text-gray-800 text-right">{currentCombo.name}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Màu sắc lựa chọn:</span>
            <span className="font-medium text-gray-800">{currentColor.name}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Giá ưu đãi:</span>
            <span className="font-medium text-gray-800">{currentCombo.price.toLocaleString('vi-VN')}đ</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Phí vận chuyển:</span>
            <span className="font-medium text-gray-800">
              {shippingFee === 0 ? (
                <span className="text-emerald-600 font-bold">FREESHIP (Miễn phí)</span>
              ) : (
                <span>20.000đ (Mua từ 2 combo: <strong className="text-emerald-600">FREESHIP</strong>)</span>
              )}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-2 flex justify-between items-center text-sm font-black text-gray-900">
            <span>Tổng thanh toán ({currentCombo.id === 'combo-1' ? '1 combo' : 'trọn gói'}):</span>
            <span className="text-red-600 text-base font-black">
              {totalPrice.toLocaleString('vi-VN')}đ
            </span>
          </div>

          <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200 text-[11px] text-emerald-800 font-medium text-center">
            {currentCombo.isFreeShipping ? (
              <span className="flex items-center justify-center gap-1">
                <Gift className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Tuyệt vời! Đơn hàng của bạn đã được <strong>Miễn phí giao hàng toàn quốc</strong>.</span>
              </span>
            ) : (
              <span>🎉 Khuyên dùng: Mua 2 Combo chỉ <strong>598.000đ</strong> - Miễn hoàn toàn phí ship toàn quốc!</span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-red-600 via-orange-600 to-red-600 hover:from-red-700 hover:to-orange-700 text-white font-black py-4 px-4 rounded-xl shadow-xl shadow-red-500/25 text-base uppercase tracking-wider active:scale-95 transition-all animate-pulse-cta mt-4 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? 'ĐANG XỬ LÝ ĐƠN HÀNG...' : `XÁC NHẬN ĐẶT HÀNG - ${totalPrice.toLocaleString('vi-VN')}đ`}
        </button>
      </form>
    </section>
  );
};
