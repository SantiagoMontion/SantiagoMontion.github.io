import React, { useState } from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "./Styles/mgm.css";

import logo_mgm from "./Styles/img/logo.png";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import { BiSearch, BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

function NavbarMgm() {
  const [expand, updateExpanded] = useState(false);

  return (
    <section>
      <Navbar bg="black" fixed="top" expand="md">
        <Container className="justify-content-center">
          <Navbar.Brand className="profile-header" href="/mgm-ecommerce">
            <div className="mgm_logo_container">
              <img src={logo_mgm}></img>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100%" }}
                navbarScroll
              >

                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/mgm-ecommerce"
                    onClick={() => updateExpanded(false)}
                  >
                    Home
                  </Nav.Link>
                </Nav.Item>

                <NavDropdown title="Products" id="navbarScrollingDropdown">
                  <NavDropdown.ItemText>
                    <h5>Mousepads</h5>
                  </NavDropdown.ItemText>

                  <NavDropdown.Item href="/mgm-ecommerce/mousepads/japanese">
                    Japanese
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mgm-ecommerce/mousepads/minimalist">
                    Minimalist
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.ItemText>
                    <h5>Games</h5>
                  </NavDropdown.ItemText>

                  <NavDropdown.Item href="/mgm-ecommerce/games/action">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mgm-ecommerce/games/adventure">
                    Adventure
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/mgm-ecommerce/how-to-buy"
                    onClick={() => updateExpanded(false)}
                  >
                    How to buy
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/mgm-ecommerce/contact"
                    onClick={() => updateExpanded(false)}
                  >
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="searchbar-mgm"
                aria-label="Search"
              />

              <BiSearch className="search-mgm"></BiSearch>
              <Link to="/mgm-ecommerce/" style={{ textDecoration: "none" }}>
                <FiShoppingCart className="logos-mgm2" ></FiShoppingCart>
              </Link>
              <Link to="/mgm-ecommerce/" style={{ textDecoration: "none" }}>
                <BiUser className="logos-mgm"></BiUser>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavbarMgm;
