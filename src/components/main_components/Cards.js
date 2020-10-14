import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardDeck, Container
} from 'reactstrap';
import './Cards.css'

function Cards() {
  return (
    <div className="mb-5">
      <Container>
      <CardDeck>
       <Card>
        <CardBody>
          <CardTitle><h4>Card title</h4></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
       <Card>
        <CardBody>
          <CardTitle><h4>Card title</h4></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
       <Card>
        <CardBody>
          <CardTitle><h4>Card title</h4></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
       <Card>
        <CardBody>
          <CardTitle><h4>Card title</h4></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
       
      </CardDeck>
      </Container>
    </div>
  )
}

export default Cards
