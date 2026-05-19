import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { longCungDinhHueCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";
import { withCraftVillageMedia } from "@/lib/craft-page-bundle";

export const metadata: Metadata = {
  title: longCungDinhHueCraftBundle.pageTitle,
  description: longCungDinhHueCraftBundle.metaDescription,
};

const pageBundle = withCraftVillageMedia(longCungDinhHueCraftBundle, "long-cung-dinh-hue");

export default function LongCungDinhHuePage() {
  return <GoogleSitesCraftPage bundle={pageBundle} />;
}
