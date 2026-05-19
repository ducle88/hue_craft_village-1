import fs from "fs";
import path from "path";

const ROOT = path.join(import.meta.dirname, "..");

const VILLAGE_BLURB = {
  "lang-huong-thuy-xuan": {
    heroTagline: "Sắc hương cổ kính nhuộm tím ký ức đất Cố đô.",
    introCardParagraphs: [
      "Nghề làm hương ở Thủy Xuân lưu giữ kỹ thuật pha trầm, se hương và phối sắc thủ công, tạo nên không gian tâm linh đậm chất Huế.",
    ],
  },
  "gom-phuoc-tich": {
    heroTagline: "Đất nung kể chuyện thời gian bên dòng Ô Lâu.",
    introCardParagraphs: [
      "Phước Tích gìn giữ lò gốm cổ với quy trình nhào đất, xoay bàn và nung củi, tạo nên chất gốm mộc mạc nhưng bền chắc.",
    ],
  },
  "deng-a-luoi": {
    heroTagline: "Hoa văn dệt thổ cẩm Tà Ôi — di sản phi vật thể quốc gia.",
    introCardParagraphs: [
      "Dèng A Lưới gắn với đời sống cộng đồng dân tộc thiểu số ở vùng núi phía Tây Huế, nổi bật với kỹ thuật dệt tay và trang trí hạt cườm đặc trưng.",
    ],
  },
  "tranh-lang-sinh": {
    heroTagline: "Dòng tranh mộc bản đặc sắc gắn tín ngưỡng xứ Huế.",
    introCardParagraphs: [
      "Tranh làng Sình (Lại Ân) là nghệ thuật in mộc bản với màu điệp tự nhiên, phục vụ lễ cúng, cầu an và đời sống văn hóa dân gian cố đô.",
    ],
  },
  "quat-giay-bao-vinh": {
    heroTagline: "Quạt giấy thanh tao bên dòng Hương Giang.",
    introCardParagraphs: [
      "Nghề làm quạt giấy ở phố cổ Bao Vinh lưu giữ kỹ thuật nan tre, dán áo quạt và họa tiết thư pháp — biểu tượng tinh tế của người Huế.",
    ],
  },
  "long-cung-dinh-hue": {
    heroTagline: "Lọng lụa gấm — nét uy nghi của di sản cung đình.",
    introCardParagraphs: [
      "Nghề làm lọng cung đình Huế gắn với nghi lễ, lễ hội và tín ngưỡng, với khung tre uốn, gen gỗ và vải gấm thêu rồng phượng.",
    ],
  },
};

const META = {
  "thuy-xuan.md": {
    key: "langHuongThuyXuanCraftBundle",
    pageTitle: "Làng hương trầm Thủy Xuân — Làng nghề Huế",
    metaDescription: "Làng hương Thủy Xuân: vị trí, lịch sử, quy trình làm hương, tiềm năng du lịch và văn hóa.",
    categoryEyebrow: "Hương truyền thống",
    heroTitle: "Làng hương trầm Thủy Xuân",
    heroImage: "/images/villages/huong_tram_thuy_xuan.jpg",
    villageSlug: "lang-huong-thuy-xuan",
    mapSearchQuery: "Làng hương Thủy Xuân, phường Thủy Xuân, Huế",
    youtubeEmbeds: [
      { videoId: "4Vnlp7GkF_o", title: "Làng hương trầm Thủy Xuân — video 1" },
      { videoId: "rcQThWRIvqk", title: "Làng hương trầm Thủy Xuân — video 2" },
    ],
  },
  "gom-phuoc-tich.md": {
    key: "gomPhuocTichCraftBundle",
    pageTitle: "Làng gốm Phước Tích — Làng nghề Huế",
    metaDescription: "Làng gốm Phước Tích: vị trí, lịch sử, sản phẩm, quy trình nung lò và tiềm năng du lịch.",
    categoryEyebrow: "Gốm truyền thống",
    heroTitle: "Nghề làm gốm Phước Tích",
    heroImage: "/images/villages/gom-phuoc-tich.png",
    villageSlug: "gom-phuoc-tich",
    mapSearchQuery: "Làng gốm Phước Tích, Phong Điền, Thừa Thiên Huế",
    /** Video nhúng trên trang Google Sites gốm Phước Tích */
    youtubeEmbeds: [
      { videoId: "PFJ7H4e8VZw", title: "Làng gốm Phước Tích" },
      { videoId: "tUlbrtJUxTc", title: "Làng gốm Phước Tích — đoạn ngắn" },
    ],
  },
  "deng-a-luoi.md": {
    key: "dengALuoiCraftBundle",
    pageTitle: "Nghề dệt Dèng A Lưới — Làng nghề Huế",
    metaDescription: "Nghề dệt Dèng của người Tà Ôi ở A Lưới: di sản phi vật thể quốc gia, quy trình và ý nghĩa văn hóa.",
    categoryEyebrow: "Dệt thổ cẩm vùng cao",
    heroTitle: "Nghề dệt Dèng A Lưới",
    heroImage: "/images/villages/det_deng_a_luoi.jpg",
    villageSlug: "deng-a-luoi",
    mapSearchQuery: "Huyện A Lưới, Thừa Thiên Huế",
    youtubeEmbeds: [
      { videoId: "-XDQgsYBqVY", title: "Nghề dệt Dèng A Lưới — video 1" },
      { videoId: "YH1WyCB1Ta8", title: "Nghề dệt Dèng A Lưới — video 2" },
    ],
  },
  "tranh-lang-sinh.md": {
    key: "tranhLangSinhCraftBundle",
    pageTitle: "Tranh làng Sình — Làng nghề Huế",
    metaDescription: "Tranh làng Sình: tranh mộc bản, lịch sử, quy trình in và tô màu điệp, tiềm năng du lịch.",
    categoryEyebrow: "Tranh dân gian",
    heroTitle: "Tranh làng Sình",
    heroImage: "/images/villages/tranh-lang-sinh.png",
    villageSlug: "tranh-lang-sinh",
    mapSearchQuery: "Làng Sình Lại Ân, Phú Mậu, Huế",
    youtubeEmbeds: [
      { videoId: "M_LzQ-cQVv4", title: "Tranh làng Sình — video 1" },
      { videoId: "SfPaBmXHl4I", title: "Tranh làng Sình — video 2" },
    ],
  },
  "quat-giay-bao-vinh.md": {
    key: "quatGiayBaoVinhCraftBundle",
    pageTitle: "Quạt giấy phố cổ Bao Vinh — Làng nghề Huế",
    metaDescription: "Nghề làm quạt giấy phố cổ Bao Vinh: lịch sử thương cảng, nguyên liệu tre giấy và quy trình thủ công.",
    categoryEyebrow: "Thủ công phố cổ",
    heroTitle: "Nghề làm quạt giấy",
    heroSubtitle: "Phố cổ Bao Vinh",
    heroImage: "/images/villages/quat-giay-bao-vinh.jpg",
    villageSlug: "quat-giay-bao-vinh",
    mapSearchQuery: "Phố cổ Bao Vinh, Hương Vinh, Huế",
    youtubeEmbeds: [{ videoId: "YvYqxJrGsIQ", title: "Nghề làm quạt giấy Bảo Vinh" }],
  },
  "long-cung-dinh.md": {
    key: "longCungDinhHueCraftBundle",
    pageTitle: "Lọng cung đình Huế — Làng nghề Huế",
    metaDescription: "Nghề làm lọng cung đình Huế: vị trí, lịch sử, quy trình tre lụa và nghệ nhân tiêu biểu.",
    categoryEyebrow: "Lễ nghi — mỹ nghệ",
    heroTitle: "Nghề làm lọng cung đình Huế",
    heroImage: "/images/villages/lam-long-cung-dinh-hue.jpg",
    villageSlug: "long-cung-dinh-hue",
    mapSearchQuery: "Phường Đúc, Huế lọng cung đình",
    youtubeEmbeds: [
      { videoId: "SdVqMNIg4cY", title: "Nghề làm lọng cung đình Huế — video 1" },
      { videoId: "VeQsSaEzTLg", title: "Nghề làm lọng cung đình Huế — video 2" },
    ],
  },
};

/** Dòng chân trang Google Sites — không đưa vào nội dung trang */
const SITES_FOOTER_PATTERNS = [
  /^Website Huế Craft Village/i,
  /^👨‍🏫\s*Xây dựng nội dung/i,
  /^Giáo viên hướng dẫn:/i,
  /^🏫\s*Trung tâm GDNN-GDTX/i,
  /^Google Sites$/i,
  /^Report abuse$/i,
  /^Page details$/i,
  /^Page updated$/i,
];

function isSitesFooterLine(line) {
  const t = (line ?? "").trim();
  if (!t) return false;
  return SITES_FOOTER_PATTERNS.some((p) => p.test(t));
}

/** Loại URL Google Sites trong văn bản crawl — chỉ hiển thị trên website này */
function sanitizeLine(line) {
  if (typeof line !== "string") return "";
  if (isSitesFooterLine(line)) return "";
  let s = line.replace(/https?:\/\/sites\.google\.com\/[^\s)\u200b\]]+/gi, "");
  s = s.replace(/\s{2,}/g, " ").trim();
  if (/^🌐\s*Website:\s*$/i.test(s)) return "";
  if (/^Website:\s*$/i.test(s)) return "";
  return s;
}

function sanitizeBlock(block) {
  const items = block.items.map(sanitizeLine).filter((x) => x.trim().length > 0);
  return { ...block, items };
}

function sanitizeSection(sec) {
  const blocks = sec.blocks?.map(sanitizeBlock).filter((b) => b.items.length > 0);
  const subsections = sec.subsections
    ?.map((sub) => ({
      ...sub,
      blocks: sub.blocks.map(sanitizeBlock).filter((b) => b.items.length > 0),
    }))
    .filter((sub) => sub.blocks.length > 0);
  return {
    ...sec,
    ...(blocks?.length ? { blocks } : {}),
    ...(subsections?.length ? { subsections } : {}),
  };
}

function sanitizeSections(sections) {
  return sections.map(sanitizeSection);
}

async function fetchToBuffer(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
      Referer: "https://sites.google.com/",
    },
  });
  if (!res.ok) throw new Error(`GET ${url.slice(0, 88)}… -> ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

function binaryExt(buf) {
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return ".jpg";
  if (buf.length >= 12 && buf.slice(0, 4).toString() === "RIFF" && buf.slice(8, 12).toString() === "WEBP") return ".webp";
  if (buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return ".png";
  return ".jpg";
}

/** Tải từng ảnh lh3 về public/images/crafts/<slug>/ — bỏ qua ảnh bị chặn (403); chỉ bundle đường dẫn nội bộ */
async function mirrorLh3Gallery(villageSlug, urls) {
  const relBase = `/images/crafts/${villageSlug}`;
  const absDir = path.join(ROOT, "public", "images", "crafts", villageSlug);
  fs.mkdirSync(absDir, { recursive: true });
  const out = [];
  let saved = 0;
  for (let i = 0; i < urls.length; i++) {
    try {
      const buf = await fetchToBuffer(urls[i]);
      const ext = binaryExt(buf);
      const name = `${String(saved + 1).padStart(2, "0")}${ext}`;
      fs.writeFileSync(path.join(absDir, name), buf);
      out.push({
        src: `${relBase}/${name}`,
        alt: `Ảnh ${saved + 1} — Huế Craft Village 4.0`,
      });
      saved += 1;
      console.log("Saved", path.join("public", "images", "crafts", villageSlug, name));
    } catch (e) {
      console.warn(`[gallery skip] ${villageSlug} #${i + 1}:`, e.message || e);
    }
  }
  return out;
}

function extractBodyLines(lines) {
  let start = -1;
  let end = lines.length;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("Website Huế Craft Village")) {
      end = i;
      break;
    }
    if (start === -1 && /^\d+\.\s/.test(lines[i])) start = i;
  }
  if (start < 0) return [];
  const body = lines.slice(start, end);
  while (body.length && !body[0].trim()) body.shift();
  while (body.length && !body[body.length - 1].trim()) body.pop();
  return body;
}

function parseSections(lines) {
  const sections = [];
  let i = 0;
  while (i < lines.length) {
    const m = lines[i].match(/^(\d+)\.\s+(.+)$/);
    if (!m) {
      i++;
      continue;
    }
    const title = `${m[1]}. ${m[2]}`;
    i++;
    const chunk = [];
    while (i < lines.length && !/^\d+\.\s/.test(lines[i])) {
      chunk.push(lines[i]);
      i++;
    }
    sections.push(parseSectionChunk(title, chunk));
  }
  return sections;
}

function parseSectionChunk(title, rawLines) {
  const lines = rawLines.filter((l) => !/^\s*!\[Image/.test(l) && !l.includes("lh3.googleusercontent.com"));
  const subsections = [];
  let currentSub = null;
  const topBlocks = [];

  const flushSub = () => {
    if (currentSub && (currentSub.blocks?.length || currentSub._pending?.length)) {
      if (currentSub._pending?.length) {
        currentSub.blocks = flushPending(currentSub._pending);
        delete currentSub._pending;
      }
      subsections.push({ title: currentSub.title, blocks: currentSub.blocks || [] });
    }
    currentSub = null;
  };

  const flushPending = (pending) => {
    const blocks = [];
    let bullets = [];
    let paras = [];
    const pushBullets = () => {
      if (bullets.length) {
        blocks.push({ type: "bullets", items: bullets });
        bullets = [];
      }
    };
    const pushParas = () => {
      if (paras.length) {
        blocks.push({ type: "paragraphs", items: paras });
        paras = [];
      }
    };
    for (const line of pending) {
      const t = line.trim();
      if (!t) {
        pushBullets();
        pushParas();
        continue;
      }
      if (t.startsWith("- ")) {
        pushParas();
        bullets.push(t.slice(2).trim());
      } else {
        pushBullets();
        paras.push(t);
      }
    }
    pushBullets();
    pushParas();
    return blocks;
  };

  let pendingTop = [];

  for (const line of lines) {
    const t = line.trim();
    if (isSitesFooterLine(t)) break;
    const subM = t.match(/^([a-z])\)\s*(.+)$/i);
    if (subM) {
      flushSub();
      currentSub = { title: t, _pending: [] };
      continue;
    }
    if (currentSub) {
      currentSub._pending.push(line);
    } else {
      pendingTop.push(line);
    }
  }
  flushSub();

  const topParsed = flushPending(pendingTop.filter((l) => l.trim()));
  const sec = {
    title,
    ...(topParsed.length ? { blocks: topParsed } : {}),
    ...(subsections.length ? { subsections } : {}),
  };
  if (!sec.blocks && !sec.subsections) {
    sec.blocks = [{ type: "paragraphs", items: [""] }];
  }
  return sec;
}

function galleryUrls(md) {
  const all = md.match(/https:\/\/lh3\.googleusercontent\.com\/sitesv\/[^)\s]+/g) || [];
  const seen = new Set();
  const urls = [];
  for (const u of all) {
    if (!seen.has(u)) {
      seen.add(u);
      urls.push(u);
    }
  }
  return urls.filter((u) => !u.includes("w16383"));
}

async function buildBundle(file, md, meta) {
  const lines = md.split(/\r?\n/);
  const bodyLines = extractBodyLines(lines);
  const sections = sanitizeSections(parseSections(bodyLines));
  const g = galleryUrls(md);
  let galleryFromSource = await mirrorLh3Gallery(meta.villageSlug, g);
  if (galleryFromSource.length === 0 && g.length > 0) {
    galleryFromSource = [
      {
        src: meta.heroImage,
        alt: `${meta.heroTitle} — ảnh đại diện (chưa lưu được bộ ảnh Sites vào repo; xem scripts/craft-gallery-images.txt)`,
      },
    ];
  }

  const blurbs = VILLAGE_BLURB[meta.villageSlug];
  if (!blurbs) throw new Error(`Missing VILLAGE_BLURB for ${meta.villageSlug}`);

  const obj = {
    pageTitle: meta.pageTitle,
    metaDescription: meta.metaDescription,
    categoryEyebrow: meta.categoryEyebrow,
    heroTitle: meta.heroTitle,
    heroSubtitle: meta.heroSubtitle,
    heroTagline: blurbs.heroTagline,
    introCardParagraphs: blurbs.introCardParagraphs,
    heroImage: meta.heroImage,
    sections,
    galleryFromSource,
    mapSearchQuery: meta.mapSearchQuery,
    youtubeEmbeds: meta.youtubeEmbeds ?? [],
    villageSlug: meta.villageSlug,
  };

  return `export const ${meta.key}: import("@/data/google-sites-crafts/types").GoogleSitesCraftBundle = ${JSON.stringify(obj, null, 2)};\n`;
}

(async () => {
  let out = `/** Generated by scripts/build-craft-bundles.mjs — ảnh gallery lưu tại public/images/crafts/<slug>/ */\n\n`;

  const crawlDir = path.join(ROOT, "_crawl");
  for (const file of fs.readdirSync(crawlDir).filter((x) => x.endsWith(".md"))) {
    const meta = META[file];
    if (!meta) continue;
    const md = fs.readFileSync(path.join(crawlDir, file), "utf8");
    out += await buildBundle(file, md, meta);
  }

  const outPath = path.join(ROOT, "src", "data", "google-sites-crafts", "generated-craft-bundles.ts");
  fs.writeFileSync(outPath, out);
  console.log("Wrote", outPath);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
