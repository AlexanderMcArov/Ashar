import React, { useState } from 'react'
import { Modal } from 'reactstrap'

function Calc() {

  const [calculate, setCalculate] = useState(true)


  return (
    <div>
      <Modal isOpen={calculate}>
        <form>
          <input type="number"></input>
          <input type="number" min="1" max="10"></input>
          <div>
            <h4>Result</h4>
            <p>asadas</p>
            <p>asdasd</p>
            <p>asdasd</p>
            <p>asdasd</p>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Calc
