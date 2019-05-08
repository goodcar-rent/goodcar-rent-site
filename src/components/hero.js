//import PropTypes from 'prop-types'
import React from 'react'
import './hero.css'

export function Hero () {
  return (
    <div className= "block100 slider">
      <div className= "wrapper">
        <div id= "slider_wrapper">
          <p className="big_text">Быстро, удобно и по низким ценам</p>
          <p className="small_text">Заказывайте по телефону или оставляйте заявку на сайте:</p>
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
