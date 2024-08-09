import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'APIPark Docs',
  tagline: 'APIPark Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.apipark.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apiparklab', // Usually your GitHub org/user name.
  projectName: 'apipark', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/APIParkLab/Docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'plugin-image-zoom'
  ],
  themeConfig: {
    navbar: {
      title: 'APIPark Docs',
      logo: {
        alt: 'APIPark Logo',
        src: 'img/apipark_logo.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          label: 'Get Started',
          position: 'right', // 右侧显示按钮
          className: 'navbar-button', // 自定义样式类名
          href: 'https://apipark.com/install', // 按钮链接的目标
        },
        {
          href: 'https://github.com/APIParkLab',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'apipark repository',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
