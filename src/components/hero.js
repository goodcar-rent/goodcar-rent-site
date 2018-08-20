import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import './hero.css'
import logo from '../images/logo.svg'

export function Hero (props) {
  return (
    <div>
      <div className="block100 black_block_000000 black_shadow_block">
        <div className="wrapper">
          <div id="top_line">
            <div className="top_line_left">
              <a href="./" target="_self" title="#">
                <img src={logo} style={{ width: '400px'}} alt="#"/>
              </a>
            </div>
            <div className="top_line_right">
              <div className="description">Появились вопросы? Звоните!</div>
              <div className="phone"><a href={`tel:${props.tel}`} target="_self" title="Позвонить">{props.tel_formatted ? props.tel_formatted : props.tel}</a></div>
            </div>
          </div>
        </div>
      </div>

      <div className= "block100 slider">
        <div className= "wrapper">
          <div id= "slider_wrapper">
            <p className="big_text">Аренда автомобилей в Новосибирске</p>
            <p className="small_text">Быстро, выгодно и по низким ценам!</p>
            <a
              href = "#"
              className = "button"
              target = "_self"
              title = "Оставить заявку" >Оставить заявку</a>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
	tel: PropTypes.string,
	tel_formatted: PropTypes.string,
}
