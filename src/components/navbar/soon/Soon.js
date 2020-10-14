import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
} from "mdbreact";

function Audi() {
  return (
    <div>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
         SOON WILL BE
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard cascade narrow ecommerce>
              <MDBCardImage
                cascade
                src="https://cdn.motor1.com/images/mgl/0x6J3/s3/ferrari-sf90-stradale.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Denim</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">Denim trousers</a>
                  </strong>
                </MDBCardTitle>
                <ul className="rating">
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon far icon="star" />
                  </li>
                </ul>
                <MDBCardText>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <span className="float-left font-weight-bold">
                    <strong>49$</strong>
                  </span>
                  <span className="float-right">
                    <MDBTooltip domElement placement="top">
                      <i className="grey-text fa fa-shopping-cart mr-3" />
                      <span>Add to Cart</span>
                    </MDBTooltip>
                    <MDBTooltip domElement placement="top">
                      <i className="grey-text fa fa-share-alt mr-3" />
                      <span>Share</span>
                    </MDBTooltip>
                    <MDBTooltip domElement placement="top">
                      <i className="grey-text fa fa-heart" />
                      <span>Add to Whishlist</span>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
            <MDBCard cascade narrow ecommerce>
              <MDBCardImage
                cascade
                src="https://s.auto.drom.ru/i24237/pubs/4/71010/3066638.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Denim</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">Denim trousers</a>
                  </strong>
                </MDBCardTitle>
                <ul className="rating">
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon far icon="star" />
                  </li>
                </ul>
                <MDBCardText>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <span className="float-left font-weight-bold">
                    <strong>49$</strong>
                  </span>
                  <span className="float-right">
                    <MDBTooltip domElement placement="top">
                      <i className="grey-text fa fa-shopping-cart mr-3" />
                      <span>Add to Cart</span>
                    </MDBTooltip>
                    <MDBTooltip domElement placement="top">
                      <i className="grey-text fa fa-share-alt mr-3" />
                      <span>Share</span>
                    </MDBTooltip>
                    <MDBTooltip domElement placement="top">
                      <i className="grey-text fa fa-heart" />
                      <span>Add to Whishlist</span>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
            
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  );
}

export default Audi;
