/*
 * @Author: Conghao Wong
 * @Date: 2026-09-28 11:04:31
 * @LastEditors: Conghao Wong
 * @LastEditTime: 2026-11-16 10:33:01
 * @Github: https://cocoon2wong.github.io
 * Copyright 2026 Conghao Wong, All Rights Reserved.
 */
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://cocoon2wong.github.io',
  base: '/sota',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  integrations: [mdx()],
});
