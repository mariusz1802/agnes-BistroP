import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Form() {
  return (
    <FormContainer>
      <Header>Miałeś szkodę w ciągu 3 lat ?</Header>
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
  width: 100%;
  align-content: center;
  align-items: center;
`;

const Header = styled.h3`
  color: white;
  opacity: 1;
  font-size: clamp(1.2rem, 2.1rem, 3.1rem);
  margin-bottom: 20px;
`;
