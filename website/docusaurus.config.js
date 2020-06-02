const path = require('path');

module.exports = {
  title: 'C19HCC Cohorts',
  url: 'https://mcovid.org',
  baseUrl: '/',
  organizationName: 'MITRE Corporation',
  projectName: 'C19HCC Cohorts',
  favicon: 'favicon.ico',
  tagline: 'Cohorts and Metrics',

  stylesheets: [
    'https://use.typekit.net/rrd2zlt.css',
  ],

  plugins: [path.resolve(__dirname, './svg-plugin'), path.resolve(__dirname, './dotenv-plugin')],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Put more CSS in 'stylesheets' above
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
      logo: {
        alt: 'MITRE C19HCC',
        src: 'img/Coalition-logo.svg'
      },
      links: [
        { 
          label: 'STUDIES', 
          to: 'docs/studies/', 
          position: 'right',
          activeBasePath: 'docs',
          items: [
            {
              label: 'Hydroxychloroquine',
              to: 'docs/studies-hcq/',
            },
            {
              label: 'Convalescent Serum',
              to: 'docs/studies-cs/',
            },
          ],
        },
        { to: 'docs/cohorts/', label: 'COHORTS', position: 'right' },
        { to: 'docs/vocabulary/', label: 'VOCABULARY', position: 'right' },
        { to: 'dictionary/', label: 'DICTIONARY', position: 'right' }
        // {
        //   href: 'https://platform.standardhealth.org/contact',
        //   label: 'Contact',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      copyright: `© 2020, The MITRE Corporation. Approved for Public Release, Distribution Unlimited 19-03332.`
    },
  }
};
