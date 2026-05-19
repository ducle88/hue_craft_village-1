import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { tranhLangSinhCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";
import { withCraftVillageMedia } from "@/lib/craft-page-bundle";

export const metadata: Metadata = {
  title: tranhLangSinhCraftBundle.pageTitle,
  description: tranhLangSinhCraftBundle.metaDescription,
};

const pageBundle = withCraftVillageMedia(tranhLangSinhCraftBundle, "tranh-lang-sinh");

export default function TranhLangSinhPage() {
  return <GoogleSitesCraftPage bundle={pageBundle} />;
}
