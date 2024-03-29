import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFacebook } from 'react-icons/bs';
import Hamburger from 'hamburger-react';
import { menuData } from '../../data/MenuData';
import { RiInstagramFill } from 'react-icons/ri';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import { url } from '../../data/url';
import SprzedamSzkodeText from '../SprzedamSzkodeText/SprzedamSzkodeText';

function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <BurgerWrapper open={isOpen}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={36} distance="sm" />
      </BurgerWrapper>
      <MobileMenu open={isOpen}>
        <SprzedamSzkodeText />
        <MobileContainer>
          <ScrollContainer>
            <Router>
              <LinkContainer>
                {menuData.map((item, index) => (
                  <MobileLink
                    smooth
                    to={item.link}
                    key={index}
                    onClick={handleClick}
                  >
                    {item.title}
                  </MobileLink>
                ))}
              </LinkContainer>
            </Router>
            <SocialContainer>
              <A
                href={url.facebook_url}
                target="__blank"
                rel="noopener noreferrer"
              >
                <BsFacebook size="2.7rem" />
              </A>
              <RiInstagramFill size="3rem" />
            </SocialContainer>
          </ScrollContainer>
        </MobileContainer>
      </MobileMenu>
    </>
  );
}

export default BurgerMenu;

// Mobile Menu
const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    text-align: center;
    height: 100vh;
    background: linear-gradient(#6a4fd4, #35286a);
    transition: all 0.35s;
    overflow: hidden;
    z-index: 250;
    padding-top: 100px;
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
`;

const TextWrapper = styled.div`
  width: 70%;
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  -webkit-overflow-scrolling: touch; // mobile safari
  justify-content: space-around;
  overflow-y: scroll;
  align-items: center;
  justify-items: center;
  align-content: center;
  width: 100%;
  z-index: 2;
`;
const ScrollContainer = styled.div`
  height: 70%;
  width: 100%;
  margin-top: 100px;
  text-align: center;
`;

const SocialContainer = styled.div`
  width: 120px;
  display: flex;
  margin: 20px 0;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 1.7rem;
  text-decoration: none;
  width: 100%;
`;

const MobileLink = styled(Link)`
  text-decoration: none;
  font-size: 1.8rem;
  border-bottom: 1px solid white;
  text-align: center;
  width: 100%;
  color: white;
  padding: 12px;
  :first-child {
    border-top: 1px solid white;
  }
`;
const BurgerWrapper = styled.div`
  display: none;
  @media screen and (max-width: 1240px) {
    display: block;
    top: 15px;
    right: 15px;
    z-index: 300;
    position: fixed;
    color: '#fff';
    font-size: 3rem;
    background: rgba(0, 0, 0, 0.1);
    -webkit-tap-highlight-color: transparent;
  }
`;

const MobileTitle = styled.h2`
  font-family: 'Oleo Script';
  color: black;
  font-size: 3rem;
  margin: 20px 0;
`;
const A = styled.a`
  text-decoration: none;
  color: inherit;
`;
