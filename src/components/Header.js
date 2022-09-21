import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import GlobalStyle from "./styles/GlobalStyles";
import BurgerMenu from "./styles/BurgerMenu";
import SprzedamSzkodeText from "./SprzedamSzkodeText/SprzedamSzkodeText";
import { BrowserRouter as Router } from "react-router-dom";

function Header() {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <SprzedamSzkodeText />
        <NavMenu>
          <Router>
            {menuData.map((item, index) => (
              <NavLink smooth to={item.link} key={index}>
                {item.title}
              </NavLink>
            ))}
          </Router>
        </NavMenu>
      </Nav>
      <BurgerMenu />
    </>
  );
}

export default Header;

const Nav = styled.nav`
  height: 140px;
  background-color: none;
  display: flex;
  justify-content: space-between;
  padding: 1rem calc((100vw - 1800px) / 2);
  z-index: 200;
  position: relative;
  z-index: 3;
`;

const NavLink = styled(Link)`
  color: #6a4fd4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: clamp(1.1rem, 1.4rem, 2.1rem);
  margin: 5px 20px;
  justify-items: center;
  height: 100%;
  letter-spacing: 1px;
  font-weight: 700;
  cursor: pointer;
  transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
  @media screen and (max-width: 1480px) {
    margin: 5px 10px;
    font-size: clamp(0.9rem, 1.1rem, 1.8rem);
  }

  :after {
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    display: block;
    transition: all 0.4s ease;
    bottom: 30%;
  }
  :hover::after {
    width: 160px;
    height: 4px;
    background-color: #6a4fd4;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;
