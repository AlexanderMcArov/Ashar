import React, { useState } from 'react';

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavbarToggler,  NavbarBrand, Nav, Form, Button, NavLink, Container, Modal } from 'reactstrap';

import {Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import './Header.css'

function Header() {
  const [calculate, setCalculate] = useState(false)
  const [value, setValue] = useState('')
  const [years, setYears] = useState('')
  const [firstPercent, setFirstPercent] = useState(0)

  const personalPayment = 2000
  const [fisrtPercentPayment,setfisrtPercentPayment] = useState(0)
  const [incomePayment,setincomePayment] = useState(0)
  const [summRecive,setsummRecive] = useState(0)
  const [everyMonthPayment,seteveryMonthPayment] = useState(0)
  const [totalSummPayment,settotalSummPayment] = useState(0)

  //   cost = int(input("Введите сумму стоимости жилья ")) // value
  //   term = int(input("Введите количество лет ")) // years
  //   per_v = cost * 0.3 // первоначальный взнос
  //  let vst_v = cost * 0.05 // вступительный взнос
  //   inf = 2000 // членский взнос в месяц
  //   sum_r = cost - per_v // сумма к полуению
  //   years = term * 12 // годы
  //   per_m = inf + sum_r / years // выплата в месяц
  //   total_sum = inf * years + cost + vst_v // Общая сумма выплаты:


  function handleSubmit(event) {
    event.preventDefault();
    console.log('Worked');
    setfisrtPercentPayment(value * 0.3)
    setincomePayment(value * 0.05)
    setsummRecive (value - fisrtPercentPayment)
    seteveryMonthPayment(personalPayment + incomePayment / years)
    settotalSummPayment(personalPayment * years + value + incomePayment)
    console.log(`
    Value: ${value}
    Years: ${years}
    fisrtPercentPayment: ${fisrtPercentPayment}
    incomePayment: ${incomePayment}
    personalPayment: ${personalPayment}
    summRecive: ${summRecive}
    `);
  }

  function monthPersonalPayment(){
    return 100
  }

return (
    <div className="HeaderMainDiv fixed-top">
      <Container>
    <Navbar className='nav'>
    <NavbarBrand className="HeaderNavbarBrand" href="/"> 
      <div className="HeaderLogo ml-5"></div>      
    </NavbarBrand>
    <Nav><NavLink className = "HeaderNavlinks" href="/">КООПЕРАТИВ АШАР</NavLink></Nav>
    <NavbarToggler aria-controls="basic-navbar-nav" />
    <NavbarCollapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <NavLink className = "HeaderNavlinks" href="/">ГЛАВНАЯ</NavLink>
        <NavLink className = "HeaderNavlinks" href="/about-us">О НАС</NavLink>
        <NavLink className = "HeaderNavlinks" href="/about-us">ВОПРОСЫ</NavLink>
        <NavLink className = "HeaderNavlinks" href="/about-us">КОНТАКТЫ</NavLink>
        <NavLink className = "HeaderNavlinks" onClick={()=>setCalculate(true)}>КАЛЬКУЛЯТОР</NavLink>
        <NavDropdown title="Открой" id="basic-nav-dropdown">
        <NavLink href="/about-us/2">какие то ссылки</NavLink>
        <NavLink href="/about-us/3">какие то ссылки</NavLink>
        <NavLink href="/about-us/4">какие то ссылки</NavLink>
        </NavDropdown>
        
    </Nav>
    </NavbarCollapse>
    </Navbar>
    </Container>


    <Modal isOpen={calculate} style={{width:'min-content',textAlign:'center'}}>
        <div className="calculate">      
          <h1>КАЛЬКУЛЯТОР</h1>
          <p>Заполните 2 поля: стоимость недвижимости и срок аренды!</p>
          <p>Нажмите на кнопку: "Рассчитать".</p>
          <p className="currency">Валюта рассчета сом.</p>
          <br></br>
          <form >
            <div className="calculate__form">
              <label htmlFor="value" >Стоимость жилья</label>
              <input value={value} onChange={(e)=>setValue(e.target.value)} type="number" id="value" placeholder="Введите сумму, сом"></input>
              <label htmlFor="value">Кол-во лет</label>
              <input value={years} onChange={e=>setYears(e.target.value)} type="number" min="1" max="10"></input>
            </div>
            <button type="submit" onClick={(e)=>handleSubmit(e)} className="btn_calculate">Рассчитать</button>
          </form>
            <div className="calculate__result">
              <h4>Результат</h4>
              <div className="row jcb">
                <span>Первоначальный взнос 30%: {fisrtPercentPayment} </span>
                <span>Членский взнос, в месяц: {personalPayment}</span>
              </div>
              <div className="row jcb">
                <span>Вступительный взнос, 5%: {incomePayment}</span>
                <span>Сумма к получению: {summRecive}</span>
              </div>
            </div>
          <br></br><span>Ежемесячный платеж: {everyMonthPayment}</span>
          <br></br><span>Общая сумма выплаты: {totalSummPayment}</span> 
          <br></br><Button onClick={()=>setCalculate(false)} style={{
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
    </div>
    )
}

export default Header