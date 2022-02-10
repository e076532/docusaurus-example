// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mastercard',
  url: 'https://e076532.github.io',
  baseUrl: '/docusaurus-example/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'e076532', // Usually your GitHub org/user name.
  projectName: 'docusaurus-example', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
		  //routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/e076532/docusaurus-example/',
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
        title: 'mastercard',
        logo: {
          alt: 'mastercard Logo',
          src: 'img/Mastercard-Logo.wine.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Transaction Processing Platform',
          },
          {
            href: 'https://github.com/e076532/docusaurus-example',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'mastercard Logo',
          src: 'img/Mastercard-Logo.wine.svg',
        },		
        links: [
          {			  
            title: 'Docs',
            items: [
              {
                label: 'TPP',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/e076532/docusaurus-example',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 Brighterion.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
