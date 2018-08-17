import React from 'react'
import './carcard.css'
import Car from '../images/car.png'

const CarCard = props => {

	let hitSpan = ""

	if (props.ribbon === "hit")
		hitSpan = <span className="offer_hit_label"></span>

	return (
		<li className = { `offer_item ${props.ribbon === 'hit' ? 'offer_hit': ""} ` } >
			{hitSpan}
			<h3>Renault Logan 2018</h3>
			<img src={Car} alt="#"/>
			<div className="offers_description">
				<p className="meta_item peoples">4 чел.</p>
				<p className="meta_item baggage">6 шт.</p>
				<p className="meta_item gear">АКПП</p>
			</div>
			<div className="price">от 3000 руб./сутки</div>
			<a href="#" className="button" target="_self" title="Оставить заявку">Оставить заявку</a>
		</li>
	)
}
export default CarCard