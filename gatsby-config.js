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
    }
  ],
}
