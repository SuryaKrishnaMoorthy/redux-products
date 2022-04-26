import React from "react";
import { useSelector } from "react-redux";
import { Card, Col } from "react-bootstrap";

// import Col from "react-bootstrap/Col";

const Product = () => {
  const products = useSelector((state) => state.allProducts);
  console.log(products[0]);
  return (
    <Col>
      <Card>
        <Card.Link>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Text>{products[0].category}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card.Link>
      </Card>
    </Col>
  );
};

export default Product;
