import React from 'react'
import CarCard from './car-card'
import './car-list.css'
import Cars from '../data/cars.json'

export function CarList () {
  let ndx=0
  return (
    <div className="block100">
      <div className="wrapper">
        <div id="our_offers">
          <h2>Наши предложения</h2>
          <ul className="offers_list">
            {Cars.map( (item) => <CarCard key = { (ndx++).toString()} caption={item.caption} icon={item.icon} ribbon="" baggage={item.baggage}
              people={item.people} gear={item.gear} price={item.price} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}
