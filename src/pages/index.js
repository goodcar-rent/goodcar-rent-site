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
    <Process/>
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
      }
    }
  }
`
export default IndexPage
