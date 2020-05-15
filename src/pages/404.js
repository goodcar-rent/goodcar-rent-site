import React from 'react'
import Layout from '../components/_legacy/layout'
import '../components/_legacy/layout.css'
import { BigLogoHeader } from '../components/_legacy/big-logo-header'
import '../components/_legacy/big-logo-header.css'

const NotFoundPage = () => (
  <Layout>
    <BigLogoHeader />
    <div className="big_message_text">
      <h1>Страница не найдена!</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
