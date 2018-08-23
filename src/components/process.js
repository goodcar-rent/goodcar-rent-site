import React from 'react'
import PropTypes from 'prop-types'

export function Process (props) {
  const tel_formatted = props.tel_formatted ? props.tel_formatted : props.tel

  return (
    <div>
      <div className="block100">
        <div className="wrapper">
          <div id="our_contacts">
            <h2>Наши контакты</h2>
            <div className="left_contacts">
              <h3>Контактная информация</h3>
              <p className="row"><strong>Офис: </strong> г. Новосибирск, ул. Фабричная 10, офис 213</p>
              <p className="row"><strong>Наш телефон: </strong> <a href={`tel:${props.tel}`} target="_self"
                                                                  title="Позвонить">{tel_formatted}</a> (WhatsApp, Telegram, Viber)</p>
              <p className="row"><strong>Наш e-mail: </strong> <a href={`mailto:${props.email}`} target="_self"
                                                                 title="Написать">{props.email}</a></p>
              <p className="row"><strong>Офис работает: </strong>Будние дни с 09:00 – 18:00, <strong>суббота</strong> с 10:00 до 15:00, а в остальное время мы ждем ваших обращений по телефону или почте!</p>
              <div className="social_buttons_list">
                <a href={props.social_vk} className="social_button vkontakte" target="_blank" title="Вконтакте" rel="nofollow"></a>
                <a href={props.social_fb} className="social_button facebook" target="_blank" title="Facebook" rel="nofollow"></a>
                <a href={props.social_ig} className="social_button instagram" target="_blank" title="Instagram" rel="nofollow"></a>
              </div>
            </div>
            <div className="right_contacts">
              <h3 шв="">Отправить заявку</h3>
              <form name="feedback" method="post" action="#">
                <label className="row50">
                  <p>Ваше имя:</p>
                  <input type="text" id="name" name="name" className="text_form name"
                         placeholder="Например: Иван Иванович"/>
                </label>
                <label className="row50">
                  <p>Ваш e-mail:</p>
                  <input type="text" id="mail" name="mail" className="text_form mail"
                         placeholder="Например: your@email.ru"/>
                </label>
                <label className="row50">
                  <p>Ваш телефон:</p>
                  <input type="text" id="phone" name="phone" className="text_form phone"
                         placeholder="Например: +79876543210"/>
                </label>
                <label className="row50">
                  <p>Автомобиль:</p>
                  <select size="1" className="text_form subject" name="subject">
                    <option selected disabled>- Выберите из списка: -</option>
                    <option value="solaris">Hyundai Solaris</option>
                    <option value="rio">Kia Rio</option>
                    <option value="other">(другой - указан в сообщении)</option>
                  </select>
                </label>
                <label className="row100">
                  <p>Ваше сообщение:</p>
                  <textarea className="text_form message" name="message"></textarea>
                </label>
                <input className="button" type="submit" value="Отправить сообщение"/>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="block100">
        <div id="map"
            dangerouslySetInnerHTML={{
              __html: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4b5c92f9de852bcd3307de4659be1b3be9250fbf687ca462cfc8400d8193bd42&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`
            }}
        />
      </div>

    </div>
  )
}

Process.propTypes = {
	tel: PropTypes.string,
	tel_formatted: PropTypes.string,
  email: PropTypes.string,
  social_vk: PropTypes.string,
  social_fb: PropTypes.string,
  social_ig: PropTypes.string
}
