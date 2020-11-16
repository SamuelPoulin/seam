import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../shared/input-field';
import logo from '../../assets/images/logo.png';
import StyledH1 from '../shared/h1';
import Button from '../shared/button';
import { useHistory } from 'react-router-dom';
import { useAPI } from '../../services/api.service';
import { useUser } from '../../services/user.service';

const StyledSignUpPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
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
  margin-bottom: 100px;

  width: 100%;
  max-width: 400px;

  form {
    width: 100%;
    > div {
      margin-top: 20px;
    }
  }

  @media only screen and (max-height: 800px) {
    margin-bottom: 0px;
  }
`;

const StyledSignUpSection = styled.div`
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

const StyledLogo = styled.img`
  height: 60px;
`;

const StyledError = styled.div`
  color: red;
  font-family: 'Roboto Regular';
  font-size: 18px;
  margin-top: 20px;
`;

function SignUpPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const api = useAPI();
  const user = useUser();
  const history = useHistory();

  if (user.token) {
    history.push('/dashboard');
  }

  function handleAuthentication(e: any): void {
    e.preventDefault();

    api.signUp(email, username, password).then((token) => {
      setError(false);
      user.setToken(token);
      history.push('/dashboard');
    }).catch((err) => {
      setError(true);
      console.log(err);
    });
  }

  return (
    <StyledSignUpPage>
      <StyledFormContainer>
        <StyledLogo src={logo} />
        <StyledText>Create your account</StyledText>
        <form onSubmit={handleAuthentication}>
          <InputField value={email} onChange={(e: any) => setEmail(e.target.value)} label={'Email'} type={'text'} />
          <InputField value={username} onChange={(e: any) => setUsername(e.target.value)} label={'Username'} type={'text'} />
          <InputField value={password} onChange={(e: any) => setPassword(e.target.value)} label={'Password'} type={'password'} />
          <StyledSignUpSection>
            <Button><>Sign up</></Button>
          </StyledSignUpSection>
        </form>
        {error ? <StyledError>Something went wrong. Please try again.</StyledError> : undefined}
      </StyledFormContainer>
    </StyledSignUpPage>
  );
}

export default SignUpPage;