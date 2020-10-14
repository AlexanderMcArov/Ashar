import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import Side from "./Side";
import './Dashboard.css'

const Dash = props => {


    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Side />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        hhhhhh
                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  const Dashboard = withRouter(Dash);
  export default Dashboard