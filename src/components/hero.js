//import PropTypes from 'prop-types'
import React from 'react'
import './hero.css'

export function Hero () {
  return (
    <div className= "block100 slider">
      <div className= "wrapper">
        <div id= "slider_wrapper">
          <p className="big_text">Быстро, удобно и по низким ценам</p>
          <p className="small_text">Просто позвоните по телефону!</p>
          <a
            href = "tel:+79513888888"
            className = "button"
            target = "_self"
            title = "Оставить заявку">Позвонить и арендовать</a>
        </div>
      </div>
    </div>
  )
}
