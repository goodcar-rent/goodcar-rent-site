import React from 'react'
//import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { CarList } from '../components/car-list'
import { AdvantageList } from '../components/advantage-list'
import { Contacts } from '../components/contacts'
import { Map } from '../components/map'
//import Cars from '../data/cars.json'

const IndexPage = ({data}) => {
    return (
      <Layout>
          <Header siteMeta={data.site.siteMetadata}/>
          <Hero/>
          <CarList cars={data.allCars.cars}/>
          <AdvantageList/>
          <Contacts siteMeta={data.site.siteMetadata}/>
          <Map/>
      </Layout>
    )
}

/*({data}) => (
  <Layout>
    <Header siteMeta={data.site.siteMetadata } />
    <Hero />
    <CarList cars={ data.allCar.edges.map( (item) => item.node) }/>
    <AdvantageList/>
    <Contacts siteMeta={data.site.siteMetadata } />
    <Map />
  </Layout>
)

      allCars(filter: {status: {eq: "PUBLISHED"}}) {
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

*/
// cars( filter: { status: {eq: "PUBLISHED"}} ) {
export const query = graphql`
  query {
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
    allCars {
        cars(where: { status: PUBLISHED }) {
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
  }`

export default IndexPage
