import type { Metadata } from "next";
import { StartupGuidePage } from "@/components/startup/startup-guide-page";
import { getStartupGuidePage } from "@/data/startup-counseling/pages";
import type { CareerCounselingPageData } from "@/data/career-counseling/types";

export function createStartupGuidePage(slug: string) {
  const found = getStartupGuidePage(slug);
  if (!found) {
    throw new Error(`Startup guide page not found: ${slug}`);
  }
  const data: CareerCounselingPageData = found;

  const metadata: Metadata = {
    title: data.pageTitle,
    description: data.metaDescription,
  };

  function Page() {
    return <StartupGuidePage page={data} />;
  }

  return { metadata, Page };
}
