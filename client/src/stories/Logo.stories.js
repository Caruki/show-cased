import React from 'react';
import Logo from '../components/Logo';

export default {
  title: 'Logo Variations',
};

export const BigLogo = () => {
  return <Logo size="big" />;
};

export const SmallLogo = () => {
  return <Logo size="small" />;
};
