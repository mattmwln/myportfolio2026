import { person, currentWork, socialProfiles } from "./person";

export function identityNodes(home: string) {
  return [
    {
      "@type": "Person",
      "@id": `${home}#person`,
      ...person,
      url: home,
      worksFor: { "@id": `${home}#ubp-keramasan` },
      sameAs: socialProfiles.map((profile) => profile.url),
    },
    {
      "@type": "Organization",
      "@id": `${home}#ubp-keramasan`,
      name: currentWork.name,
    },
    {
      "@type": "WebSite",
      "@id": `${home}#website`,
      url: home,
      name: "Rahmat Maulana — Mattmwln",
      alternateName: "Mattmwln",
      inLanguage: "id-ID",
      publisher: { "@id": `${home}#person` },
    },
  ];
}

export interface ArticleMetadata {
  title: string;
  publishedAt: Date;
  updatedAt?: Date;
  category: string;
  tags: string[];
  sourceUrl?: string;
}
