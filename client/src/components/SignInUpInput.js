import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import EmailIcon from '../assets/email.svg';
import PasswordIcon from '../assets/password.svg';
import UsernameIcon from '../assets/username.svg';
import InputField from './InputField';

const Container = styled.div`
  width: 22%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: transparent;
  border: 1px #961f56;
  border-style: hidden hidden solid hidden;
`;

const InputIconContainer = styled.div`
  width: 25px;
  margin: 0px 10px 0px 13px;
  padding-top: ${(props) => (props.variation === 'email' ? '5px' : '0px')};
`;

function SignInUpInput({ variation, type }) {
  return (
    <Container>
      {variation && variation === 'E-Mail' && (
        <InputIconContainer variation="email">
          <img src={EmailIcon} alt="email" />
        </InputIconContainer>
      )}
      {variation && variation === 'Password' && (
        <InputIconContainer variation="password">
          <img src={PasswordIcon} alt="password" />
        </InputIconContainer>
      )}
      {variation && variation === 'Username' && (
        <InputIconContainer variation="username">
          <img src={UsernameIcon} alt="password" />
        </InputIconContainer>
      )}

      <InputField placeholder={variation} type={type} />
    </Container>
  );
}

SignInUpInput.propTypes = {
  variation: PropTypes.string,
  type: PropTypes.string,
};

export default SignInUpInput;
