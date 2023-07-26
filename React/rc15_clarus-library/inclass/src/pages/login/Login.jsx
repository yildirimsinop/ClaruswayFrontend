import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm>
          <StyledInput />
          <StyledInput />
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
