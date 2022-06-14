import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import ecommerce from "../../Assets/ecommerce.png";
import { Link } from "react-router-dom";

import ProjectCard from "../Projects/ProjectCards.js";

function DesignsContainer() {
  return (
    <div fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Website Designs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've designing recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Link to="/mgm-ecommerce" style={{ textDecoration: "none" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ecommerce}
                title="MgM-ecommerce"
                description="E-commerce of gaming stuf, such as games, mousepads, keyboards etc."
                link="/mgm-ecommerce"
              />
            </Col>
          </Link>
        </Row>
      </Container>
    </div>
  );
}

export default DesignsContainer;
