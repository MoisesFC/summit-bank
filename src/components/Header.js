import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SummitBankLogo from '../img/SummitBankHoriontalCrop.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <Navbar data-bs-theme="dark" className='navdark' expand="xl">
      <Navbar.Brand style={{ paddingLeft: "20px" }} href="#home">
        <img
          src={SummitBankLogo}
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle style={{ margin: '10px'}} className="toggler-icon" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{textAlign: 'center' }}>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" exact activeClassName="active-link" className="link-white">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/checking" activeClassName="active-link" className="link-white">
            Checking
          </Nav.Link>
          <Nav.Link as={NavLink} to="/credit-card" activeClassName="active-link" className="link-white">
            Credit Card
          </Nav.Link>
          <Nav.Link as={NavLink} to="/retirement" activeClassName="active-link" className="link-white">
            Retirement
          </Nav.Link>
        </Nav>
        <Form className="d-flex" data-bs-theme="light">
          <Form.Control type="username" placeholder="Username" className="me-2" aria-label="username" /> 
          <Form.Control type="password" placeholder="Password" className="me-2" aria-label="password" />
        </Form>
        <Button style={{ margin: "10px" }} lg variant="success">
          Log In
        </Button>
        <Button style={{ margin: '10px' }} lg variant="secondary">
          Create Online Account
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
