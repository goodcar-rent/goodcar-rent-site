import React from 'react'
import PropTypes from 'prop-types'
import CarCard from './car-card'
import './car-list.css'
//import Cars from '../data/cars.json'

export function CarList (props) {
  let ndx=0
  console.log(props)
  return (
    <div className="block100">
      <div className="wrapper">
        <div id="our_offers">
          <h2>Выбирайте из наших автомобилей:</h2>
          <ul className="offers_list">
            {props.cars.map( (item) =>
              <CarCard
                key = { (ndx++).toString()}
                caption={item.caption}
                icon={item.icon}
                ribbon=""
                baggage={item.baggage.toString()}
                people={item.people.toString()}
                gear={item.transmission.toString()}
                price={item.price} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

CarList.propTypes = {
	cars: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    }),
    baggage: PropTypes.number,
    people: PropTypes.number,
    transmission: PropTypes.string,
    price: PropTypes.number
  })),
}