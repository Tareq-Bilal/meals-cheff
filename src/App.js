import Button from "react-bootstrap/Button";
import "./App.css";
import styled from "styled-components";
import Home from "./components/Home";

const Container = styled.div`
  background-color: #f9fdff;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
