import React from "react";
import TransparentContainer from "../TransparentContainer/TransparentContainer";
import { myObjects } from "../../data/TextData";
import styled from "styled-components";

function HowItWorks() {
  return (
    //Component for "Jak to działa "
    <Wrapper>
      <TransparentContainer
        id="howItWorks"
        image={myObjects.howItWorks.image}
        title={myObjects.howItWorks.title}
        desc={myObjects.howItWorks.desc}
      />
    </Wrapper>
  );
}

export default HowItWorks;

const Wrapper = styled.div`
  @media screen and (max-width: 800px) {
    margin-top: 400px;
  }
`;
