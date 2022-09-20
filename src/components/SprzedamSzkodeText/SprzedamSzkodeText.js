import React from 'react';
import styled from 'styled-components';

function SprzedamSzkodeText() {
  return (
    <TitleWrapper>
      <Title to="/">
        sprzedam<span>szkode</span>.pl{' '}
      </Title>
      <WhiteTitle to="/">
        sprzedam<span>szkode</span>.pl{' '}
      </WhiteTitle>
    </TitleWrapper>
  );
}

export default SprzedamSzkodeText;

export const Title = styled.h1`
  line-height: 120px;
  position: absolute;
  letter-spacing: 1px;
  font-family: 'Fredoka One', cursive;
  color: black;
  font-size: clamp(2rem, 14vw, 3.7rem);
  z-index: 3;
  text-align: center;
  margin-left: 30px;
  background: -webkit-linear-gradient(#54e74f, #236601);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 840px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 770px) {
    font-size: 3.3rem;
  }
  @media screen and (max-width: 530px) {
    font-size: 2.5rem;
  }

  span {
    font-family: 'Fredoka One', cursive;
    background: -webkit-linear-gradient(#7958fa, #442da1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
`;
const WhiteTitle = styled(Title)`
  -webkit-text-stroke: 10px white;
  font-size: clamp(2rem, 14vw, 3.7rem);

  position: absolute;
  z-index: 0;
  @media screen and (max-width: 840px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 770px) {
    font-size: 3.3rem;
  }
  @media screen and (max-width: 530px) {
    font-size: 2.5rem;
  }
`;
