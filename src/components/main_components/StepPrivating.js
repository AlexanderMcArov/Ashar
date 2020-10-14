import React from 'react'
import { Container } from 'reactstrap'
import './StepPrivating.css'

function StepPrivating() {
  return (
    <div>
      <Container>
        <div className="stepbox d-flex">
          <div className="logostep mr-3">
            <div className="logostepitem"/>
          </div>
          <div>
            <h4>
              1. Кредитная история
            </h4>
            <p>
              Получить кредитную историю в кредитном бюро «Ишеним» , которое находиться по адресу ул. Ахунбаева 127/1 перес ул. Малдыбаева
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default StepPrivating
