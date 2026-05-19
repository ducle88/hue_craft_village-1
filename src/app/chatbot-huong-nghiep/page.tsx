import type { Metadata } from "next";
import Link from "next/link";
import { CAREER_CHATBOT_NOTEBOOK_URL } from "@/data/chatbot";

export const metadata: Metadata = {
  title: "Chatbot hướng nghiệp — Hue Craft Village",
  description: "Trợ lý AI tư vấn hướng nghiệp trên Google NotebookLM.",
};

export default function CareerChatbotPage() {
  return (
    <div className="container-luxury flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-[#7b1e1e]">Chatbot hướng nghiệp</p>
      <h1 className="font-heading mt-3 text-3xl text-[#2f2018] md:text-4xl">Trợ lý AI trên NotebookLM</h1>
      <p className="mt-4 max-w-lg text-[#5c4033]/85">
        Chatbot tư vấn và định hướng nghề nghiệp được triển khai trên nền tảng Google NotebookLM. Bạn cần đăng nhập
        Google để sử dụng.
      </p>
      <a
        href={CAREER_CHATBOT_NOTEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-full bg-[#7b1e1e] px-8 py-3.5 text-sm font-semibold text-[#f5efe6] transition hover:bg-[#5c1515]"
      >
        Mở Chatbot hướng nghiệp ↗
      </a>
      <Link href="/tu-van-huong-nghiep" className="mt-6 text-sm font-medium text-[#7b1e1e] underline-offset-4 hover:underline">
        ← Quay lại Tư vấn hướng nghiệp
      </Link>
    </div>
  );
}
