import type { ReactNode } from "react";
import type { BlogBlock, BlogSection } from "@/lib/blog";

/**
 * Renders markdown-style inline links — `[text](https://…)` — as anchors so
 * claims can cite their source in place. Everything else stays plain text.
 */
export function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const linkRe = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = linkRe.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
      >
        {match[1]}
      </a>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** Plain-iframe embeds — no third-party scripts, CSP frame-src covers these. */
const EMBED = {
  youtube: {
    src: (id: string) => `https://www.youtube-nocookie.com/embed/${id}`,
    frame: "aspect-video w-full",
  },
  instagram: {
    src: (id: string) => `https://www.instagram.com/p/${id}/embed/`,
    frame: "mx-auto h-[620px] w-full max-w-[400px]",
  },
  tiktok: {
    src: (id: string) => `https://www.tiktok.com/embed/v2/${id}`,
    frame: "mx-auto h-[740px] w-full max-w-[340px]",
  },
} as const;

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h3":
      return (
        <h3 className="pt-2 text-lg font-semibold text-foreground">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span className="text-base leading-relaxed text-muted">
                {renderInline(item)}
              </span>
            </li>
          ))}
        </ul>
      );
    case "img":
      return (
        <figure className="py-2">
          {/* Static export ships images unoptimized, so next/image adds nothing here. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="w-full rounded-2xl border border-border"
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs text-muted">
              {renderInline(block.caption)}
            </figcaption>
          )}
        </figure>
      );
    case "embed": {
      const cfg = EMBED[block.provider];
      return (
        <div className="py-2">
          <iframe
            src={cfg.src(block.id)}
            title={block.title}
            loading="lazy"
            allowFullScreen
            allow="encrypted-media; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className={`rounded-2xl border border-border bg-surface ${cfg.frame}`}
          />
        </div>
      );
    }
    case "quote":
      return (
        <blockquote className="border-l-2 border-accent pl-5 py-1">
          <p className="text-base font-medium leading-relaxed text-foreground">
            {renderInline(block.text)}
          </p>
          {block.cite && (
            <cite className="mt-2 block text-sm not-italic text-muted">
              —{" "}
              {block.citeUrl ? (
                <a
                  href={block.citeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline decoration-accent/40 underline-offset-2"
                >
                  {block.cite}
                </a>
              ) : (
                block.cite
              )}
            </cite>
          )}
        </blockquote>
      );
    default:
      return (
        <p className="text-base leading-relaxed text-muted">
          {renderInline(block.text)}
        </p>
      );
  }
}

/**
 * Server-rendered article body. All text ships in the static HTML —
 * no client-side rendering, so search and AI crawlers see everything.
 */
export function ArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.h2}>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {section.h2}
          </h2>
          <div className="mt-5 space-y-5">
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
