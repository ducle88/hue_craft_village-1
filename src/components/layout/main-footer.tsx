import Image from "next/image";
import Link from "next/link";
import { navItemHasChildren, siteNavProminentBar } from "@/lib/site";
import { isExternalHref } from "@/lib/nav";

export function MainFooter() {
  return (
    <footer className="bg-[#5c1a1a] text-[#f5efe6]">
      <div className="container-luxury grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:gap-x-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-md flex-col items-center gap-4">
            <Link
              href="/"
              className="inline-flex w-max max-w-full justify-center rounded-lg bg-white px-4 py-3.5 shadow-md shadow-black/20 ring-2 ring-[#c8a96b]/25 transition hover:bg-[#fffefa] hover:shadow-lg hover:shadow-black/25 sm:px-5 sm:py-4"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Hue Craft Village — Làng nghề truyền thống Huế"
                width={400}
                height={110}
                className="h-16 w-auto max-w-full object-contain object-center sm:h-20 md:h-24"
                sizes="(max-width:640px) 280px, (max-width:1024px) 340px, 400px"
              />
            </Link>
            <div className="w-full text-center">
              <p className="font-heading text-base font-semibold tracking-[0.16em] text-[#f5efe6] sm:text-lg">
                HUE CRAFT VILLAGE
              </p>
              <p className="mt-1.5 text-sm leading-snug text-[#f5efe6]/80 sm:text-[15px]">Làng nghề truyền thống Huế</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#f5efe6]/80">
            Giữ hồn di sản — kết nối thế hệ trẻ qua trải nghiệm văn hóa và câu chuyện làng nghề cố đô.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg text-[#c8a96b]">Liên kết nhanh</h4>
          <ul className="mt-4 space-y-2 text-sm text-[#f5efe6]/85">
            {siteNavProminentBar.map((entry) =>
              navItemHasChildren(entry) ? (
                <li key={entry.href}>
                  <Link href={entry.href} className="transition hover:text-[#c8a96b]">
                    {entry.label}
                  </Link>
                  <ul className="mt-2 space-y-1.5 border-l border-white/20 pl-3 text-[13px] text-[#f5efe6]/80">
                    {entry.children.map((c) => (
                      <li key={`${entry.href}-${c.href}`}>
                        {isExternalHref(c.href) ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-[#c8a96b]"
                          >
                            {c.label} ↗
                          </a>
                        ) : (
                          <Link href={c.href} className="transition hover:text-[#c8a96b]">
                            {c.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={entry.href}>
                  <Link href={entry.href} className="transition hover:text-[#c8a96b]">
                    {entry.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-2">
          <div className="mx-auto w-full max-w-[18.5rem] rounded-lg border border-white/12 bg-white/[0.05] px-4 py-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:max-w-[22rem] sm:px-5 sm:py-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c8a96b]/95">Website</p>
            <h4 className="mt-1.5 font-heading text-lg font-semibold tracking-tight text-[#f5efe6] sm:text-xl">
              Huế Craft Village <span className="text-[#c8a96b]">4.0</span>
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-[#f5efe6]/60">
              Website giới thiệu làng nghề truyền thống Huế, đồng thời tích hợp chatbot hỗ trợ tư vấn và định hướng nghề nghiệp.
            </p>

            <dl className="mt-5 divide-y divide-white/10 text-sm text-[#f5efe6]/90 sm:mt-6">
              <div className="pb-5">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c8a96b]">Học sinh biên soạn nội dung</dt>
                <dd className="mt-2 font-medium leading-relaxed text-[#f5efe6]">
                  Đinh Thị Bảo Xuyến <span className="mx-1.5 text-[#f5efe6]/35" aria-hidden>·</span> Lê Trọng Trí
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c8a96b]">Giáo viên hướng dẫn</dt>
                <dd className="mt-2 font-medium leading-relaxed text-[#f5efe6]">
                  Trần Hữu Phong <span className="mx-1.5 text-[#f5efe6]/35" aria-hidden>·</span> Đoàn Thị Mai Chi
                </dd>
              </div>
              <div className="pt-5">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c8a96b]">Đơn vị</dt>
                <dd className="mt-2 leading-relaxed text-[#f5efe6]/88">
                  <span title="Giáo dục nghề nghiệp — Giáo dục thường xuyên">Trung tâm GDNN-GDTX khu vực 2</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-luxury py-8 text-center text-xs text-[#f5efe6]/70">
          <p>© {new Date().getFullYear()} Hue Craft Village. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
