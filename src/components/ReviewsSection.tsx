import React, { useState } from 'react';
import { REVIEWS } from '../data/productData';
import { ReviewItem } from '../types';
import { ThumbsUp, CheckCircle, MessageSquarePlus, Star } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [showAddReview, setShowAddReview] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleToggleLike = (id: string) => {
    setLikedReviews(prev => {
      const isAlreadyLiked = !!prev[id];
      const newMap = { ...prev, [id]: !isAlreadyLiked };
      
      setReviewsList(current =>
        current.map(r => {
          if (r.id === id) {
            return {
              ...r,
              likes: isAlreadyLiked ? r.likes - 1 : r.likes + 1
            };
          }
          return r;
        })
      );
      return newMap;
    });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      rating: newRating,
      date: "Vừa xong",
      verified: true,
      variant: "Khách hàng đã trải nghiệm",
      comment: newComment.trim(),
      likes: 0
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewAuthor('');
    setNewComment('');
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setShowAddReview(false);
    }, 1800);
  };

  return (
    <section id="reviews-section" className="px-4 py-8 bg-white border-y border-stone-200">
      <div className="text-center mb-5">
        <h2 className="text-lg font-black text-gray-900 uppercase">
          HƠN 1.000+ KHÁCH HÀNG HÀI LÒNG
        </h2>
        <div className="flex items-center justify-center gap-1.5 mt-1">
          <span className="text-xl font-black text-amber-500">4.9/5</span>
          <div className="flex text-amber-400 text-sm">
            {'★'.repeat(5)}
          </div>
          <span className="text-xs text-gray-500 font-medium">
            (Đánh giá đã xác thực)
          </span>
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-3 mb-5">
        {reviewsList.map((review) => (
          <div 
            key={review.id}
            className="p-3 bg-stone-50 rounded-xl border border-stone-200 hover:border-orange-200 transition-colors"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-gray-900">{review.author}</span>
                {review.verified && (
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded">
                    <CheckCircle className="w-2.5 h-2.5" /> Đã mua hàng
                  </span>
                )}
              </div>
              <span className="text-xs text-amber-400 tracking-tighter">
                {'★'.repeat(review.rating)}
              </span>
            </div>

            <p className="text-[11px] text-gray-400 mb-1.5">
              {review.variant} • {review.date}
            </p>

            <p className="text-xs text-gray-700 leading-relaxed">
              "{review.comment}"
            </p>

            <div className="mt-2.5 pt-2 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-gray-500">
              <span>Đánh giá hữu ích?</span>
              <button
                onClick={() => handleToggleLike(review.id)}
                className={`flex items-center gap-1 px-2 py-0.5 rounded cursor-pointer transition-colors ${
                  likedReviews[review.id] 
                    ? 'text-orange-600 bg-orange-100 font-bold' 
                    : 'text-gray-500 hover:text-gray-700 bg-white border border-gray-200'
                }`}
              >
                <ThumbsUp className="w-3 h-3" />
                <span>{review.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Write a review toggle */}
      <div className="mb-5 text-center">
        {!showAddReview ? (
          <button
            onClick={() => setShowAddReview(true)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span>Viết đánh giá của bạn</span>
          </button>
        ) : (
          <form onSubmit={handleSubmitReview} className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-left space-y-3">
            <h3 className="text-xs font-bold text-gray-900 uppercase">Gửi cảm nhận về sản phẩm</h3>
            
            <div>
              <label className="block text-[11px] font-semibold text-gray-700 mb-1">Tên của bạn *</label>
              <input
                type="text"
                required
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Ví dụ: Nguyễn Mai Phương"
                className="w-full text-xs rounded-lg border-gray-300 bg-white p-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-gray-700 mb-1">Mức độ hài lòng *</label>
              <div className="flex gap-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    className={`flex items-center gap-0.5 px-2 py-1 rounded text-xs cursor-pointer border ${
                      newRating === star ? 'bg-amber-100 border-amber-400 text-amber-800 font-bold' : 'bg-white border-gray-200 text-gray-600'
                    }`}
                  >
                    <span>{star}</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-gray-700 mb-1">Nội dung đánh giá *</label>
              <textarea
                required
                rows={2}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Chia sẻ trải nghiệm sử dụng rổ thông minh..."
                className="w-full text-xs rounded-lg border-gray-300 bg-white p-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {isSuccess && (
              <p className="text-xs font-bold text-emerald-600 bg-emerald-50 p-2 rounded text-center">
                ✓ Cảm ơn bạn! Đánh giá đã được xuất bản.
              </p>
            )}

            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setShowAddReview(false)}
                className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-600 text-xs font-medium cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 cursor-pointer shadow-sm"
              >
                Đăng đánh giá
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-dashed border-gray-200">
        <div className="p-2 bg-emerald-50 rounded-lg">
          <p className="text-[11px] font-bold text-emerald-800">✔ Hài lòng 98%</p>
        </div>
        <div className="p-2 bg-sky-50 rounded-lg">
          <p className="text-[11px] font-bold text-sky-800">✔ Toàn quốc</p>
        </div>
        <div className="p-2 bg-orange-50 rounded-lg">
          <p className="text-[11px] font-bold text-orange-800">✔ Đồng kiểm</p>
        </div>
      </div>
    </section>
  );
};
