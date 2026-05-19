import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { CAREER_CHATBOT_NOTEBOOK_URL } from "@/data/chatbot";
import { careerCounselingNavItems } from "@/data/career-counseling/pages";

export default function CareerAdvicePage() {
  return (
    <div className="container-luxury space-y-10 py-10">
      <FadeIn className="card-luxury p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7b1e1e]">Tư vấn hướng nghiệp</p>
        <h1 className="mt-2 font-heading text-4xl text-[#2f2018] md:text-5xl">Định hướng nghề nghiệp có cơ sở khoa học</h1>
        <p className="mt-4 max-w-3xl text-[#5c4033]/85">
          Nội dung tham chiếu theo cấu trúc dự án Huế Craft Village 4.0: gắn học sinh với làng nghề và xu hướng lao
          động thời đại số.
        </p>
        <p className="mt-3 max-w-3xl text-sm text-[#5c4033]/85">
          Tư vấn và định hướng nghề nghiệp phù hợp năng lực, sở thích của bạn trên cơ sở khoa học.
        </p>
        <div className="relative mt-6 aspect-video w-full max-w-3xl overflow-hidden rounded-lg border border-[#e0d6cc] bg-black shadow-sm ring-1 ring-[#7b1e1e]/10">
          <iframe
            className="absolute inset-0 size-full"
            src="https://www.youtube-nocookie.com/embed/vC81usgrPWI"
            title="Video tư vấn hướng nghiệp"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <p className="mt-2 max-w-3xl text-xs text-[#5c4033]/65">
          Xem trên{" "}
          <a
            href="https://www.youtube.com/watch?v=vC81usgrPWI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-[#e0d6c9] bg-[#faf7f2] px-2 py-0.5 font-medium text-[#7b1e1e] underline-offset-2 transition hover:border-[#d4c4b0] hover:bg-white hover:underline"
          >
            YouTube
          </a>
          .
        </p>
        <a
          href={CAREER_CHATBOT_NOTEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-full bg-[#7b1e1e] px-6 py-3 text-sm font-medium text-[#f5efe6] transition hover:bg-[#5c1515]"
        >
          Mở Chatbot hướng nghiệp ↗
        </a>
      </FadeIn>

      <FadeIn className="card-luxury p-6 md:p-8" delay={0.05}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Nội dung tư vấn</h2>
        <p className="mt-2 text-[#5c4033]/85">Chọn chủ đề để xem chi tiết nội dung từ dự án Huế Craft Village 4.0.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {careerCounselingNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl border border-[#d9c8b2] bg-white/60 px-5 py-4 text-[#2f2018] transition hover:border-[#7b1e1e]/40 hover:bg-white hover:shadow-sm"
              >
                <span className="font-medium">{item.label}</span>
                <span className="mt-1 block text-sm text-[#7b1e1e]">Xem chi tiết →</span>
              </Link>
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  );
}
