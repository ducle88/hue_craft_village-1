/** Ảnh thư viện — đồng bộ với public/images/gallery/gom-phuoc-tich/ */
const GOM_PHUOC_TICH_GALLERY_FILES = [
  "01.png",
  "3 (1).jpg",
  "3 (1).png",
  "3 (2).jpg",
  "3 (3).png",
  "3 (4).png",
] as const;

function galleryPublicSrc(filename: string) {
  return `/images/gallery/gom-phuoc-tich/${encodeURIComponent(filename)}`;
}

export const gomPhuocTichGalleryImages = GOM_PHUOC_TICH_GALLERY_FILES.map((file, i) => ({
  src: galleryPublicSrc(file),
  alt: `Làng gốm Phước Tích — ảnh thư viện ${i + 1}`,
}));
