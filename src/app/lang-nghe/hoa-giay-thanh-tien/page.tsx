import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { hueCraftVillageSiteCredits } from "@/data/google-sites-crafts/credits";
import {
  hoaGiayThanhTienArticle,
  hoaGiayThanhTienMedia,
} from "@/data/hoa-giay-thanh-tien";
import { villages, type Village } from "@/data/villages";

function getThanhTienVillage(): Village {
  const v = villages.find((x) => x.slug === "hoa-giay-thanh-tien");
  if (!v) {
    throw new Error("Thiếu bản ghi làng nghề hoa-giay-thanh-tien trong villages.");
  }
  return v;
}

const village = getThanhTienVillage();

export const metadata: Metadata = {
  title: `${village.name} — Làng nghề Huế`,
  description: village.shortDescription,
};

export default function HoaGiayThanhTienPage() {
  const a = hoaGiayThanhTienArticle;
  const m = hoaGiayThanhTienMedia;
  const mapsOpenUrl =
    "https://www.google.com/maps/search/?api=1&query=L%C3%A0ng+hoa+gi%E1%BA%A5y+Thanh+Ti%C3%AAn%2C+D%C6%B0%C6%A1ng+N%E1%BB%97%2C+Hu%E1%BA%BF";

  return (
    <div className="container-luxury space-y-10 py-10">
      <FadeIn className="card-luxury overflow-hidden">
        <div className="relative h-72 w-full md:h-80">
          <Image
            src={village.image}
            alt={village.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2f2018]/85 via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f5efe6]/90">{village.category}</p>
            <h1 className="font-heading mt-2 text-4xl text-[#f5efe6] md:text-5xl">Nghề làm hoa giấy Thanh Tiên</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#f5efe6]/90 md:text-base">{village.shortDescription}</p>
          </div>
        </div>
        <div className="border-t border-[#d9c8b2] bg-[#fffaf4] p-6 md:p-8">
          <p className="leading-relaxed text-[#5c4033]/85">{village.description}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/lang-nghe" className="font-semibold text-[#7b1e1e] underline-offset-4 hover:underline">
              ← Tất cả làng nghề
            </Link>
            <span className="text-[#5c4033]/80">
              Nội dung tham chiếu dự án Huế Craft Village 4.0 — đã lưu trong mã nguồn website này.
            </span>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8">
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">{a.position.title}</h2>
        <div className="mt-4 space-y-3 text-[#5c4033]/90">
          {a.position.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.04}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">{a.history.title}</h2>
        <div className="mt-4 space-y-3 text-[#5c4033]/90">
          {a.history.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.06}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">{a.products.title}</h2>
        <h3 className="mt-6 font-heading text-xl text-[#5c4033]">{a.products.mainTitle}</h3>
        <p className="mt-3 leading-relaxed text-[#5c4033]/90">{a.products.mainIntro}</p>
        <ul className="mt-3 list-inside list-disc space-y-2 text-[#5c4033]/90">
          {a.products.mainUses.map((line) => (
            <li key={line} className="leading-relaxed marker:text-[#7b1e1e]">
              {line}
            </li>
          ))}
        </ul>
        <h3 className="mt-8 font-heading text-xl text-[#5c4033]">{a.products.processTitle}</h3>
        <p className="mt-3 leading-relaxed text-[#5c4033]/90">{a.products.processIntro}</p>
        <ul className="mt-3 space-y-2 text-[#5c4033]/90">
          {a.products.processSteps.map((step) => (
            <li key={step} className="flex gap-2 leading-relaxed">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#7b1e1e]" aria-hidden />
              <span>{step}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-lg border border-[#d9c8b2] bg-white/60 p-4 text-sm leading-relaxed text-[#5c4033]/85">
          {a.products.productivityNote}
        </p>
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.08}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">{a.development.title}</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-heading text-lg text-[#7b1e1e]">{a.development.tourism.subtitle}</h3>
            <p className="mt-2 leading-relaxed text-[#5c4033]/90">{a.development.tourism.text}</p>
          </div>
          <div>
            <h3 className="font-heading text-lg text-[#7b1e1e]">{a.development.promotion.subtitle}</h3>
            <p className="mt-2 leading-relaxed text-[#5c4033]/90">{a.development.promotion.text}</p>
          </div>
          <p className="leading-relaxed text-[#5c4033]/90">{a.development.closing}</p>
        </div>
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-2">
        <FadeIn className="card-luxury p-6 md:p-8" delay={0.1}>
          <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">{a.artisans.title}</h2>
          <p className="mt-4 leading-relaxed text-[#5c4033]/90">{a.artisans.intro}</p>
          <ul className="mt-4 space-y-4 text-[#5c4033]/90">
            {a.artisans.highlights.map((h) => (
              <li key={h.name} className="leading-relaxed">
                <span className="font-semibold text-[#2f2018]">{h.name}</span>
                {" — "}
                {h.note}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-[#5c4033]/80">{a.artisans.households}</p>
        </FadeIn>
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
      </div>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.14}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">{a.culture.title}</h2>
        <div className="mt-6 space-y-6">
          {a.culture.sections.map((s) => (
            <div key={s.subtitle}>
              <h3 className="font-heading text-lg text-[#7b1e1e]">{s.subtitle}</h3>
              <p className="mt-2 leading-relaxed text-[#5c4033]/90">{s.text}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.145}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Thư viện</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#5c4033]/75">
          Video và ảnh minh họa lưu trong dự án website (thư viện chi tiết có thể mở rộng trong{" "}
          <code className="rounded bg-[#efe5d8] px-1 text-xs">public/images/crafts/hoa-giay-thanh-tien/</code>
          ).
        </p>

        <h3 className="font-heading mt-8 text-xl text-[#5c4033]">Video</h3>
        {m.youtubeEmbeds.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {m.youtubeEmbeds.map((vid) => (
              <div
                key={vid.videoId}
                className={`overflow-hidden rounded-xl border border-[#d9c8b2]${m.youtubeEmbeds.length === 1 ? " lg:col-span-2 lg:mx-auto lg:max-w-3xl lg:w-full" : ""}`}
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
            Trang gốc có thể có mục <strong className="text-[#2f2018]">Embedded Files</strong> nhưng ID YouTube không xuất hiện trong HTML tĩnh khi tải trang.
            Khi có ID video YouTube cố định, thêm vào{" "}
            <code className="rounded bg-[#efe5d8] px-1 text-xs">youtubeEmbeds</code> trong{" "}
            <code className="rounded bg-[#efe5d8] px-1 text-xs">src/data/hoa-giay-thanh-tien.ts</code> để hiển thị nhúng tại đây.
          </div>
        )}

        <h3 className="font-heading mt-10 text-xl text-[#5c4033]">Ảnh</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {m.galleryFromSource.map((img, i) => (
            <div key={`${img.src}-${i}`} className="overflow-hidden rounded-xl border border-[#d9c8b2] bg-white/70 p-2 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <p className="mt-2 px-1 text-xs text-[#5c4033]/70">Ảnh {i + 1} — Huế Craft Village 4.0 (lưu trong dự án)</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.15}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Bản đồ</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#5c4033]/75">
          Bản đồ nhúng theo địa danh trong bài (Phường Dương Nỗ / làng hoa giấy Thanh Tiên).
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-[#d9c8b2] bg-[#efe5d8] shadow-inner">
          <iframe
            title="Bản đồ làng hoa giấy Thanh Tiên, Huế"
            src={m.mapEmbedUrl}
            className="aspect-video w-full min-h-[260px] border-0 md:min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          href={mapsOpenUrl}
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
