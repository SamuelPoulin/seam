import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../shared/input-field';
import logo from '../../assets/images/logo.png';
import StyledH1 from '../shared/h1';
import Checkbox from '../shared/checkbox';
import Button from '../shared/button';
import { useHistory } from 'react-router-dom';
import { useAPI } from '../../services/api.service';
import { useUser } from '../../services/user.service';

const StyledLoginPage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
`;

const StyledText = styled(StyledH1)`
  margin-top: 15px;
  font-family: 'Roboto Bold';
  font-size: 28px;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 150px 25px;
  width: 100%;
  max-width: 400px;

  form {
    width: 100%;
    > div {
      margin-top: 20px;
    }
  }
`;

const StyledLogInSection = styled.div`
  display: flex;
  height: 90px;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  & > Button {
    width: 100%;
    height: 40px;
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.background};
    font-family: 'Roboto Bold';
    font-size: 20px;

    transition: .4s; 

    &:hover {
      background-color: ${(props) => props.theme.colors.hoverAccent}; 
    }

    &:active {
      background-color: ${(props) => props.theme.colors.clickedAccent};
    }

    &:focus {
      box-shadow: 0px 0px 0px 3px ${(props) => props.theme.colors.clickedAccent + 80}; 
    }
  }
`;

const StyledHelpSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  margin-top: 40px !important;
  width: 100%;

  font-family: 'Roboto Regular';
  font-size: 18px;

  a {
    color: ${(props) => props.theme.colors.onBackground};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledLogo = styled.img`
  height: 60px;
`;

function LoginPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const api = useAPI();
  const user = useUser();
  const history = useHistory();

  if (user.token) {
    history.push('/dashboard');
  }

  function handleAuthentication(e: any): void {
    e.preventDefault();

    api.logIn(email, password).then((token) => {
      user.setToken(token);
      history.push('/dashboard');
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <StyledLoginPage>
      <StyledFormContainer>
        <StyledLogo src={logo} />
        <StyledText>Log in to seam</StyledText>
        <form onSubmit={handleAuthentication}>
          <InputField value={email} onChange={(e: any) => setEmail(e.target.value)} label={'Email or username'} type={'text'} />
          <InputField value={password} onChange={(e: any) => setPassword(e.target.value)} label={'Password'} type={'password'} />
          <StyledLogInSection>
            <Checkbox label={'Keep me signed in'} />
            <Button><>Log in</></Button>
          </StyledLogInSection>
        </form>
        <StyledHelpSection>
          <a href={'forgot'}>I forgot my password</a>
          <a href={'signup'}>Create an account</a>
        </StyledHelpSection>
      </StyledFormContainer>
    </StyledLoginPage>
  );
}

export default LoginPage;