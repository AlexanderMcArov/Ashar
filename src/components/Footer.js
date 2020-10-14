import React from 'react'
import './Footer.css'
import { Container } from 'reactstrap'
import { Link, BrowserRouter, useHistory } from 'react-router-dom'

function Footer() {
    const history=useHistory()
    return (
        <div>
            <BrowserRouter>
                <Container>
                    <nav className="footer-menu mt-5">
                        <div className="d-flex justify-content-center"> 
                            <div className="footer-group">
                                <ul>
                                    <h4 className="footer-title">О нас</h4>
                                    <li className="onas">
                                        <Link to="#">О нас</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Правила конфиденциальности в отношении авторских прав</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-group">
                                <ul>
                                    <h4 className="footer-title">Общее</h4>
                                    <li>
                                        <Link  to="#">иаоли</Link>
                                    </li>
                                    <li>
                                        <Link to="#">фывав</Link>
                                    </li>
                                    <li>
                                        <Link to="#">фываывфа</Link>
                                    </li>
                                    <li>
                                        <Link to="#">фвыафывафыва</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-group">
                                <ul>
                                    <h4 className="footer-title">Контакты</h4>
                                    <li>
                                        Свяжитесь с нами
                                    </li>
                                    <li>
                                        +996 51651651651
                                    </li>
                                    <li>
                                    <Link to="#">Контакты</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </Container>
            </BrowserRouter>
        </div>
    )
}

export default Footer
