import fs from "fs";
import path from "path";

const root = path.join(import.meta.dirname, "..");
const crawlPath = path.join(root, "_crawl", "gom-phuoc-tich.md");
const outDir = path.join(root, "public", "images", "gallery", "gom-phuoc-tich");
const outRelBase = "/images/gallery/gom-phuoc-tich";

const md = fs.readFileSync(crawlPath, "utf8");
const all = md.match(/https:\/\/lh3\.googleusercontent\.com\/sitesv\/[^)\s]+/g) || [];
const urls = [...new Set(all)].filter((u) => !u.includes("w16383"));

if (urls.length === 0) {
  console.log("Không tìm thấy URL ảnh lh3 trong _crawl/gom-phuoc-tich.md");
  process.exit(0);
}

fs.mkdirSync(outDir, { recursive: true });

function extFromBuffer(buf) {
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return ".jpg";
  if (buf.length >= 12 && buf.slice(0, 4).toString() === "RIFF" && buf.slice(8, 12).toString() === "WEBP")
    return ".webp";
  if (buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return ".png";
  return ".jpg";
}

const saved = [];

for (let i = 0; i < urls.length; i += 1) {
  const url = urls[i];
  try {
    const res = await fetch(url, {
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        Referer: "https://sites.google.com/",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const buf = Buffer.from(await res.arrayBuffer());
    const ext = extFromBuffer(buf);
    const filename = `${String(saved.length + 1).padStart(2, "0")}${ext}`;
    fs.writeFileSync(path.join(outDir, filename), buf);
    saved.push(`${outRelBase}/${filename}`);
    console.log("Saved", filename);
  } catch (err) {
    console.warn(`[skip ${i + 1}]`, err?.message || err);
  }
}

if (saved.length === 0) {
  const fallbackSrc = path.join(root, "public", "images", "villages", "gom-phuoc-tich.png");
  const fallbackDest = path.join(outDir, "01.png");
  fs.copyFileSync(fallbackSrc, fallbackDest);
  saved.push(`${outRelBase}/01.png`);
  console.warn("Không tải được ảnh từ Google Sites (HTTP 403). Đã dùng ảnh đại diện làm fallback: 01.png");
}

console.log("DONE");
console.log(JSON.stringify(saved, null, 2));
