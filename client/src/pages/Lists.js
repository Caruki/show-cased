import React from 'react';
import useSideNavInformation from '../contexts/sideNav/useSideNavInformation';
import WatchLists from '../components/WatchLists';

function Lists() {
  const { tabContent } = useSideNavInformation();

  return (
    <>
      {tabContent === 'default' && <WatchLists tab="watched" />}
      {tabContent === 'Watched' && <WatchLists tab="watched" />}
      {tabContent === 'ToWatch' && <WatchLists tab="towatch" />}
    </>
  );
}

export default Lists;
