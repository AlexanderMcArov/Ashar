import React, { useState } from 'react'
import { 
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardBody,
    ButtonGroup, 
    Button,
    Modal,
} from 'reactstrap'
import { useHistory } from 'react-router-dom';
import '../../pages/Home.css'
import { addItemToCart } from '../../redux/actions'
import { connect } from 'react-redux';
import ReactPlayer from 'react-player'

function HomeCardColumns(props) {
    const [player,setPlayer]=useState(false)
    const { item } = props;
    const history = useHistory();

    const handleClick = (e, item) => {
        e.stopPropagation()
        props.addItemToCart(item)
    }

    return (
        <div>
        <Card className="HomeMainCard mt-4">
            <CardImg top width="100%" src={item.image} alt="Card image cap" />
            <CardBody>
                <CardTitle><h4>{item.title}</h4>{item.title}</CardTitle>
                <CardText>{item.comment}</CardText>
                <ButtonGroup>
                    <Button onClick={()=>setPlayer(true)}>Смотреть</Button>
                </ButtonGroup>
            </CardBody>
        </Card>
        <Modal isOpen={player}>
            <ReactPlayer width="100%" controls url={item.adres}/>
            <Button className="bg-danger w-100%" onClick={()=>setPlayer(false)}>Закрыть</Button>
        </Modal>
        </div>
    )
}

const mapStateToProps = state => state.CartReducer;

export default connect( mapStateToProps, { addItemToCart })(HomeCardColumns)
