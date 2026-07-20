import Link from "next/link";

/** Card for the blog index — server-rendered, whole card is the link. */
export function PostCard({
  href,
  categoryTitle,
  dateLabel,
  readingLabel,
  title,
  excerpt,
}: {
  href: string;
  categoryTitle: string;
  dateLabel: string;
  readingLabel: string;
  title: string;
  excerpt: string;
}) {
  return (
    <Link
      href={href}
      className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-colors hover:border-accent/40"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="inline-flex rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent">
          {categoryTitle}
        </span>
        <span className="text-xs text-muted">
          {dateLabel} · {readingLabel}
        </span>
      </div>
      <h2 className="mt-4 text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
        {title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{excerpt}</p>
      <span
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
        aria-hidden
      >
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
