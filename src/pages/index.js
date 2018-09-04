import React from 'react'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { CarList } from '../components/car-list'
import { AdvantageList } from '../components/advantage-list'
import { Contacts } from '../components/contacts'
import { Map } from '../components/map'
import Cars from '../data/cars.json'

const IndexPage = ({data}) => (
  <div>
    <Header siteMeta={data.site.siteMetadata } />
    <Hero />
    <CarList cars={ data.allCar.edges.map( (item) => item.node) }/>
    <AdvantageList/>
    <Contacts siteMeta={data.site.siteMetadata } />
    <Map />
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
  allCar(filter: {status: {eq: "PUBLISHED"}}) {
    edges {
      node  {
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
    }
  }
}

  
`

export default IndexPage
