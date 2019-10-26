import React from 'react'
import Layout from '../components/layout'
import '../components/layout.css'
import { BigLogoHeader } from '../components/big-logo-header'
import '../components/big-logo-header.css'

const NotFoundPage = () => (
  <Layout>
    <BigLogoHeader />
    <div className="big_message_text">
      <h1>Спасибо за заявку!</h1>
      <p>Мы вам перезвоним в ближайшее время!</p>
    </div>
  </Layout>
)

export default NotFoundPage
