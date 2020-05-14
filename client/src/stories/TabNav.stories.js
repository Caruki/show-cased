import React from 'react';
import TabSideNavigation from '../components/Layout/TabSideNavigation';

export default {
  title: 'Side Navigation',
};

export const SideNavPopular = () => {
  return (
    <TabSideNavigation>
      <div label="Trending"></div>
      <div label="Newest"></div>
    </TabSideNavigation>
  );
};

export const SideNavLists = () => {
  return (
    <TabSideNavigation>
      <div label="ToWatch"></div>
      <div label="Watched"></div>
    </TabSideNavigation>
  );
};
