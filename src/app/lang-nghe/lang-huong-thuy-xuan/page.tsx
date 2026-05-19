import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { langHuongThuyXuanCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";
import { withCraftVillageMedia } from "@/lib/craft-page-bundle";

export const metadata: Metadata = {
  title: langHuongThuyXuanCraftBundle.pageTitle,
  description: langHuongThuyXuanCraftBundle.metaDescription,
};

const pageBundle = withCraftVillageMedia(langHuongThuyXuanCraftBundle, "lang-huong-thuy-xuan");

export default function LangHuongThuyXuanPage() {
  return <GoogleSitesCraftPage bundle={pageBundle} />;
}
