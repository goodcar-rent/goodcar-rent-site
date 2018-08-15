module.exports = {
  siteMetadata: {
    title: '(beta) GoodCar.rent - Прокат машин в Новосибирске, посуточная аренда автомобилей',
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
