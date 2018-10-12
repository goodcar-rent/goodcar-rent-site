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
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
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
    {
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
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: true,
        windows: true
      }
    }
  }
  ],
}
