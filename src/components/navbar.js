import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import {Button} from 'react-bootstrap';
import {FormControl,Form,Nav,NavDropdown} from 'react-bootstrap';
import HeaderButton from './button';

const Navar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img src='/ADI_WHITE.png' 
        className="d-inline-block align-top"
        alt="React Bootstrap logo"></img></Navbar.Brand>
    
    <Nav className="mr-auto">
      <HeaderButton/>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  )
}

export default Navar
