/**
 * Renders a JSON-LD structured-data script. Structured data is a key signal for
 * both classic search (rich results) and generative engines (GEO).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is static and author-controlled.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
