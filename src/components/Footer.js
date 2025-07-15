import React from "react";
import BlackLogo from "../assets/mealschefLogo-black.png";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  place-items: center;
  background-color: #fff;
`;

const LogoContainer = styled.div`
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={BlackLogo} alt="logo" width={"60px"} height={"60px"} />
        Meals Cheif
      </LogoContainer>
    </Container>
  );
};

export default Footer;
