import React from 'react'

export function Process () {
  return (
    <div>
      <h2>Условия аренды:</h2>
        <ul>
          <li>Водительский стаж не менее 2 лет</li>
          <li>Минимальный возраст 21 год</li>
          <li>Минимальный срок проката 24 часа</li>
          <li>Ограничения по пробегу - 250 км/сутки</li>
          <li>Дополнительная опция "без ограничения пробега" доступна при аренде от 3-х суток</li>
        </ul>
      <h2>Порядок действий:</h2>
        <ol>
          <li>заявка: по телефону или на сайте</li>
          <li>документы: паспорт и водительское удостоверение</li>
          <li>внести залог: для новых клиентов - при доставке вне офиса</li>
          <li>получить авто: договор и акт приема-передачи;</li>
        </ol>
    </div>
  )
}