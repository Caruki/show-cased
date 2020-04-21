import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SignInUpInput from '../components/SignInUpInput';
import SubmitButton from '../components/SubmitButton';

const Container = styled.div`
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
  return (
    <Container>
      <InputContainer>
        <SignInUpInput variation="username" placeholder="Username" />
        <SignInUpInput variation="email" placeholder="Email" />
        <SignInUpInput variation="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <SubmitButton>{buttonText}</SubmitButton>
      </ButtonContainer>
      <AccountQuestion>
        {accountQuestion}
        <a href={anchor}>{accountAnswer}</a>
      </AccountQuestion>
    </Container>
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
