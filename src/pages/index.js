import React from 'react'
import { Hero } from '../components/Hero'
import { AutoList } from '../components/AutoList'
import { ServiceList } from '../components/ServiceList'
import { Process } from '../components/Process'
import { Order } from '../components/Order'

const IndexPage = () => (
  <div>
    <Hero/>
    <AutoList/>
    <ServiceList/>
    <Process/>
    <Order/>
  </div>
)

export default IndexPage
