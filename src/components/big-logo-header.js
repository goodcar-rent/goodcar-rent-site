import React from 'react'
import './big-logo-header.css'
import logo from '../images/logo.svg'

export function BigLogoHeader () {
  return (
    <div className="block100 black_block_000000 black_shadow_block">
      <div className="wrapper">
        <div id="big_logo_header">
            <a href="./" target="/" title="#">
              <img src={logo} style={{ width: '400px'}} alt="ГудКар - прокат автомобилей в Новосибирске"/>
            </a>
        </div>
      </div>
    </div>
  )
}
