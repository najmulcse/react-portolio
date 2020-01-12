import React, { Component } from 'react';
import './style.scss';

import {Button, Navbar, Nav, Link, Form, FormControl, Container } from 'react-bootstrap';

class HeaderPage extends Component {
    
  
  render(){
    return(
      <React.Fragment>
      
        <div className="container-fluid m-0 p-0">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
      </div>
      </React.Fragment>
    )
  }

  }

  export default HeaderPage;