import React from "react";
import { TEAM_DATA } from "@/data/team";

interface PeopleJsonLdProps {
  baseUrl?: string;
}

export function PeopleJsonLd({ baseUrl = "https://vienna-stationery.com" }: PeopleJsonLdProps) {
  const aboutPageData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "People Behind This Web — Vienna Stationery",
    description: "The people, team, and story behind Vienna Stationery.",
    url: `${baseUrl}/people-behind-this-web`,
    mainEntity: TEAM_DATA.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      image: `${baseUrl}${member.image}`,
      description: member.contribution,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageData) }}
    />
  );
}
