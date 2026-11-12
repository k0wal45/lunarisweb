// Dane strukturalne (schema.org) jako <script type="application/ld+json">.
// `<` zamieniamy na <, żeby tekst z danych nie mógł zamknąć znacznika <script>.
//   <JsonLd data={faqLd(items)} />

export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
