import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { gomPhuocTichGalleryImages } from "@/data/gom-phuoc-tich-gallery";
import { gomPhuocTichCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";
import { withCraftVillageMedia } from "@/lib/craft-page-bundle";

export const metadata: Metadata = {
  title: gomPhuocTichCraftBundle.pageTitle,
  description: gomPhuocTichCraftBundle.metaDescription,
};

const pageBundle = withCraftVillageMedia(gomPhuocTichCraftBundle, "gom-phuoc-tich", {
  gallery: gomPhuocTichGalleryImages,
});

export default function GomPhuocTichPage() {
  return <GoogleSitesCraftPage bundle={pageBundle} />;
}
