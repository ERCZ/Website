const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ERCZ · Ake',
  tagline: '生命不息 折腾不止',
  url: 'https://www.ercz.cc',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    'docusaurus-plugin-sass',
    // [
    //   require.resolve('docusaurus-plugin-search-local'),
    //   {
    //     indexPages: true,
    //     language: 'zh',
    //     translations: {
    //       search_placeholder: '搜索',
    //       see_all_results: '查看所有结果',
    //       no_results: '无结果',
    //       search_results_for: '"{{ keyword }}"的搜索结果',
    //       search_the_documentation: '搜索文档',
    //       count_documents_found: '{{ count }} 个文档被发现',
    //       count_documents_found_plural: '{{ count }} 个文档被发现',
    //       no_documents_were_found: '没有文档被发现',
    //     },
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ERCZ · Ake',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: '前端',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                label: 'HTML&CSS',
                sidebarId: 'htmlCss',
              },
            ],
          },
          {
            type: 'dropdown',
            label: '算法',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                label: 'LeetCode',
                sidebarId: 'leetcode',
              },
            ],
          },
          {
            type: 'dropdown',
            label: '数码',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                label: 'PC',
                sidebarId: 'pc',
              },
            ],
          },
          { to: '/blog', label: '博客', position: 'left' },
          { to: '/about', label: '关于', position: 'left' },
          {
            href: 'https://github.com/ERCZ',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright ${new Date().getFullYear()} © ERCZ.CC | All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
}

module.exports = config
