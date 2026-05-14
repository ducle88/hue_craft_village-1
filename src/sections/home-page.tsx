"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mouse,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { villages } from "@/data/villages";
import { events } from "@/data/events";
import { homeFeaturedExtraCrafts } from "@/data/home-spotlight-crafts";
import { FadeIn } from "@/components/shared/fade-in";
import { navItemHasChildren, siteNavProminentBar } from "@/lib/site";
import { galleryImagePaths } from "@/data/gallery";

/** Khoảng cách giữa 4 thẻ carousel “Làng nghề nổi bật” (px, khớp `gap-5` ≈ 20px) */
const FEATURED_GAP_PX = 20;

/** Submenu “Chuyên mục khởi nghiệp” — đồng bộ với `siteNavProminentBar` */
const khoiNghiepSubLinks = siteNavProminentBar.flatMap((item) =>
  navItemHasChildren(item) && item.href === "/khoi-nghiep" ? [...item.children] : []
);

/** Submenu “Tư Vấn Hướng Nghiệp” — đồng bộ với `siteNavProminentBar` */
const careerHuongNghiepSubLinks = siteNavProminentBar.flatMap((item) =>
  navItemHasChildren(item) && item.href === "/tu-van-huong-nghiep" ? [...item.children] : []
);

const hueStoryHighlights = [
  { value: "700+", label: "Năm lịch sử" },
  { value: "10+", label: "Làng nghề nổi tiếng" },
  { value: "Hàng trăm", label: "Nghệ nhân tâm huyết" },
] as const;

function SectionTitleLines({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7b1e1e]">{eyebrow}</p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <span className="h-px w-12 max-w-[20%] bg-gradient-to-r from-transparent to-[#c8a96b] sm:w-24" aria-hidden />
        <h2 className="font-heading text-2xl text-[#2f2018] sm:text-3xl md:text-4xl">{title}</h2>
        <span className="h-px w-12 max-w-[20%] bg-gradient-to-l from-transparent to-[#c8a96b] sm:w-24" aria-hidden />
      </div>
    </div>
  );
}

export function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -40]);
  const featuredScrollRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(260);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const featuredCards = [
    ...villages.map((v) => ({
      id: v.slug,
      name: v.name,
      description: v.shortDescription,
      image: v.image,
      href: `/lang-nghe/${v.slug}`,
      external: false,
    })),
    ...homeFeaturedExtraCrafts.map((c) => ({
      id: `extra-${c.name}`.replace(/\s+/g, "-").toLowerCase(),
      name: c.name,
      description: c.description,
      image: c.image,
      href: c.href,
      external: Boolean(c.external),
    })),
  ];

  const syncFeaturedArrows = useCallback(() => {
    const el = featuredScrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < max - 2);
  }, []);

  useLayoutEffect(() => {
    const el = featuredScrollRef.current;
    if (!el) return;
    const measure = () => {
      const cw = el.clientWidth;
      if (cw <= 0) return;
      setCardWidth(Math.max(200, (cw - 3 * FEATURED_GAP_PX) / 4));
      setTimeout(syncFeaturedArrows, 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [syncFeaturedArrows]);

  useLayoutEffect(() => {
    syncFeaturedArrows();
  }, [cardWidth, featuredCards.length, syncFeaturedArrows]);

  const scrollFeatured = (dir: -1 | 1) => {
    const el = featuredScrollRef.current;
    if (!el) return;
    const step = cardWidth + FEATURED_GAP_PX;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
    window.setTimeout(syncFeaturedArrows, 280);
  };

  return (
    <div className="bg-[#fdf9f3] pb-16">
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden md:min-h-[88vh]">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/hero/home-hero.png"
            alt="Không gian làng nghề Huế"
            fill
            priority
            sizes="100vw"
            quality={82}
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f0c]/82 via-[#2a1512]/55 to-transparent" />
        <div className="container-luxury relative flex flex-col pb-10 pt-28 text-[#f5efe6] md:pb-16 md:pt-36">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="max-w-4xl font-heading text-2xl font-semibold leading-[1.5] lg:leading-[1.12] tracking-tight md:text-6xl lg:text-4xl">
              KHÁM PHÁ LÀNG NGHỀ TRUYỀN THỐNG HUẾ
            </h1>
            <p className="mt-5 max-w-3xl text-base text-[#f5efe6]/92 md:text-lg">
            Nơi hội tụ di sản thủ công, hướng nghiệp và cơ hội khởi nghiệp cho thế hệ trẻ.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/lang-nghe"
                className="inline-flex min-w-[10rem] items-center justify-center bg-[#7b1e1e] px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f5efe6] shadow-lg transition hover:bg-[#6a1818]"
              >
                Khám phá ngay
              </Link>
              <Link
                href="/thu-vien-anh"
                className="inline-flex min-w-[10rem] items-center justify-center border-2 border-white/80 bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
              >
                Xem thư viện ảnh
              </Link>
            </div>
          </motion.div>
          <div className="mt-14 flex justify-center md:mt-20">
            <div className="flex flex-col items-center gap-2 text-[#f5efe6]/70">
              <Mouse className="size-6 animate-bounce" aria-hidden />
              <span className="text-[10px] uppercase tracking-[0.2em]">Cuộn xuống</span>
            </div>
          </div>
        </div>
      </section>

      {/* Câu chuyện Huế — 3 cột (chữ | ảnh ngang | số liệu) */}
      <section className="container-luxury py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-x-10 xl:gap-x-14">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b45309]">Câu chuyện Huế</p>
            <h2 className="mt-3 font-heading text-3xl text-[#2f2018] md:text-4xl">Tinh hoa truyền thống xứ Huế</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#3f342e]/95">
              Trải qua hàng trăm năm lịch sử, các làng nghề truyền thống Huế không chỉ lưu giữ kỹ thuật thủ công tinh
              xảo mà còn gìn giữ linh hồn văn hóa của mảnh đất cố đô.
            </p>
            <Link
              href="/gioi-thieu"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#7b1e1e]"
            >
              Tìm hiểu thêm <ArrowRight className="size-4" strokeWidth={1.5} />
            </Link>
          </FadeIn>

          <FadeIn delay={0.08} className="min-w-0 w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border-4 border-[#f5efe6] shadow-xl sm:aspect-[3/2]">
              <Image
                src="/images/hero/nghe-nhan.png"
                alt="Nghệ nhân làng nghề truyền thống Huế"
                fill
                sizes="(max-width:1024px) 100vw, 38vw"
                className="object-cover object-center"
                quality={85}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="flex flex-col gap-0 lg:pl-2">
            {hueStoryHighlights.map(({ value, label }) => (
              <div
                key={label}
                className="border-b border-[#e5d9c8] py-5 first:pt-0 last:border-b-0 last:pb-0"
              >
                <div className="flex min-w-0 flex-col justify-center gap-1">
                  <span className="font-heading text-2xl font-bold leading-tight tracking-tight text-[#c8a96b] sm:text-[1.75rem]">
                    {value}
                  </span>
                  <span className="text-sm font-semibold leading-snug text-[#7b1e1e]">{label}</span>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Làng nghề nổi bật */}
      <section className="border-y border-[#e8dcc8] bg-[#fffaf6] py-16 md:py-20">
        <div className="container-luxury">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1 text-center sm:text-left">
              <SectionTitleLines eyebrow="Khám phá" title="Làng nghề nổi bật" />
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => scrollFeatured(-1)}
                disabled={!canPrev}
                className="flex size-10 items-center justify-center rounded-full border border-[#dccdb8] text-[#5c4033] transition hover:border-[#7b1e1e] hover:text-[#7b1e1e] disabled:pointer-events-none disabled:opacity-35"
                aria-label="Trang trước"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollFeatured(1)}
                disabled={!canNext}
                className="flex size-10 items-center justify-center rounded-full border border-[#dccdb8] text-[#5c4033] transition hover:border-[#7b1e1e] hover:text-[#7b1e1e] disabled:pointer-events-none disabled:opacity-35"
                aria-label="Trang sau"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          <div
            ref={featuredScrollRef}
            onScroll={syncFeaturedArrows}
            className="mt-10 w-full overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-5">
              {featuredCards.map((card) => (
                <article
                  key={card.id}
                  style={{ width: cardWidth, minWidth: cardWidth, flexShrink: 0 }}
                  className="overflow-hidden rounded-lg border border-[#e5d9c8] bg-white shadow-sm"
                >
                  <div className="relative h-48">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-cover"
                      sizes="280px"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-xl text-[#2f2018]">{card.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5c4033]/85">{card.description}</p>
                    <Link
                      href={card.href}
                      {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#7b1e1e]"
                    >
                      {card.external ? "Xem thêm" : "Khám phá"} <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tư vấn hướng nghiệp & Chuyên mục khởi nghiệp (cột trái → phải) */}
      <section className="container-luxury py-16 md:py-20">
        <SectionTitleLines eyebrow="Chuyên mục" title="Tư vấn hướng nghiệp & Khởi nghiệp" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <FadeIn className="flex h-full flex-col rounded-2xl border-2 border-[#7b1e1e]/35 bg-[#fffaf8] p-8 shadow-sm md:p-10">
            <h3 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Tư vấn hướng nghiệp</h3>
            <p className="mt-3 text-sm text-[#5c4033]/85">
              Tư vấn và định hướng nghề nghiệp phù hợp năng lực, sở thích của bạn trên cơ sở khoa học.
            </p>
            <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-lg border border-[#e0d6cc] bg-black shadow-sm ring-1 ring-[#7b1e1e]/10">
              <iframe
                className="absolute inset-0 size-full"
                src="https://www.youtube.com/embed/vC81usgrPWI"
                title="Video tư vấn hướng nghiệp"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <ul className="mt-6 divide-y divide-[#efe5d8] border-y border-[#efe5d8]">
              {careerHuongNghiepSubLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-3 py-3.5 text-left text-sm font-medium text-[#2f2018] transition hover:text-[#7b1e1e]"
                  >
                    <span className="leading-snug">{link.label}</span>
                    <ArrowRight
                      className="size-4 shrink-0 text-[#c8a96b] transition group-hover:translate-x-0.5 group-hover:text-[#7b1e1e]"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
              <Link
                href="/tu-van-huong-nghiep"
                className="inline-flex flex-1 items-center justify-center border border-[#7b1e1e] bg-white py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[#7b1e1e] transition hover:bg-[#7b1e1e] hover:text-white"
              >
                Tìm hiểu thêm
              </Link>
              <Link
                href="/chatbot-huong-nghiep"
                className="inline-flex flex-1 items-center justify-center bg-[#7b1e1e] py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[#f5efe6] transition hover:bg-[#6a1818]"
              >
                Chatbot AI
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.06} className="flex h-full flex-col rounded-2xl border-2 border-[#0B8CB4]/30 bg-[#eff8fc] p-8 shadow-sm md:p-10">
            <h3 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Chuyên mục khởi nghiệp</h3>
            <p className="mt-3 text-sm text-[#5c4033]/85">
              Quy trình, tài liệu và chatbot hỗ trợ bạn hình thành ý tưởng kinh doanh phù hợp.
            </p>
            <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-lg border border-[#c8dce8] bg-black shadow-sm ring-1 ring-[#0B8CB4]/12">
              <iframe
                className="absolute inset-0 size-full"
                src="https://www.youtube.com/embed/QLAsmB68m7I"
                title="Video chuyên mục khởi nghiệp"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <ul className="mt-6 divide-y divide-[#c5e8f4] border-y border-[#c5e8f4]">
              {khoiNghiepSubLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-3 py-3.5 text-left text-sm font-medium text-[#2f2018] transition hover:text-[#0B8CB4]"
                  >
                    <span className="leading-snug">{link.label}</span>
                    <ArrowRight
                      className="size-4 shrink-0 text-[#0B8CB4]/55 transition group-hover:translate-x-0.5 group-hover:text-[#0B8CB4]"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
              <Link
                href="/khoi-nghiep"
                className="inline-flex flex-1 items-center justify-center border border-[#0B8CB4] bg-white py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[#0B8CB4] transition hover:bg-[#0B8CB4] hover:text-[#f5efe6]"
              >
                Tìm hiểu thêm
              </Link>
              <Link
                href="/chatbot-khoi-nghiep"
                className="inline-flex flex-1 items-center justify-center bg-[#0B8CB4] py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[#f5efe6] transition hover:bg-[#086b8d]"
              >
                Chatbot AI
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Thư viện — Video */}
      <section className="border-t border-[#e8dcc8] bg-[#fdf9f3] py-16 md:py-20">
        <div className="container-luxury">
          <SectionTitleLines eyebrow="Thư viện" title="Không gian hình ảnh & video" />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <FadeIn className="flex min-h-0 flex-col lg:h-full">
              <h3 className="shrink-0 font-heading text-xl text-[#2f2018] md:text-2xl">Thư viện ảnh</h3>
              <div className="mt-4 grid min-h-0 flex-1 grid-cols-4 gap-2 lg:grid-rows-2">
                {galleryImagePaths.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-square min-h-0 overflow-hidden rounded-md lg:aspect-auto lg:h-full"
                  >
                    <Image src={src} alt={`Ảnh thư viện ${i + 1}`} fill sizes="120px" className="object-cover" quality={68} />
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.05} className="flex min-h-0 flex-col lg:h-full">
              <h3 className="shrink-0 font-heading text-xl text-[#2f2018] md:text-2xl">Video giới thiệu</h3>
              <div className="relative mt-4 aspect-video w-full shrink-0 overflow-hidden rounded-lg border border-[#e0d6cc] bg-black shadow-sm ring-1 ring-[#7b1e1e]/10">
                <iframe
                  className="absolute inset-0 size-full"
                  src="https://www.youtube.com/embed/GrkZOiMwdOQ"
                  title="Video giới thiệu Huế Craft Village"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <p className="mt-3 text-xs text-[#5c4033]/75">
                Video giới thiệu trên{" "}
                <a
                  href="https://www.youtube.com/watch?v=GrkZOiMwdOQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-[#e0d6c9] bg-[#faf7f2] px-2 py-0.5 font-medium text-[#7b1e1e] underline-offset-2 transition hover:border-[#d4c4b0] hover:bg-white hover:underline"
                >
                  YouTube
                </a>
                .
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sự kiện nổi bật */}
      <section className="container-luxury py-16 md:py-20">
        <SectionTitleLines eyebrow="Lịch hoạt động" title="Sự kiện nổi bật" />
        <div className="mt-10 flex flex-col gap-4">
          {events.map((ev, idx) => (
            <FadeIn key={ev.title} delay={idx * 0.05}>
              <article className="flex flex-col overflow-hidden rounded-lg border border-[#e5d9c8] bg-white shadow-sm sm:flex-row">
                <div className="flex shrink-0 flex-col items-center justify-center gap-0.5 bg-[#7b1e1e] px-6 py-6 text-center text-[#f5efe6] sm:w-28 sm:py-8">
                  <span className="font-heading text-3xl leading-none">{ev.day}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest">{ev.month}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest tabular-nums text-[#f5efe6]">
                    {ev.sortDate.slice(0, 4)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                  <h4 className="font-heading text-xl text-[#2f2018] md:text-2xl">{ev.title}</h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#7b1e1e]">{ev.dateRange}</p>
                  <p className="mt-2 text-sm text-[#5c4033]/85">{ev.description}</p>
                  <p className="mt-2 text-xs text-[#5c4033]/65">{ev.location}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tin-tuc" className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7b1e1e]">
            Xem tin tức & sự kiện →
          </Link>
        </div>
      </section>
    </div>
  );
}
