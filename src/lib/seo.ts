export const SITE_URL = "https://premium-pathfinder-coaching.lovable.app";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Social meta tags shared by every page (og:image + full twitter card set). */
export function socialMeta(title: string, description: string) {
  return [
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    {
      property: "og:image:alt",
      content: "Yes We Do Your Projects — academic coaching, tutoring and research guidance",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE },
  ];
}
