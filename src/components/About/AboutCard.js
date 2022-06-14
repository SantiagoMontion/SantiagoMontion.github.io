import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Link } from "react-router-dom";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Santiago Montion </span>
            from <span className="purple"> San Juan, Argentina.</span>
            <br />I am a junior full stack developer passionate in web design
            and UI desing.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="mb-4">
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Try extravagant foods with my girlfriend
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Play with my Dog Pyke!
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "45px" }}>
            Also I manage my own <span className="purple">E-commerce </span>
            that is dedicated to the sale of mousepads gamers.
            
            <a
              href="https://mgm.empretienda.com.ar/"
              target="_blank"
              style={{
                textDecoration: "none",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <h4 className="purple"> Website Link!</h4>
            </a>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
