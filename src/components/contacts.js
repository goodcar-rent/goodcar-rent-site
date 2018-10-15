import React from 'react'
import PropTypes from 'prop-types'
import './contacts.css'
import Cars from '../data/cars.json'

export function Contacts (props) {
  const tel_formatted = props.siteMeta.tel_formatted ? props.siteMeta.tel_formatted : props.siteMeta.tel

  let ndx = 0;
  return (
    <div>
      <div className="block100">
        <div className="wrapper">
          <div id="our_contacts">
            <h2>Наши контакты</h2>
            <div className="left_contacts">
              <h3>Контактная информация</h3>
              <p className="row"><strong>Офис: </strong> г. Новосибирск, ул. Фабричная 10, офис 213</p>
              <p className="row"><strong>Наш телефон: </strong> <a href={`tel:${props.siteMeta.tel}`} target="_self"
                                                                  title="Позвонить">{tel_formatted}</a> (WhatsApp, Telegram, Viber)</p>
              <p className="row"><strong>Наш e-mail: </strong> <a href={`mailto:${props.siteMeta.email}`} target="_self"
                                                                 title="Написать">{props.siteMeta.email}</a></p>
              <p className="row"><strong>Офис работает: </strong>Будние дни с 09:00 – 18:00, <strong>суббота</strong> с 10:00 до 15:00, а в остальное время мы ждем ваших обращений по телефону или почте!</p>
              <div className="social_buttons_list">
                <a href={props.siteMeta.social_vk} className="social_button vkontakte" target="_blank" title="Вконтакте" rel="nofollow noopener noreferrer"> </a>
                <a href={props.siteMeta.social_fb} className="social_button facebook" target="_blank" title="Facebook" rel="nofollow noopener noreferrer"> </a>
                <a href={props.siteMeta.social_ig} className="social_button instagram" target="_blank" title="Instagram" rel="nofollow noopener noreferrer"> </a>
              </div>
            </div>
            <div className="right_contacts">
              <h3 id='formOrder'>Отправить заявку</h3>
              <form name="order" method="POST" data-netlify="true">
                <label className="row50">
                  <p>Ваше имя:</p>
                  <input type="text" id="name" name="name" className="text_form name"
                         placeholder="Например: Иван Иванович"/>
                </label>
                <label className="row50">
                  <p>Ваш e-mail:</p>
                  <input type="text" id="email" name="email" className="text_form mail"
                         placeholder="Например: your@email.ru"/>
                </label>
                <label className="row50">
                  <p>Ваш телефон:</p>
                  <input type="text" id="phone" name="phone" className="text_form phone"
                         placeholder="Например: +79876543210"/>
                </label>
                <label className="row50">
                  <p>Автомобиль:</p>
                  <select size="1" className="text_form subject" name="auto">
                    <option selected disabled>- Выберите из списка: -</option>
                    { Cars.map( (item) => <option key = {ndx++} value={item.caption}>{item.caption}</option>)}
                  </select>
                </label>
                <label className="row100">
                  <p>Ваше сообщение:</p>
                  <textarea className="text_form message" name="message"></textarea>
                </label>
                <button className="button" type="submit">Отправить сообщение</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

Contacts.propTypes = {
  siteMeta: PropTypes.shape({
    tel: PropTypes.string,
    tel_formatted: PropTypes.string,
    email: PropTypes.string,
    social_vk: PropTypes.string,
    social_fb: PropTypes.string,
    social_ig: PropTypes.string,
    cars: PropTypes.arrayOf(PropTypes.object)
  })
}
