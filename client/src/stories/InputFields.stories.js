import React from 'react';
import SignInUpInput from '../components/SignInUpInput';
import SearchInput from '../components/SearchInput';

export default {
  title: 'InputFields',
};

export const Email = () => {
  return <SignInUpInput variation="E-Mail" type="email" />;
};

export const Password = () => {
  return <SignInUpInput variation="Password" type="password" />;
};

export const Search = () => <SearchInput />;
