import React from 'react';
// import Container from 'react-bootstrap/Container';
import { Col, Row, Container } from 'react-bootstrap';

const Footer = () => {
    return (
      <footer className="mt-5 footer-container">
        <Container fluid className="footer-content">
          <Row>
            <Col xs={12} md={4}>
            <h5>Summit Bank</h5>
            <hr/>
              <p style={{textAlign: 'left'}}>
              A trusted bank dedicated to providing personalized financial solutions to help our customers achieve their goals. With a wide range of products and services, expert guidance, and a commitment to exceptional customer service, we are here to support you every step of the way.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h5>Quick Links</h5>
              <hr/>
              <ul className="no-bullets">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </Col>
            {/* <Col xs={12} md={3}></Col> */}
            <Col xs={12} md={4}>
              <h5>Contact Us</h5>
              <hr/>
              <p>Email:<a href="mailto:info@example.com"> info@example.com</a></p>
              <p>Phone: <a href="tel:+11234567890"> +1 (123) 456-7890</a></p>
              <p>Address: <br/> <a href="#">579 Main St, <br/> Suite 100<br/>Atlanta GA, USA</a></p>
            </Col>
          </Row>
          <br/>
          <Row>
            <h6 style={{textAlign: 'center'}}>  Copyright Summit Bank © 2023. All rights reserved.</h6>
          </Row>
        </Container>
      </footer>
    );
  };

export default Footer;
