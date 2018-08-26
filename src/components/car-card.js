import React from 'react'
import PropTypes from 'prop-types'
import './car-card.css'
import Icon_Logan2018 from '../images/logan2018.png'
import Icon_Solaris from '../images/hyundai-solaris-II.png'
import Icon_Rio from '../images/kia-rio.png'
import Icon_Accent from '../images/hyundai-accent-2008.png'
import Icon_Spectra from '../images/kia-spectra-2008.png'
import Icon_Lacetti from '../images/chevrolet-lacetti-2008.png'
import Icon_Nexia from '../images/daewoo-nexia-2012.png'
import Icon_Matrix from '../images/hyundai-matrix-2008.png'

const CarCard = props => {

	let hitSpan = ""

	if (props.ribbon === "hit")
		hitSpan = <span className="offer_hit_label"></span>

	return (
		<li className = { `offer_item ${props.ribbon === 'hit' ? 'offer_hit': ""} ` } >
			{hitSpan}
			<h3>{props.caption}</h3>

			{props.icon === 'logan' && <img src={Icon_Logan2018} alt="#"/> }
			{props.icon === 'solaris' && <img src={Icon_Solaris} alt="#"/> }
			{props.icon === 'rio' && <img src={Icon_Rio} alt="#"/> }
			{props.icon === 'accent' && <img src={Icon_Accent} alt="#"/> }
			{props.icon === 'spectra' && <img src={Icon_Spectra} alt="#"/> }
			{props.icon === 'lacetti' && <img src={Icon_Lacetti} alt="#"/> }
			{props.icon === 'nexia' && <img src={Icon_Nexia} alt="#"/> }
			{props.icon === 'matrix' && <img src={Icon_Matrix} alt="#"/> }

			<div className="offers_description">
				<p className="meta_item peoples">{props.people} чел</p>
				<p className="meta_item baggage">{props.baggage} мест(а)</p>
				<p className="meta_item gear">{props.gear === 'MT' ? "МКПП - 'механика'" : "АКПП - 'автомат'"}</p>
			</div>
			<div className="price">от {props.price} руб./сутки</div>
			<a href="#formOrder" className="button" target="_self" title="Оставить заявку">Оставить заявку</a>
		</li>
	)
}

CarCard.propTypes = {
	caption: PropTypes.string.isRequired,
  ribbon: PropTypes.oneOf(['hit', '']).isRequired,
  people: PropTypes.number.isRequired,
	baggage: PropTypes.number.isRequired,
	gear: PropTypes.oneOf(['AT','MT']).isRequired,
	price: PropTypes.number.isRequired,
	icon: PropTypes.oneOf(['logan', 'solaris', 'rio'])
}

export default CarCard