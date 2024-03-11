import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  // AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram, AiOutlineWhatsApp,
} from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Website designed by team 6</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HN</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
           <li className="social-icons">
              <a
                href="https://www.instagram.com/delcidaziel/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://wa.me/50499418770"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
