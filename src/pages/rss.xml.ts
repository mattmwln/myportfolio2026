import { SITE_URL } from "../config/site.mjs";
import { getPublishedPosts, postPath, escapeXml } from "../lib/blog";
export const get = async () => {
  const posts = await getPublishedPosts();
  const items = posts.map((post) => {
    const url = escapeXml(new URL(postPath(post), SITE_URL).href);
    return `<item><title>${escapeXml(
      post.data.title
    )}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><description>${escapeXml(
      post.data.description
    )}</description><pubDate>${post.data.publishedAt.toUTCString()}</pubDate><category>${escapeXml(
      post.data.category
    )}</category></item>`;
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Blog Rahmat Maulana</title><link>${SITE_URL}/blog/</link><description>Catatan Mattmwln tentang teknologi, pengembangan web, visualisasi data, dan proses belajar.</description><language>id-ID</language><atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>${items.join(
      ""
    )}</channel></rss>\n`,
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } }
  );
};
