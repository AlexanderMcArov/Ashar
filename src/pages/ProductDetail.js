import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import WheelSvg from '../assets/icons/wheel.svg'
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart, fetchData } from '../redux/actions'
import './Home.css'
import Cart from '../components/Cart';

function ProductDetail(props) {
    
    const {cartItems} = props

    console.log(cartItems)

    const params = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const isInCart = (item, cartItems) => {
        return !!cartItems.find((a) => a.id === item.id)
    }

    const removeAndDelete = () => {
        props.removeItemFromCart(data.id)
        localStorage.removeItem("cart")
    }

    useEffect(() => {
        setLoading(true);
        Axios.get(process.env.REACT_APP_API_URL_PRODUCTS + '/posts/' + params.id)
            .then(({ data }) => {
                setLoading(false);
                setData(data);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [params.id])

    if (loading) return (<h1>Loading...</h1>)

    return (
        <div>
            {data ?(
                <div className="MainProductDetailDiv">
                    <Row>
                        <Col md={6}>
                            <img className='w-100' alt={data.title} src={data.image} />
                        </Col>
                        <Col md={6}>
                            <h1>{data.title}</h1>
                            <p>{data.comment}</p>
                            <ButtonGroup>
                                <Button onClick={() => props.addItemToCart(data)} color='primary'>{data.price} $</Button>
                                {isInCart(data, props.cartItems) ? (
                                    <ButtonGroup>
                                        <Button
                                            color="danger"
                                            onClick={() => removeAndDelete()}
                                        >
                                            Remove from cart
                                        </Button>
                                        <Cart/>
                                    </ButtonGroup>
                                ) : (
                                    <ButtonGroup>
                                        <Button
                                            className="d-flex align-items-center"
                                            onClick={() => props.addItemToCart(data)}
                                            color="success"
                                        >
                                            Add To Cart  
                                            <img className="ml-1" width="20" height="20" alt="cart" src={WheelSvg}/>
                                        </Button>
                                        <Cart/>
                                    </ButtonGroup>
                                    )}

                            </ButtonGroup>
                            
                        </Col>
                    </Row>
                </div>) :

                (<div>
                    <h4 className="text-danger">Error 404: Product {params.id} is not defined</h4>
                </div>)
            }
        </div>
    )
}

const mapStateToProps = state => state.CartReducer

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart, fetchData })(ProductDetail)


    // const [params] = useParams()
    // const getItemById = (id)=>{
    //     const index = items.findIndex((item)=>item.id===id);
    //     return items[index];
    // }