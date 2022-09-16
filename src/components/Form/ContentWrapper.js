import React from "react";
import styled from "styled-components";
function ContentWrapper({ children }) {
  return <MainDiv>{children}</MainDiv>;
}

export default ContentWrapper;

const MainDiv = styled.div`
  width: 75%;
  margin: 40px auto;
  color: white;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
