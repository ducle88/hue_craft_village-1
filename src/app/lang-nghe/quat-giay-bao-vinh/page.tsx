import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { quatGiayBaoVinhCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";
import { withCraftVillageMedia } from "@/lib/craft-page-bundle";

export const metadata: Metadata = {
  title: quatGiayBaoVinhCraftBundle.pageTitle,
  description: quatGiayBaoVinhCraftBundle.metaDescription,
};

const pageBundle = withCraftVillageMedia(quatGiayBaoVinhCraftBundle, "quat-giay-bao-vinh");

export default function QuatGiayBaoVinhPage() {
  return <GoogleSitesCraftPage bundle={pageBundle} />;
}
