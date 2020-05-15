import React from 'react'
//import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/_legacy/layout'
import { Header } from '../components/_legacy/header'
import { Hero } from '../components/_legacy/hero'
import { CarList } from '../components/_legacy/car-list'
import { AdvantageList } from '../components/_legacy/advantage-list'
import { Contacts } from '../components/_legacy/contacts'
import { Flamp } from '../components/reviews'
import { Map } from '../components/_legacy/map'
//import Cars from '../data/cars.json'
 import { Footer } from '../components/_legacy/footer'


const IndexPage = ({data}) => {
    return (
      <Layout>
          <Header siteMeta={data.site.siteMetadata}/>
          <Hero/>
          <CarList cars={data.allCars.cars}/>
          <AdvantageList/>
          <Contacts cars={data.allCars.cars} siteMeta={data.site.siteMetadata}/>
          <Flamp/>
          <Map/>
          <Footer
            tel={data.site.siteMetadata.tel}
            tel_formatted={data.site.siteMetadata.tel_formatted}
            email={data.site.siteMetadata.email}
            social_fb={data.site.siteMetadata.social_fb}
            social_vk={data.site.siteMetadata.social_vk}
            social_ig={data.site.siteMetadata.social_ig}
          />
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
        cars(where: { status: PUBLISHED }, orderBy: orderby_ASC) {
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
