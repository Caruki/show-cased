import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SignInUpInput from '../SignInUpInput';
import SubmitButton from '../SubmitButton';
import { registerUser } from '../../api/users';
import useAuth from '../../contexts/auth/useAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../utils/Loading';

const FormContainer = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  height: 80%;
  margin-top: 6%;
  margin-right: 20px;
  @media (min-width: 700px) {
    width: 45%;
    height: 60%;
    justify-content: space-evenly;
    margin-top: 0px;
  }

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
  margin: 10px;
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

  a {
    font: inherit;
    font-style: italic;
    color: #d05888;

    :visited {
      color: rgb(147, 49, 102, 0.1);
    }

    :hover,
    :active,
    :focus {
      filter: brightness(150%);
    }
  }
`;

const ErrorMessage = styled.div`
  padding: 5px;
  color: #d05888;
  font: 300 1rem 'Roboto', sans-serif;
  border: 1px solid #d05888;
  border-radius: 15px;
`;
const UserInformation = styled.div`
  padding: 10px 5px;
  color: #d05888;
  font: 300 1rem 'Roboto', sans-serif;
  border: 1px solid #d05888;
  border-radius: 15px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  line-height: 25px;
  margin-top: 10px;

  a {
    font: inherit;
    font-style: italic;
    color: #d05888;

    :visited {
      color: rgb(147, 49, 102, 0.1);
    }

    :hover,
    :active,
    :focus {
      filter: brightness(150%);
    }
  }
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
  const { login, authenticatedUser } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUser,
    { status: registerStatus, error: registerError },
  ] = useMutation(registerUser, {
    onSuccess: () => {
      toast.success('Account created 🎉 Please log in now!');
      history.push('/login');
    },
  });

  const [loginUser, { status: loginStatus, error: loginError }] = useMutation(
    login,
    {
      onSuccess: () => {
        history.push('/lists');
      },
    }
  );

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
      await loginUser(userInput);
    }
  }

  return (
    <>
      {(registerStatus || loginStatus) === 'loading' ? (
        <Loading />
      ) : (
        <FormContainer
          onSubmit={handleSubmit}
          autoFill="off"
          autoComplete="off"
        >
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
          {authenticatedUser && (
            <UserInformation>
              <span>
                You are already logged in!{' '}
                <span role="img" aria-label="celebrating">
                  🥳
                </span>
              </span>{' '}
              <span>
                Please click <a href="/popular">here</a>
              </span>
            </UserInformation>
          )}
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
