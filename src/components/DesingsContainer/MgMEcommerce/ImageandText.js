import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Styles/mgm.css";

import { Link } from "react-router-dom";

function ImageandText() {
  return (
    <div className="Image-text-container">
        <img src="https://d22fxaf9t8d39k.cloudfront.net/d5a83e4fb2c5c88f08e19cf4e2d477e6901a4f7ec5dedc67d50832a9c8900ffd46976.jpeg"></img>
        <div>
        <h2>Best Seller Model</h2>
        <br></br>
        <h4>Clasic and simple design, get your setup to the next level.</h4>
        </div>
    </div>
  );
}

export default ImageandText;
