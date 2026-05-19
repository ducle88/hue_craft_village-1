import {
  dengALuoiCraftBundle,
  gomPhuocTichCraftBundle,
  langHuongThuyXuanCraftBundle,
  longCungDinhHueCraftBundle,
  quatGiayBaoVinhCraftBundle,
  tranhLangSinhCraftBundle,
} from "@/data/google-sites-crafts/generated-craft-bundles";
import { hoaGiayThanhTienArticle } from "@/data/hoa-giay-thanh-tien";
import { artisanSummaryFromBundle } from "@/lib/craft-artisan-summary";
import { villages } from "@/data/villages";

const CRAFT_BUNDLE_BY_SLUG = {
  "lang-huong-thuy-xuan": langHuongThuyXuanCraftBundle,
  "gom-phuoc-tich": gomPhuocTichCraftBundle,
  "deng-a-luoi": dengALuoiCraftBundle,
  "tranh-lang-sinh": tranhLangSinhCraftBundle,
  "quat-giay-bao-vinh": quatGiayBaoVinhCraftBundle,
  "long-cung-dinh-hue": longCungDinhHueCraftBundle,
} as const;

function artisanSummaryFromHoaGiayThanhTien(): string {
  const { intro, highlights, households } = hoaGiayThanhTienArticle.artisans;
  const highlightLines = highlights.map((h) => `Nghệ nhân ${h.name} — ${h.note}`);
  return [intro, ...highlightLines, households].join(" ");
}

/** Nội dung «Nghệ nhân tiêu biểu» đồng bộ với trang chi tiết từng làng (`/lang-nghe/[slug]`). */
export function getVillageArtisanSummary(slug: string): string {
  if (slug === "hoa-giay-thanh-tien") {
    return artisanSummaryFromHoaGiayThanhTien();
  }

  const bundle = CRAFT_BUNDLE_BY_SLUG[slug as keyof typeof CRAFT_BUNDLE_BY_SLUG];
  if (!bundle) return "";

  return artisanSummaryFromBundle(bundle);
}

/** Map slug → tóm tắt (build-time, dùng trên trang listing). */
export const villageArtisanSummaryBySlug: Record<string, string> = Object.fromEntries(
  villages.map((v) => [v.slug, getVillageArtisanSummary(v.slug)])
);
