import React from "react";
import styled from "styled-components";
import Meal from "./Meal";

const MealsContainer = styled.div`
  padding: 2rem;
  display: grid;
  place-items: center;
`;

const Title = styled.h3`
  text-align: left;
  margin-bottom: 2rem;
  color: rgb(44, 46, 46);
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
`;

const MealsList = ({ meals }) => {
  console.log(meals);

  const allMealsList = meals.map((meal) => (
    <Meal meal={meal} key={meal.idMeal} />
  ));
  return (
    <MealsContainer>
      <Title>Suggested For You</Title>
      <Wrapper>{allMealsList}</Wrapper>
    </MealsContainer>
  );
};

export default MealsList;
