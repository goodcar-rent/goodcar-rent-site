import React from 'react'
import './advantage-list.css'
import advantage_item_1 from '../images/advantage_item_1.png'
import advantage_item_2 from '../images/advantage_item_2.png'
import advantage_item_3 from '../images/advantage_item_3.png'
import advantage_item_4 from '../images/advantage_item_4.png'

export function AdvantageList () {
  return (
    <div className="block100 black_block_000000">
      <div className="wrapper">
        <div id="our_advantages">
          <h2>Наши преимущества</h2>
          <ul className="our_advantages_list">
            <li className="advantage_item">
              <img src={advantage_item_1} alt="#"/>
              <p className="head_text">Большой парк автомобилей</p>
              <p className="description">Разумные цены. Техническая поддержка 24 часа!</p>
            </li>
            <li className="advantage_item">
              <img src={advantage_item_2} alt="#"/>
              <p className="head_text">Дополнительные услуги</p>
              <p className="description">Доставка автомобиля по адресу клиента. Возможность безлимитного пробега! Возможность любого дополнительного страхования.</p>
            </li>
            <li className="advantage_item">
              <img src={advantage_item_3} alt="#"/>
              <p className="head_text">Чистые и ухоженные автомобили</p>
              <p className="description">Всегда чистые и заправленные автомобили.</p>
            </li>
            <li className="advantage_item">
              <img src={advantage_item_4} alt="#"/>
              <p className="head_text">Быстрое оформление документов</p>
              <p className="description">Заказать и получить машину быстро и легко - по двум документам. Оформление договора меньше 10 минут</p>
            </li>
          </ul>
          <a href="#" className="button" target="_self" title="Оставить заявку">Оставить заявку</a>
        </div>
      </div>
    </div>
  )
}
