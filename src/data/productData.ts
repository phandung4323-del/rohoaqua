import { ProductCombo, ProductColor, ReviewItem } from '../types';

export const PRODUCT_IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHCioSVdqVIKLAVsCe1keT02rQpWtMSkr50mor9E3YVtB8r_NKwVScebbMDPfaLoX8EWM1c9v1MQIh7bEIEMxR8TxZ4M5k3UUtsNUEBMD2ZMfYFL4uukEXBXCmfKWDmYHLaKhk6dptfRRINixxyXkIF8fSRXFPQh4U5sT0pZZfyHMp-yg-CNiqMFzGbZHEg2CtptvEm_YSN4GSsxRt0Z0O4QCAyzeIMqDNOkje6i0WyLWHa_bxaspYox7Lu2HD9pikOLA",
  twoTierStructure: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQv_gs3wWNlVdoRrMn_O_Q7rb-AAMazGrOHd0jBzRob3Os8gGV6cGYJ9CvVOTTYqGfkwcZJZD-R_qPWoipTTUrHLVwd4WMa_Xr9y-LzTm6JzujLhuRy9wVNgGLlINe0753kTJu-ZB3MnmaMUv1YxVQ-OECUYrz_cwMIj1-NIewK293VuRkPzG5NpjyTB_iUTP1lukMFj8gOPrCarl69zcugAVPoOn5lFc_Cc6khg_BH6wSWzxxkW4LXlsXr0lnSEtN_V0",
  materialQuality: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU02VxGNnIeozRB64PTeHkSV_5ownfkcCM82L5OEV_r1nT0iNMgYACIuYvZKpFMnW6O24aQz8ljrL_GSCODsKExxHZUwibUgGqBIHqpwmns8QFFxd3iaVv8pG54yqp1-dGYOYj_vEDg8uRse4gnQxWSfj2xYwzhk13w2gcdrAJh8z-vNP0IKA8YKRUaPObIxbax1WC39E-VZ1iHEtNd4yKoj9HM3BHj-FxzgVRBCoLSt2Zg5kwcImUeqOSJKHUB2kt_eI",
  sizeSmall: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG7cEWHDDH_SgRuyqWR5GB607xY_arIRg0e6zTM67SJnZL1S47r8OwSSjhUtcD02IcenRj2KA1i5G77exqvNch9wObMBZ-irwSBgj_SsHrI33uf6GP6pX0Ej84AQcbenDoI9Ga0LJ6DCET7aIndohsdelI_ws33Ld_nxVeHnq5dOsHcyb570ejsRb09Qvz7NGJvor8jSvEMYx4AWzx7QF8MvL5eX1_HA9QMB-IIoOq2XcF66Dkn4g3mkbnezUkdKL5t1I",
  sizeMediumLarge: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHL9QnBYwWIn3qGjVdkWx0piTba03VV6MLz90BXeY9XeY6882pY1-Y62yzf2hCcRGnZz_btxo1rr3xHVxxw7iUls89k5VYhfjnUAfeTNfds_xB4WgVcLZooteY2iLAsOPTAPZinbCyFRqQ2z6ReYZGdUv4Z_ML01nL7zpxGk_byKfMddOwoaTojFspk99ljoGv4sic8dLBVEPY7SR1pWnpk76aQ8H420k_bMXE_1MFT7syUVB5m2utySAU8iNCcvF_r1w",
  useCases: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWHCkFa11ES5E3jS_VG9-ANbkY2o1pOfo51be_y18E0Ay639J3Fj3hRCVgvUy4ltepkSYlfUsnTTAgBgIPA6GMfm7cPSdX9x1WRIwrNEqUl6thUZhPaRfSpYFNjylczoKNh_WRaqaoQiZljMDod_VI9Giktt1RHfLuhl_LP5_Lyj3BhKYKDGPOLs3qm__9gzsw3D6ig8SdX4Jh2V2WGqm7uBhX0wnL_ltC8FNfh15-ARQTDK_2bAXrDyLzRYAYiLbfmrQ",
  gallery: [
    {
      id: "gal-1",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGR9wsoxKvbds0NG7iHeMhDoR6qGxfx8b1s1LZgEcN9dOpodjsOcjt_ECv_7pUpllCS-FUH4MbbeWR6X9K4NGv9WTmgG394wXTZIvaB9xopgNXv8qkOY7M-StQpT45NwkD4Kk167viC5Ky-bgdS4a-dyNIbHsZOUEUNxqkJ5aBH7_XPbJe0MVGhKzPHadCQ7JRZgyAZqjiASDhjhF9PQa3Czj-HL6KziIj8YEoi2wHtIKy-i1_VYhHGTbOs4HcLDIf3Fs",
      title: "Màu Xanh Pastel Trong Bếp",
      tag: "Trang nhã & Hiện đại"
    },
    {
      id: "gal-2",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBttR0_EK3AFDL4i0n66pblo8_3_HAiXwL9cjojk4RNkO8vwdtcAiwbSmbsWHXSp37_12NNnBHV6fsV_jZden2lifXspn-2Pzfg5p6P4mtEuKcfl_aL0n2MTrWHh2v8AfTHhDYbNrK2FYyYnWtqXU-mo2NWlCLz5O9ZOKHhRJnEISfKcE6K67-xrUskWljPdwUTWZU-m7B8Sbml_jNAFwxTRSoSgJStsEl_A52nYJj6Iwa3r8N8uTW9KfUJz9qXCHklOs8",
      title: "Màu Hồng Pastel Độc Đáo",
      tag: "Dễ thương & Tinh tế"
    },
    {
      id: "gal-3",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwgM0lXgrvXjH0GiOQuZwIJQ6oaQsAe-1sL4dOxil0f0WkC-249pmGtvdrQXVf89qu3zAmUkUvXsVi0C6OWLAqyXYe1QA1EMNYQQiZC515yCfMpvMhfA8QvMk7HtLWfMrNApKxx3m55XtSkUJVDJMuvgA6Sk2v6lFhX2Cp4sofqtxHdusqX9tpreB7OO_T1_EDlQs67y7LKkRm6DbSg4jUmHu3JOgdDe0Dkzd5CfSFlKE0BZMBppqWgKWoAiGBX1-9zug",
      title: "Thoát Nước 2 Tầng Tiện Lợi",
      tag: "Ráo sạch 100%"
    },
    {
      id: "gal-4",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYo9KP28BIxEXYopH43GdGO-wOJWPmAtqTc_Sw9cEKo8VXPsWfNafABm29oVnnd5yjGcsM6q00_23guay7HE_WTC-y1m-nfKp19J4TwvgYW8cKB7nFxirSJtdgBmxQWoUGcL6WwPbFC5CBhleqRbiMb6c-UIjmTDbeBqrv6hrzNs-QCjsehrKtjCfQbO0YZblxJwmLdvRIGYubAXwWqyhxUgmQT4QeRauFVxG7w_X3bhLZjTC3r17D5XNJqDhlQLknu3s",
      title: "Xếp Lồng Đa Kích Thước",
      tag: "Gọn gàng tối đa"
    },
    {
      id: "gal-5",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqjCIdMgMHs52N0d_78k8eM5_tJ2Yl5o_n7sPC0juqo5x4ABnlVM2bwoUs_SoYXcv7Rqx356tkm6MplQ-d_7fW2euxZuE9zom-b5lhLCPxvN4a2KQedf75R3PR57n6y1P2PPNx6QLvVcfaxxsQgxuN6QSgIHBIWKSKNKz6If-iItKcz8Fs2ofUYw3wiKRaP4CKy7hfqzixNUawYjPAzJrY9xp8iY8qnd13fiTVliLAHnFAsXl4V1Y3Gg4T5ip-EHxgMNk",
      title: "Chất Liệu PP Dày Dặn Cao Cấp",
      tag: "An toàn thực phẩm"
    }
  ]
};

export const COMBOS: ProductCombo[] = [
  {
    id: "combo-1",
    name: "1 Combo 4 món (1 Nhỏ + 2 Vừa + 1 Lớn)",
    itemsDetail: "Bao gồm 1 rổ nhỏ (15x11cm) + 2 rổ vừa (24x16.5cm) + 1 rổ lớn (35x26cm)",
    originalPrice: 499000,
    price: 299000,
    shippingFee: 20000,
    isFreeShipping: false,
    savingsText: "Tiết kiệm 200.000đ (-40%)",
    badge: "Tiêu chuẩn"
  },
  {
    id: "combo-2",
    name: "2 Combo 8 món (FREESHIP TOÀN QUỐC)",
    itemsDetail: "Bao gồm 2 rổ nhỏ + 4 rổ vừa + 2 rổ lớn (Dùng thoải mái cả bếp & tủ lạnh)",
    originalPrice: 998000,
    price: 598000,
    shippingFee: 0,
    isFreeShipping: true,
    savingsText: "Tiết kiệm 440.000đ + Freeship",
    badge: "🔥 BÁN CHẠY NHẤT",
    isPopular: true
  },
  {
    id: "combo-3",
    name: "3 Combo 12 món (FREESHIP + Quà Tặng)",
    itemsDetail: "Bao gồm 3 rổ nhỏ + 6 rổ vừa + 3 rổ lớn + Tặng 1 nạo củ quả đa năng Nhật Bản",
    originalPrice: 1497000,
    price: 897000,
    shippingFee: 0,
    isFreeShipping: true,
    savingsText: "Tiết kiệm 600.000đ + Quà tặng cao cấp",
    badge: "⭐ COMBO GIA ĐÌNH"
  }
];

export const COLORS: ProductColor[] = [
  {
    id: "blue-pastel",
    name: "Xanh Pastel (Trong Suốt)",
    badgeColor: "#0284c7",
    image: PRODUCT_IMAGES.gallery[0].url,
    available: true
  },
  {
    id: "pink-pastel",
    name: "Hồng Pastel Nhẹ Nhàng",
    badgeColor: "#ec4899",
    image: PRODUCT_IMAGES.gallery[1].url,
    available: true
  },
  {
    id: "white-clear",
    name: "Trắng Trong Suốt Tinh Tế",
    badgeColor: "#94a3b8",
    image: PRODUCT_IMAGES.gallery[3].url,
    available: true
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Nguyễn Thị Thu",
    rating: 5,
    date: "Hôm qua",
    verified: true,
    variant: "Đã mua: 2 Combo 8 món (Xanh Pastel)",
    comment: "Rất tiện lợi, bếp gọn gàng hơn hẳn. Rửa rau xong để lên rổ một lúc là ráo cong, không bị ướt nhoẹt mặt đá. Khay hứng nước rất vừa khít và dễ nhấc ra đổ.",
    likes: 42
  },
  {
    id: "rev-2",
    author: "Mai Lan",
    rating: 5,
    date: "3 ngày trước",
    verified: true,
    variant: "Đã mua: 1 Combo 4 món (Xanh Pastel)",
    comment: "Nhựa dày và chắc chắn hơn mong đợi nhiều. Khay hứng nước trong suốt nhìn rất sạch và sang. Đựng hoa quả để trên bàn ăn đãi khách nhìn lịch sự.",
    likes: 29
  },
  {
    id: "rev-3",
    author: "Thanh Hằng",
    rating: 5,
    date: "5 ngày trước",
    verified: true,
    variant: "Đã mua: 2 Combo 8 món (Xanh Pastel)",
    comment: "Mình mua thêm bộ thứ hai để dùng trong tủ lạnh. Đựng cà chua và nho tươi không lo bị hấp hơi nước. Tiện nhất là các rổ lồng vào nhau gọn lắm!",
    likes: 38
  },
  {
    id: "rev-4",
    author: "Hoàng Văn Nam",
    rating: 5,
    date: "1 tuần trước",
    verified: true,
    variant: "Đã mua: 2 Combo 8 món (Hồng Pastel)",
    comment: "Giao hàng nhanh, đóng gói cẩn thận 3 lớp chống sốc. Hàng đúng chuẩn như hình và video. Vợ mình rất ưng ý vì căn bếp gọn gàng hơn hẳn.",
    likes: 19
  },
  {
    id: "rev-5",
    author: "Lê Thúy Hạnh",
    rating: 5,
    date: "1 tuần trước",
    verified: true,
    variant: "Đã mua: 1 Combo 4 món (Trắng Trong)",
    comment: "Nhựa không có mùi hôi nhựa như các loại rẻ tiền ngoài chợ. Lỗ thoát nước bo tròn nhẵn mịn không sợ đứt tay hay dính kẹt rác.",
    likes: 15
  }
];

export const LIVE_BUYERS = [
  { name: "Chị Lan", location: "Hà Nội", combo: "2 Combo 8 món", time: "2 phút trước" },
  { name: "Anh Tuấn", location: "Quận 1, TP.HCM", combo: "1 Combo 4 món", time: "4 phút trước" },
  { name: "Chị Mai", location: "Hải Phòng", combo: "2 Combo 8 món", time: "7 phút trước" },
  { name: "Cô Hoa", location: "Đà Nẵng", combo: "3 Combo 12 món", time: "11 phút trước" },
  { name: "Bác Hùng", location: "Bình Dương", combo: "2 Combo 8 món", time: "15 phút trước" }
];

export const FAQS = [
  {
    question: "Chất liệu nhựa của rổ có an toàn cho thực phẩm tươi sống không?",
    answer: "Tuyệt đối an toàn! Sản phẩm được đúc từ chất liệu nhựa nguyên sinh PP (Polypropylene) và PET cao cấp chuyên dụng cho dụng cụ nhà bếp, không chứa chất độc hại BPA, không mùi hôi, chịu được nhiệt độ mát tủ lạnh và nước ấm."
  },
  {
    question: "Bộ combo 4 món gồm những kích thước nào?",
    answer: "Trọn bộ 4 món gồm: 1 rổ nhỏ (15 x 11 cm, cao 8.5 cm) đựng ớt, tỏi, chanh; 2 rổ trung (24 x 16.5 cm, cao 10.5 cm) đựng cà chua, dưa chuột, hoa quả; 1 rổ lớn (35 x 26 cm, cao 11.5 cm) rửa các loại rau xanh bó to."
  },
  {
    question: "Tôi có được kiểm tra hàng trước khi thanh toán không?",
    answer: "Dạ CÓ! Shop áp dụng chính sách ĐỒNG KIỂM 100%. Quý khách được mở hộp kiểm tra đúng số lượng rổ, kiểm tra màu sắc và độ dày dặn trước khi thanh toán tiền cho nhân viên giao hàng."
  },
  {
    question: "Thời gian giao hàng mất bao lâu?",
    answer: "Nội thành Hà Nội & TP.HCM nhận hàng trong 1-2 ngày. Các tỉnh thành khác trên toàn quốc từ 2-3 ngày làm việc."
  }
];
