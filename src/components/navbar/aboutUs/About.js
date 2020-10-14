import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,

} from "mdbreact";

function About() {
  return (
    <div>
      <MDBCard className="my-5 px-5 pb-1 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow className="text-md-left">
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Oomat</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Web Designer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Aziz</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Photographer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg yt-ic">
                  <MDBIcon fab icon="youtube" />
                </a>
                <a href="#!" className="p-2 fa-lg ins-ic">
                  <MDBIcon fab icon="instagram" />
                </a>
              </MDBCol>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://scontent.ffru7-1.fna.fbcdn.net/v/t1.0-9/76643733_2534882259929970_4490204135475380224_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=ikQlWW_NqlMAX8fyszn&_nc_ht=scontent.ffru7-1.fna&oh=f75cb78effe8e3e8f73e5ba5eb3f78ef&oe=5F782E6C"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Sabyr</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Web Developer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg github-ic">
                  <MDBIcon fab icon="github" />
                </a>
              </MDBCol>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Sultan</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Front-end Developer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg gplus-ic">
                  <MDBIcon fab icon="google-plus-g" />
                </a>
                <a href="#!" className="p-2 fa-lg li-ic">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="#!" className="p-2 fa-lg email-ic">
                  <MDBIcon icon="envelope" />
                </a>
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>      
    </div>
  );
}

export default About;
