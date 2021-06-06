import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./index.css";

export default function Footer() {
  return (
    <React.Fragment>
      <footer>
        <Container fluid>
          <Row className="footer-first-row">
            <Container>
              <Row className="align-items-center">
                <Col md={8} className="py-2">
                  <img src="/assets/blonk-white.png" className="footerLogo" />
                </Col>
                <Col md={2} className="socialMediaIcons py-2">
                  <FaFacebookF className="icons" />
                  <FaTwitter className="icons" />
                  <FaLinkedinIn className="icons" />
                  <FaInstagram className="icons" />
                </Col>
                <Col md={2} className="py-2">
                  <Dropdown className="footerDropdown">
                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                      English
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row className="footer-middle-row py-5">
            <Row className="centerText">
              <p>Telechargez i'application mobile blonk</p>
            </Row>
            <Row className="centerText">
              <p>Commerence a vous connector avec les gens et les emplois</p>
            </Row>
            <Row className="downloadAppsImg">
              <Col className="text-right">
                <img src="/assets/apple.png" />
              </Col>
              <Col className="text-left">
                <img src="/assets/google.png" />
              </Col>
            </Row>
          </Row>
          <Row className="justify-content-center footer-last-row py-3">
            <p className="mb-0">
              <strong>Blonk Group 2021</strong>
              .All rights reserved.
            </p>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
}
