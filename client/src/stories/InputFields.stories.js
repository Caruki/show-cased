import React from 'react';
import FormInput from '../components/FormInput';
import SearchInput from '../components/SearchInput';

export default {
  title: 'InputFields',
};

export const Email = () => {
  return <FormInput variation="E-Mail" type="email" />;
};

export const Password = () => {
  return <FormInput variation="Password" type="password" />;
};

export const Search = () => <SearchInput />;
