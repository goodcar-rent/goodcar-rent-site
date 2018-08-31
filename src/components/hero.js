import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import './hero.css'

export function Hero () {
  return (
    <div className= "block100 slider">
      <div className= "wrapper">
        <div id= "slider_wrapper">
          <p className="big_text">Аренда автомобилей в Новосибирске</p>
          <p className="small_text">Быстро, выгодно и по низким ценам!</p>
          <a
            href = "#formOrder"
            className = "button"
            target = "_self"
            title = "Оставить заявку">Оставить заявку</a>
        </div>
      </div>
    </div>
  )
}
