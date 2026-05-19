import craftVillageYoutube from "@/data/craft-village-youtube.json";
import { craftVillageGalleryBySlug } from "@/data/craft-village-galleries";
import { villages } from "@/data/villages";

export type GalleryImageItem = {
  type: "image";
  slug: string;
  villageName: string;
  title: string;
  src: string;
  alt: string;
};

export type GalleryVideoItem = {
  type: "video";
  slug: string;
  villageName: string;
  title: string;
  videoId: string;
};

export type GalleryVillageSection = {
  slug: string;
  name: string;
  category: string;
  pageHref: string;
  images: GalleryImageItem[];
  videos: GalleryVideoItem[];
};

const GALLERY_BY_SLUG = craftVillageGalleryBySlug;

const YOUTUBE_BY_SLUG = craftVillageYoutube as Record<string, { videoId: string; title: string }[]>;

function buildSection(v: (typeof villages)[number]): GalleryVillageSection {
  const gallery = GALLERY_BY_SLUG[v.slug] ?? [];
  const youtube = YOUTUBE_BY_SLUG[v.slug] ?? [];

  return {
    slug: v.slug,
    name: v.name,
    category: v.category,
    pageHref: `/lang-nghe/${v.slug}`,
    images: gallery.map((img, i) => ({
      type: "image" as const,
      slug: v.slug,
      villageName: v.name,
      title: img.alt || `${v.name} — ảnh ${i + 1}`,
      src: img.src,
      alt: img.alt,
    })),
    videos: youtube.map((vid) => ({
      type: "video" as const,
      slug: v.slug,
      villageName: v.name,
      title: vid.title,
      videoId: vid.videoId,
    })),
  };
}

/** Các mục làng nghề — thứ tự đồng bộ `villages.ts`. */
export const galleryVillageSections: GalleryVillageSection[] = villages.map(buildSection);

export const galleryVillageCategories = ["Tất cả", ...villages.map((v) => v.name)] as const;

export type GalleryVillageCategory = (typeof galleryVillageCategories)[number];

export function getGallerySectionsForCategory(category: GalleryVillageCategory): GalleryVillageSection[] {
  if (category === "Tất cả") return galleryVillageSections;
  return galleryVillageSections.filter((s) => s.name === category);
}

export function flattenGalleryImages(sections: GalleryVillageSection[]): GalleryImageItem[] {
  return sections.flatMap((s) => s.images);
}
