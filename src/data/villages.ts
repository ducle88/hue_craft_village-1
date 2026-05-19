export type Village = {
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  description: string;
  years: string;
  hero: string;
  gallery: string[];
  experiences: string[];
};

export const villages: Village[] = [
  {
    slug: "lang-huong-thuy-xuan",
    name: "Làng hương Thủy Xuân",
    category: "Hương truyền thống",
    image: "/images/villages/huong_tram_thuy_xuan.jpg",
    shortDescription: "Sắc hương cổ kính nhuộm tím ký ức đất Cố đô.",
    description:
      "Nghề làm hương ở Thủy Xuân lưu giữ kỹ thuật pha trầm, se hương và phối sắc thủ công, tạo nên không gian tâm linh đậm chất Huế.",
    years: "Hơn 700 năm",
    hero: "linear-gradient(120deg, rgba(123,30,30,0.8), rgba(92,64,51,0.62))",
    gallery: ["Sân hương nhiều màu", "Se tăm hương", "Nhuộm màu tự nhiên"],
    experiences: ["Se hương thủ công", "Pha hương theo mùi", "Gói hương lễ"],
  },
  {
    slug: "gom-phuoc-tich",
    name: "Làng gốm Phước Tích",
    category: "Gốm truyền thống",
    image: "/images/villages/gom-phuoc-tich.png",
    shortDescription: "Đất nung kể chuyện thời gian bên dòng Ô Lâu.",
    description:
      "Phước Tích gìn giữ lò gốm cổ với quy trình nhào đất, xoay bàn và nung củi, tạo nên chất gốm mộc mạc nhưng bền chắc.",
    years: "Trên 500 năm",
    hero: "linear-gradient(120deg, rgba(92,64,51,0.82), rgba(123,30,30,0.58))",
    gallery: ["Lò nung cổ", "Nặn gốm", "Tô men"],
    experiences: ["Nặn cốc gốm", "Trang trí men", "Tham quan làng cổ"],
  },
  {
    slug: "hoa-giay-thanh-tien",
    name: "Làng hoa giấy Thanh Tiên",
    category: "Trang trí dân gian",
    image: "/images/villages/hoa-giay-thanh-tien.png",
    shortDescription: "Sắc hoa giấy rực rỡ trong lễ nghi truyền thống Huế.",
    description:
      "Nghề hoa giấy Thanh Tiên mang vẻ đẹp tượng trưng cho phúc lành, được tạo tác hoàn toàn thủ công với kỹ thuật nhuộm và xếp cánh tinh tế.",
    years: "Khoảng 300–400 năm; công nhận làng nghề truyền thống (2013)",
    hero: "linear-gradient(120deg, rgba(123,30,30,0.78), rgba(200,169,107,0.66))",
    gallery: ["Xếp cánh hoa", "Nhuộm giấy", "Trưng bày lễ hội"],
    experiences: ["Làm hoa sen giấy", "Cắm bình truyền thống", "Kể chuyện lễ tiết"],
  },
  {
    slug: "deng-a-luoi",
    name: "Nghề dệt Dèng A Lưới",
    category: "Dệt thổ cẩm vùng cao",
    image: "/images/villages/det_deng_a_luoi.jpg",
    shortDescription: "Hoa văn dệt thổ cẩm Tà Ôi — di sản phi vật thể quốc gia.",
    description:
      "Dèng A Lưới gắn với đời sống cộng đồng dân tộc thiểu số ở vùng núi phía Tây Huế, nổi bật với kỹ thuật dệt tay và trang trí hạt cườm đặc trưng.",
    years: "Hàng trăm năm; Di sản văn hóa phi vật thể quốc gia (2016)",
    hero: "linear-gradient(120deg, rgba(47,32,24,0.85), rgba(123,30,30,0.55))",
    gallery: ["Khung dệt tay", "Màu nhuộm thiên nhiên", "Thổ cẩm hoàn thiện"],
    experiences: ["Quan sát dệt Dèng", "Thử nhuộm nguyên liệu tự nhiên", "Tìm hiểu phong tục lễ hội"],
  },
  {
    slug: "tranh-lang-sinh",
    name: "Tranh làng Sình",
    category: "Tranh dân gian",
    image: "/images/villages/tranh-lang-sinh.png",
    shortDescription: "Dòng tranh mộc bản đặc sắc gắn tín ngưỡng xứ Huế.",
    description:
      "Tranh làng Sình (Lại Ân) là nghệ thuật in mộc bản với màu điệp tự nhiên, phục vụ lễ cúng, cầu an và đời sống văn hóa dân gian cố đô.",
    years: "Hơn 400 năm",
    hero: "linear-gradient(120deg, rgba(123,30,30,0.75), rgba(92,64,51,0.65))",
    gallery: ["Khắc mộc bản", "In tranh", "Phối màu điệp"],
    experiences: ["Trải nghiệm in tranh", "Tô màu tranh dân gian", "Nghe kể chuyện làng nghề"],
  },
  {
    slug: "quat-giay-bao-vinh",
    name: "Quạt giấy phố cổ Bao Vinh",
    category: "Thủ công phố cổ",
    image: "/images/villages/quat-giay-bao-vinh.jpg",
    shortDescription: "Quạt giấy thanh tao bên dòng Hương Giang.",
    description:
      "Nghề làm quạt giấy ở phố cổ Bao Vinh lưu giữ kỹ thuật nan tre, dán áo quạt và họa tiết thư pháp — biểu tượng tinh tế của người Huế.",
    years: "Truyền thống lâu đời gắn thương cảng xứ Huế",
    hero: "linear-gradient(120deg, rgba(92,64,51,0.82), rgba(200,169,107,0.6))",
    gallery: ["Vót nan tre", "Dán áo quạt", "Vẽ họa tiết"],
    experiences: ["Tham quan xưởng quạt", "Thử vẽ họa tiết", "Mua quạt lưu niệm"],
  },
  {
    slug: "long-cung-dinh-hue",
    name: "Lọng cung đình Huế",
    category: "Lễ nghi — mỹ nghệ",
    image: "/images/villages/lam-long-cung-dinh-hue.jpg",
    shortDescription: "Lọng lụa gấm — nét uy nghi của di sản cung đình.",
    description:
      "Nghề làm lọng cung đình Huế gắn với nghi lễ, lễ hội và tín ngưỡng, với khung tre uốn, gen gỗ và vải gấm thêu rồng phượng.",
    years: "Từ thời Lê — Mạc; phát triển mạnh thời Nguyễn",
    hero: "linear-gradient(120deg, rgba(200,169,107,0.78), rgba(123,30,30,0.62))",
    gallery: ["Chế nan tre", "Phủ lụa gấm", "Hoàn thiện tua rua"],
    experiences: ["Giới thiệu cấu trúc lọng", "Quan sát thêu trang trí", "Đặt hàng theo nghi lễ"],
  },
];
