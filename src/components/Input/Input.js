import React from 'react';
import styled from 'styled-components';

function InputEl({ placeholder }) {
  return (
    <>
      <InputWhite placeholder={placeholder} type="text" />
    </>
  );
}

export default InputEl;

const Input = styled.input`
  font-size: 1.8rem;
  width: 95%;
  margin: 10px;
  color: white;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  border: none;
  height: 60px;
  padding: 15px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  :focus {
    outline: none;
  }
`;

const InputWhite = styled.input`
  font-size: 1.7rem;
  width: 100%;
  margin: 10px;
  color: rgba(0, 0, 0, 0.6);
  background: white;
  border-radius: 30px;
  border: none;
  height: 60px;
  padding: 15px;
  padding-left: 25px;

  font-weight: 500;
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  :focus {
    outline: none;
  }

  @media screen and (max-width: 1580px) {
    height: 50px;
    font-size: 1.3rem;
  }
`;
