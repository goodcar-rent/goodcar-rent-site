import PropTypes from 'prop-types'
import React from 'react'
import './header.css'
import logo from '../images/logo.svg'

export function Header (props) {
  return (
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
            <div className="phone">
              <a
                href={`tel:${props.siteMeta.tel}`}
                target="_self"
                title="Позвонить">
                {props.siteMeta.tel_formatted ? props.siteMeta.tel_formatted : props.tel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteMeta: PropTypes.shape({
    tel: PropTypes.string,
    tel_formatted: PropTypes.string,
  })
}
