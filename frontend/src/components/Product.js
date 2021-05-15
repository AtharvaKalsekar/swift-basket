import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a hreaf={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </a>
        <Card.Body>
          <a hreaf={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
        </Card.Body>

        <Card.Text as="div">
          {product.rating} from {product.numReviews} reviews
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card>
    </>
  );
};

export default Product;
