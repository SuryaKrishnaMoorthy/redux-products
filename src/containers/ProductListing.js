import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Product from "./Product";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts);

  return (
    <Container>
      <CardGroup>
        <Row xs={1} md={3}>
          <Product />
        </Row>
      </CardGroup>
    </Container>
  );
};

export default ProductListing;
