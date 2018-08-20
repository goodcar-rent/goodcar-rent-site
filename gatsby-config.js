module.exports = {
  siteMetadata: {
    title: '(beta) GoodCar.rent - Прокат машин в Новосибирске, посуточная аренда автомобилей',
    tel: '+79513888888',
    tel_formatted: '+7 (951) 388-88-88'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
