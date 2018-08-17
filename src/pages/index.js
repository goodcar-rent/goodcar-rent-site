import React from 'react'
import { Hero } from '../components/hero'
import { CarList } from '../components/car-list'
import { ServiceList } from '../components/service-list'
import { Process } from '../components/process'
import { Order } from '../components/order'

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
