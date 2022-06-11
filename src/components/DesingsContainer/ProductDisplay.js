import React from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./Styles/mgm.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import background_mgm from "./Styles/img/background_mgm.png";
import NavbarMgm from "./navbarMgm";
import Footer from "./Footer";
import ImageandText from "./ImageandText";
function ProductsDisplay() {
  var { id } = useParams();
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
      <div fluid className="mgm-container">
        <NavbarMgm></NavbarMgm>

        <div
          className="background-mgm"
          style={{
            backgroundImage: `url(${background_mgm})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
          }}
        >
          <Container className="mt-5 mb-5 p-1">
            <Row className="mt-4">
              <Col>
                <Row>
                  <img
                    className="mgm-img-inside"
                    alt="product-img"
                    src={products[id].image[0]}
                  ></img>
                </Row>
                <Row>
                  <img
                    className="mgm-sub-img"
                    src={products[id].image[0]}
                  ></img>
                  <img
                    className="mgm-sub-img"
                    src={products[id].image[1]}

                  ></img>
                </Row>
              </Col>
              <Col>
                <Container  style={{ color: "white" }}>
                  <h2>{products[id].name}</h2>
                  <h4>{products[id].description}</h4>
                  <h3>${products[id].price[0]}</h3>

                  <Row>
                    <Col>
                      <Dropdown>
                        <Dropdown.Toggle id="mgm-drop">Size</Dropdown.Toggle>

                        <Dropdown.Menu id="mgm-drop-inside">
                          <Dropdown.Item id="mgm-drop-inside-item" href="#">
                            M(82x32)
                          </Dropdown.Item>
                          <Dropdown.Item id="mgm-drop-inside-item" href="#">
                            L(90x40)
                          </Dropdown.Item>
                          <Dropdown.Item id="mgm-drop-inside-item" href="#">
                            XXXL(110x70)
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown>
                        <Dropdown.Toggle id="mgm-drop">Quatity</Dropdown.Toggle>

                        <Dropdown.Menu id="mgm-drop-inside-input">
                          <InputGroup className="mb-3">
                            <FormControl
                              placeholder=""
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              type="number"
                              id="mgm-drop-inside-input-inside"
                            />
                          </InputGroup>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                  <div className="mgm-product-btn-container">
                    <button className="mgm-product-btn"><h5>Add to cart</h5></button>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
          <div><Footer></Footer></div>
        </div>
      
      
      </div>
      
    </>
  );
}

export default ProductsDisplay;
