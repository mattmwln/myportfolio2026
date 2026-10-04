import { defineCollection, z } from "astro:content";

const httpsUrl = z
  .string()
  .url()
  .refine(
    (value) => new URL(value).protocol === "https:",
    "Use a public HTTPS URL"
  );
const blog = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string().trim().min(1),
      description: z.string().trim().min(1),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      category: z.string().trim().min(1),
      tags: z.array(z.string().trim().min(1)).default([]),
      cover: z
        .object({
          src: z
            .string()
            .regex(/^\/blog\/images\/[a-zA-Z0-9_-]+\.(webp|avif|png|jpe?g)$/),
          alt: z.string().trim().min(1),
        })
        .optional(),
      sourceUrl: httpsUrl.optional(),
      sourceLabel: z.string().trim().min(1).optional(),
      embed: z
        .object({
          url: httpsUrl.refine(
            (value) =>
              /^https:\/\/(www\.youtube-nocookie\.com\/embed\/[\w-]+|player\.vimeo\.com\/video\/\d+)$/.test(
                value
              ),
            "Only privacy-enhanced YouTube or Vimeo video embeds are supported"
          ),
          title: z.string().trim().min(1),
        })
        .optional(),
      draft: z.boolean().default(false),
    })
    .refine(
      (data) => !data.updatedAt || data.updatedAt >= data.publishedAt,
      "updatedAt cannot precede publishedAt"
    )
    .refine(
      (data) => Boolean(data.sourceUrl) === Boolean(data.sourceLabel),
      "Provide sourceUrl and sourceLabel together"
    ),
});

export const collections = { blog };
