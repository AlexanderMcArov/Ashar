import React, { useState } from 'react';
import { Button, Modal } from 'reactstrap';

function Calculator(props) {
  const { calculate, setCalculate } = props
  const [value, setValue] = useState('')
  const [years, setYears] = useState('1')

  const personalPayment = 2000
  const [result, setResult] = useState({
    totalSummPayment: 0,
    fisrtPayment: 0,
    incomePayment: 0,
    summRecive: 0,
    everyMonthPayment: 0
  })

  function setGoodNumber(number) {
    console.log('NUMBER:',number);
    let float = parseFloat(number) - parseInt(number) + ' '
    float.split(' ')
    let res = []
    let resf = []
    number = parseInt(number) + ''
    number = number.split('').reverse()

    for (let i = 0; i < number.length; i++) {
      if (i > 2 && i % 3 == 0) res.push(',')
      res.push(number[i])
    }

    for (let i = 1; i < 4; i++) {
      resf.push(float[i])
    }
    res = res.reverse().join('')
    resf = resf.join('')
    res += resf
    console.log('GOOGNUMBER',res);
    return res
  }

  function Calculating(event) {
    event.preventDefault();
    let val = value
    val = parseInt(val)
    let time = years * 12
    let data = { ...result }
    data.fisrtPayment = val * 0.3
    data.incomePayment = val * 0.05
    data.summRecive = val - data.fisrtPayment
    data.everyMonthPayment = 2000 + parseInt(data.summRecive) / time
    data.totalSummPayment = 2000 * time + val + parseFloat(data.incomePayment)

    data.fisrtPayment = setGoodNumber(data.fisrtPayment)
    data.incomePayment = setGoodNumber(data.incomePayment)
    data.summRecive = setGoodNumber(data.summRecive)
    data.everyMonthPayment = setGoodNumber(data.everyMonthPayment)
    data.totalSummPayment = setGoodNumber(data.totalSummPayment)


    setResult(data)
  }

  function setNiceInput(string) {
    let res = []
    string = string.split('').reverse()
    for (let i = 0; i < string.length; i++) {
      if (i > 2 && i % 3 == 0) res.push(',')
      res.push(string[i])
    }
    res = res.reverse().join('')
    console.log(res);
    return res
  }

  function parseInput(str){
    str = str.split(',')
    str = str.join('')
    console.log(str);
    return str
  }

  return (
    <Modal isOpen={calculate} style={{ width: 'min-content', textAlign: 'center' }}>
      <div className="calculate">
        <h1>КАЛЬКУЛЯТОР</h1>
        <p>Заполните 2 поля: стоимость недвижимости и срок аренды!</p>
        <p>Нажмите на кнопку: "Рассчитать".</p>
        <p className="currency">Валюта рассчета сом.</p>
        <br></br>
        <form >
          <div className="calculate__form">
            <label htmlFor="value" >Стоимость жилья</label>
            <input value={setNiceInput(value)} onChange={(e) => setValue(parseInput(e.target.value))} type="text" id="value" placeholder="Введите сумму, сом"></input>
            <label htmlFor="value">Кол-во лет</label>
            <input value={years} onChange={e => setYears(e.target.value)} type="number" min="1" max="10"></input>
          </div>
          <button type="submit" onClick={(e) => Calculating(e)} className="btn_calculate">Рассчитать</button>
        </form>
        <div className="calculate__result">
          <h4>Результат</h4>
          <div className="row jcb">
            <span>Первоначальный взнос 30%: {result.fisrtPayment}</span>
            <span>Членский взнос, в месяц: {personalPayment}</span>
          </div>
          <div className="row jcb">
            <span>Вступительный взнос, 5%: {result.incomePayment}</span>
            <span>Сумма к получению: {result.summRecive}</span>
          </div>
        </div>
        <br></br><span>Ежемесячный платеж: {result.everyMonthPayment}</span>
        <br></br><span>Общая сумма выплаты: {result.totalSummPayment}</span>
        <br></br><Button onClick={() => setCalculate(false)} style={{
          padding: '0px',
          padding: '10px',
          fontSize: '20px',
          fontWeight: '600',
          color: 'white',
          border: 'rgb(50, 240, 0) 2px solid',
          borderRadius: '10px',
          background: '#202020'
        }}>Close</Button>
      </div>
    </Modal>
  )
}

export default Calculator
