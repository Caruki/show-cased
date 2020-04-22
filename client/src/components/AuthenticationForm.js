import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SignInUpInput from '../components/SignInUpInput';
import SubmitButton from '../components/SubmitButton';
import useAuthUser from '../hooks/useAuthUser';

const FormContainer = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 80%;

  & > * {
    & :focus {
      outline-width: 0;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  flex-basis: 100%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
`;

const AccountQuestion = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  flex-basis: 100%;
  color: #d05888;
  font: 300 0.9rem 'Roboto', sans-serif;

  & > * {
    margin: 10px;
  }

  & > a:link {
    font: inherit;
    font-style: italic;
    color: #d05888;

    & :hover,
    :active,
    :focus {
      filter: brightness(150%);
    }
  }
`;

const ErrorMessage = styled.div`
  color: #d05888;
  font: 300 0.9rem 'Roboto', sans-serif;
`;

const Loading = styled.div`
  color: #d05888;
  font: 500 1.8rem 'Roboto', sans-serif;
`;

const authForm = {
  login: {
    buttonText: 'Login',
    accountQuestion: 'Dont have an account?',
    anchor: '/register',
    linkTo: 'SignUp',
    accountPrompt: 'Sign up!',
  },
  register: {
    buttonText: 'Sign up',
    accountQuestion: 'Already have an account?',
    anchor: '/login',
    linkTo: 'Login',
    accountPrompt: 'Login!',
  },
};

function SignInUpform({ authType }) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{ success, error, loading }, register, login] = useAuthUser();

  async function handleSubmit(event) {
    event.preventDefault();

    const userInput = {
      username,
      email,
      password,
    };

    if (authType === 'register') {
      const userId = await register({ userInput });
      return userId;
    }
    if (authType === 'login') {
      const userToken = await login({ userInput });
      return userToken;
    }
  }

  return (
    <>
      {authType === 'register' && success && <Redirect to="/login" />}
      {authType === 'login' && success && history.push('/lists')}
      {loading && <Loading>Loading...</Loading>}
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          {authType === 'register' && (
            <SignInUpInput
              variation="username"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          )}
          <SignInUpInput
            variation="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <SignInUpInput
            variation="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </InputContainer>
        {error && <ErrorMessage>Error</ErrorMessage>}
        <ButtonContainer>
          <SubmitButton>{authForm[authType].buttonText}</SubmitButton>
        </ButtonContainer>
        <AccountQuestion>
          {authForm[authType].accountQuestion}
          <a href={authForm[authType].anchor}>
            {authForm[authType].accountPrompt}
          </a>
        </AccountQuestion>
      </FormContainer>
    </>
  );
}

SignInUpform.propTypes = {
  buttonText: PropTypes.string,
  accountQuestion: PropTypes.string,
  anchor: PropTypes.string,
  linkTo: PropTypes.string,
  accountAnswer: PropTypes.string,
  authType: PropTypes.string,
};

export default SignInUpform;
