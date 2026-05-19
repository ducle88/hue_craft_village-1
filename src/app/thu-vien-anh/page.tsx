"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  flattenGalleryImages,
  galleryVillageCategories,
  getGallerySectionsForCategory,
  type GalleryImageItem,
  type GalleryVillageCategory,
} from "@/data/craft-village-media-library";

export default function GalleryPage() {
  const [category, setCategory] = useState<GalleryVillageCategory>("Tất cả");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const sections = useMemo(() => getGallerySectionsForCategory(category), [category]);
  const flatImages = useMemo(() => flattenGalleryImages(sections), [sections]);
  const selectedItem = selectedIndex === null ? null : flatImages[selectedIndex];
  const total = flatImages.length;

  const openLightbox = (item: GalleryImageItem) => {
    const idx = flatImages.findIndex((img) => img.src === item.src);
    if (idx >= 0) {
      setIsImageLoading(true);
      setSelectedIndex(idx);
    }
  };

  const showPrev = () => {
    if (selectedIndex === null || total === 0) return;
    setIsImageLoading(true);
    setSelectedIndex((selectedIndex - 1 + total) % total);
  };

  const showNext = () => {
    if (selectedIndex === null || total === 0) return;
    setIsImageLoading(true);
    setSelectedIndex((selectedIndex + 1) % total);
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, total]);

  const totalImages = flatImages.length;
  const totalVideos = sections.reduce((n, s) => n + s.videos.length, 0);

  return (
    <div className="container-luxury space-y-10 py-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b1e1e]">Thư viện</p>
        <h1 className="font-heading mt-2 text-4xl text-[#2f2018] md:text-5xl">Thư viện ảnh &amp; video</h1>
        <p className="mt-3 max-w-3xl text-[#5c4033]/85">
          Toàn bộ hình ảnh và video từ các trang làng nghề Huế Craft Village 4.0, chia theo từng làng nghề.
        </p>
        <p className="mt-2 text-sm text-[#5c4033]/70">
          {totalImages} ảnh · {totalVideos} video · {sections.length} làng nghề
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {galleryVillageCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setCategory(item);
              setSelectedIndex(null);
            }}
            className={`rounded-full px-4 py-2 text-sm transition ${
              item === category ? "bg-[#7b1e1e] text-[#f5efe6]" : "bg-white/70 text-[#5c4033] hover:bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {sections.map((section) => (
        <section key={section.slug} className="scroll-mt-28 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#e5d9c8] pb-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[#7b1e1e]/80">{section.category}</p>
              <h2 className="font-heading mt-1 text-2xl text-[#2f2018] md:text-3xl">{section.name}</h2>
              <p className="mt-1 text-sm text-[#5c4033]/75">
                {section.images.length} ảnh
                {section.videos.length > 0 ? ` · ${section.videos.length} video` : ""}
              </p>
            </div>
            <Link
              href={section.pageHref}
              className="inline-flex rounded-full border border-[#7b1e1e] px-4 py-2 text-sm font-medium text-[#7b1e1e] transition hover:bg-[#7b1e1e] hover:text-[#f5efe6]"
            >
              Xem trang làng nghề →
            </Link>
          </div>

          {section.videos.length > 0 ? (
            <div>
              <h3 className="font-heading text-lg text-[#2f2018]">Video</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.videos.map((vid) => (
                  <div
                    key={vid.videoId}
                    className="card-luxury overflow-hidden p-2"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                      <iframe
                        title={vid.title}
                        src={`https://www.youtube-nocookie.com/embed/${vid.videoId}`}
                        className="absolute inset-0 size-full border-0"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <p className="mt-2 px-1 text-sm font-medium text-[#2f2018]">{vid.title}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${vid.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 px-1 text-xs text-[#7b1e1e] hover:underline"
                    >
                      <Play className="size-3" aria-hidden />
                      Mở trên YouTube
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {section.images.length > 0 ? (
            <div>
              <h3 className="font-heading text-lg text-[#2f2018]">Ảnh</h3>
              <div className="mt-4 columns-1 gap-4 md:columns-2 xl:columns-3">
                {section.images.map((item, i) => (
                  <div key={item.src} className="card-luxury mb-4 break-inside-avoid overflow-hidden p-3">
                    <button
                      type="button"
                      className={`relative block w-full overflow-hidden rounded-2xl ${i % 3 === 0 ? "h-56" : "h-72"}`}
                      onClick={() => openLightbox(item)}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        quality={75}
                        className="object-cover transition duration-500 hover:scale-105"
                      />
                    </button>
                    <p className="mt-3 text-left text-sm font-medium text-[#2f2018]">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-[#5c4033]/70">Chưa có ảnh trong thư mục gallery của làng nghề này.</p>
          )}
        </section>
      ))}

      {selectedItem ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1f120f]/85 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-black/30 p-3 backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative h-[56vh] w-full overflow-hidden rounded-2xl"
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return;
                const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
                const diff = endX - touchStartX.current;
                if (diff > 45) showPrev();
                if (diff < -45) showNext();
                touchStartX.current = null;
              }}
            >
              {isImageLoading ? <div className="absolute inset-0 animate-pulse bg-white/15" /> : null}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.src}
                  initial={{ opacity: 0.25 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    fill
                    sizes="90vw"
                    quality={85}
                    className="object-contain"
                    onLoad={() => setIsImageLoading(false)}
                  />
                </motion.div>
              </AnimatePresence>
              <button
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
                onClick={showPrev}
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
                onClick={showNext}
                aria-label="Ảnh sau"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {flatImages.map((thumb, idx) => (
                <button
                  key={thumb.src}
                  type="button"
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border ${idx === selectedIndex ? "border-[#c8a96b]" : "border-white/20"}`}
                  onClick={() => {
                    setIsImageLoading(true);
                    setSelectedIndex(idx);
                  }}
                  aria-label={`Xem ảnh ${idx + 1}`}
                >
                  <Image src={thumb.src} alt={thumb.alt} fill sizes="80px" quality={60} className="object-cover" />
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <div>
                <p className="font-heading text-2xl text-[#f5efe6]">{selectedItem.title}</p>
                <p className="text-sm text-[#f5efe6]/80">
                  {selectedItem.villageName} • {(selectedIndex ?? 0) + 1}/{total}
                </p>
              </div>
              <button
                type="button"
                className="rounded-xl bg-white/15 px-4 py-2 text-sm text-[#f5efe6]"
                onClick={() => setSelectedIndex(null)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
