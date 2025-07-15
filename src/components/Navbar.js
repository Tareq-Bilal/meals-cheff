import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import logo from "../assets/mealschefLogo.png";
import { FaShoppingCart, FaWallet } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { NavLink } from "react-router-dom";
import { BiBold } from "react-icons/bi";
const NavContainer = styled.div`
  a {
    text-decoration: none;
    color: whitesmoke;
    margin-right: 1.58rem;
    padding: 1rem;
    font-size: x-large;
  }

  a:hover {
    color: rgb(255, 227, 17);
  }

  img {
    width: 60px;
    height: 60px;
  }

  #brand {
    color: #f2c227;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }

  .icon {
    color: white;
  }

  .badgeStyle {
    transform: translate(-1rem, -1rem);
    height: max-content;
    border-radius: 2rem;
  }
`;

const CardContainer = styled.div`
  width: 46rem;
  display: flex;
  justify-content: flex-end;

  .icon {
    border: 2px solid white;
    border-radius: 1rem;
    padding: 0.5rem;
    font-size: 2.8rem;
  }
`;

const NavBar = ({ totalOrders, totalPrice }) => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      whiteSpace: "nowrap",
      color: isActive ? "#f2c227" : "whitesmoke",
    };
  };

  return (
    <NavContainer>
      <Navbar expand="lg" bg="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" id="brand">
              <img src={logo} alt="logo" />
              <span>Meals Cheff</span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="AddNewMeal" style={navLinkStyle}>
                Add New
              </Nav.Link>
              <NavLink>
                <CardContainer>
                  <FaShoppingCart className="icon" />
                  <Badge bg="info" className="badgeStyle">
                    {totalOrders}
                  </Badge>
                  <FaWallet className="icon" />
                  <Badge bg="info" className="badgeStyle">
                    ${totalPrice}
                  </Badge>
                </CardContainer>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;
