export interface ProductCombo {
  id: string;
  name: string;
  itemsDetail: string;
  originalPrice: number;
  price: number;
  shippingFee: number;
  isFreeShipping: boolean;
  savingsText: string;
  badge?: string;
  isPopular?: boolean;
}

export interface ProductColor {
  id: string;
  name: string;
  badgeColor: string;
  image: string;
  available: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  comment: string;
  variant: string;
  likes: number;
}

export interface OrderData {
  orderId: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  comboId: string;
  comboName: string;
  colorId: string;
  colorName: string;
  note: string;
  quantity: number;
  itemPrice: number;
  shippingFee: number;
  totalPrice: number;
  createdAt: string;
}
