import React from 'react';
import BottomNav from '../components/BottomNav';
// import { MainEnvironmentDecorator } from '../../.storybook/environmentDecorator';

export default {
  title: 'BottomNav',
};

export const BottomNavPopular = () => {
  return <BottomNav site="popular" />;
};

export const BottomNavRecs = () => {
  return <BottomNav site="recs" />;
};

export const BottomNavLists = () => {
  return <BottomNav site="lists" />;
};
