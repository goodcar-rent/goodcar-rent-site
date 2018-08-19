import React from 'react'
import CarCard from './car-card'

export function CarList () {
  return (
    <div className="block100">
      <div className="wrapper">
        <div id="our_offers">
          <h2>Наши предложения</h2>
          <ul className="offers_list">
            <CarCard caption="Renault Logan 2018" ribbon="hit" baggage={3} people={5} gear={"AT"} price={3000}/>
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
