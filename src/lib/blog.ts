import { getCollection, type CollectionEntry } from "astro:content";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export type BlogPost = CollectionEntry<"blog">;
export const postPath = (post: BlogPost) => `/blog/${post.slug}/`;
export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
export const dateValue = (date: Date) => date.toISOString().slice(0, 10);

// Drafts have no route even in dev. Content is authored locally; no remote fetching.
export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const slugs = new Set<string>();
  for (const post of posts) {
    if (slugs.has(post.slug))
      throw new Error(`Duplicate blog slug: ${post.slug}`);
    slugs.add(post.slug);
    if (
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) ||
      String(post.slug) === "index"
    ) {
      throw new Error(
        `Use a flat kebab-case blog slug, excluding index: ${post.slug}`
      );
    }
    if (/^#\s+/m.test(post.body))
      throw new Error(
        `Use ## headings in ${post.slug}; the layout already provides H1`
      );
  }
  return posts.sort(
    (a, b) =>
      b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf() ||
      a.slug.localeCompare(b.slug)
  );
}

export function relatedPosts(post: BlogPost, posts: BlogPost[]) {
  return posts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score:
        (candidate.data.category === post.data.category ? 2 : 0) +
        candidate.data.tags.filter((tag) => post.data.tags.includes(tag))
          .length,
    }))
    .filter((item) => item.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.post.data.publishedAt.valueOf() - a.post.data.publishedAt.valueOf()
    )
    .slice(0, 3)
    .map((item) => item.post);
}

const covers = new Map<
  string,
  Promise<{ src: string; alt: string; width: number; height: number }>
>();
export function getCover(cover: BlogPost["data"]["cover"]) {
  if (!cover) return undefined;
  const key = `${cover.src}:${cover.alt}`;
  if (!covers.has(key)) {
    covers.set(
      key,
      (async () => {
        const root = fs.realpathSync("public/blog/images");
        const file = fs.realpathSync(path.join("public", cover.src));
        if (!file.startsWith(root + path.sep))
          throw new Error("Blog cover must stay inside public/blog/images");
        const { width, height } = await sharp(file).metadata();
        if (!width || !height) throw new Error(`Invalid cover: ${cover.src}`);
        return { ...cover, width, height };
      })()
    );
  }
  return covers.get(key)!;
}

export const escapeXml = (value: string) =>
  value.replace(
    /[<>&"']/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      }[char]!)
  );
