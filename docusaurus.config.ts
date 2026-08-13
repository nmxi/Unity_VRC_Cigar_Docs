import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mikinel Cigar System',
  tagline: 'VRChat向け葉巻ギミック',
  favicon: 'img/cigar-icon.png',
  future: {v4: true},
  url: 'https://nmxi.github.io',
  baseUrl: '/Unity_VRC_Cigar_Docs/',
  organizationName: 'nmxi',
  projectName: 'Unity_VRC_Cigar_Docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  presets: [
    [
      'classic',
      {
        docs: {sidebarPath: './sidebars.ts'},
        blog: false,
        gtag: {
          trackingID: 'G-RGS859BBDE',
          anonymizeIP: false,
        },
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/cigar-x-thumbnail.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Mikinel Cigar System',
      hideOnScroll: true,
      logo: {
        alt: 'Mikinel Cigar System Icon',
        src: 'img/cigar-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'cigarSidebar',
          position: 'left',
          label: 'ドキュメント',
        },
        {to: '/docs/installation', position: 'left', label: '導入手順'},
        {to: '/docs/basic-usage', position: 'left', label: '基本操作'},
        {to: '/docs/cigar-settings', position: 'left', label: 'カスタマイズ'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {label: 'Mikinel Cigar Systemについて', to: '/docs/intro'},
        {label: '導入手順', to: '/docs/installation'},
        {label: '基本操作', to: '/docs/basic-usage'},
        {label: 'カスタマイズ', to: '/docs/cigar-settings'},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://x.com/kemmimilk" target="_blank" rel="noopener noreferrer">mikinel</a>. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
