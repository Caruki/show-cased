import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SignInUpInput from '../components/SignInUpInput';
import SubmitButton from '../components/SubmitButton';
import { registerUser, loginUser } from '../api/users';
import useUserInformation from '../contexts/user/useUserInformation';
import useAuth from '../contexts/auth/useAuth';

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
      ::placeholder {
        color: transparent;
      }
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
  font: 300 1rem 'Roboto', sans-serif;
`;

const Loading = styled.div`
  color: #d05888;
  font: 300 1.8rem 'Roboto', sans-serif;
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

function AuthenticationForm({ authType }) {
  const history = useHistory();
  const { setUser, user } = useUserInformation();
  const { setIsAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUser,
    { status: registerStatus, data: userId, error: registerError },
  ] = useMutation(registerUser);

  const [authUser, { status: loginStatus, error: loginError }] = useMutation(
    loginUser
  );

  React.useEffect(() => {
    if (authType === 'register' && userId) {
      alert('Account created 🎉 Please log in now!');
      history.push('/login');
    }

    if (authType === 'login' && user) {
      alert('Logged in 🎉 ');
      history.push('/lists');
    }
  }, [user, userId, authType, history]);

  async function handleSubmit(event) {
    event.preventDefault();

    const userInput = {
      username,
      email,
      password,
    };

    if (authType === 'register') {
      await createUser(userInput);
    }

    if (authType === 'login') {
      const loggedInUser = await authUser(userInput);
      setUser(loggedInUser);
      setIsAuthenticated(true);
    }
  }

  return (
    <>
      {(registerStatus || loginStatus) === 'loading' ? (
        <Loading>Loading...</Loading>
      ) : (
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            {authType === 'register' && (
              <SignInUpInput
                variation="username"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            )}
            <SignInUpInput
              variation="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <SignInUpInput
              variation="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </InputContainer>
          {registerError && (
            <ErrorMessage>{registerError.message}</ErrorMessage>
          )}
          {loginError && <ErrorMessage>{loginError.message}</ErrorMessage>}
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
      )}
    </>
  );
}

AuthenticationForm.propTypes = {
  authType: PropTypes.string,
};

export default AuthenticationForm;
