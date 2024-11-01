import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-3 bg-gradient-to-r from-orange-400 via-red-600 to-yellow-500">
      <Container className="">
        <Row>
          <Col md={4} className="footer-col">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              felis eu nunc commodo ullamcorper.
            </p>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white" href="/About">
                  About
                </a>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Contact Us</h5>
            <address>
              123 Main Street, City
              <br />
              Country
              <br />
              <a className="text-white" href="tel:+123456789">
                +123 456 789
              </a>
              <br />
              <a className="text-white" href="mailto:info@example.com">
                info@example.com
              </a>
            </address>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="footer-bottom-text">
              &copy; {new Date().getFullYear()} Your Website | All rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
