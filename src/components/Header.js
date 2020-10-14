import React, { useState } from 'react';
import Calculator from './Calculator'

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavbarToggler,  NavbarBrand, Nav, NavLink, Container } from 'reactstrap';

import {Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'

function Header() {
  const [calculate, setCalculate] = useState(false)


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
      {calculate ? <Calculator calculate={calculate} setCalculate={setCalculate}/> : ''}
    </div>
    )
}

export default Header