import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const Homescreen = () => {
  return (
    <>
      <h3>Latest Products</h3>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Homescreen;