import React from 'react';
import Footer from '../components/Footer';

export default {
  title: 'Footer',
};

export const FooterPopular = () => {
  return <Footer site="popular" />;
};

export const FooterRecs = () => {
  return <Footer site="recs" />;
};

export const FooterLists = () => {
  return <Footer site="lists" />;
};
