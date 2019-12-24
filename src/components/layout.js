import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// import Footer from '../components/footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Аренда машины в Новосибирске, прокат автомобиля без водителя, посуточная аренда, аренда авто, прокат авто, аренда машины, прокат машины, аренда автомобиля, прокат автомобиля, прокат авто в Толмачево, rent car, car hire, car rental, novosibirsk rent a car' },
            { name: 'keywords', content: 'аренда, прокат, авто, автомобиль, Толмачево, Новосибирск, воказал, машина, аренда авто, аренда автомобиля, аренда машины, аренда машины в Геш, аренда машины на Алтай, аренда авто в Геш, аренда авто на Алтай, аренда авто в Толмачево, посуточная аренда, прокат авто, прокат автомобиля, прокат машины, посуточный прокат авто, посуточный прокат машины, аренда без водителя' },
            { name: 'yandex-verification', content: '196ab0ea449a8987' },
            { name: 'google-site-verification', content: 's6u0dDqDiZOHKHU27dNbrCfZtVo9kMmJn9g0RVfIRhs'}
          ]}
        >
          <html lang="ru" />

          <link rel="preconnect" href="//tile0.maps.2gis.com" />
          <link rel="preconnect" href="//tile1.maps.2gis.com" />
          <link rel="preconnect" href="//tile2.maps.2gis.com" />
          <link rel="preconnect" href="//tile3.maps.2gis.com" />
          <link rel="preconnect" href="//www.google-analytics.com" />
          <link rel="preconnect" href="//mc.yandex.ru" />
          <link rel="preconnect" href="//connect.facebook.net" />
          <link rel="preconnect" href="//maps.api.2gis.ru" />
          <link rel="preconnect" href="//catalog.api.2gis.ru" />
          <link rel="preconnect" href="//widgets.2gis.com" />
          <link rel="preconnect" href="//cdn1.flamp.ru" />
          <link rel="preconnect" href="//media.graphcms.com" />
          <link rel="preconnect" href="//cdn.jsdelivr.net" />

          <link rel="dns-prefetch" href="//tile0.maps.2gis.com" />
          <link rel="dns-prefetch" href="//tile1.maps.2gis.com" />
          <link rel="dns-prefetch" href="//tile2.maps.2gis.com" />
          <link rel="dns-prefetch" href="//tile3.maps.2gis.com" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
          <link rel="dns-prefetch" href="//mc.yandex.ru" />
          <link rel="dns-prefetch" href="//connect.facebook.net" />
          <link rel="dns-prefetch" href="//maps.api.2gis.ru" />
          <link rel="dns-prefetch" href="//catalog.api.2gis.ru" />
          <link rel="dns-prefetch" href="//widgets.2gis.com" />
          <link rel="dns-prefetch" href="//cdn1.flamp.ru" />
          <link rel="dns-prefetch" href="//media.graphcms.com" />
          <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        </Helmet>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
