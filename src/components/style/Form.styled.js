import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const LeftContainer = styled.div`
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  width: 30rem;
  height: max-content;
  text-align: left;
  padding: 1rem;

  h2 {
    color: #dd8533;
    text-transform: uppercase;
  }

  label {
    font-weight: bold;
    color: #56514d;
  }

  input {
    color: #6d6d6d;
  }

  input:focus {
    color: black;
    border-color: #dd8533;
    outline: none;
    box-shadow: 0 0 10px #ed9e17;
  }

  span {
    color: red;
    width: 1rem;
    font-size: small;
  }
`;

export const Center = styled.div`
  width: 30rem;
  height: 100vh;
  padding: 1rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  h4 {
    color: #948e8a;
    padding-left: 1.1rem;
    margin-bottom: 1.5rem;
  }

  ul {
    height: fit-content;
    padding: 0;
    list-style-type: circle;
    overflow-y: auto;
  }

  li {
    width: 23rem;
    border-bottom: 1px solid #ffa143;
    margin-bottom: 1rem;
    margin-left: 2rem;
  }
`;

export const RightContainer = styled.div`
  padding: 1rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  width: 30rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  Button {
    width: 100%;
    height: 3.2rem;
  }
`;

export const ThumbImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 2rem;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
  }
`;
