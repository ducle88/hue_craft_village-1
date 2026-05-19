import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { getVillageGalleryMoments } from "@/data/craft-village-galleries";
import { getVillageArtisanSummary } from "@/data/village-artisan-summaries";
import { villages } from "@/data/villages";
import { FadeIn } from "@/components/shared/fade-in";

export default function VillagesPage() {
  return (
    <div className="container-luxury py-10">
      <FadeIn className="card-luxury p-8">
        <h1 className="font-heading text-5xl text-[#2f2018]">Làng nghề Huế</h1>
        <p className="mt-3 text-[#5c4033]/80">
          Khám phá các làng nghề tiêu biểu với giao diện tìm kiếm, lọc danh mục và thẻ thông tin trực quan.
        </p>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#d9c8b2] bg-white/70 px-4 py-3">
          <Search className="size-4 shrink-0 text-[#7b1e1e]" />
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#5c4033]/45"
            placeholder="Tìm làng nghề, nghệ nhân, hoạt động..."
          />
        </div>
      </FadeIn>

      <div className="mt-10 space-y-10">
        {villages.map((v, idx) => {
          const moments = getVillageGalleryMoments(v.slug, v.gallery);

          return (
            <FadeIn key={v.slug} delay={idx * 0.06} className="card-luxury overflow-hidden">
            <div className="grid lg:grid-cols-[minmax(0,380px)_1fr]">
              <div className="relative min-h-56 w-full lg:min-h-[420px]">
                <Image src={v.image} alt={v.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 380px" priority={idx === 0} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent p-6 pt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5efe6]/90">{v.category}</p>
                  <h2 className="font-heading mt-1 text-3xl text-[#f5efe6] md:text-4xl">{v.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#f5efe6]/90">{v.shortDescription}</p>
                </div>
              </div>

              <div className="flex flex-col gap-6 p-6 md:p-8">
                <div>
                  <h3 className="font-heading text-xl text-[#2f2018] md:text-2xl">Giới thiệu</h3>
                  <p className="mt-3 leading-relaxed text-[#5c4033]/85">{v.description}</p>
                </div>

                <div className="grid gap-6 border-t border-[#d9c8b2]/80 pt-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-heading text-xl text-[#2f2018]">Nghệ nhân tiêu biểu</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5c4033]/85">
                      {getVillageArtisanSummary(v.slug)}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#7b1e1e]">{v.years}</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-[#2f2018]">Trải nghiệm nổi bật</h3>
                    <ul className="mt-3 space-y-2 text-[#5c4033]/85">
                      {v.experiences.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-snug">
                          <span className="mt-0.5 shrink-0 text-[#7b1e1e]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-[#d9c8b2]/80 pt-6">
                  <h3 className="font-heading text-xl text-[#2f2018]">Hình ảnh & khoảnh khắc</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {moments.map((moment, gIdx) => (
                      <div
                        key={`${v.slug}-moment-${gIdx}`}
                        className="overflow-hidden rounded-xl border border-[#d9c8b2] bg-white/70 p-3 shadow-sm"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                          <Image
                            src={moment.src || v.image}
                            alt={moment.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 200px"
                          />
                        </div>
                        <p className="mt-2 text-sm text-[#5c4033]/85">{moment.caption}</p>
                        <p className="text-xs text-[#7b1e1e]/90">Khoảnh khắc {gIdx + 1}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#d9c8b2]/80 pt-2">
                  <Link
                    href={`/lang-nghe/${v.slug}`}
                    className="inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-[#7b1e1e] transition hover:underline"
                  >
                    Xem trang chi tiết →
                  </Link>
                </div>
              </div>
            </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
