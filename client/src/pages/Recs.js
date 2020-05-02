import React from 'react';
import RecsGenres from '../components/RecsGenres';
import RecsNetworks from '../components/RecsNetworks';
import useAuth from '../contexts/auth/useAuth';

function Lists() {
  const { authenticatedUser } = useAuth();
  const userId = authenticatedUser.userId;
  return (
    <>
      <RecsGenres userId={userId} />
      <RecsNetworks userId={userId} />
    </>
  );
}

export default Lists;
