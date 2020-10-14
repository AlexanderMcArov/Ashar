import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Axios from "axios";
import { Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";



function Contact(props) {

  console.log(props.props)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [advice, setAdvice] = useState("");
  const [information, setInformation] = useState("");

  function postData(id){
    const data = {
      id,
      name,
      email, 
      subject,
      advice,
      information
    }
    if(name !== '' && email !== '') {
    async function postOrder(id){
        const res = await Axios.post(`${process.env.REACT_APP_API_URL_PRODUCTS}/orders`, data)
    postOrder(id)
  }}else{console.log("order has not been sent")}
    
}

  return (    
    <section className="mt-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Order please!
      </h2>
      
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                  value={subject}
                  onChange={(e)=> setSubject(e.target.value)}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Your advice"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                  value={advice}
                  onChange={(e)=> setAdvice(e.target.value)}
                />
                {props.props?.map((item) => (
                        <div className="d-none" key={item.id}>
                            <div item={item}>
                              <p> image {item.image}</p> 
                              <p> Title {item.title} </p>
                              <p> Comment {item.comment}</p>
                              <p> Price {item.price} $</p>
                            </div>
                        </div>
                    ))}
              </div>
              <div className="text-center">
                <MDBBtn onClick ={() => postData()} color="dark">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93531.71079379348!2d74.49115431079855!3d42.89677465293526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec7d979079afb%3A0x9bb594c6a6f88787!2z0J_QtdGA0LLQvtC80LDQudGB0LrQuNC5INGA0LDQudC-0L0sINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1599171814146!5m2!1sru!2skg"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Bishkek, 72000064</p>
              <p className="mb-md-0">KYRGYZSTAN</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">azixmam@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Contact;
