import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Logo from './Logo';
import useAuth from '../contexts/auth/useAuth';
import useUserInformation from '../contexts/user/useUserInformation';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

const Title = styled.h1`
  font: 300 1.2rem 'Roboto', sans-serif;
  color: #aeb2f5;
  margin-left: 10px;
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
  const [logoutConfirmation, setLogoutConfirmation] = useState();
  const { logout } = useAuth();
  const { user } = useUserInformation();
  const history = useHistory();

  React.useEffect(() => {
    if (logoutConfirmation) {
      alert('You are logged out! 🥺');
      history.push('/popular');
    }
  }, [logoutConfirmation, history]);

  async function handleLogout() {
    const loggedOutConfirmation = await logout();
    if (loggedOutConfirmation) {
      setLogoutConfirmation(true);
    }
  }

  return (
    <Container>
      <Logo size="small" />
      <Title>{`Welcome back, ${user.username} !`}</Title>
      <LogOut onClick={handleLogout}>Log Out?</LogOut>
    </Container>
  );
}

export default Header;
