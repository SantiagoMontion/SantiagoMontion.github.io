import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import henryfood from "../../Assets/Projects/henryfood.png";

import pgescuelas from "../../Assets/Projects/pgescuelas.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={henryfood}
              isBlog={false}
              title="Henry Food"
              description="Solo Proyect Website using React, Redux , NodeJs, css, HTML 5 and among others.
              The App use an API to get information about recipes and allows you to filter, search, create and navigate between them."
              link="https://github.com/SantiagoMontion/PI-Food-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pgescuelas}
              isBlog={false}
              title="PgEscuelas"
              description="This project was developed in group (SCRUM). This App resolve an actual problem
              in Schools, it was developed using Typescript, React, Redux, Boostrap,etc. The App allows a 
              school admin and users (Teachers and school personal) to calculate they salary with real
              goverment taxes and upload absesces, overtime and tardisness, that affect the salary."
              link="https://github.com/PG-HENRY-13/PG-Escuelas"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
