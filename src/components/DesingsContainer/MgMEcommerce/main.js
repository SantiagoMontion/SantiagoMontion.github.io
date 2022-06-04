import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Styles/mgm.css";
import background_mgm from "./Styles/img/background_mgm.png";
import NavbarMgm from "./navbarMgm";
import HomeBody from "./HomeBody";

function MgMMain() {
  return (
    <div fluid className="mgm-container">
      <NavbarMgm></NavbarMgm>

      <div className="background-mgm"
        style={{
          backgroundImage: `url(${background_mgm})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <div className="body-mgm">
        <HomeBody></HomeBody>
          
        </div>
      </div>
    </div>
  );
}

export default MgMMain;
