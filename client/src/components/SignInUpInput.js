import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import EmailIcon from '../assets/email.svg';
import PasswordIcon from '../assets/password.svg';
import UsernameIcon from '../assets/username.svg';
import InputField from './InputField';

const Container = styled.div`
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
  padding-top: ${(props) => (props.variation === 'email' ? '20px' : '15px')};
`;

function SignInUpInput({ variation, type, placeholder }) {
  return (
    <Container>
      {variation && variation === 'email' && (
        <InputIconContainer variation="email">
          <img src={EmailIcon} alt="email icon showing an email symbol" />
        </InputIconContainer>
      )}
      {variation && variation === 'password' && (
        <InputIconContainer variation="password">
          <img src={PasswordIcon} alt="password icon showing a lock symbol" />
        </InputIconContainer>
      )}
      {variation && variation === 'username' && (
        <InputIconContainer variation="username">
          <img src={UsernameIcon} alt="username icon showing a person symbol" />
        </InputIconContainer>
      )}

      <InputField placeholder={placeholder} type={type} />
    </Container>
  );
}

SignInUpInput.propTypes = {
  variation: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SignInUpInput;
