import React from 'react'
import { Container } from 'reactstrap'
import './Info.css'

function Info() {
  return (
    <div>
      <Container className="info d-flex">
        <h3 className='info_title mr-3'>
          Основным преимуществом является то, что все документы оформляются на Вас!
        </h3>
        <div className="razdelitel"/>
        <p className='info_item ml-3'>
          После оформления Вы можете проживать в своей квартире или сдавать в аренду. Также если вы решите выйти из кооператива, мы   Вам вернем первоначальный взнос.
        </p>
      </Container>
    </div>
  )
}

export default Info
