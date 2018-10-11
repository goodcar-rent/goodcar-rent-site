import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import Footer from '../components/footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Аренда машин в Новосибирске, прокат автомобилей без водителя, посуточная аренда' },
        { name: 'keywords', content: 'аренда, прокат, авто, автомобиль, машина, аренда авто, аренда автомобиля, посуточная пренда, прокат авто, прокат автомобиля' },
        { name: 'yandex-verification', content: '196ab0ea449a8987' },
        { name: 'google-site-verification', content: 's6u0dDqDiZOHKHU27dNbrCfZtVo9kMmJn9g0RVfIRhs'}
      ]}
    />
      {children()}
    <div />
    <Footer
      tel={data.site.siteMetadata.tel}
      tel_formatted={data.site.siteMetadata.tel_formatted}
      email={data.site.siteMetadata.email}
      social_fb={data.site.siteMetadata.social_fb}
      social_vk={data.site.siteMetadata.social_vk}
      social_ig={data.site.siteMetadata.social_ig}
    />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        tel
        tel_formatted
        email
        social_vk
        social_fb
        social_ig
      }
    }
  }
`
