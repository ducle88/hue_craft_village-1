export type CareerContentBlock =
  | { type: "paragraphs"; items: string[] }
  | { type: "bullets"; items: string[] }
  | { type: "links"; items: { label: string; href: string; description?: string }[] };

export type CareerSection = {
  title: string;
  blocks: CareerContentBlock[];
};

export type CareerCounselingPageData = {
  slug: string;
  pageTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  introParagraphs: string[];
  sections: CareerSection[];
  youtubeEmbeds?: { videoId: string; title: string }[];
  externalLinks?: { label: string; href: string }[];
  cta?: { label: string; href: string; description?: string };
};
