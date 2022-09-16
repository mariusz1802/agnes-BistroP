import React from "react";
import styled from "styled-components";
import { Header } from "../Hero";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Form() {
  return (
    <FormContainer>
      <ResponsiveHeader>Miałeś szkodę w ciągu 3 lat ?</ResponsiveHeader>
      <Input placeholder="Imię*" />
      <Input placeholder="Nazwisko*" />
      <Input placeholder="Telefon*" />
      <Input placeholder="Email" />
      <Input placeholder="Załacz plik" />
      <Button type="send">WYŚLIJ WNIOSEK </Button>
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

const ResponsiveHeader = styled(Header)`
  font-size: clamp(1.4rem, 2.2rem, 3.2rem);
`;
