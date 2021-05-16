import React, { useState, useEffect } from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const Homescreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((reason) => {
        console.log("Error in fetching ", reason);
      });
  }, []);

  return (
    <>
      <h3>Latest Products</h3>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Homescreen;
