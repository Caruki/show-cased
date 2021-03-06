import React from 'react';
import styled from '@emotion/styled';
import Logo from '../Logo';
import useAuth from '../../contexts/auth/useAuth';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

const Title = styled.h1`
  font: 300 1rem 'Roboto', sans-serif;
  color: #aeb2f5;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const LogOut = styled.button`
  background: transparent;
  border: none;
  color: rgba(208, 88, 136, 0.7);
  margin: 5px;
  padding: 10px;
  text-decoration: underline;
  font: 400 0.7rem 'Roboto', sans-serif;

  &:focus {
    outline-width: 0;
  }

  &:hover,
  :active {
    color: rgba(208, 88, 136, 1);
  }
`;

function Header() {
  const { logout, authenticatedUser } = useAuth();

  return (
    <Container>
      <Logo size="small" />
      <Title>{`Welcome back, ${authenticatedUser.username} !`}</Title>
      <LogOut onClick={logout}>Log Out?</LogOut>
    </Container>
  );
}

export default Header;
