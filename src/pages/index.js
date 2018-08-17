import React from 'react'
import { Hero } from '../components/Hero'
import { CarList } from '../components/CarList'
import { ServiceList } from '../components/ServiceList'
import { Process } from '../components/Process'
import { Order } from '../components/Order'

const IndexPage = () => (
  <div>
    <Hero/>
    <CarList/>
    <ServiceList/>
    <Process/>
    <Order/>
  </div>
)

export default IndexPage
