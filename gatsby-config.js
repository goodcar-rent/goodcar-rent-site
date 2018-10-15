require('dotenv-safe').config()

module.exports = {
  siteMetadata: {
    title: 'GoodCar.rent - Прокат машин в Новосибирске, посуточная аренда автомобилей',
    tel: '+79513888888',
    tel_formatted: '+7 (951) 388-88-88',
    email: 'office@goodcar.rent',
    social_vk: 'https://vk.com/goodcarrentnsk',
    social_fb: 'https://www.facebook.com/GoodCarRentNsk',
    social_ig: 'https://www.instagram.com/goodcarrentnsk/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GoodCar.rent`,
        short_name: `GoodCar.rent`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `src/images/goodcar-logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-yandex-metrika',
      options: {
        trackingId: '50703043',
        webvisor: true,
        trackHash: true,
        version: 2,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: "UA-23824119-2",
        // enable ip anonymization
        anonymize: false
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_API,
        token: process.env.GRAPHCMS_TOKEN,
        query: `{
            cars {
              id
              caption
              icon {
                id
                url
                width
                height
                mimeType
              }
              engine
              transmission
              fuelType
              baggage
              people
              price
              status
            }
        }`,
      },
    },
    /*{
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/goodcar-logo.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'ru-RU',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      },
    }*/
  ],
}
