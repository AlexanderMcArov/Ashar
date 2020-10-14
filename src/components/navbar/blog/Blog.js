import React from 'react'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

function Blog() {
    return (
        <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Recent posts
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://www.auto-loker.ru/upload/iblock/44e/aquaprint3_150_1200x300.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="green-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="utensils" className="pr-2" />
                  Аквапринт коричневое дерево LC Prado 150
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Аквапринт</strong>
              </h3>
              <p>
              Внутреннее рабочее название этой текстуры в нашем коллективе - "фанера". Звучит грубовато, однако на деле, это одна из самых популярных текстур. Может быть выполнена нами в любом цвете.
              </p>
              
              
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="7">
              <a href="#!" className="pink-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="image" className="pr-2" />
                  
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Skoda Kodiaq</strong>
              </h3>
              <p>
              Поступил очередной заказ на выполнение аквапринта салона в автомобиле Шкода Кодиак. В этот раз хозяин автомобиля попросил сделать нас классическое темное дерево с покрытием матовым лаком. Хотим отметить, что дерево это наиболее востребованная текстура в аквапринте и его оттенков и текстур у нас очень много. И все очень и очень красивые. В работу по аквапринту салона этого автомобиля входят: планки дверей (4 шт.), планки панели приборов консоли (2 шт.). Так же эту композицию можно включить накладку климата, а так же центральной консоли. </p>
              <p>
                by
                <a href="#!">
                  <strong>TSkoda Kodiaq</strong>
                </a>
                , 14/08/2018
              </p>
              <MDBBtn
                color="pink"
                size="md"
                className="mb-lg-0 mb-4 waves-light"
              >
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://www.auto-loker.ru/upload/iblock/38d/aquaprint1_kodiaq_1200x300.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="indigo-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="suitcase" className="pr-2" />
                  Food
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>TSkoda Kodiaq</strong>
              </h3>
              <p>
              Поступил очередной заказ на выполнение аквапринта салона в автомобиле Шкода Кодиак. В этот раз хозяин автомобиля попросил сделать нас классическое темное дерево с покрытием матовым лаком. Хотим отметить, что дерево это наиболее востребованная текстура в аквапринте и его оттенков и текстур у нас очень много. И все очень и очень красивые. В работу по аквапринту салона этого автомобиля входят: планки дверей (4 шт.), планки панели приборов консоли (2 шт.). Так же эту композицию можно включить накладку климата, а так же центральной консоли.
              </p>
              <p>
                by
                <a href="#!">
                  <strong>Carine Fox</strong>
                </a>
                , 11/08/2018
              </p>
              <MDBBtn color="indigo" size="md" className="waves-light ">
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    )
}

export default Blog
