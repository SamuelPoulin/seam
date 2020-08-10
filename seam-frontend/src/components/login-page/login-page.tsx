import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../shared/input-field';
import logo from '../../assets/images/logo.png';
import StyledH1 from '../shared/h1';
import Checkbox from '../shared/checkbox';
import Button from '../shared/button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

  & > div {
    margin-top: 20px;
  }
`;

const StyledLogInSection = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  
  & > Button {
    width: 90px;
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
  const history = useHistory();

  function handleAuthentication(): void {
    const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64')

    authenticate(token).then((response) => {

    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <StyledLoginPage>
      <StyledFormContainer>
        <StyledLogo src={logo} />
        <StyledText>Log in to seam</StyledText>
        <InputField value={email} onChange={(e: any) => setEmail(e.target.value)} label={'Email or username'} type={'username'} />
        <InputField value={password} onChange={(e: any) => setPassword(e.target.value)} label={'Password'} type={'password'} />
        <StyledLogInSection>
          <Checkbox label={'Keep me signed in'} />
          <Button onClick={handleAuthentication}><>{'Log in'}</></Button>
        </StyledLogInSection>
        <StyledHelpSection>
          <a href={'forgot'}>I forgot my password</a>
          <a href={'signup'}>Create an account</a>
        </StyledHelpSection>
      </StyledFormContainer>
    </StyledLoginPage>
  );
}

function authenticate(token: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    axios.post('http://localhost/api/login', {}, {
      headers: {
        'Authorization': `Basic ${token}`
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      reject(err);
    });
  });

}

export default LoginPage;