import React from 'react'
import './car-card.css'
import Car from '../images/car.png'
import PropTypes from 'prop-types'

const CarCard = props => {

	let hitSpan = ""

	if (props.ribbon === "hit")
		hitSpan = <span className="offer_hit_label"></span>

	return (
		<li className = { `offer_item ${props.ribbon === 'hit' ? 'offer_hit': ""} ` } >
			{hitSpan}
			<h3>{props.caption}</h3>
			<img src={Car} alt="#"/>
			<div className="offers_description">
				<p className="meta_item peoples">{props.people} чел</p>
				<p className="meta_item baggage">{props.baggage} мест(а)</p>
				<p className="meta_item gear">{props.gear === 'MT' ? "МКПП" : "АКПП"}</p>
			</div>
			<div className="price">от {props.price} руб./сутки</div>
			<a href="#" className="button" target="_self" title="Оставить заявку">Оставить заявку</a>
		</li>
	)
}

CarCard.propTypes = {
	caption: PropTypes.string.isRequired,
  ribbon: PropTypes.oneOf(['hit', '']).isRequired,
  people: PropTypes.number.isRequired,
	baggage: PropTypes.number.isRequired,
	gear: PropTypes.oneOf(['AT','MT']).isRequired,
	price: PropTypes.number.isRequired
}

export default CarCard