import type { Locale } from "./i18n";
import type { ServiceKey } from "./dictionaries";
import { posts } from "@/content/posts";

/**
 * Typed blog content model. Every post ships both locales with their own
 * slug/meta so hreflang pairs stay correct, and a fixed structure (intro →
 * H2 sections → FAQ) that enforces the SEO/GEO article template.
 */

/**
 * Text in `p`, `ul`, `quote` and FAQ answers supports inline links with
 * markdown syntax: `[görünen metin](https://kaynak.com)` — use them to cite
 * statistics and research right next to the claim.
 */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  /** Image from /public (put files under public/blog/…). `alt` is mandatory. */
  | { type: "img"; src: string; alt: string; caption?: string }
  /**
   * Social embed rendered as a plain iframe (no third-party JS).
   * id: YouTube video id · Instagram post/reel shortcode · TikTok numeric video id.
   */
  | { type: "embed"; provider: "youtube" | "instagram" | "tiktok"; id: string; title: string }
  /** Pull-quote, e.g. a finding quoted from research. */
  | { type: "quote"; text: string; cite?: string; citeUrl?: string };

export interface BlogSection {
  h2: string;
  blocks: BlogBlock[];
}

export interface BlogFaqItem {
  q: string;
  a: string;
}

/** A cited source, listed under the article and emitted as schema `citation`. */
export interface BlogSource {
  label: string;
  url: string;
  publisher?: string;
}

export interface BlogPostLocale {
  slug: string;
  /** H1 — may differ from metaTitle for tone. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Card summary + article lede. */
  excerpt: string;
  intro: string[];
  sections: BlogSection[];
  faq: BlogFaqItem[];
  /** Cited sources — rendered as a "Kaynaklar / Sources" list. */
  sources?: BlogSource[];
  tags: string[];
}

export interface BlogPost {
  /** Stable id shared by both locales (used for hreflang pairing). */
  id: string;
  /** ISO dates. */
  publishedAt: string;
  updatedAt?: string;
  /** Service pillar this post supports — drives internal linking. */
  category: ServiceKey;
  locales: Record<Locale, BlogPostLocale>;
}

/** Posts for a locale, newest first. */
export function getPosts(locale: Locale) {
  return [...posts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((post) => ({ post, content: post.locales[locale] }));
}

export function getPostBySlug(locale: Locale, slug: string) {
  const post = posts.find((p) => p.locales[locale].slug === slug);
  return post ? { post, content: post.locales[locale] } : null;
}

function blockText(b: BlogBlock): string {
  switch (b.type) {
    case "ul":
      return b.items.join(" ");
    case "p":
    case "h3":
    case "quote":
      return b.text;
    default:
      return "";
  }
}

/** Rough reading time in minutes from the post's visible text. */
export function readingTimeMinutes(content: BlogPostLocale): number {
  const text = [
    content.intro.join(" "),
    ...content.sections.map((s) =>
      [s.h2, ...s.blocks.map(blockText)].join(" "),
    ),
    ...content.faq.map((f) => `${f.q} ${f.a}`),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
