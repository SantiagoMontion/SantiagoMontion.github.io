import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Styles/mgm.css";
import japanese from "./Styles/img/japanese.png";
import figures from "./Styles/img/figures.png";
import games from "./Styles/img/games.png";
import { Link } from "react-router-dom";
import Products from "./Products";
import ImageandText from "./ImageandText";
import Footer from "./Footer";

function HomeBody() {
  var products = [
    {
      id: 0,
      image: [
        "https://d22fxaf9t8d39k.cloudfront.net/e7823e415dd77cac8995a1190ec3659e27bfb075f0820a102ada8d473cf5740f46976.jpeg",
        "https://d22fxaf9t8d39k.cloudfront.net/122ffe32e2a7974f9c7ae1538684f3577bd518d778958c6717c274c0bc2f660846976.jpeg",
      ],
      name: "Mousepad Mechanical",
      price: [2900, 3500, 4500],
      category: ["mousepads", "Japanese"],
      description: "Mousepad Gamer MgM - Model Mechanical.",
      sizes: ["M (82x32)", "L (90x40)", "XXXL (110x70)"],
      colors: ["Black", "White"],
    },
    {
      id: 1,
      image: [
        "https://d22fxaf9t8d39k.cloudfront.net/3f7ebe9fec6858cc3f5b6d470b27aabaeec71d7916dcb4583a7c3e81a94c5b0446976.jpeg",
        "https://d22fxaf9t8d39k.cloudfront.net/325dfcebf6d3ef0c91aa6ba3723705d3086dc43481fc4e390b5fb059ea786aeb46976.jpeg",
      ],
      name: "Mousepad Waves",
      price: [2900, 3500, 4500],
      category: ["mousepads", "Japanese"],
      description: "Mousepad Gamer MgM - Model Waves.",
      sizes: ["M (82x32)", "L (90x40)", "XXXL (110x70)"],
      colors: ["Blue", "Red"],
    },
    {
      id: 2,
      image: [
        "https://d22fxaf9t8d39k.cloudfront.net/f53cadaa25659dcff71407998cc458a24a97dee34b685aa3bf94aff3490576b246976.jpeg",
        "https://d22fxaf9t8d39k.cloudfront.net/d5a83e4fb2c5c88f08e19cf4e2d477e6901a4f7ec5dedc67d50832a9c8900ffd46976.jpeg",
      ],
      name: "Mousepad Planets",
      price: [2900, 3500, 4500],
      category: ["mousepads", "Minimalist"],
      description: "Mousepad Gamer MgM - Model Planets.",
      sizes: ["M (82x32)", "L (90x40)", "XXXL (110x70)"],
      colors: ["Red", "Purple"],
    },
  ];

  return (
    <>
      <Container>
        <div className="images-holder-mgm">
          <Row className="mt-5 m-0 p-0 w-10 mb-5 pb-5">
            <Col className="mt-2">
              <Link to="/mgm-ecommerce/">
                <img className="mgm-category-img" src={japanese}></img>
              </Link>
            </Col>
            <Col className="mt-2">
              <Link to="/mgm-ecommerce/">
                <img className="mgm-category-img" src={figures}></img>
              </Link>
            </Col>
            <Col className="mt-2">
              <Link to="/mgm-ecommerce/">
                <img className="mgm-category-img" src={games}></img>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <Row className="mt-4" style={{ color: "white" }}>
          <h2>Featured Products</h2>
        </Row>

        <Row>
          <Products prod={products}></Products>
        </Row>
      </Container>

      <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#" class="active">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">&raquo;</a>
      </div>
      <ImageandText></ImageandText>
      <Footer></Footer>
    </>
  );
}

export default HomeBody;
