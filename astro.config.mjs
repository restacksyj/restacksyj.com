import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readingTime';
import rehypePrettyCode from 'rehype-pretty-code';
import vercel from '@astrojs/vercel/serverless'; // ✅ SWITCHED
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";

const options = {
    onVisitLine(node) {
        if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
        }
    },
    onVisitHighlightedLine(node) {
        node.properties.className = ['highlighted'];
    }
};

export default defineConfig({
    site: 'https://restacksyj.com/',
    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [[rehypePrettyCode, options]],
        remarkPlugins: [remarkReadingTime]
    },
    integrations: [tailwind(), react(), sitemap()],
    output: 'server',
    adapter: vercel()
});
