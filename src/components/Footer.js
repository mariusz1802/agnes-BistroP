import React from 'react';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import { ImMobile } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { url } from '../data/url';
import SprzedamSzkodeText from './SprzedamSzkodeText/SprzedamSzkodeText';

function Footer() {
  return (
    <>
      <SprzedamSzkodeText />
      <MainWrapper id="contact">
        <Layout>
          <Wrapper>
            {/* Footer data with icons */}
            <ContactWrapper>
              <A href="tel+48666742743">
                <ContactBox>
                  <IconBox>
                    <ImMobile />
                  </IconBox>
                  <ContactText>666 742 743</ContactText>
                </ContactBox>
              </A>
              <A href="mailto: kontakt@sprzedamszkode.pl ">
                <ContactBox>
                  <IconBox>
                    <IoIosMail />
                  </IconBox>
                  <ContactText>kontakt@sprzedamszkode.pl</ContactText>
                </ContactBox>
              </A>
              <A
                href={url.facebook_url}
                target="__blank"
                rel="noopener noreferrer"
              >
                <ContactBox>
                  <IconBox>
                    <BsFacebook />
                  </IconBox>
                  <ContactText>facebook.pl/sprzedamszkode</ContactText>
                </ContactBox>
              </A>
              <ContactBox>
                <IconBox>
                  <MdLocationOn />
                </IconBox>
                <ContactText>
                  NIP: 293843905 <br />
                  REGON: 2948539435
                </ContactText>
              </ContactBox>
            </ContactWrapper>
          </Wrapper>
        </Layout>
      </MainWrapper>
    </>
  );
}

export default Footer;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 20px 100px;
  border-top: 25px solid #af56ff;
  background: linear-gradient(#6a4fd4, #35286a);
  @media screen and (max-width: 900px) {
    padding: 20px 20px;
  }
`;

const Layout = styled.div`
  width: 90%;
  margin: auto;
  @media screen and(max-width:380px) {
    width: 95%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: left;
  }
`;
// *********** Contact Data cotainer start *************
const DataContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  margin-top: 100px;

  @media screen and (max-width: 380px) {
    width: 100%;
    padding: 5px;
  }
`;

const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  line-height: 1.4;
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ContactBox = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  height: 90px;
  :nth-child(2) {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  :nth-child(3) {
    border-bottom: 1px solid black;
  }
`;

const IconBox = styled.div`
  font-size: 3.4rem;
  display: flex;
  margin-right: 25px;
  justify-content: start;
  @media screen and (max-width: 600px) {
    font-size: 1.9rem;
    margin-right: 10px;
  }
`;

const ContactText = styled.p`
  font-size: 3rem;
  font-weight: 300;
  line-height: 2.6rem;
  font-size: clamp(1.6rem, 10vw, 2.1rem);
  font-family: 'Fredoka One', cursive;
  letter-spacing: 1px;
  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
// *********** Contact Data cotainer end *************
