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
