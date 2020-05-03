import React from 'react';
import RecsGenres from '../components/RecsGenres';
import RecsNetworks from '../components/RecsNetworks';
import useAuth from '../contexts/auth/useAuth';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 15px;
  justify-content: center;
`;

function Recs() {
  const { authenticatedUser } = useAuth();
  const userId = authenticatedUser.userId;
  return (
    <Container>
      <RecsGenres userId={userId} />
      <RecsNetworks userId={userId} />
    </Container>
  );
}

export default Recs;
