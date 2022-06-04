import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Styles/mgm.css";
import japanese from "./Styles/img/japanese.png"
import figures from "./Styles/img/figures.png"
import games from "./Styles/img/games.png"

function HomeBody() {
  return (
    <div className="homebody-mgm-container">
      <div className="images-holder-mgm">
          
          <img className="mgm-category-img" src={japanese}></img>
          <img className="mgm-category-img" src={figures}></img>
          <img className="mgm-category-img" src={games}></img>
      </div>
    </div>
  );
}

export default HomeBody;