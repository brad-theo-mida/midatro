import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60).min(10),
      hero: image(),
      heroAlt: z.string(),
      description: z.string().max(160).min(110),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
    }),
});

const projectCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    languages: z.array(z.string()),
    website: z.string().url().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
