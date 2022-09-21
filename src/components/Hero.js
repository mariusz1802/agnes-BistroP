import React from "react";
import styled from "styled-components";
import Crash from "../assets/carcrash.svg";
import Background from "../assets/backgroundPurple.svg";
import * as styles from "./Hero.module.scss";
import FormStyle from "../components/Form/Form";
function Hero() {
  return (
    <>
      <HeroContainer>
        <Crash className={styles.carCrash} />
        <WhiteBox />
        <Background className={styles.background} />
        <ColumnWrapper>
          <Text>
            <Header>Czy wiesz że...?</Header>
            <Paragraph>
              Firmy ubezpieczeniowe w większości zaniżają rzeczywistą kwotę
              odszkodowania za kolizję bądź wypadek, z OC sprawcy? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quam, soluta tempore
              labore laudantium delectus dolor nesciunt accusamus cupiditate
              iure alias quasi ratione officia. Autem, dolor at provident itaque
              veritatis nam?
            </Paragraph>
          </Text>

          <HigherText>
            <Header>Nie trać czasu...</Header>
            <Paragraph>
              Próbując uzyskać większą kwotę od ubezpie- czyciela może okazać
              się, że zmarnujesz dużo czasu i pieniędzy, a efekt i tak nie
              będzie satysfakcjonujący dla Ciebie. Dlaczego tak jest ? Ponieważ
              często firmy ubezpieczeniowe wiedzą, że nie posiadasz armii
              prawników i ilości czasu, aby się tym zająć odpowiednio, dlatego z
              góry będziesz na przegranej pozycji. Prześlij nam wniosek i
              uzyskaj pieniądze od razu...!
            </Paragraph>
          </HigherText>
          <Form id="form">
            <FormStyle />
          </Form>
        </ColumnWrapper>
      </HeroContainer>
    </>
  );
}

export default Hero;

const HeroContainer = styled.div`
  position: relative;
  justify-content: left;
  width: 100%;
  height: 80vh;
  min-height: 900px;
  background: #6a4fd4;
`;

const WhiteBox = styled.div`
  position: absolute;
  right: 0;
  top: -140px;
  width: 100%;
  height: 50%;
  background: white;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const ColumnWrapper = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 120px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  align-content: space-around;
  z-index: 2;
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    height: auto;
    top: 470px;
  }
`;

const Text = styled.div`
  width: 30%;
  padding: 35px;
  margin-bottom: 20px;
  height: auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  @media screen and (max-width: 1200px) {
    display: none;
    height: auto;
  }
`;

const HigherText = styled(Text)`
  height: 500px;
  @media screen and (max-width: 1200px) {
    height: auto;
    display: block;
    width: 45%;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const Form = styled(Text)`
  height: auto;
  width: 35%;
  @media screen and (max-width: 1200px) {
    display: block;
    width: 45%;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const Header = styled.h3`
  color: white;
  opacity: 1;
  font-size: clamp(1.5rem, 2.4rem, 3.4rem);
  margin-bottom: 20px;
`;
const Paragraph = styled.p`
  font-size: clamp(1.1rem, 1.5rem, 1.9rem);
  color: white;
`;
