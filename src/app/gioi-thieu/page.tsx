import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { hueCraftVillageSiteCredits } from "@/data/google-sites-crafts/credits";
import {
  traditionalCraftsIntro,
  traditionalCraftsIntroSourceUrl,
} from "@/data/traditional-crafts-intro";
import { villages } from "@/data/villages";

export const metadata: Metadata = {
  title: traditionalCraftsIntro.pageTitle,
  description:
    "Tìm hiểu làng nghề truyền thống cố đô Huế: lịch sử dưới triều Nguyễn, sáu nhóm nghề chính và giá trị văn hóa — Huế Craft Village 4.0.",
};

export default function AboutPage() {
  const content = traditionalCraftsIntro;

  return (
    <div className="container-luxury space-y-10 py-10">
      <FadeIn className="card-luxury overflow-hidden">
        <div className="relative min-h-56 w-full md:min-h-72">
          <Image
            src="/images/hero/home-hero.png"
            alt="Làng nghề truyền thống Huế"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2f2018]/90 via-[#2f2018]/45 to-[#2f2018]/20" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f5efe6]/90">{content.eyebrow}</p>
            <h1 className="font-heading mt-2 max-w-4xl text-3xl text-[#f5efe6] md:text-5xl">{content.pageTitle}</h1>
          </div>
        </div>
        <div className="space-y-4 border-t border-[#d9c8b2] bg-[#fffaf4] p-6 md:p-8">
          {content.introParagraphs.map((paragraph, i) => (
            <p key={i} className="max-w-4xl leading-relaxed text-[#5c4033]/90">
              {paragraph}
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.04}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Sáu nhóm làng nghề chính</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {content.craftGroups.map((group) => (
            <article
              key={group.number}
              className="rounded-xl border border-[#d9c8b2] bg-white/70 p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7b1e1e]">
                Nhóm {group.number}
              </p>
              <h3 className="font-heading mt-2 text-lg text-[#2f2018]">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5c4033]/85">{group.description}</p>
            </article>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.06}>
        <div className="space-y-4">
          {content.closingParagraphs.map((paragraph, i) => (
            <p key={i} className="max-w-4xl leading-relaxed text-[#5c4033]/90">
              {paragraph}
            </p>
          ))}
        </div>
        <Link
          href="/lang-nghe"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7b1e1e] px-6 py-3 text-sm font-medium text-[#f5efe6] transition hover:bg-[#5c1515]"
        >
          Khám phá làng nghề trên website
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </FadeIn>

      <FadeIn className="card-luxury overflow-hidden" delay={0.08}>
        <div className="relative aspect-[16/9] w-full max-h-80 bg-[#efe5d8] md:max-h-96">
          <Image
            src="/images/hero/nghe-nhan.png"
            alt="Nghệ nhân làng nghề Huế"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 960px"
          />
        </div>
        <figcaption className="border-t border-[#d9c8b2] bg-[#faf7f2] px-6 py-4 text-sm leading-relaxed text-[#5c4033]/85 md:px-8">
          <p>{content.archiveNote.caption}</p>
          <p className="mt-2 text-xs text-[#5c4033]/70">{content.archiveNote.source}</p>
        </figcaption>
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.1}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Làng nghề trên Huế Craft Village 4.0</h2>
        <p className="mt-3 max-w-3xl text-[#5c4033]/85">
          Website giới thiệu chi tiết {villages.length} làng nghề tiêu biểu với hình ảnh, video và nội dung tư vấn hướng
          nghiệp — khởi nghiệp.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {villages.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/lang-nghe/${v.slug}`}
                className="block rounded-xl border border-[#d9c8b2] bg-white/60 px-4 py-3 text-sm text-[#2f2018] transition hover:border-[#7b1e1e]/40 hover:bg-white hover:shadow-sm"
              >
                <span className="font-medium">{v.name}</span>
                <span className="mt-0.5 block text-xs text-[#5c4033]/70">{v.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn className="card-luxury border border-[#d9c8b2] bg-[#faf7f2] p-6 text-sm text-[#5c4033]/85 md:p-8" delay={0.12}>
        <p className="font-semibold text-[#2f2018]">Ghi nhận nội dung dự án</p>
        <p className="mt-2">👨‍🏫 Xây dựng nội dung: {hueCraftVillageSiteCredits.builders}</p>
        <p className="mt-1">{hueCraftVillageSiteCredits.teachers}</p>
        <p className="mt-1">🏫 {hueCraftVillageSiteCredits.organization}</p>
        <p className="mt-4 text-xs text-[#5c4033]/70">
          Nội dung tham chiếu:{" "}
          <a
            href={traditionalCraftsIntroSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#7b1e1e] underline-offset-2 hover:underline"
          >
            Huế Craft Village 4.0 — Làng nghề truyền thống (Google Sites) ↗
          </a>
        </p>
      </FadeIn>
    </div>
  );
}
