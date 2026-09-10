export const SITE_URL = "https://yeswedoyourprojects.online";
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

/**
 * hreflang alternates for the pages that exist in English, Arabic and French.
 * `enPath` is the canonical English path, e.g. "" (home), "/services", "/contact".
 * English stays the canonical primary version (x-default).
 */
export function hreflangLinks(enPath: "" | "/services" | "/contact") {
  const en = `${SITE_URL}${enPath || "/"}`;
  return [
    { rel: "alternate", hrefLang: "en", href: en },
    { rel: "alternate", hrefLang: "ar", href: `${SITE_URL}/ar${enPath}` },
    { rel: "alternate", hrefLang: "fr", href: `${SITE_URL}/fr${enPath}` },
    { rel: "alternate", hrefLang: "x-default", href: en },
  ];
}
