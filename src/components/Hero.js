import React from "react";
import styled from "styled-components";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <>
      <HeroContainer>
        <HeroSlider />
      </HeroContainer>
    </>
  );
}

export default Hero;

const HeroContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 90%;
  justify-items: center;
`;
