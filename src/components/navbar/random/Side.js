import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './Dashboard.css'
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { UncontrolledDropdown } from "reactstrap";

const Side = props => {


    return (
        <div > 

            <Nav className="col-md-1 d-none d-md-block bg-light sidebar"
            activeKey="/"
          
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/sale">Акции</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blog">Блог</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Контакты</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Каталог
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav.Item>
            </Nav>

        </div>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar