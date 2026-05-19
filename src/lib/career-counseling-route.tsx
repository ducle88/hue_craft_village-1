import type { Metadata } from "next";
import { CareerCounselingPage } from "@/components/career/career-counseling-page";
import { getCareerCounselingPage } from "@/data/career-counseling/pages";
import type { CareerCounselingPageData } from "@/data/career-counseling/types";

export function createCareerCounselingPage(slug: string) {
  const found = getCareerCounselingPage(slug);
  if (!found) {
    throw new Error(`Career counseling page not found: ${slug}`);
  }
  const data: CareerCounselingPageData = found;

  const metadata: Metadata = {
    title: data.pageTitle,
    description: data.metaDescription,
  };

  function Page() {
    return <CareerCounselingPage page={data} />;
  }

  return { metadata, Page };
}
