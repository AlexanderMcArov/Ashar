import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'

function ListInfo() {
  return (
    <div>
      <Container>
        <div className="d-flex">
          <div>
            <img src='http://kelechek-kooperativ.kg/static/img/about.jpeg' width="555" height="323"/>
          </div>
          <Card className="ml-3">
            <CardBody>
              <CardTitle><h4>Card title</h4></CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>В подмосковной Лобне вместе с матерью живёт двадцатилетний Илья Горюнов. Илья — студент филологического факультета МГУ; мать Ильи, воспитавшая сына одна, учительница русского языка и литературы. Отмечая окончание сессии, действуя наперекор матери, Илья отправляется со своей девушкой Верой в московский клуб «Рай». Неожиданно в клуб врывается наркополиция ФСКН с рейдом: у Ильи и Веры наркотиков не было, но Веру всё равно задерживает сотрудник в штатском Пётр Хазин. Илья пытается воспрепятствовать задержанию Веры и оскорбляет задержавшего её Хазина: в отместку молодой офицер подбрасывает ему кокаин. В итоге Илью сажают в колонию на семь лет по ложному обвинению в сбыте наркотиков.Вскоре Илья встречается с Магомедом, чтобы забрать 300 тысяч евро в качестве оплаты за товар, который, по словам Ильи,</CardText>
            </CardBody>
          </Card>
        </div>
      </Container>
    </div>
  )
}

export default ListInfo
