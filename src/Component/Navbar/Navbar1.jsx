import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import logo from "./logo.jpg";
import "./Navbar1.css";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from '@mui/icons-material/Person';

const Navbar1 = () => {
  return (
    <div>
      <Navbar className="navbar">
        <Container className="container">
          <img
            src={logo}
            alt=""
            width={"50px"}
            height={"50px"}
            style={{ borderRadius: "50px" }}
          />
          <Navbar className="brandname" style={{ color: "white" }}>
            MAVRICK
          </Navbar>

          <Nav>
            <Nav.Link className="item" href="#home">
              BOOK
            </Nav.Link>
            <Nav.Link className="item" href="#link">
              MY_PLANS
            </Nav.Link>
            <Nav.Link className="item" href="#link">
              TRAVEL_INFO
            </Nav.Link>
            <Nav.Link className="item" href="#link">
              DEALS
            </Nav.Link>
            <Nav.Link className="item" href="#link">
              HELP
            </Nav.Link>
            <Nav.Link>
              {" "}
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
            </Nav.Link>
            <Nav.Link className="item" href="#link">
            <IconButton color="primary" aria-label="add to shopping cart">
                <PersonIcon />
              </IconButton>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
