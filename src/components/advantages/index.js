import React from 'react'
import css from './index.module.css'
import img1 from '../../images/pics/adv-img/1.svg'
import img2 from '../../images/pics/adv-img/2.svg'
import img3 from '../../images/pics/adv-img/3.svg'
import img4 from '../../images/pics/adv-img/4.svg'
import img5 from '../../images/pics/adv-img/5.svg'
import img6 from '../../images/pics/adv-img/6.svg'

export const Advantages = () => {
  return (
    <div className={css.advWrapper}>
      <h1 className={css.advTitle} >Почему вам с нами будет удобно</h1>
      <div className={css.advCards}>
        <div className={css.advCard}>
          <img className={css.advCardImg} alt='Понятный договор аренды - картинка' src={img1}/>
          <h2 className={css.advCardTitle}>Понятный договор аренды</h2>
          <p className={css.advCardText}>Никаких лишних букв, звездочек или мелких шрифтов - только условия аренды, четко, понятно, в рамках законодательства РФ.</p>
        </div>
        <div className={css.advCard}>
          <img className={css.advCardImg} alt='Новые машины - картинка' src={img2}/>
          <h2 className={css.advCardTitle}>Новые машины</h2>
          <p className={css.advCardText}>Большая часть машин в нашем автопарке 2018-2019 г.в. Все проходят своевременное ТО. Вы получите машину в ИТС. Так же в нашем автопарке есть раритетные модели, но об этом подробнее вам расскажет наш менеджер.</p>
        </div>
        <div className={css.advCard}>
          <img className={css.advCardImg} alt='Круглосуточный сервис - картинка' src={img3}/>
          <h2 className={css.advCardTitle}>Круглосуточный сервис</h2>
          <p className={css.advCardText}>Если по дороге в офис или Шерегеш у вас случится форс-мажор, вы можете нам позвонить и наши специалисты вам помогут.</p>
        </div>
        <div className={css.advCard}>
          <img className={css.advCardImg} alt='Страховка - картинка' src={img4}/>
          <h2 className={css.advCardTitle}>Страховка</h2>
          <p className={css.advCardText}>На время аренды машина и ваша жизнь застрахованы! </p>
        </div>
        <div className={css.advCard}>
          <img className={css.advCardImg} alt='ON-LINE - картинка' src={img5}/>
          <h2 className={css.advCardTitle}>ON-LINE</h2>
          <p className={css.advCardText}>Оставить заявку на бронирование вы можете прямо у нас на сайте. Проверьте включен ли звук на вашем телефоне, потому что менеджер скоро вам перезвонит. </p>
        </div>
        <div className={css.advCard}>
          <img className={css.advCardImg} alt='Программа лояльности - картинка' src={img6}/>
          <h2 className={css.advCardTitle}>Программа лояльности</h2>
          <p className={css.advCardText}>Чем дольше вы с нами, тем выгоднее цена аренды. Узнайте о программе лояльности у наших менеджеров!</p>
        </div>
      </div>
    </div>

  )
}
