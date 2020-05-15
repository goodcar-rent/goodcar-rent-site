import React from 'react'
//import { Link } from 'gatsby'
// import { graphql } from 'gatsby'
import { HeaderV3, Advantages, Flamp, Footer } from "../components";
// import Layout from '../components/layout'
// import { Header } from '../components/header'
// import { Hero } from '../components/hero'
// import { CarList } from '../components/car-list'
// import { AdvantageList } from '../components/advantage-list'
// import { Contacts } from '../components/contacts'
// import { Flamp } from '../components/flamp'
// import { Map } from '../components/map'
// //import Cars from '../data/cars.json'
//  import { Footer } from '../components/footer'


const IndexV3Page = () => {
    return (
      <div>
          <HeaderV3 />
          <Advantages />
          <Flamp />
          <Footer />
      </div>
    )
}

export default IndexV3Page
