import type { ServiceContent } from "@/lib/dictionaries";

const paths: Record<ServiceContent["icon"], React.ReactNode> = {
  // Megaphone / performance ads
  ads: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l3.5 4a1 1 0 0 0 1.8-.6V6.6a1 1 0 0 0-1.8-.6L6 10H4a1 1 0 0 0-1 1z" />
      <path d="M15 8a4 4 0 0 1 0 8" />
      <path d="M18 5a8 8 0 0 1 0 14" />
    </>
  ),
  // Sparkle / creative
  creative: (
    <>
      <path d="M12 3l1.8 4.9L18.7 9 13.8 10.9 12 16l-1.8-5.1L5.3 9l4.9-1.1L12 3z" />
      <path d="M18 15l.7 1.9L20.6 18l-1.9.6L18 20.5l-.7-1.9L15.4 18l1.9-.6L18 15z" />
      <path d="M6 14l.5 1.4L8 16l-1.5.5L6 18l-.5-1.5L4 16l1.5-.6L6 14z" />
    </>
  ),
  // Magnifier / SEO & GEO
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M11 8v6M8 11h6" />
    </>
  ),
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon: ServiceContent["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
