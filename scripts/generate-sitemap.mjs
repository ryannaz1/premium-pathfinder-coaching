// Regenerates public/sitemap.xml from the route files in src/routes.
// Run with: bun run sitemap
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://yeswedoyourprojects.online";
const ROUTES_DIR = "src/routes";

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return walk(full);
    if (!entry.endsWith(".tsx") || entry === "__root.tsx") return [];
    return [full];
  });
}

const paths = walk(ROUTES_DIR)
  .map((file) =>
    file
      .replace(`${ROUTES_DIR}/`, "")
      .replace(/\.tsx$/, "")
      .replace(/(^|\/)index$/, ""),
  )
  .map((p) => (p ? `/${p.replace(/\/$/, "")}` : "/"))
  .filter((p) => !p.startsWith("/api"))
  .sort();

function priority(path) {
  if (path === "/") return "1.0";
  const depth = path.split("/").filter(Boolean).length;
  return depth === 1 ? "0.8" : "0.6";
}

const today = new Date().toISOString().slice(0, 10);
const body = paths
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p === "/" ? "/" : p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority(p)}</priority>\n  </url>`,
  )
  .join("\n");

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
);

console.log(`sitemap.xml written with ${paths.length} URLs`);
