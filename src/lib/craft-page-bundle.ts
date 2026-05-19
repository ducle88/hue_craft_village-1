import type { GoogleSitesCraftBundle } from "@/data/google-sites-crafts/types";
import craftVillageYoutube from "@/data/craft-village-youtube.json";
import {
  dengALuoiGalleryImages,
  hoaGiayThanhTienGalleryImages,
  langHuongThuyXuanGalleryImages,
  longCungDinhHueGalleryImages,
  quatGiayBaoVinhGalleryImages,
  tranhLangSinhGalleryImages,
} from "@/data/craft-village-galleries";
import { gomPhuocTichGalleryImages } from "@/data/gom-phuoc-tich-gallery";

export type CraftVillageSlug =
  | "lang-huong-thuy-xuan"
  | "hoa-giay-thanh-tien"
  | "deng-a-luoi"
  | "tranh-lang-sinh"
  | "quat-giay-bao-vinh"
  | "long-cung-dinh-hue"
  | "gom-phuoc-tich";

const GALLERY_BY_SLUG: Record<CraftVillageSlug, { src: string; alt: string }[]> = {
  "lang-huong-thuy-xuan": langHuongThuyXuanGalleryImages,
  "hoa-giay-thanh-tien": hoaGiayThanhTienGalleryImages,
  "deng-a-luoi": dengALuoiGalleryImages,
  "tranh-lang-sinh": tranhLangSinhGalleryImages,
  "quat-giay-bao-vinh": quatGiayBaoVinhGalleryImages,
  "long-cung-dinh-hue": longCungDinhHueGalleryImages,
  "gom-phuoc-tich": gomPhuocTichGalleryImages,
};

type YoutubeEmbed = { videoId: string; title: string };

/** Gắn ảnh `public/images/gallery/` và video YouTube (từ trang Google Sites gốc). */
export function withCraftVillageMedia(
  bundle: GoogleSitesCraftBundle,
  slug: CraftVillageSlug,
  options?: { gallery?: { src: string; alt: string }[] }
): GoogleSitesCraftBundle {
  const gallery = options?.gallery ?? GALLERY_BY_SLUG[slug];
  const youtube = (craftVillageYoutube as Record<string, YoutubeEmbed[]>)[slug] ?? bundle.youtubeEmbeds;

  return {
    ...bundle,
    galleryFromSource: gallery.length > 0 ? gallery : bundle.galleryFromSource,
    youtubeEmbeds: youtube.length > 0 ? youtube : bundle.youtubeEmbeds,
  };
}
