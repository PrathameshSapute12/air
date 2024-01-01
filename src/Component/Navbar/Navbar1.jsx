import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "./logo.jpg";
import "./Navbar1.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import{Link} from 'react-router-dom'

const Navbar1 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Navbar className="brandname" >
            <Link to="/" style={{ color: "white " }}>
            MAVERICK
            </Link>
          </Navbar>

          <Nav>
            <Link
              className="item"
              href="#link"
              style={{ marginRight: "20px" }}
            >
              MY PLANS
            </Link>
            <Link to="/About"
              className="item"
              
              style={{ marginRight: "20px" }}
            >
              ABOUT US
            </Link>
            <Link to="/Deals"
              className="item"
              
              style={{ marginRight: "20px" }}
            >
              DEALS
            </Link>
            <Link to="/Helplink2"
              className="item"
            
              style={{ marginRight: "20px" }}
            >
              HELP
            </Link>


            <Link>
              <Button variant="primary" onClick={handleShow}>
                SIGN UP
              </Button>

              <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body> */}
                <Modal.Footer>
                  <Link to="/Sign">
                  <Button variant="secondary" onClick={handleClose}>
                    SIGN UP
                  </Button>
                  </Link>
                  <Link to="/Login">
                  <Button variant="primary" onClick={handleClose}>
                    LOGIN
                  </Button>
                  </Link>
                </Modal.Footer>
              </Modal>
            </Link>

            {/* <Nav.Link className="item" href="#link">
            <IconButton color="primary" aria-label="add to shopping cart">
                <PersonIcon />
              </IconButton>
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
