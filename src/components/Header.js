import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SummitBankLogo from '../img/SummitBankHoriontalCrop.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Header = () => {
  return (
    <Navbar data-bs-theme="dark" className='navdark' expand="md"  >
      <Navbar.Brand style={{ paddingLeft: "20px" }} href="#home">
        <img
          src={SummitBankLogo}
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle style={{ margin: '10px' }} className="toggler-icon" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="navLink" href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Checking</Nav.Link>
          <Nav.Link href="#link">Credit</Nav.Link>
          <Nav.Link href="#link">Retirement</Nav.Link>
        </Nav>
        <Form className="d-flex" data-bs-theme="light">
          <Form.Control
            type="username"
            placeholder="Username"
            className="me-2"
            aria-label="username"
          />
          <Form.Control
            type="password"
            placeholder="Password"
            className="me-2"
            aria-label="password"
          />
        </Form>
        <Button style={{ margin: "10px" }} lg variant="light">Log In</Button>

        <Button style={{ margin: '10px' }} lg variatn="light">Create Online Account</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;