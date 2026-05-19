import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MainFooter } from "@/components/layout/main-footer";
import { MainNavbar } from "@/components/layout/main-navbar";
import { ScrollToTopButton } from "@/components/layout/scroll-to-top-button";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hue Craft Village | Làng nghề truyền thống Huế",
  description:
    "Hue Craft Village — khám phá làng nghề cố đô, trải nghiệm văn hóa, thư viện ảnh và định hướng nghề nghiệp.",
  icons: { icon: "/images/logo/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${playfairDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <MainNavbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <MainFooter />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
