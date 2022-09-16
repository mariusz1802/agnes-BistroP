import React from "react";
import TransparentContainer from "../TransparentContainer/TransparentContainer";
import CircleAnimation from "../CircleAnimation/CircleAnimation";
import styled from "styled-components";
import { myObjects } from "../../data/TextData";
function Stats() {
  return (
    <TransparentContainer title={myObjects.stats.title} id="statics">
      {" "}
      <Wrapper>
        <CircleAnimation
          size={270}
          strokeWidth={35}
          percentage={90}
          color="yellow"
        >
          {" "}
          Zanizonych <br /> odszkodowań{" "}
        </CircleAnimation>{" "}
        <CircleAnimation
          size={270}
          strokeWidth={35}
          percentage={90}
          color="yellow"
        >
          {" "}
          Zanizonych <br /> odszkodowań{" "}
        </CircleAnimation>{" "}
        <CircleAnimation
          size={270}
          strokeWidth={35}
          percentage={90}
          color="yellow"
        >
          {" "}
          Zanizonych <br /> odszkodowań{" "}
        </CircleAnimation>{" "}
      </Wrapper>
    </TransparentContainer>
  );
}

export default Stats;

const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
`;
