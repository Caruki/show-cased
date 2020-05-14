import React from 'react';
import BottomNav from '../components/Layout/BottomNav';
import { Lists, Popular, Recs } from '../assets/icons/BottomIcons';

export default {
  title: 'BottomNav',
};

export const BottomNavPopular = () => {
  return (
    <BottomNav
      links={[
        {
          label: 'Popular',
          icon: Popular,
          navLink: '/popular',
        },
        {
          label: 'Recs',
          icon: Recs,
          navLink: '/recs',
        },
        { label: 'Lists', icon: Lists, navLink: '/lists' },
      ]}
      activeNavItem="/popular"
    />
  );
};

export const BottomNavRecs = () => {
  return (
    <BottomNav
      links={[
        {
          label: 'Popular',
          icon: Popular,
          navLink: '/popular',
        },
        {
          label: 'Recs',
          icon: Recs,
          navLink: '/recs',
        },
        { label: 'Lists', icon: Lists, navLink: '/lists' },
      ]}
      activeNavItem="/recs"
    />
  );
};

export const BottomNavLists = () => {
  return (
    <BottomNav
      links={[
        {
          label: 'Popular',
          icon: Popular,
          navLink: '/popular',
        },
        {
          label: 'Recs',
          icon: Recs,
          navLink: '/recs',
        },
        { label: 'Lists', icon: Lists, navLink: '/lists' },
      ]}
      activeNavItem="/lists"
    />
  );
};
