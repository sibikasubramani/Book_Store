//src/components/Navbar.js

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        background: "linear-gradient(to right, #1e3c72, #2a5298)", // modern gradient
        padding: "10px 20px",
      }}
    >
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            BookStore
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/login"
              className="nav-link"
              style={{ color: "white", fontWeight: "500" }}
            >
              User
            </Link>
            <Link
              to="/slogin"
              className="nav-link"
              style={{ color: "white", fontWeight: "500" }}
            >
              Seller
            </Link>
            <Link
              to="/alogin"
              className="nav-link"
              style={{ color: "white", fontWeight: "500" }}
            >
              Admin
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Home;
