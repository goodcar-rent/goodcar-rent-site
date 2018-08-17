import React from 'react'
import CarCard from './carcard'

export function CarList () {
  return (
    <div className="block100">
      <div className="wrapper">
        <div id="our_offers">
          <h2>Наши предложения</h2>
          <ul className="offers_list">
            <CarCard ribbon={"hit"} />
            <CarCard />
            <CarCard />
            <CarCard />
          </ul>
          <ul className="offers_list">
            <CarCard ribbon={"hit"} />
            <CarCard />
            <CarCard />
            <CarCard />
          </ul>
        </div>
      </div>
    </div>
  )
}
