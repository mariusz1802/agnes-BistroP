import React from 'react';
import styled from 'styled-components';

function ButtonEl({ children, type }) {
  return (
    <>
      <Button type={type}>{children}</Button>
    </>
  );
}

export default ButtonEl;

const Button = styled.button`
  font-size: 1.5rem;
  width: 95%;
  height: 80px;
  display: flex;
  text-transform: uppercase;
  font-weight: 600;
  margin: 20px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#ffe852, #ffea07);
  transition: 1s all;
  border: none;
  color: rgba(0, 0, 0, 0.5);
  :hover {
    cursor: pointer;
    background: linear-gradient(#ffe11c, #ffde06);
  }
`;
