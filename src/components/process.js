import React from 'react'

export function Process () {
  return (
    <div>
      <div className="block100">
        <div className="wrapper">
          <div id="our_contacts">
            <h2>Наши контакты</h2>
            <div className="left_contacts">
              <h3>Контактная информация</h3>
              <p className="row"><strong>Наш адрес:</strong> Россия, 630099, г. Новосибирск, ул. Ленина, д. 1, к. 1,
                офис 111</p>
              <p className="row"><strong>Наш телефон:</strong> <a href="tel:+79876543210" target="_self"
                                                                  title="Позвонить">8 987 654-32-10</a></p>
              <p className="row"><strong>Наш e-mail:</strong> <a href="mailto:info@GoodCar.rent" target="_self"
                                                                 title="Написать">info@GoodCar.rent</a></p>
              <p className="row"><strong>Skype:</strong> GoodCar.rent</p>
              <p className="row"><strong>Время работы:</strong> Ежедневно с 10:00 до 20:00 (без обеда и выходных)</p>
              <div className="social_buttons_list">
                <a href="#" className="social_button vkontakte" target="_blank" title="Вконтакте" rel="nofollow"></a>
                <a href="#" className="social_button odnoklassniki" target="_blank" title="Одноклассники"
                   rel="nofollow"></a>
                <a href="#" className="social_button facebook" target="_blank" title="Facebook" rel="nofollow"></a>
                <a href="#" className="social_button twitter" target="_blank" title="Twitter" rel="nofollow"></a>
                <a href="#" className="social_button instagram" target="_blank" title="Instagram" rel="nofollow"></a>
                <a href="#" className="social_button googleplus" target="_blank" title="Google+" rel="nofollow"></a>
                <a href="#" className="social_button youtube" target="_blank" title="YouTube" rel="nofollow"></a>
              </div>
            </div>
            <div className="right_contacts">
              <h3>Отправить сообщение</h3>
              <form name="feedback" method="post" action="#">
                <label className="row50">
                  <p>Ваше имя:</p>
                  <input type="text" id="name" name="name" className="text_form name"
                         placeholder="Например: Иван Иванович"/>
                </label>
                <label className="row50">
                  <p>Ваш e-mail:</p>
                  <input type="text" id="mail" name="mail" className="text_form mail"
                         placeholder="Например: your@mail.ru"/>
                </label>
                <label className="row50">
                  <p>Ваш телефон:</p>
                  <input type="text" id="phone" name="phone" className="text_form phone"
                         placeholder="Например: +79876543210"/>
                </label>
                <label className="row50">
                  <p>Тема обращения:</p>
                  <select size="1" className="text_form subject" name="subject">
                    <option selected disabled>- Выберите -</option>
                    <option value="Пункт 1">Пункт 1</option>
                    <option value="Пункт 2">Пункт 2</option>
                    <option value="Пункт 3">Пункт 3</option>
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
