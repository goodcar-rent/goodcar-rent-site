import React from 'react'
import { Hero } from '../components/hero'
import { CarList } from '../components/car-list'
import { ServiceList } from '../components/service-list'
import { Process } from '../components/process'
import { Order } from '../components/order'

const IndexPage = ({data}) => (
  <div>
    <Hero tel={data.site.siteMetadata.tel} tel_formatted={data.site.siteMetadata.tel_formatted} />
    <CarList/>
    <ServiceList/>
    <Process
      tel={data.site.siteMetadata.tel}
      tel_formatted={data.site.siteMetadata.tel_formatted}
      email={data.site.siteMetadata.email}
      social_fb={data.site.siteMetadata.social_fb}
      social_vk={data.site.siteMetadata.social_vk}
      social_ig={data.site.siteMetadata.social_ig}
    />
    <Order/>
  </div>
)

export const query = graphql`
  query IndexQuery {
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

export default IndexPage
