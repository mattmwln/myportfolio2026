import { SITE_URL, INDEXABLE_PATHS } from "../config/site.mjs";
import { getPublishedPosts, postPath, dateValue, escapeXml } from "../lib/blog";
export const get = async () => {
  const posts = await getPublishedPosts();
  const pages = INDEXABLE_PATHS.map(
    (path) => `<url><loc>${escapeXml(new URL(path, SITE_URL).href)}</loc></url>`
  );
  const articles = posts.map(
    (post) =>
      `<url><loc>${escapeXml(
        new URL(postPath(post), SITE_URL).href
      )}</loc><lastmod>${dateValue(
        post.data.updatedAt ?? post.data.publishedAt
      )}</lastmod></url>`
  );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[
      ...pages,
      ...articles,
    ].join("")}</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
};
