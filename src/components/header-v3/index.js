import React from 'react'
import classes from './index.module.css'

export const HeaderV3 = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.headerLogo} />
      <span>
        <div className={classes.headerSocialIconFb} />
        <div className={classes.headerSocialIconIg} />
      </span>
      <span>
        <a className={classes.headerPhone1} href="tel:8-951-388-88-88">
          8-951-388-88-88
        </a>
        <a className={classes.headerPhone2} href="tel:8-951-388-88-88">
          8-951-388-88-88
        </a>
      </span>

      <div className={classes.headerMenu}>
        <a className={classes.menuItem + ' ' + classes.menu1} href="#">
          Автопарк
        </a>
        <a className={classes.menuItem + ' ' + classes.menu2} href="#">
          Условия проката
        </a>
        <a className={classes.menuItem + ' ' + classes.menu3} href="#">
          Отзывы
        </a>
        <a className={classes.menuItem + ' ' + classes.menu4} href="#">
          Блог
        </a>
        <a className={classes.menuItem + ' ' + classes.menu5} href="#">
          Контакты
        </a>
      </div>

      <div className={classes.headerForm}>
        <h1 className={classes.headerFormTitle}>
          Прокат автомобилей в Новосибирске
        </h1>
        <span>
          <h2 className={classes.headerFormDateCaption}>Выберите дату</h2>
          <div className={classes.headerFormDateFrom}>
            <div className={classes.headerFormDateIcon} />
            <div className={classes.headerFormDateText}>От</div>
          </div>
          <div className={classes.headerFormDateTo}>
            <div className={classes.headerFormDateIcon} />
            <div className={classes.headerFormDateText}>До</div>
          </div>
          <div className={classes.headerFormButton}>
            <p>Подобрать авто</p>
          </div>
        </span>
      </div>
    </div>
  )
}
