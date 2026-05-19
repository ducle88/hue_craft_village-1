import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { dengALuoiCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";
import { withCraftVillageMedia } from "@/lib/craft-page-bundle";

export const metadata: Metadata = {
  title: dengALuoiCraftBundle.pageTitle,
  description: dengALuoiCraftBundle.metaDescription,
};

const pageBundle = withCraftVillageMedia(dengALuoiCraftBundle, "deng-a-luoi");

export default function DengALuoiPage() {
  return <GoogleSitesCraftPage bundle={pageBundle} />;
}
