import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiBootstrap,
  DiIllustrator,
  DiPostgresql,
} from "react-icons/di";
import { SiAdobexd, SiAdobephotoshop } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><h6>NodeJs</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><h6>ReactJs</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql /><h6>Postgres</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><h6>Git</h6>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd /><h6>Adobe Xd</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop /><h6>Photoshop</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIllustrator /><h6>Illustrator</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /><h6>Bootstrap</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
