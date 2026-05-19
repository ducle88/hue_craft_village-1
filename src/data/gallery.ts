/** Đường dẫn ảnh trong `public/images/gallery/<folder>/` (hỗ trợ tên file có khoảng trắng). */
export function galleryFolderSrc(folder: string, filename: string) {
  return `/images/gallery/${folder}/${encodeURIComponent(filename)}`;
}

/**
 * Thư viện ảnh trang chủ — 8 ô (4×2).
 * `gallery-1`…`gallery-8` (trừ `gallery-6` nón lá Phú Cam) + ảnh làng nghề bổ sung.
 */
export const galleryImagePaths = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.png",
  "/images/gallery/gallery-3.png",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  galleryFolderSrc("gom-phuoc-tich", "3 (1).jpg"),
  "/images/gallery/gallery-7.jpg",
  "/images/gallery/gallery-8.png",
] as const;

export const galleryCategories = ["Tất cả", "Lễ hội", "Nghệ nhân", "Workshop", "Không gian làng"] as const;

const rotateCategories = ["Lễ hội", "Nghệ nhân", "Workshop", "Không gian làng"] as const;

export type GalleryItem = {
  title: string;
  category: (typeof rotateCategories)[number];
  image: string;
};

export const galleryItems: GalleryItem[] = galleryImagePaths.map((image, i) => ({
  title: `Ảnh ${i + 1}`,
  category: rotateCategories[i % rotateCategories.length]!,
  image,
}));
