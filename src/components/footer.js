import React from 'react'
import PropTypes from 'prop-types'
import './footer.css'

const Footer = (props) => {
  return (
    <div className="block100 black_block_000000">
      <div className="wrapper">
        <div id="footer">
          <div className="foot_left">
            <p className="copyright"><a href="/" target="_self" title="GoodCar.rent">GoodCars.rent</a> © 2018</p>
            <h3 className="description">Все права защищены. Копирование материалов с сайта без указания автора -
              запрещено</h3>
            <p className="developer">Дизайн сайта &mdash; <a href="http://veshkin.ru" target="_blank" rel="nofollow noopener noreferrer"
                                                             title="Андрей Вешкин &mdash; Дизайн, разработка, продвижение сайтов в Новосибирске">Андрей
              Вешкин</a>.</p>
          </div>
          <div className="foot_center">
            <div className="social_buttons_list">
                <a href={`${props.social_vk}`} className="social_button vkontakte" target="_blank" rel="nofollow noopener noreferrer" title="Вконтакте"> </a>
                <a href={props.social_fb} className="social_button facebook" target="_blank" rel="nofollow noopener noreferrer" title="Facebook">  </a>
                <a href={props.social_ig} className="social_button instagram" target="_blank" rel="nofollow noopener noreferrer" title="Instagram"> </a>
            </div>
          </div>
          <div className="foot_right">
            <div className="description">Появились вопросы? Звоните!</div>
            <div className="phone"><a href={`tel:${props.tel}`} target="_self" title="Позвонить">{props.tel_formatted?props.tel_formatted:props.tel}</a></div>
            {/*<a href="#" className="button" target="_self" title="Оставить заявку">Оставить заявку</a>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
	tel: PropTypes.string,
	tel_formatted: PropTypes.string,
  email: PropTypes.string,
  social_vk: PropTypes.string,
  social_fb: PropTypes.string,
  social_ig: PropTypes.string
}

export default Footer