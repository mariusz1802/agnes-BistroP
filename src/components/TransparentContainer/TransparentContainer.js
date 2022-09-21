import React from "react";
import styled from "styled-components";

function TransparentContainer({ title, desc, image, children, id }) {
  return (
    <Container id={id}>
      {image}
      <Title>{title}</Title>
      <Description>{desc}</Description>
      {children}
    </Container>
  );
}

export default TransparentContainer;
const Container = styled.div`
  position: relative;
  margin: auto;
  padding: 30px;
  flex-direction: column;
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  margin-top: 150px;
`;
const Title = styled.h3`
  font-size: clamp(2.2rem, 3rem, 3.2rem);
  font-weight: 500;
  text-align: center;
  margin-bottom: 35px;
`;

const Description = styled.p`
  font-size: clamp(1.2rem, 1.8rem, 2.3rem);
  width: 95%;
  line-height: 1.3;
  margin: auto;
  text-align: center;
`;
