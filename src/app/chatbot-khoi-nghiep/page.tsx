import type { Metadata } from "next";
import Link from "next/link";
import { STARTUP_CHATBOT_NOTEBOOK_URL } from "@/data/startup";

export const metadata: Metadata = {
  title: "Chatbot khởi nghiệp — Hue Craft Village",
  description: "Trợ lý AI tư vấn khởi nghiệp trên Google NotebookLM.",
};

export default function StartupChatbotPage() {
  return (
    <div className="container-luxury flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-[#0B8CB4]">Chatbot khởi nghiệp</p>
      <h1 className="font-heading mt-3 text-3xl text-[#2f2018] md:text-4xl">Trợ lý AI trên NotebookLM</h1>
      <p className="mt-4 max-w-lg text-[#5c4033]/85">
        Chatbot tư vấn hỗ trợ khởi nghiệp được triển khai trên nền tảng Google NotebookLM. Bạn cần đăng nhập Google để
        sử dụng.
      </p>
      <a
        href={STARTUP_CHATBOT_NOTEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-full bg-[#0B8CB4] px-8 py-3.5 text-sm font-semibold text-[#f5efe6] transition hover:bg-[#086b8d]"
      >
        Mở Chatbot khởi nghiệp ↗
      </a>
      <Link href="/khoi-nghiep" className="mt-6 text-sm font-medium text-[#0B8CB4] underline-offset-4 hover:underline">
        ← Quay lại Chuyên mục khởi nghiệp
      </Link>
    </div>
  );
}
