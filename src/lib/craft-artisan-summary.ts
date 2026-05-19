import type { CraftContentBlock, GoogleSitesCraftBundle } from "@/data/google-sites-crafts/types";

const ARTISAN_SECTION_PATTERN = /nghệ nhân tiêu biểu/i;

function blockItems(block: CraftContentBlock): string[] {
  if (block.type === "paragraphs" || block.type === "bullets") return block.items;
  return [];
}

/** Trích toàn bộ đoạn / gạch đầu dòng trong mục «5. Nghệ nhân tiêu biểu» của bundle Google Sites. */
export function extractArtisanItemsFromBundle(bundle: GoogleSitesCraftBundle): string[] {
  const section = bundle.sections.find((s) => ARTISAN_SECTION_PATTERN.test(s.title));
  if (!section?.blocks?.length) return [];

  return section.blocks.flatMap(blockItems);
}

/** Ghép các đoạn từ trang chi tiết (giữ nguyên nội dung nguồn). */
export function joinArtisanItems(items: string[]): string {
  return items.filter(Boolean).join(" ");
}

export function artisanSummaryFromBundle(bundle: GoogleSitesCraftBundle): string {
  return joinArtisanItems(extractArtisanItemsFromBundle(bundle));
}
