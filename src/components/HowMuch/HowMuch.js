import React from "react";
import TransparentContainer from "../TransparentContainer/TransparentContainer";
import Button from "../Button/Button";
import { myObjects } from "../../data/TextData";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

function HowMuch() {
  return (
    <TransparentContainer
      id="howMuchGet"
      title={myObjects.howMuch.title}
      image={myObjects.howMuch.image}
      desc={myObjects.howMuch.desc}
    >
      <Router>
        <Nav smooth to="#form">
          <ButtonBox>
            <Button>Wyślij wniosek </Button>
          </ButtonBox>
        </Nav>
      </Router>
    </TransparentContainer>
  );
}

export default HowMuch;

const Nav = styled(Link)`
  text-decoration: none;
`;
const ButtonBox = styled.div`
  width: 50%;
  margin: auto;
`;
