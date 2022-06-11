import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Styles/mgm.css";

import { Link } from "react-router-dom";

function Products(products) {
  var { prod } = products;

  return (
    <div className="mgm-prodcuts-container">
      {prod?.map((p) => {
        return (
          <div key={p.id} className="mgm-product-card">
            <div className="mgm-card-inside">
              <Link
                to={`/mgm-ecommerce/product/${p.id}`}
                style={{ textDecoration: "none",color:"white"}}
              >
                <img src={p.image[0]}></img>
                <h2>{p.name}</h2>
              </Link>
              <h4>${p.price[0]}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
