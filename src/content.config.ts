import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/portfolio',
  }),

  schema: z.object({
    title: z.string(),
    summary: z.string(),
    cardSummary: z.string().optional(),
    year: z.number(),

    category: z.string(),

    theme: z.enum([
      'steel',
      'sage',
      'plum',
      'gold',
      'coral',
    ]),

    artwork: z
      .enum([
        'learning',
        'software',
        'documentation',
        'none',
      ])
      .default('learning'),

    artTone: z
      .enum([
        'soft',
        'light',
        'medium',
        'dark',
      ])
      .default('light'),

    featured: z.boolean().default(false),

    artLabel: z.string().optional(),
    linkLabel: z.string().default('View project'),

    capabilities: z.array(z.string()),

    cover: z.string().optional(),
  }),
});

export const collections = {
  portfolio,
};
