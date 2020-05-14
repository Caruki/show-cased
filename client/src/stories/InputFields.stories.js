import React from 'react';
import SignInUpInput from '../components/SignInUpInput';
import SearchInput from '../components/SearchInput';

export default {
  title: 'InputFields',
};

export const Email = () => {
  return <SignInUpInput placeholder="Email" variation="email" type="email" />;
};

export const Password = () => {
  return (
    <SignInUpInput
      placeholder="Password"
      variation="password"
      type="password"
    />
  );
};

export const Username = () => {
  return (
    <SignInUpInput placeholder="Username" variation="username" type="text" />
  );
};

export const Search = () => <SearchInput isOpen={true} />;
