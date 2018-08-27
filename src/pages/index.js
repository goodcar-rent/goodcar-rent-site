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
    <Header tel={data.site.siteMetadata.tel} tel_formatted={data.site.siteMetadata.tel_formatted} />
    <Hero tel={data.site.siteMetadata.tel} tel_formatted={data.site.siteMetadata.tel_formatted} />
    <CarList/>
    <AdvantageList/>
    <Contacts
      tel={data.site.siteMetadata.tel}
      tel_formatted={data.site.siteMetadata.tel_formatted}
      email={data.site.siteMetadata.email}
      social_fb={data.site.siteMetadata.social_fb}
      social_vk={data.site.siteMetadata.social_vk}
      social_ig={data.site.siteMetadata.social_ig}
      cars={Cars}
    />
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
  }
`

export default IndexPage
