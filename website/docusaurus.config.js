const path = require('path');

module.exports = {
  title: 'C19HCC Cohorts',
  url: '/',
  baseUrl: '/',
  organizationName: 'MITRE Corporation',
  projectName: 'C19HCC Cohorts',
  favicon: 'favicon.ico',
  tagline: 'Cohorts and Metrics',

  stylesheets: [
    'https://fonts.googleapis.com/css?family=Source+Code+Pro|Work+Sans&display=swap',
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
      title: 'COVID-19 Healthcare Coalition Data Standards',
      logo: {
        alt: 'MITRE C19HCC',
        src: 'img/logos/home_icon.png'
      },
      links: [
        { to: 'docs/overview/', label: 'Overview', position: 'right' },
        { to: 'docs/studies/', label: 'Studies', position: 'right' },
        { to: 'docs/cohorts/', label: 'Cohorts', position: 'right' },
        { to: 'dictionary/', label: 'Data Dictionary', position: 'right' },
        { to: 'docs/vocabulary/', label: 'Vocabulary', position: 'right' }
        // {
        //   href: 'https://platform.standardhealth.org/contact',
        //   label: 'Contact',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      logo: null,
      copyright: `© ${new Date().getFullYear()} MITRE Corporation. All Rights reserved. Approved for Public Release Distribution Unlimited 19-03332.`
    },
  }
};
