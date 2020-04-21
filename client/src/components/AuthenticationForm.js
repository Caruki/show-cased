import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SignInUpInput from '../components/SignInUpInput';
import SubmitButton from '../components/SubmitButton';

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
  font: 300 0.8rem 'Roboto', sans-serif;

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

function SignInUpform({ buttonText, accountQuestion, anchor, accountAnswer }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const user = {
      username,
      email,
      password,
    };

    return user;
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <SignInUpInput
          variation="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
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
      <ButtonContainer>
        <SubmitButton>{buttonText}</SubmitButton>
      </ButtonContainer>
      <AccountQuestion>
        {accountQuestion}
        <a href={anchor}>{accountAnswer}</a>
      </AccountQuestion>
    </FormContainer>
  );
}

SignInUpform.propTypes = {
  buttonText: PropTypes.string,
  accountQuestion: PropTypes.string,
  anchor: PropTypes.string,
  linkTo: PropTypes.string,
  accountAnswer: PropTypes.string,
};

export default SignInUpform;
