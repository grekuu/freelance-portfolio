export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Gracjan Prusik Web Design',
          description: 'Modern websites that drive sales',
          url: 'https://prusk.com',
          telephone: '+48 790-690-315',
          email: 'contact@prusk.com',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'Poland',
          },
          service: [
            {
              '@type': 'Service',
              name: 'Web Design',
              description: 'Modern websites that drive sales',
            },
            {
              '@type': 'Service',
              name: 'Web Development',
              description: 'Custom Next.js and WordPress websites',
            },
          ],
        }),
      }}
    />
  );
}
