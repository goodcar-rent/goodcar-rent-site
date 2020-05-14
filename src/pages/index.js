import React from 'react'
//import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { CarList } from '../components/car-list'
import { AdvantageList } from '../components/advantage-list'
import { Contacts } from '../components/contacts'
import { Flamp } from '../components/reviews'
import { Map } from '../components/map'
//import Cars from '../data/cars.json'
 import { Footer } from '../components/footer'


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
