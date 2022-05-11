import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

export default function NavBar(props){
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
          {props.title}
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">{props.aboutText}</Nav.Link>
            </Nav.Item>
          </Navbar.Nav>
          <Form inline my="2 lg-0">
            <Form.Input type="search" placeholder="Search" mr="sm-2" />
            <Button outline success my="2 sm-0">Search</Button>
          </Form>
        </Collapse>
      </Navbar>
    )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

NavBar.defaultProps = {
  title: "Add title here",
  aboutText: 'add about here'
}
