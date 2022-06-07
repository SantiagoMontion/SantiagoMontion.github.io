import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Styles/mgm.css";

import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { SiVisa ,SiDhl} from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
function Footer() {
  return (
    <div className="mgm-footer">
      <Container>
        <Row>
          <Col>
            <h4>Payments Methods</h4>
            <Row>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiVisa />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <RiMastercardFill />
                  </a>
                </li>
              </ul>
            </Row>
            <Row className="mt-3"><h4>Shipping Methods</h4></Row>
            <Row>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiDhl />
                  </a>
                </li>

                
              </ul>
            </Row>
          </Col>
          
          <Col>
            <h4>Social Media</h4>
            <Row>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/mousepadsmgm"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <BsInstagram />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.youtube.com/channel/UCyctLCybTnTBPVur2gG3lLw"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillYoutube />
                  </a>
                </li>
              </ul>
            </Row>

            <h4 className="mt-3 ">Contact</h4>
            <Row>
              <Col>
                <AiOutlineMail></AiOutlineMail> mgmpads@gmail.com
              </Col>
            </Row>
            <Row>
              <Col>
                <AiFillPhone></AiFillPhone> 2644853377{" "}
              </Col>
            </Row>
            <Row>
              <Col>
                <GoLocation></GoLocation> Argentina
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
