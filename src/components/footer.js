import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="block100 black_block_000000">
      <div className="wrapper">
        <div id="footer">
          <div className="foot_left">
            <p className="copyright"><a href="#" target="_self" title="#">GoodCars.rent</a> © 2018</p>
            <h3 className="description">Все права защищены. Копирование материалов с сайта без указания автора -
              запрещено</h3>
            <p className="developer">Дизайн сайта &mdash; <a href="http://veshkin.ru" target="_blank"
                                                             title="Андрей Вешкин &mdash; Дизайн, разработка, продвижение сайтов в Новосибирске">Андрей
              Вешкин</a>.</p>
          </div>
          <div className="foot_center">
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
          <div className="foot_right">
            <div className="description">Появились вопросы? Звоните!</div>
            <div className="phone"><a href="tel:+79876543210" target="_self" title="Позвонить">8 987 654-32-10</a></div>
            <a href="#" className="button" target="_self" title="Оставить заявку">Оставить заявку</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer