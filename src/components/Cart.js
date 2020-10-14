import React, { useState } from 'react'
import cartSvg from '../assets/icons/supermarket.svg'
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody,
    Button,
    Modal,
    Col,
} from 'reactstrap'
import '../components/Header.css'
import { useHistory } from 'react-router-dom'
import Contact from './navbar/contact/Contact'

function Cart() {

    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false)
    let info = localStorage.getItem("cart");
    info = JSON.parse(info)

    let total = 0

    function delData() {
        localStorage.removeItem("cart")
        info = "null"
        setIsOpen(false);
    }
    console.log(info)

    function orderCars() {
        setIsOpen(false)
        history.replace("/contact");
    }

    //TODO To make local storage work without any bugs, and indicator for Cart

    return (
        <div className="Cart">
            <Button className="cartIconButton" onClick={() => setIsOpen(true)}><img className="cartIcon" src={cartSvg} /> Cart</Button>
                <Modal isOpen={isOpen}>
                <form onSubmit={() => delData()}>
                    {info !== "null" && localStorage.getItem("cart") !== null ? (
                        <div>
                            {info?.map((item) => (
                                <Col key={item.id}>
                                    <Card className="HomeMainCard mt-4" item={item}>
                                        <CardImg top width="100%" src={item.image} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h3>{item.title}</h3></CardTitle>
                                            <CardSubtitle><p><strong>Little info about {item.title}</strong></p></CardSubtitle>
                                            <CardText>{item.comment}</CardText>
                                            <CardText> Price {item.price} $</CardText>
                                            <CardText> Total {total += parseInt(item.price)} $</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                            <Contact props={info} onClick={() => orderCars()}>Order</Contact>
                        </div>
                    ) : (<div><Button className="w-100" onClick={() => setIsOpen(false)}>Close</Button> <h4>You do not have anyting yet</h4></div>)
                    }
                    <Button type="submit" >Remove</Button>
                </form>
                </Modal>
        </div>
    )
}


export default Cart
