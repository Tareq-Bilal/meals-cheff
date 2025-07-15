import React from "react";
import ErrorImage from "../assets/404.png";
import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 15rem;
    margin-bottom: 1rem;
  }

  h2 {
    color: #56514d;
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <img src={ErrorImage} alt="Not Found Page" />
      <h2>Page Not Found !</h2>
    </Container>
  );
};

export default NotFoundPage;
