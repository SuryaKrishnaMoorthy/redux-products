import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* <Container> */}
      <Navbar.Brand href="#home">Redux shop</Navbar.Brand>
      {/* </Container> */}
    </Navbar>
  );
};

export default Header;
