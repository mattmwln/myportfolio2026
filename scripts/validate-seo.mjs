import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import parse5 from "parse5";
import matter from "gray-matter";
import sharp from "sharp";
import { SITE_URL, INDEXABLE_PATHS } from "../src/config/site.mjs";

const output = process.env.SEO_BUILD_DIR ?? ".vercel/output/static";
const attr = (node, key) => node.attrs?.find((a) => a.name === key)?.value;
const text = (node) =>
  (node.childNodes ?? []).map((n) => n.value ?? text(n)).join("");
function parse(html) {
  const nodes = [];
  function visit(node) {
    nodes.push(node);
    for (const child of node.childNodes ?? []) visit(child);
  }
  visit(parse5.parse(html));
  const tags = (name) => nodes.filter((n) => n.tagName === name);
  const meta = (key) =>
    tags("meta").filter(
      (n) => attr(n, "name") === key || attr(n, "property") === key
    );
  return { nodes, tags, meta };
}
function readPage(route) {
  const file = route.endsWith("/") ? `${route}index.html` : route;
  return fs.readFileSync(path.join(output, file), "utf8");
}
function allContent(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? allContent(path.join(dir, entry.name))
        : /\.md$/.test(entry.name)
        ? [path.join(dir, entry.name)]
        : []
    );
}
const posts = allContent("src/content/blog").map((file) => {
  const { data } = matter.read(file);
  const slug = data.slug ?? path.basename(file, ".md");
  assert.match(
    slug,
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    `Use a flat, kebab-case slug: ${file}`
  );
  return { data, route: `/blog/${slug}/` };
});
const published = posts
  .filter((post) => !post.data.draft)
  .sort(
    (a, b) =>
      new Date(b.data.publishedAt) - new Date(a.data.publishedAt) ||
      a.route.localeCompare(b.route)
  );
const expectedRoutes = [
  ...INDEXABLE_PATHS,
  ...published.map((post) => post.route),
];
assert.equal(
  new Set(expectedRoutes).size,
  expectedRoutes.length,
  "Duplicate route"
);
const canonicalTitles = new Set();
const inspected = new Map();

for (const route of expectedRoutes) {
  const html = readPage(route);
  const { nodes, tags, meta } = parse(html);
  inspected.set(route, { nodes, tags, meta, html });
  const canonicalUrl = new URL(route, SITE_URL).href;
  assert.equal(tags("html").length, 1, route);
  assert.equal(attr(tags("html")[0], "lang"), "id");
  assert.equal(tags("main").length, 1, route);
  assert.equal(tags("h1").length, 1, `One H1: ${route}`);
  assert.ok(text(tags("h1")[0]).trim());
  assert.equal(tags("title").length, 1, route);
  const title = text(tags("title")[0]).trim();
  assert.ok(title);
  assert.ok(!canonicalTitles.has(title), `Duplicate title: ${title}`);
  canonicalTitles.add(title);
  const canonical = tags("link").filter((n) => attr(n, "rel") === "canonical");
  assert.equal(canonical.length, 1, `One canonical: ${route}`);
  assert.equal(attr(canonical[0], "href"), canonicalUrl);
  assert.equal(meta("robots").length, 1);
  assert.match(attr(meta("robots")[0], "content"), /^index, follow/);
  for (const key of [
    "description",
    "og:title",
    "og:description",
    "og:url",
    "og:type",
    "og:image",
    "og:image:width",
    "og:image:height",
    "og:site_name",
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image",
  ]) {
    assert.equal(meta(key).length, 1, `${route}: ${key}`);
    assert.ok(attr(meta(key)[0], "content"), key);
  }
  assert.equal(meta("keywords").length, 0);
  assert.equal(attr(meta("og:url")[0], "content"), canonicalUrl);
  assert.equal(attr(meta("og:title")[0], "content"), title);
  assert.equal(attr(meta("twitter:title")[0], "content"), title);
  assert.equal(
    attr(meta("description")[0], "content"),
    attr(meta("og:description")[0], "content")
  );
  const image = new URL(attr(meta("og:image")[0], "content"));
  assert.equal(image.origin, SITE_URL);
  const imageMetadata = await sharp(
    path.join(output, image.pathname)
  ).metadata();
  assert.equal(
    Number(attr(meta("og:image:width")[0], "content")),
    imageMetadata.width
  );
  assert.equal(
    Number(attr(meta("og:image:height")[0], "content")),
    imageMetadata.height
  );
  assert.equal(attr(meta("twitter:image")[0], "content"), image.href);
  // Vite also loads .env files at build time; the standalone validator need not
  // load those files (or expose their contents) to check optional verification.
  for (const [key, env] of [
    ["google-site-verification", "GOOGLE_SITE_VERIFICATION"],
    ["msvalidate.01", "BING_SITE_VERIFICATION"],
  ]) {
    assert.ok(meta(key).length <= 1, `Duplicate ${key}`);
    if (meta(key).length) assert.ok(attr(meta(key)[0], "content")?.trim());
    if (process.env[env]) {
      assert.equal(meta(key).length, 1);
      assert.equal(attr(meta(key)[0], "content"), process.env[env]);
    }
  }
  assert.ok(
    tags("link").some(
      (n) =>
        attr(n, "type") === "application/rss+xml" &&
        attr(n, "href") === `${SITE_URL}/rss.xml`
    )
  );

  const structured = tags("script").filter(
    (n) => attr(n, "type") === "application/ld+json"
  );
  assert.equal(structured.length, 1, route);
  const graph = JSON.parse(text(structured[0]));
  assert.equal(graph["@context"], "https://schema.org");
  const entities = graph["@graph"];
  assert.equal(
    new Set(entities.map((n) => n["@id"])).size,
    entities.length,
    "Duplicate entity ID"
  );
  const ofType = (type) => entities.filter((n) => n["@type"] === type);
  assert.equal(ofType("Person").length, 1);
  const person = ofType("Person")[0];
  assert.equal(person["@id"], `${SITE_URL}/#person`);
  assert.equal(person.name, "Rahmat Maulana");
  assert.equal(person.jobTitle, undefined, "Do not invent a formal job title");
  assert.equal(person.alumniOf.name, "Universitas Sriwijaya");
  const workplace = ofType("Organization");
  assert.equal(workplace.length, 1);
  assert.equal(workplace[0].name, "UBP Keramasan");
  assert.equal(person.worksFor["@id"], workplace[0]["@id"]);
  for (const property of [
    "url",
    "logo",
    "address",
    "parentOrganization",
    "identifier",
  ])
    assert.equal(workplace[0][property], undefined);
  for (const url of person.sameAs)
    assert.ok(
      tags("a").some(
        (n) =>
          attr(n, "href") === url && (attr(n, "aria-label") || text(n).trim())
      ),
      url
    );
  assert.equal(ofType("WebSite").length, 1);
  assert.equal(ofType("WebSite")[0].publisher["@id"], person["@id"]);

  if (route === "/") {
    assert.equal(ofType("ProfilePage").length, 1);
    assert.equal(ofType("ProfilePage")[0].mainEntity["@id"], person["@id"]);
    assert.match(text(tags("h1")[0]), /Rahmat Maulana/);
    const bodyText = text(tags("body")[0]);
    for (const phrase of [
      "Universitas Sriwijaya",
      "Palembang",
      "UBP Keramasan",
      "Visualisasi Data",
      "Tulisan Terbaru",
    ])
      assert.ok(bodyText.includes(phrase), phrase);
    const experience = nodes.find((n) => attr(n, "id") === "exp-container");
    assert.match(
      text(experience).trim(),
      /^Visualisasi Data\s+UBP Keramasan\s+Present/
    );
    for (const id of [
      "profile",
      "experience",
      "projects",
      "skills",
      "writing",
    ]) {
      let node = nodes.find((n) => attr(n, "id") === id);
      assert.ok(node, id);
      while (node && node.tagName !== "main") node = node.parentNode;
      assert.ok(node, `${id} outside main`);
    }
    const writing = nodes.find((n) => attr(n, "id") === "writing");
    for (const post of published.slice(0, 3))
      assert.ok(text(writing).includes(post.data.title));
  } else if (route === "/blog/") {
    assert.equal(ofType("CollectionPage").length, 1);
    assert.equal(ofType("Blog").length, 1);
    assert.equal(
      ofType("CollectionPage")[0].mainEntity["@id"],
      ofType("Blog")[0]["@id"]
    );
    assert.deepEqual(
      ofType("Blog")[0].blogPost.map((n) => n["@id"]),
      published.map((post) => `${SITE_URL}${post.route}#article`)
    );
  } else {
    const post = published.find((p) => p.route === route);
    const { data } = post;
    assert.equal(ofType("BlogPosting").length, 1);
    const article = ofType("BlogPosting")[0];
    assert.equal(article.author["@id"], person["@id"]);
    assert.equal(article.publisher["@id"], person["@id"]);
    assert.equal(article.headline, data.title);
    assert.equal(article.description, data.description);
    const publishedDate = new Date(data.publishedAt).toISOString().slice(0, 10);
    assert.equal(article.datePublished, publishedDate);
    assert.equal(
      attr(meta("article:published_time")[0], "content"),
      new Date(data.publishedAt).toISOString()
    );
    assert.equal(meta("article:modified_time").length, data.updatedAt ? 1 : 0);
    if (data.updatedAt)
      assert.equal(
        article.dateModified,
        new Date(data.updatedAt).toISOString().slice(0, 10)
      );
    assert.equal(attr(meta("og:type")[0], "content"), "article");
    assert.ok(tags("time").some((n) => attr(n, "datetime") === publishedDate));
    assert.equal(ofType("BreadcrumbList").length, 1);
    const breadcrumb = nodes.find(
      (n) => attr(n, "aria-label") === "Breadcrumb"
    );
    assert.ok(breadcrumb && text(breadcrumb).includes(data.title));
    assert.deepEqual(
      ofType("BreadcrumbList")[0].itemListElement.map((item) => item.item),
      [`${SITE_URL}/`, `${SITE_URL}/blog/`, canonicalUrl]
    );
    assert.ok(
      tags("a").some(
        (n) => attr(n, "rel") === "author" && attr(n, "href") === "/#profile"
      )
    );
    assert.equal(
      tags("astro-island").length,
      0,
      "No React hydration on blog pages"
    );
    if (data.sourceUrl) {
      const source = tags("a").find((n) => attr(n, "href") === data.sourceUrl);
      assert.ok(source && text(source).includes(data.sourceLabel));
      assert.equal(attr(source, "target"), "_blank");
      assert.equal(attr(source, "rel"), "noopener noreferrer");
      assert.equal(article.isBasedOn, data.sourceUrl);
    }
    if (data.cover)
      assert.ok(
        tags("img").some(
          (n) =>
            attr(n, "src") === data.cover.src &&
            attr(n, "alt") === data.cover.alt
        )
      );
    if (data.embed) {
      assert.ok(
        tags("button").some((n) => attr(n, "data-embed-url") === data.embed.url)
      );
      assert.equal(tags("iframe").length, 0, "Embed must not load by default");
    }
  }

  for (const anchor of tags("a")) {
    const href = attr(anchor, "href");
    assert.ok(href && href !== "#", `Placeholder anchor: ${route}`);
    assert.ok(
      text(anchor).trim() || attr(anchor, "aria-label"),
      `Unnamed link: ${href}`
    );
    for (let parent = anchor.parentNode; parent; parent = parent.parentNode)
      assert.notEqual(parent.tagName, "a");
    const url = new URL(href, canonicalUrl);
    if (url.origin === SITE_URL) {
      const filePath = url.pathname.endsWith("/")
        ? `${url.pathname}index.html`
        : url.pathname;
      assert.ok(
        fs.existsSync(path.join(output, filePath)),
        `Broken internal link: ${route} -> ${href}`
      );
      if (url.hash)
        assert.ok(
          parse(readPage(url.pathname)).nodes.some(
            (n) => attr(n, "id") === decodeURIComponent(url.hash.slice(1))
          ),
          href
        );
    }
  }
  for (const imageNode of tags("img")) {
    assert.notEqual(attr(imageNode, "alt"), undefined);
    const src = attr(imageNode, "src");
    if (src?.startsWith("/"))
      assert.ok(fs.existsSync(path.join(output, src)), src);
  }
  assert.ok(!html.includes("media.licdn.com"));
  assert.ok(
    html.trimEnd().endsWith("</html>"),
    `Content outside document: ${route}`
  );
}

const sitemap = fs.readFileSync(`${output}/sitemap.xml`, "utf8");
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
assert.deepEqual(
  locations,
  expectedRoutes.map((route) => new URL(route, SITE_URL).href)
);
assert.match(
  sitemap,
  /xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/
);
for (const post of published) {
  const modified = new Date(post.data.updatedAt ?? post.data.publishedAt)
    .toISOString()
    .slice(0, 10);
  assert.ok(
    sitemap.includes(
      `<loc>${SITE_URL}${post.route}</loc><lastmod>${modified}</lastmod>`
    )
  );
}
const rss = fs.readFileSync(`${output}/rss.xml`, "utf8");
const rssLinks = [...rss.matchAll(/<item>[^]*?<link>(.*?)<\/link>/g)].map(
  (m) => m[1]
);
assert.deepEqual(
  rssLinks,
  published.map((post) => `${SITE_URL}${post.route}`)
);
for (const post of posts.filter((p) => p.data.draft)) {
  assert.ok(
    !fs.existsSync(path.join(output, post.route, "index.html")),
    `Draft has a public route: ${post.route}`
  );
  assert.ok(!locations.includes(`${SITE_URL}${post.route}`));
  assert.ok(!rssLinks.includes(`${SITE_URL}${post.route}`));
  for (const page of inspected.values())
    assert.ok(
      !page.tags("a").some((n) => attr(n, "href") === post.route),
      "Draft in public listing"
    );
}
const robots = fs.readFileSync(`${output}/robots.txt`, "utf8");
assert.match(robots, /User-agent: \*/);
assert.match(robots, /Allow: \//);
assert.ok(!robots.includes("Disallow: /"));
assert.ok(robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`));
assert.match(readPage("/404.html"), /content="noindex, follow"/);
console.log(
  `SEO validation passed: ${expectedRoutes.length} pages, ${
    published.length
  } articles, ${
    posts.filter((p) => p.data.draft).length
  } excluded drafts; identity, metadata, author, breadcrumb, images, links, sitemap and RSS.`
);
