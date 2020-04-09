const path = require('path');

module.exports = {
  title: 'C19HCC',
  url: 'https://docs.standardhealth.com',
  baseUrl: '/',
  organizationName: 'MITRE Corporation',
  projectName: 'C19HCC-data-dictionary',

  favicon: 'favicon.ico',
  tagline: 'Data Dictionary',

  stylesheets: [
    'https://fonts.googleapis.com/css?family=Source+Code+Pro|Work+Sans&display=swap',
    './src/css/algolia.css',
  ],

  plugins: [path.resolve(__dirname, './svg-plugin'), path.resolve(__dirname, './dotenv-plugin')],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Don't use Array, put more CSS in 'stylesheets' above
        },
        docs: {
          // docs folder path relative to website dir.
          path: '../docs',
          // sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],

  themeConfig: {
    prism: {
      /**
       * if you change the theme, you will need to change the highlighted theme for the code block
       * default theme is Palenight*/
      // theme: require('prism-react-renderer/themes/dracula'),
    },

    disableDarkMode: true,
    navbar: {
      title: '',
      logo: {
        alt: 'MITRE C19HCC',
        src: 'img/logos/mitre_name.png',
      },
      links: [
        { to: 'docs/submission-overview', label: 'Overview', position: 'right' },
        { to: 'dictionary', label: 'Dictionary', position: 'right' },
        // {
        //   href: 'https://platform.standardhealth.org/contact',
        //   label: 'Contact',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      logo: null,
      copyright: `© ${new Date().getFullYear()} MITRE Corporation. All Rights reserved.`,
    },
  },
  customFields: {
    PLATFORM_UI_ROOT: 'https://platform.standardhealth.org/',
    GATEWAY_API_ROOT: 'https://api.platform.standardhealth.org/',
  },
};
