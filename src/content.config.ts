import {defineCollection,z} from 'astro:content'; import {glob} from 'astro/loaders';
const writing=defineCollection({loader:glob({pattern:'**/*.{md,mdx}',base:'./src/content/writing'}),schema:z.object({title:z.string(),description:z.string(),type:z.enum(['essay','note']),published:z.coerce.date(),updated:z.coerce.date().optional(),tags:z.array(z.string()).default([]),draft:z.boolean().default(false)})});
const books=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/books'}),schema:z.object({title:z.string(),author:z.string(),shelf:z.enum(['library','antilibrary']),cover:z.string().optional(),link:z.string().url().optional(),order:z.number().default(0)})});
export const collections={writing,books};
