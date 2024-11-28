import '../styles/Footer.css';
// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col , Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row>
          {/* Column 1: About Section */}
          <Col lg={4} md={6} className="footer-column">
            <h5 className="footer-title">Contact us at</h5>
            <p className="footer-text">
              <a href = "mailto: mtsac.csclub@gmail.com">mtsac.csclub@gmail.com</a>
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={4} md={6} className="footer-column">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/events" className="footer-link">Events</a></li>
              <li><a href="/team" className="footer-link">Team</a></li>
              <li><a href="/projects" className="footer-link">Projects</a></li>
              <li><a href="/join-us" className="footer-link">Join Us</a></li>
            </ul>
          </Col>

          {/* Column 3: Contact Section */}
          <Col lg={4} md={6} className="footer-column">
            <h5 className="footer-title">Looking to stay updated?</h5>
            <Button variant="outline-warning" href="https://docs.google.com/forms/u/1/d/13sxHl6DJUDpSmCvsqQg0Gb6iGum2pA31XZ0mEClDvyc/edit" target = "_blank" className="join-button jb-footer">
                Join our Mailing List!
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="social-footer-container">
        <div className="line"></div>
        
        {/* Social media icons */}
        <div className="social-icons">
          <a href="https://www.instagram.com/cs.mtsac/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/mtsac-cs" target="_blank"><i className="fab fa-discord"></i></a>
          <a href="https://discord.com/invite/sWpjfHVuuT" target="_blank"><i className="fab fa-github"></i></a>
        </div>

        <div className="line"></div>
      </Container>

      <div className="footer-bottom">
        Copyright © 2024 ONDA
        {/* <a className="footer-bottom-link" href="https://yourwebsite.com"> yourwebsite.com</a> */}
      </div>
    </footer>
  );
};

export default Footer;