import React from 'react';
import TabSideNavigation from '../components/Layout/TabSideNavigation';

export default {
  title: 'Side Navigation',
};

export const SideNavPopular = () => {
  return (
    <TabSideNavigation>
      <div label="Trending">
        <div></div>
      </div>
      <div label="Newest">
        <div></div>
      </div>
    </TabSideNavigation>
  );
};

export const SideNavRecs = () => {
  return (
    <TabSideNavigation>
      <div label="Watched">
        <div></div>
      </div>
      <div label="ToWatch">
        <div></div>
      </div>
    </TabSideNavigation>
  );
};
