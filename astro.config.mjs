import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://utrecht-team.nl',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener', 'noreferrer'],
        },
      ],
    ],
  },
});
