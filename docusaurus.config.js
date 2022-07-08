// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AWS-CCOE',
  tagline: 'Welcome to the Cloud Center of Excellence!',
  url: 'https://aws-ccoe.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vmasc-capabilities-lab', // Usually your GitHub org/user name.
  projectName: 'aws-ccoe-doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'AWS-CCOE Logo',
          src: 'img/Logo_BW.svg',
          srcDark: 'img/Logo_C.svg',
        },
        items: [
          {to: '/', label: 'Home', position: 'left', className: 'home'},
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guide',
            label: 'AWS Guide',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'training',
            label: 'Training',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'support',
            position: 'left',
            label: 'Support',
          },
          {
            type: 'doc',
            docId: 'service-catalog',
            position: 'left',
            label: 'Service Catalog',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/vmasc-capabilities-lab/aws-ccoe-doc',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'team',
            position: 'left',
            label: 'Team',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Training',
                to: '/docs/training/intro',
              },
              {
                label: 'AWS Guide',
                to: '/docs/guide/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vmasc-capabilities-lab/aws-ccoe-doc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Capabilities Lab, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
