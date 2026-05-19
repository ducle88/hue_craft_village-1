import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { isExternalHref } from "@/lib/nav";
import { hueCraftVillageSiteCredits } from "@/data/google-sites-crafts/credits";
import type { CareerContentBlock, CareerCounselingPageData } from "@/data/career-counseling/types";
import { startupGuideNavItems } from "@/data/startup-counseling/pages";

function renderBlocks(blocks: CareerContentBlock[]) {
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
    if (b.type === "bullets") {
      return (
        <ul key={bi} className="mt-3 list-inside list-disc space-y-2 text-[#5c4033]/90">
          {b.items.map((line) => (
            <li key={line} className="leading-relaxed marker:text-[#0B8CB4]">
              {line}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <ul key={bi} className="mt-4 space-y-4">
        {b.items.map((link) => (
          <li key={link.href} className="rounded-xl border border-[#c8dce8] bg-white/70 p-4">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0B8CB4] underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
            {link.description ? (
              <p className="mt-2 text-sm leading-relaxed text-[#5c4033]/85">{link.description}</p>
            ) : null}
            <p className="mt-1 truncate text-xs text-[#5c4033]/60">{link.href}</p>
          </li>
        ))}
      </ul>
    );
  });
}

type Props = {
  page: CareerCounselingPageData;
};

export function StartupGuidePage({ page }: Props) {
  return (
    <div className="container-luxury space-y-10 py-10">
      <FadeIn className="card-luxury p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0B8CB4]">{page.eyebrow}</p>
        <h1 className="font-heading mt-2 text-3xl text-[#2f2018] md:text-4xl">{page.title}</h1>
        <div className="mt-4 space-y-3">
          {page.introParagraphs.map((para, i) => (
            <p
              key={i}
              className={
                i === 0 && para === para.toUpperCase()
                  ? "text-sm font-semibold uppercase tracking-wide text-[#0B8CB4]"
                  : "leading-relaxed text-[#5c4033]/90"
              }
            >
              {para}
            </p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/khoi-nghiep" className="font-semibold text-[#0B8CB4] underline-offset-4 hover:underline">
            ← Chuyên mục khởi nghiệp
          </Link>
        </div>
      </FadeIn>

      {page.sections.map((sec, i) => (
        <FadeIn key={sec.title} delay={0.04 + i * 0.03} className="card-luxury p-6 md:p-8">
          <h2 className="font-heading text-xl text-[#2f2018] md:text-2xl">{sec.title}</h2>
          <div className="mt-4">{renderBlocks(sec.blocks)}</div>
        </FadeIn>
      ))}

      {page.externalLinks && page.externalLinks.length > 0 ? (
        <FadeIn className="card-luxury p-6 md:p-8" delay={0.12}>
          <h2 className="font-heading text-xl text-[#2f2018] md:text-2xl">Liên kết tham khảo</h2>
          <ul className="mt-4 space-y-3">
            {page.externalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-semibold text-[#0B8CB4] underline-offset-4 hover:underline"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      ) : null}

      {page.cta ? (
        <FadeIn className="card-luxury border border-[#0B8CB4]/20 bg-[#f4fafc] p-6 md:p-8" delay={0.14}>
          <h2 className="font-heading text-xl text-[#2f2018]">Trải nghiệm ngay</h2>
          {page.cta.description ? <p className="mt-2 text-[#5c4033]/85">{page.cta.description}</p> : null}
          {isExternalHref(page.cta.href) ? (
            <a
              href={page.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[#0B8CB4] px-6 py-3 text-sm font-medium text-[#f5efe6] transition hover:bg-[#086b8d]"
            >
              {page.cta.label} ↗
            </a>
          ) : (
            <Link
              href={page.cta.href}
              className="mt-4 inline-flex rounded-full bg-[#0B8CB4] px-6 py-3 text-sm font-medium text-[#f5efe6] transition hover:bg-[#086b8d]"
            >
              {page.cta.label}
            </Link>
          )}
        </FadeIn>
      ) : null}

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.16}>
        <h2 className="font-heading text-lg text-[#2f2018]">Các mục khác</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {startupGuideNavItems
            .filter((item) => !item.href.endsWith(`/${page.slug}`))
            .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg border border-[#c8dce8] bg-white/60 px-4 py-3 text-sm text-[#5c4033]/90 transition hover:border-[#0B8CB4]/40 hover:bg-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </FadeIn>

      <FadeIn className="card-luxury border border-[#c8dce8] bg-[#f4fafc] p-6 text-sm text-[#5c4033]/85" delay={0.18}>
        <p className="font-semibold text-[#2f2018]">Ghi nhận nội dung dự án</p>
        <p className="mt-2">{hueCraftVillageSiteCredits.builders}</p>
        <p className="mt-1">{hueCraftVillageSiteCredits.teachers}</p>
        <p className="mt-1">{hueCraftVillageSiteCredits.organization}</p>
      </FadeIn>
    </div>
  );
}
