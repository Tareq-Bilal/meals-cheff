import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BlackLogo from "../assets/mealschefLogo-black.png";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 99vw;
  height: 83vh;
  padding: 2rem;
`;

const Wrapper = styled.div`
  padding: 0;
  width: 40vw;
  height: 30rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: white;

  h5 {
    display: grid;
    place-items: center;
    height: inherit;
    color: gray;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 30rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const IgredientsContainer = styled.div`
  height: 25rem;
  overflow-y: scroll;
  padding: 0 1rem;
  margin-bottom: 1rem;
  line-height: 2.5;

  /* Webkit-specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e6e4df;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #debb64;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
const CounterContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; /* Spacing between elements */
`;

const CounterButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;
const NumberDisplay = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 0 2rem;
  color: #333;
`;

// Functional

const MealDetails = ({
  handleIncrementOrderClick,
  handleDecrementOrderClick,
}) => {
  const location = useLocation();
  const { meal } = location.state;

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) return; // Prevent negative value
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <Container>
      <Wrapper>
        {meal.mealPictures.length >= 1 ? (
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            className="carousel"
          >
            {meal.mealPictures &&
              meal.mealPictures.map((singleMealPicture, i) => (
                <ImageContainer key={i}>
                  <img src={singleMealPicture.mealPicture} />
                </ImageContainer>
              ))}
          </Carousel>
        ) : (
          <h5>No Pictures Found For This Meal</h5>
        )}
      </Wrapper>
      <Wrapper>
        <div style={{ padding: "0 1rem" }}>
          <h3>Ingredients</h3>
          <h6 style={{ color: "gray" }}>{meal.strMeal}</h6>
        </div>
        <IgredientsContainer style={{ background: "#f0f0f0" }}>
          <ul>
            {meal.ingredients &&
              meal.ingredients.map((singleIngredient, j) => (
                <li key={j}>{singleIngredient.ingredient}</li>
              ))}
          </ul>
        </IgredientsContainer>
        <Button
          variant="warning"
          style={{
            width: "100%",
            height: "3.2rem",
            fontWeight: "bolder",
            marginTop: "1rem",
          }}
          onClick={() => {
            handleIncrementOrderClick(meal.price);
            handleIncrement();
          }}
        >
          Order Now ${meal.price}
        </Button>
        <CounterContainer>
          <CounterButton
            onClick={() => {
              handleDecrementOrderClick(meal.price);
              handleDecrement();
            }}
            disabled={count === 0} // Disable button when count is 0
          >
            -
          </CounterButton>
          <NumberDisplay>{count}</NumberDisplay>
          <CounterButton
            onClick={() => {
              handleIncrementOrderClick(meal.price);
              handleIncrement();
            }}
          >
            +
          </CounterButton>
        </CounterContainer>
      </Wrapper>
    </Container>
  );
};

export default MealDetails;
