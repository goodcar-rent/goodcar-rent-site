import React from 'react'
import Card from './card'

export function AutoList () {
  return <div className="CardContainer">
    <div className="CardGroup">
      <Card
        title="Hyndai Solaris"
        subtitle="Hyndai Solaris III 1.6 AT (new 2018)"
        image={require('../images/hyndai-solaris.jpg')}
        text="10 sections"/>
      <Card
        title="Kia RIO"
        subtitle="Kia RIO 1.6 AT (new 2018)"
        text="11 sections"
        image={require('../images/kia-rio.jpg')}/>
    </div>
  </div>
}