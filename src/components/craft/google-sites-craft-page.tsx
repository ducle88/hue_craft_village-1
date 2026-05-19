import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { hueCraftVillageSiteCredits } from "@/data/google-sites-crafts/credits";
import type { CraftContentBlock, GoogleSitesCraftBundle } from "@/data/google-sites-crafts/types";
import { villages } from "@/data/villages";

function mapsEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=vi&z=14&output=embed`;
}

function mapsOpenUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderBlocks(blocks: CraftContentBlock[]) {
  return blocks.map((b, bi) => {
    if (b.type === "paragraphs") {
      return (
        <div key={bi} className="space-y-3">
          {b.items.map((p, pi) => (
            <p key={pi} className="leading-relaxed text-[#5c4033]/90">
              {p}
            </p>
          ))}
        </div>
      );
    }
    return (
      <ul key={bi} className="mt-3 list-inside list-disc space-y-2 text-[#5c4033]/90">
        {b.items.map((line) => (
          <li key={line} className="leading-relaxed marker:text-[#7b1e1e]">
            {line}
          </li>
        ))}
      </ul>
    );
  });
}

type Props = {
  bundle: GoogleSitesCraftBundle;
};

export function GoogleSitesCraftPage({ bundle }: Props) {
  const b = bundle;
  const village = b.villageSlug ? villages.find((v) => v.slug === b.villageSlug) : undefined;
  const embedSrc = mapsEmbedUrl(b.mapSearchQuery);
  const openHref = mapsOpenUrl(b.mapSearchQuery);

  return (
    <div className="container-luxury space-y-10 py-10">
      <FadeIn className="card-luxury overflow-hidden">
        <div className="relative h-72 w-full md:h-80">
          <Image
            src={b.heroImage}
            alt={b.heroTitle}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2f2018]/85 via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f5efe6]/90">{b.categoryEyebrow}</p>
            <h1 className="font-heading mt-2 text-4xl text-[#f5efe6] md:text-5xl">{b.heroTitle}</h1>
            {b.heroSubtitle ? (
              <p className="mt-2 text-lg font-medium text-[#f5efe6]/95">{b.heroSubtitle}</p>
            ) : null}
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#f5efe6]/90 md:text-base">{b.heroTagline}</p>
          </div>
        </div>
        <div className="border-t border-[#d9c8b2] bg-[#fffaf4] p-6 md:p-8">
          {b.introCardParagraphs.map((p, i) => (
            <p key={i} className={i > 0 ? "mt-3 leading-relaxed text-[#5c4033]/85" : "leading-relaxed text-[#5c4033]/85"}>
              {p}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/lang-nghe" className="font-semibold text-[#7b1e1e] underline-offset-4 hover:underline">
              ← Tất cả làng nghề
            </Link>
            <span className="text-[#5c4033]/80">
              Nội dung & ảnh minh họa tham chiếu dự án Huế Craft Village 4.0 — đã lưu trong mã nguồn website này.
            </span>
          </div>
        </div>
      </FadeIn>

      {b.sections.map((sec, si) => (
        <FadeIn key={sec.title} className="card-luxury p-6 md:p-8" delay={Math.min(0.04 * (si + 1), 0.2)}>
          <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">{sec.title}</h2>
          {sec.blocks?.length ? <div className="mt-4 space-y-4">{renderBlocks(sec.blocks)}</div> : null}
          {sec.subsections?.map((sub, subIdx) => (
            <div
              key={sub.title}
              className={subIdx === 0 ? "mt-4 space-y-4" : "mt-8 border-t border-[#d9c8b2]/60 pt-6 space-y-4"}
            >
              <h3 className="font-heading text-xl text-[#5c4033]">{sub.title}</h3>
              <div className="space-y-4">{renderBlocks(sub.blocks)}</div>
            </div>
          ))}
        </FadeIn>
      ))}

      {village ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn className="card-luxury p-6 md:p-8" delay={0.12}>
            <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Trải nghiệm nổi bật</h2>
            <ul className="mt-4 space-y-2 text-[#5c4033]/90">
              {village.experiences.map((item) => (
                <li key={item} className="flex gap-2 leading-relaxed">
                  <span className="text-[#7b1e1e]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn className="card-luxury p-6 md:p-8" delay={0.14}>
            <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Gợi ý tham quan</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5c4033]/80">
              Kết hợp nội dung trang dự án với lịch trình thực tế khi đến {village.name}.
            </p>
          </FadeIn>
        </div>
      ) : null}

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.15}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Thư viện</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#5c4033]/75">
          Video và ảnh minh họa từ dự án Huế Craft Village 4.0 — lưu trong mã nguồn website, không tải từ Google Sites khi bạn xem trang.
        </p>

        <h3 className="font-heading mt-8 text-xl text-[#5c4033]">Video</h3>
        {b.youtubeEmbeds.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {b.youtubeEmbeds.map((vid) => (
              <div
                key={vid.videoId}
                className={`overflow-hidden rounded-xl border border-[#d9c8b2]${b.youtubeEmbeds.length === 1 ? " lg:col-span-2 lg:mx-auto lg:max-w-3xl lg:w-full" : ""}`}
              >
                <div className="aspect-video w-full">
                  <iframe
                    title={vid.title}
                    src={`https://www.youtube-nocookie.com/embed/${vid.videoId}`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p className="border-t border-[#d9c8b2] bg-white/70 px-4 py-2 text-sm text-[#5c4033]/85">{vid.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-lg border border-[#d9c8b2] bg-white/60 p-4 text-sm leading-relaxed text-[#5c4033]/85">
            Trang gốc có thể có mục <strong className="text-[#2f2018]">Embedded Files</strong> nhưng ID YouTube không có trong bản tải tĩnh. Thêm{" "}
            <code className="rounded bg-[#efe5d8] px-1 text-xs">youtubeEmbeds</code> trong file bundle dữ liệu để nhúng video tại đây.
          </div>
        )}

        <h3 className="font-heading mt-10 text-xl text-[#5c4033]">Ảnh</h3>
        {b.galleryFromSource.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {b.galleryFromSource.map((img, i) => (
              <div key={img.src} className="overflow-hidden rounded-xl border border-[#d9c8b2] bg-white/70 p-2 shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <p className="mt-2 px-1 text-xs text-[#5c4033]/70">Ảnh {i + 1} — Huế Craft Village 4.0 (lưu trong dự án)</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-[#5c4033]/75">
            Chưa có ảnh minh họa trong bundle — chạy lại script build craft hoặc thêm tệp vào{" "}
            <code className="rounded bg-[#efe5d8] px-1 text-xs">public/images/crafts/</code>.
          </p>
        )}
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.155}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Bản đồ</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#5c4033]/75">
          Bản đồ nhúng theo địa danh trong bài (tìm kiếm trên Google Maps).
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-[#d9c8b2] bg-[#efe5d8] shadow-inner">
          <iframe
            title={`Bản đồ: ${b.pageTitle}`}
            src={embedSrc}
            className="aspect-video w-full min-h-[260px] border-0 md:min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          href={openHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-[#7b1e1e] underline-offset-4 hover:underline"
        >
          Mở trong Google Maps ↗
        </a>
      </FadeIn>

      <FadeIn className="card-luxury border border-[#d9c8b2] bg-[#faf7f2] p-6 text-sm text-[#5c4033]/85" delay={0.18}>
        <p className="font-semibold text-[#2f2018]">Ghi nhận nội dung dự án</p>
        <p className="mt-2">{hueCraftVillageSiteCredits.builders}</p>
        <p className="mt-1">{hueCraftVillageSiteCredits.teachers}</p>
        <p className="mt-1">{hueCraftVillageSiteCredits.organization}</p>
      </FadeIn>
    </div>
  );
}
