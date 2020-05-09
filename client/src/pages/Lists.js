import React from 'react';
import useSideNavInformation from '../contexts/sideNav/useSideNavInformation';
import WatchLists from '../components/WatchLists';

function Lists() {
  const { tabContent } = useSideNavInformation();

  return (
    <>
      {tabContent === 'default' && <WatchLists tab="towatch" />}
      {tabContent === 'ToWatch' && <WatchLists tab="towatch" />}
      {tabContent === 'Watched' && <WatchLists tab="watched" />}
    </>
  );
}

export default Lists;
