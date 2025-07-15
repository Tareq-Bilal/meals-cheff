import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../assets/mealschefLogo.png";
import styled from "styled-components";
import { FaSearch, FaEdit, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import MealDetails from "./MealDetails";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    object-fit: cover;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;

  a {
    color: black;
  }

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Meal = ({ meal }) => {
  return (
    <Container>
      <Card
        style={{
          width: "17rem",
          height: "22rem",
          boxShadow: "rgba(99,99,99,0.2) 0px 2px 8px 0px",
          textAlign: "center",
          borderRadius: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Info>
          <Icon>
            <Link to={`/mealDetails/${meal.strMeal}`} state={{ meal }}>
              <FaSearch />
            </Link>
          </Icon>
          <Icon>
            <FaEdit />
          </Icon>
          <Icon>
            <FaTimes />
          </Icon>
        </Info>
        <ImageContainer>
          <Card.Img variant="top" src={meal.strMealThumb} />
        </ImageContainer>
        <Card.Body style={{ padding: "0 " }}>
          <Card.Title
            style={{
              height: "3rem",
              padding: "1rem 0",
            }}
          >
            {meal.strMeal}
          </Card.Title>
          <Card.Text
            style={{
              color: "red",
              fontWeight: "bolder",
              fontSize: "larger",
              paddingTop: "1rem",
            }}
          >
            ${meal.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Meal;
