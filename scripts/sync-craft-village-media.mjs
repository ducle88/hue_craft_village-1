import fs from "fs";
import path from "path";

const root = path.join(import.meta.dirname, "..");

/** slug trang Next.js → thư mục public/images/gallery/ */
const CRAFT_PAGES = [
  {
    slug: "lang-huong-thuy-xuan",
    galleryDir: "huong-thuy-xuan",
    bundleKey: "langHuongThuyXuanCraftBundle",
    sitesUrl:
      "https://sites.google.com/view/hue-craft-village/trang-ch%E1%BB%A7/l%C3%A0ng-ngh%E1%BB%81-truy%E1%BB%81n-th%E1%BB%91ng/l%C3%A0ng-h%C6%B0%C6%A1ng-tr%E1%BA%A7m-thu%E1%BB%B7-xu%C3%A2n",
    title: "Làng hương trầm Thủy Xuân",
  },
  {
    slug: "hoa-giay-thanh-tien",
    galleryDir: "giay-thanh-tien",
    customPage: true,
    sitesUrl:
      "https://sites.google.com/view/hue-craft-village/trang-ch%E1%BB%A7/l%C3%A0ng-ngh%E1%BB%81-truy%E1%BB%81n-th%E1%BB%91ng/ngh%E1%BB%81-l%C3%A0m-hoa-gi%E1%BA%A5y-thanh-ti%C3%AAn",
    title: "Làng hoa giấy Thanh Tiên",
  },
  {
    slug: "deng-a-luoi",
    galleryDir: "det-zeng",
    bundleKey: "dengALuoiCraftBundle",
    sitesUrl:
      "https://sites.google.com/view/hue-craft-village/trang-ch%E1%BB%A7/l%C3%A0ng-ngh%E1%BB%81-truy%E1%BB%81n-th%E1%BB%91ng/ngh%E1%BB%81-d%E1%BB%87t-d%C3%A8ng-a-l%C6%B0%E1%BB%9Bi",
    title: "Nghề dệt Dèng A Lưới",
  },
  {
    slug: "tranh-lang-sinh",
    galleryDir: "tranh-lang-sinh",
    bundleKey: "tranhLangSinhCraftBundle",
    sitesUrl:
      "https://sites.google.com/view/hue-craft-village/trang-ch%E1%BB%A7/l%C3%A0ng-ngh%E1%BB%81-truy%E1%BB%81n-th%E1%BB%91ng/tranh-l%C3%A0ng-s%C3%ACnh",
    title: "Tranh làng Sình",
  },
  {
    slug: "quat-giay-bao-vinh",
    galleryDir: "quat-giay-bao-vinh",
    bundleKey: "quatGiayBaoVinhCraftBundle",
    sitesUrl:
      "https://sites.google.com/view/hue-craft-village/trang-ch%E1%BB%A7/l%C3%A0ng-ngh%E1%BB%81-truy%E1%BB%81n-th%E1%BB%91ng/ngh%E1%BB%81-l%C3%A0m-qu%E1%BA%A1t-gi%E1%BA%A5y-ph%E1%BB%91-c%E1%BB%95-bao-vinh",
    title: "Nghề làm quạt giấy Bảo Vinh",
  },
  {
    slug: "long-cung-dinh-hue",
    galleryDir: "long-cung-dinh",
    bundleKey: "longCungDinhHueCraftBundle",
    sitesUrl:
      "https://sites.google.com/view/hue-craft-village/trang-ch%E1%BB%A7/l%C3%A0ng-ngh%E1%BB%81-truy%E1%BB%81n-th%E1%BB%91ng/ngh%E1%BB%81-l%C3%A0m-l%E1%BB%8Dng-cung-%C4%91%C3%ACnh-hu%E1%BA%BF",
    title: "Nghề làm lọng cung đình Huế",
  },
];

function galleryPublicSrc(galleryDir, filename) {
  return `/images/gallery/${galleryDir}/${encodeURIComponent(filename)}`;
}

function listGalleryImages(galleryDir, altPrefix) {
  const dir = path.join(root, "public", "images", "gallery", galleryDir);
  if (!fs.existsSync(dir)) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  return files.map((file, i) => ({
    src: galleryPublicSrc(galleryDir, file),
    alt: `${altPrefix} — ảnh ${i + 1}`,
  }));
}

async function fetchYoutubeIds(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const ids = new Set();
  for (const m of html.matchAll(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/g)) ids.add(m[1]);
  for (const m of html.matchAll(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/g)) ids.add(m[1]);
  for (const m of html.matchAll(/youtu\.be\/([a-zA-Z0-9_-]{11})/g)) ids.add(m[1]);
  return [...ids];
}

const results = {};

for (const page of CRAFT_PAGES) {
  const gallery = listGalleryImages(page.galleryDir, page.title);
  let youtubeEmbeds = [];
  try {
    const ids = await fetchYoutubeIds(page.sitesUrl);
    youtubeEmbeds = ids.map((videoId, i) => ({
      videoId,
      title: ids.length === 1 ? page.title : `${page.title}${ids.length > 1 ? ` — video ${i + 1}` : ""}`,
    }));
    console.log(page.slug, "youtube:", ids);
  } catch (e) {
    console.warn(page.slug, "youtube skip:", e.message);
  }
  results[page.slug] = { gallery, youtubeEmbeds };
  console.log(page.slug, "gallery:", gallery.length, "files");
}

// Write gallery TS modules
const galleryExports = [];
for (const page of CRAFT_PAGES) {
  const constName = page.slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/-/g, "") + "GalleryImages";
  const varName =
    page.slug === "lang-huong-thuy-xuan"
      ? "langHuongThuyXuanGalleryImages"
      : page.slug === "hoa-giay-thanh-tien"
        ? "hoaGiayThanhTienGalleryImages"
        : page.slug === "deng-a-luoi"
          ? "dengALuoiGalleryImages"
          : page.slug === "tranh-lang-sinh"
            ? "tranhLangSinhGalleryImages"
            : page.slug === "quat-giay-bao-vinh"
              ? "quatGiayBaoVinhGalleryImages"
              : page.slug === "long-cung-dinh-hue"
                ? "longCungDinhHueGalleryImages"
                : `${constName}`;

  const files = fs.existsSync(path.join(root, "public", "images", "gallery", page.galleryDir))
    ? fs
        .readdirSync(path.join(root, "public", "images", "gallery", page.galleryDir))
        .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    : [];

  const lines = files
    .map((f) => `  ${JSON.stringify(f)},`)
    .join("\n");
  galleryExports.push(`export const ${varName} = [
${lines}
].map((file, i) => ({
  src: \`/images/gallery/${page.galleryDir}/\${encodeURIComponent(file)}\`,
  alt: \`${page.title.replace(/`/g, "")} — ảnh \${i + 1}\`,
}));`);
}

const galleryTs = `/** Generated by scripts/sync-craft-village-media.mjs — ảnh trong public/images/gallery/ */\n\n${galleryExports.join("\n\n")}\n`;

fs.writeFileSync(path.join(root, "src", "data", "craft-village-galleries.ts"), galleryTs);

// Write youtube overrides JSON for reference
fs.writeFileSync(
  path.join(root, "src", "data", "craft-village-youtube.json"),
  JSON.stringify(
    Object.fromEntries(CRAFT_PAGES.map((p) => [p.slug, results[p.slug].youtubeEmbeds])),
    null,
    2
  )
);

console.log("Wrote craft-village-galleries.ts and craft-village-youtube.json");
